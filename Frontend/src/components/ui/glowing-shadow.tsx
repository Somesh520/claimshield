"use client"

import { type ReactNode } from "react"

interface GlowingShadowButtonProps {
  children: ReactNode
}

export function GlowingShadow({ children }: GlowingShadowButtonProps) {
  return (
    <div className="glow-container" role="button" tabIndex={0}>
      <span className="glow"></span>
      <div className="glow-content">{children}</div>
    </div>
  )
}
