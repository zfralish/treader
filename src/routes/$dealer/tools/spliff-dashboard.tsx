import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$dealer/tools/spliff-dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$dealer/tools/spliff-dashboard"!</div>
}
