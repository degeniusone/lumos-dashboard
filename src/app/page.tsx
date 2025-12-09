import MasterDashboardLayout from "@/components/dashboard/master-layout"
import { PracticeOverviewWidget } from "@/components/dashboard/widgets/practice-overview"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Home() {
  return (
    <MasterDashboardLayout>
      {/* Dashboard Header */}
      <header className="flex h-16 shrink-0 items-center gap-2 px-6 border-b border-gray-100 bg-white">
        <SidebarTrigger className="-ml-2 md:hidden" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#" className="text-gray-500 hover:text-gray-900">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-semibold text-gray-900">Overview</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      {/* Dashboard Content */}
      <div className="flex-1 overflow-y-auto p-6 h-[calc(100vh-4rem)]">
        <div className="h-full overflow-hidden">
          <PracticeOverviewWidget />
        </div>
      </div>
    </MasterDashboardLayout>
  )
}
