import * as React from "react";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";

export default function DashboardPagesLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout disableCollapsibleSidebar>
      <PageContainer>{props.children}</PageContainer>
    </DashboardLayout>
  );
}