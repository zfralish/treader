import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$dealer/tools/what-if-calculator')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$dealer/tools/what-if-calculator"!</div>
}
