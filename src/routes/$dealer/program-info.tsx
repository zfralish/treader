import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$dealer/program-info')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$dealer/program-info"!</div>
}
