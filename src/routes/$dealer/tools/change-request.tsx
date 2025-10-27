import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$dealer/tools/change-request')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$dealer/tools/change-request"!</div>
}
