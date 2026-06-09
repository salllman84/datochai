import { type PropsWithChildren } from 'react'

const Shimmer = ({ children }: PropsWithChildren<{}>) => { // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  return (
    <div className="relative overflow-hidden">
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-transparent
          via-white/50
          to-transparent
          animate-[shimmer_2s_ease-in-out_infinite]
          "
      ></div>
      {children}
    </div>
  )
}

export default Shimmer