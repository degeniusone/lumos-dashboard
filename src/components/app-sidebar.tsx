"use client"

import * as React from "react"
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Calendar,
  Package,
  FileText,
  Settings,
  HelpCircle,
  Search,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Mock user data - in a real app this would come from auth context
const data = {
  user: {
    name: "Dr. Smith",
    email: "dr.smith@lumos.clinic",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      id: "dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Inbox",
      url: "#",
      id: "inbox",
      icon: MessageSquare,
      badge: 12,
    },
    {
      title: "Contacts",
      url: "#",
      id: "contacts",
      icon: Users,
    },
    {
      title: "Scheduling",
      url: "#",
      id: "schedules",
      icon: Calendar,
    },
    {
      title: "Services",
      url: "#",
      id: "services",
      icon: Package,
    },
    {
      title: "Reports",
      url: "#",
      id: "reports",
      icon: FileText,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: HelpCircle,
    },
  ],
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  activeRoute?: string;
  onNavigate?: (route: string) => void;
}

export function AppSidebar({ activeRoute, onNavigate, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 text-sidebar-primary-foreground">
                {/* Lumos Icon/Logo placeholder */}
                <span className="font-bold text-white text-md">L</span>
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Lumos Clinic</span>
                <span className="truncate text-xs">Medical & Aesthetics</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} onNavigate={onNavigate} activeRoute={activeRoute} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
