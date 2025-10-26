import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$dealer/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const { dealer } = Route.useParams();
  return <div>Hello "/$dealer/dashboard" {dealer} !</div>;
}
