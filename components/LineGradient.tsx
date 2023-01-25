import React from "react"

type Props = {
  width: string
}

function LineGradient({ width = "w-full" }: Props) {
  return <div className={`h-1 ${width} bg-orange-700`}></div>
}

export default LineGradient
