import { Outlet } from "@remix-run/react";
import Layout from "~/components/Layout";

export default function AppLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
