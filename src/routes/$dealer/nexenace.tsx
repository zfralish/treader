import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$dealer/nexenace')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$dealer/nexenace"!</div>
}
