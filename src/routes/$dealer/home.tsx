import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$dealer/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$dealer/home"!</div>
}
