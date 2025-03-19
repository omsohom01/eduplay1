import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="container py-12 md:py-20 flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-muted-foreground">Loading video search...</p>
      </div>
    </div>
  )
}
