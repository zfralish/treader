import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$dealer/contact-us')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$dealer/contact-us"!</div>
}
