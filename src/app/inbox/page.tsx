"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import MasterDashboardLayout from "@/components/dashboard/master-layout"
import { ConversationView } from "@/components/dashboard/conversation-view"

export default function InboxPage() {
    const searchParams = useSearchParams()
    const idStr = searchParams.get("id")
    const conversationId = idStr ? parseInt(idStr) : null

    if (!conversationId) {
        // Fallback state if no conversation is selected but user is on /inbox
        // Maybe render an empty state or the first conversation?
        return (
            <MasterDashboardLayout>
                <div className="flex h-full items-center justify-center text-zinc-400">
                    Select a conversation to start chatting
                </div>
            </MasterDashboardLayout>
        )
    }

    return (
        <MasterDashboardLayout>
            <ConversationView
                conversationId={conversationId}
            />
        </MasterDashboardLayout>
    )
}
