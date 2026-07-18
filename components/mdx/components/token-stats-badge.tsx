import * as React from "react"
import { cn } from "@/lib/utils"
import { Activity, Clock, DollarSign } from "lucide-react"

export interface TokenStatsBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  tokensPerSecond?: number
  latencyMs?: number
  cost?: number
}

export function TokenStatsBadge({
  tokensPerSecond,
  latencyMs,
  cost,
  className,
  ...props
}: TokenStatsBadgeProps) {
  // Format latency: if >= 1000ms, show in seconds (e.g., 1.2s), else show in ms (e.g., 800ms)
  const formattedLatency = React.useMemo(() => {
    if (latencyMs === undefined) return null
    if (latencyMs >= 1000) {
      return `${(latencyMs / 1000).toFixed(1)}s`
    }
    return `${Math.round(latencyMs)}ms`
  }, [latencyMs])

  // Format cost: show small fractions of a cent nicely, e.g., $0.004
  const formattedCost = React.useMemo(() => {
    if (cost === undefined) return null
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: cost < 0.01 ? 3 : 2,
      maximumFractionDigits: 4,
    }).format(cost)
  }, [cost])

  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-full border border-border/50 bg-muted/30 px-3 py-1",
        "font-mono text-[11px] font-medium text-muted-foreground",
        "transition-colors hover:bg-muted/50 hover:text-foreground",
        className
      )}
      {...props}
    >
      {tokensPerSecond !== undefined && (
        <div className="flex items-center gap-1.5" title="Tokens per second">
          <Activity className="h-3 w-3 opacity-70" />
          <span>{Math.round(tokensPerSecond)} t/s</span>
        </div>
      )}
      
      {tokensPerSecond !== undefined && (latencyMs !== undefined || cost !== undefined) && (
        <div className="h-3 w-[1px] bg-border/50" />
      )}

      {formattedLatency !== null && (
        <div className="flex items-center gap-1.5" title="Latency">
          <Clock className="h-3 w-3 opacity-70" />
          <span>{formattedLatency}</span>
        </div>
      )}
      
      {formattedLatency !== null && cost !== undefined && (
        <div className="h-3 w-[1px] bg-border/50" />
      )}

      {formattedCost !== null && (
        <div className="flex items-center gap-1.5" title="Estimated Cost">
          <DollarSign className="h-3 w-3 opacity-70" />
          <span>{formattedCost}</span>
        </div>
      )}
    </div>
  )
}
