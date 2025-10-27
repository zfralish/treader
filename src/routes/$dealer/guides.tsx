import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$dealer/guides')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$dealer/guides"!</div>
}
