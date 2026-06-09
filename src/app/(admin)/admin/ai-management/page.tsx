'use client';

import { useState } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

// Mock data for the dashboard
const mockModelStatus = {
  status: 'ONLINE',
  lastEpoch: 1245,
  accuracy: 0.92, // 92%
  convergence: 0.001, // very low error
};

const mockRecentActions = [
  { id: 1, text: 'Cron shifted Magnum 4D to PUBLISHED', time: '2 minutes ago' },
  { id: 2, text: 'Retrained Toto 6/49 model with new data', time: '1 hour ago' },
  { id: 3, text: 'Updated Da Ma Cai prediction algorithms', time: '3 hours ago' },
  { id: 4, text: 'Scheduled new Powerball prediction for tomorrow', time: '5 hours ago' },
];

const AIManagementDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  // Enable submit only when input is exactly "RETRAIN"
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim().toUpperCase();
    setInputValue(value);
    setIsSubmitEnabled(value === 'RETRAIN');
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setInputValue('');
    setIsSubmitEnabled(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    // In a real app, we would trigger a model retraining process
    console.log('Force model retraining triggered');
    alert('Model retraining has been initiated!');
    handleCloseModal();
  };

  return (
    <div className="min-h-[calc(100vh-4.5rem)] p-6">
      <h1 className="font-poppins text-2xl font-bold mb-6">AI Model Management</h1>

      {/* Telemetry Grid */}
      <div className="grid gap-6 mb-8">
        {/* Model Status Card */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6">
          <h2 className="font-poppins text-lg font-bold mb-4">Model Status</h2>
          <div className="flex items-center gap-3">
            {mockModelStatus.status === 'ONLINE' ? (
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-inter">
                ● ONLINE
              </span>
            ) : (
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-inter">
                ● OFFLINE
              </span>
            )}
          </div>
        </div>

        {/* Last Training Epoch Card */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6">
          <h2 className="font-poppins text-lg font-bold mb-4">Last Training Epoch</h2>
          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="font-poppins text-2xl font-bold">{mockModelStatus.lastEpoch}</span>
          </div>
        </div>

        {/* Accuracy Convergence Card */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6">
          <h2 className="font-poppins text-lg font-bold mb-4">Accuracy Convergence</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-inter">Current Accuracy</span>
              <span className="font-poppins font-medium">{`${(mockModelStatus.accuracy * 100).toFixed(1)}%`}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-inter">Error Margin</span>
              <span className="font-poppins font-medium">±{`${(mockModelStatus.convergence * 100).toFixed(3)}%`}</span>
            </div>
            <div className="mt-2 h-2 w-full bg-gray-200 rounded overflow-hidden">
              <div
                className="h-full bg-green-500"
                style={{ width: `${Math.min(mockModelStatus.accuracy * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Automated Actions */}
      <div className="mb-8">
        <h2 className="font-poppins text-xl font-bold mb-4">Recent Automated Actions</h2>
        <div className="space-y-3">
          {mockRecentActions.map((action) => (
            <div key={action.id} className="flex items-start gap-3 p-3 bg-muted/50 rounded-xl">
              <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-inter text-sm">{action.text}</p>
                <p className="text-xs text-muted-foreground">{action.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Force Model Retraining Button */}
      <div className="mb-6">
        <button
          onClick={handleOpenModal}
          className="w-full md:w-auto px-6 py-3 font-poppins font-semibold bg-crimson-600 text-white rounded-xl hover:bg-crimson-700 transition-colors duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]"
        >
          Force Model Retraining
        </button>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 w-full max-w-md">
            <h2 className="font-poppins text-xl font-bold mb-6">Confirm Model Retraining</h2>
            <p className="text-muted-foreground mb-6">
              To prevent accidental execution, please type the word &quot;RETRAIN&quot; below to confirm.
            </p>
            <div className="mb-6">
              <label className="block text-sm font-inter mb-2">Confirmation Code</label>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type RETRAIN to confirm"
                className={`w-full px-4 py-3 font-inter border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary
                  ${isSubmitEnabled ? 'border-green-500' : 'border-red-500'}
                `}
                autoComplete="off"
                autoFocus
              />
              {!isSubmitEnabled && inputValue && (
                <p className="mt-2 text-sm text-red-500">
                  Please enter exactly &quot;RETRAIN&quot; to enable the retraining button.
                </p>
              )}
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 font-poppins font-semibold bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={!isSubmitEnabled}
                className={`px-4 py-2 font-poppins font-semibold
                  bg-gradient-to-r from-green-500 via-amber-500 to-green-500 text-white rounded-xl
                  hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]
                  transition-all duration-300
                  ${!isSubmitEnabled ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                Confirm & Retrain
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIManagementDashboard;