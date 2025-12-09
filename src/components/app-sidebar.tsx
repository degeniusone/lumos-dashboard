"use client"

import * as React from "react"
import Image from "next/image"
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
      url: "/",
      id: "dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Inbox",
      url: "/inbox",
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
      title: "Integrations",
      url: "/integrations",
      icon: LayoutDashboard, // Using a simple icon for now, ideally 'Network' or 'Link' if available
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
    <Sidebar collapsible="icon" className="border-none bg-zinc-950" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-12 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                <Image
                  src="/images/clintrio icon.png"
                  alt="Clintrio Icon"
                  width={48}
                  height={48}
                  className="size-10 object-contain"
                />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.1)] overflow-hidden group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:scale-90 group-data-[collapsible=icon]:-translate-x-4">
                <span className="truncate font-semibold text-lg">clintrio</span>
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
