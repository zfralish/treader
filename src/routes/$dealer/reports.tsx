import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$dealer/reports')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$dealer/reports"!</div>
}
