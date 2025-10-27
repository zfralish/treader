import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$dealer/tools/enrollement-dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$dealer/tools/enrollement-dashboard"!</div>
}
