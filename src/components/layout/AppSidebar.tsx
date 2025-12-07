import {
    LayoutDashboard,
    MessageSquare,
    Users,
    Calendar,
    Package,
    FileText,
    Settings,
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuBadge,
    SidebarRail,
} from "@/components/ui/sidebar";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
    activeRoute: string;
    onNavigate: (route: string) => void;
}

export function AppSidebar({ activeRoute, onNavigate, ...props }: AppSidebarProps) {
    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        { id: "inbox", label: "Inbox", icon: MessageSquare, badge: 12 },
        { id: "contacts", label: "Contacts", icon: Users }, // Chatwoot uses Contacts, not Patients usually, but sticking to your context if prefer 'Patients' let me know. Assuming 'Contacts' matches standard Chatwoot.
        { id: "schedules", label: "Scheduling", icon: Calendar },
        { id: "services", label: "Services", icon: Package }, // Reusing Package icon for Services
        { id: "reports", label: "Reports", icon: FileText },
    ];

    const bottomItems = [
        { id: "settings", label: "Settings", icon: Settings },
    ];

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <div className="flex items-center p-2">
                    <div className="size-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 shrink-0" />
                    <div className="ml-3 font-bold text-lg tracking-wide truncate group-data-[collapsible=icon]:hidden">
                        Lumos
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.id}>
                                    <SidebarMenuButton
                                        onClick={() => onNavigate(item.id)}
                                        isActive={activeRoute === item.id}
                                        tooltip={item.label}
                                    >
                                        <item.icon />
                                        <span>{item.label}</span>
                                    </SidebarMenuButton>
                                    {item.badge && (
                                        <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                                    )}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup className="mt-auto">
                    <SidebarGroupLabel>Settings</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {bottomItems.map((item) => (
                                <SidebarMenuItem key={item.id}>
                                    <SidebarMenuButton
                                        onClick={() => onNavigate(item.id)}
                                        isActive={activeRoute === item.id}
                                        tooltip={item.label}
                                    >
                                        <item.icon />
                                        <span>{item.label}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                {/* Optional footer content */}
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
