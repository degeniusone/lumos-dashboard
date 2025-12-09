"use client"

import React, { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { ConversationsSidebar } from "@/components/dashboard/conversations-sidebar"
import {
    Sidebar,
    SidebarContent,
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
} from "@/components/ui/sidebar"

export default function MasterDashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // Left sidebar state
    const [leftOpen, setLeftOpen] = useState(false)

    // Right sidebar logic: Open when left is closed (default), Closed when left is open (hovered)
    const rightOpen = !leftOpen

    return (
        <div className="bg-zinc-950 min-h-screen w-full flex overflow-hidden">
            {/* Left Sidebar Provider */}
            <SidebarProvider
                defaultOpen={false}
                open={leftOpen}
                onOpenChange={setLeftOpen}
                style={
                    {
                        "--sidebar-width": "350px",
                    } as React.CSSProperties
                }
            >
                {/* 
                  Wrapper to handle hover interactions. 
                  We target this wrapper to trigger the expansion.
                */}
                <div
                    className="z-50"
                    onMouseEnter={() => setLeftOpen(true)}
                    onMouseLeave={() => setLeftOpen(false)}
                >
                    <AppSidebar />
                </div>

                {/* SidebarInset wraps the remaining content area */}
                <SidebarInset className="bg-transparent overflow-hidden flex flex-col h-screen">

                    {/* Inner content area with padding to create the floating effect on dark bg */}
                    <div className="flex flex-1 min-h-0 p-4 gap-4 w-full">

                        {/* Conversations List Sidebar (Always visible) */}
                        <div className="hidden md:flex flex-col w-[320px] bg-white rounded-2xl shadow-xl overflow-hidden shrink-0 border border-zinc-100/10">
                            {/* Sidebar reads state from URL now */}
                            <ConversationsSidebar />
                        </div>

                        {/* Nested Provider for Right Sidebar control */}
                        <SidebarProvider
                            open={rightOpen}
                            onOpenChange={() => { }} // Controlled by left state mostly
                            style={{ "--sidebar-width": "350px" } as React.CSSProperties}
                            className="flex-1 flex min-w-0 h-full min-h-0"
                        >
                            {/* Main Content (White Box) */}
                            <div className="flex-1 flex flex-col min-w-0 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-in-out relative z-10 w-full">
                                {children}
                            </div>

                            {/* Right Sidebar */}
                            <Sidebar
                                side="right"
                                collapsible="icon"
                                variant="sidebar"
                                className="bg-zinc-950 border-none hidden md:flex"
                            >
                                <SidebarContent className="p-4 text-zinc-400">
                                    <div className="h-full rounded-xl border-dashed border-2 border-zinc-800 p-4 flex items-center justify-center group-data-[collapsible=icon]:hidden">
                                        <div className="text-center">
                                            <h3 className="font-semibold mb-1 text-zinc-300">Right Sidebar</h3>
                                            <p className="text-xs text-zinc-500">Auto-collapses on menu hover</p>
                                        </div>
                                    </div>
                                    {/* Icon-only view for collapsed state */}
                                    <div className="hidden group-data-[collapsible=icon]:flex h-full flex-col items-center pt-4 gap-4">
                                        <div className="size-8 rounded-full bg-zinc-800 animate-pulse"></div>
                                        <div className="w-1 bg-zinc-800 h-24 rounded-full"></div>
                                    </div>
                                </SidebarContent>
                            </Sidebar>

                        </SidebarProvider>
                    </div>

                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}
