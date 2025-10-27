import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$dealer/tools/spliff-claim-review')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$dealer/tools/spliff-claim-review"!</div>
}
