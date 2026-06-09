import cron from 'node-cron';
import { prisma } from '@/lib/prisma';

// Function to update scheduled predictions to published
const updateScheduledPredictions = async () => {
  try {
    const now = new Date();
    const result = await prisma.prediction.updateMany({
      where: {
        status: 'SCHEDULED',
        scheduledFor: {
          lte: now,
        },
      },
      data: {
        status: 'PUBLISHED',
      },
    });

    if (result.count > 0) {
      console.log(`[${now.toISOString()}] Updated ${result.count} predictions from SCHEDULED to PUBLISHED`);
    }
  } catch (error) {
    console.error('Error in cron job:', error);
  }
};

// Schedule the job to run every minute
cron.schedule('* * * * *', () => {
  console.log('Running cron job for updating scheduled predictions...');
  updateScheduledPredictions();
});

console.log('Cron worker started. Waiting for scheduled tasks...');

// Keep the process running
// The cron.schedule already keeps the process alive, but we can add a simple interval to prevent early exit in some environments.
setInterval(() => {
  // Do nothing, just keep the process alive
}, 60000);