import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$dealer/tools/view-payouts')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$dealer/tools/view-payouts"!</div>
}
