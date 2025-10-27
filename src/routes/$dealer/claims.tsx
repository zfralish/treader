import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$dealer/claims')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$dealer/claims"!</div>
}
