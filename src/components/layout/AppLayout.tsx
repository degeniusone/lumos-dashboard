"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

interface AppLayoutProps {
    children: React.ReactNode;
    activeTitle?: string;
    onNavigate?: (route: string) => void;
    currentRoute?: string;
}

export function AppLayout({ children, activeTitle = "Dashboard", onNavigate, currentRoute = "dashboard" }: AppLayoutProps) {

    // Default internal nav handler if none provided
    const [internalRoute, setInternalRoute] = useState(currentRoute);
    const handleNavigation = (route: string) => {
        setInternalRoute(route);
        if (onNavigate) onNavigate(route);
    };

    const displayRoute = onNavigate ? currentRoute : internalRoute;

    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar
                activeRoute={displayRoute}
                onNavigate={handleNavigation}
                variant="inset"
            />
            <SidebarInset>
                <SiteHeader title={activeTitle} />
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="mx-auto max-w-7xl animate-in fade-in duration-500 w-full mt-4">
                        {children}
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
