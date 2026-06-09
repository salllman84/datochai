import { type PropsWithChildren } from 'react'
import Shimmer from './shimmer'

type SkeletonProps = PropsWithChildren<{
  height?: string | number
  width?: string | number
  className?: string
}>

const Skeleton = ({
  className,
  height = '1rem',
  width = '100%',
  children,
}: SkeletonProps) => {
  const heightPx = typeof height === 'number' ? `${height}px` : height
  const widthPx = typeof width === 'number' ? `${width}px` : width

  return (
    <Shimmer>
      <div
        className={`
          flex items-center justify-center
          bg-muted
          rounded
          ${className}
        `}
        style={{ height: heightPx, width: widthPx }}
      >
        {children}
      </div>
    </Shimmer>
  )
}

export default Skeleton