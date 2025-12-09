"use client"

import * as React from "react"
import { Search, Filter, Phone, MessageCircle, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { fetchConversations, ChatwootConversation } from "@/lib/chatwoot-client"
import { useRouter, useSearchParams } from "next/navigation"

interface ConversationsSidebarProps {
    className?: string;
    // We keep these optional in case we want to override behavior, but main logic is internal now
    onSelectConversation?: (conversationId: number) => void;
}

export function ConversationsSidebar({ className, onSelectConversation }: ConversationsSidebarProps) {
    const router = useRouter()
    const searchParams = useSearchParams()

    // Read active ID from URL
    const activeIdStr = searchParams.get("id")
    const activeConversationId = activeIdStr ? parseInt(activeIdStr) : null

    const [conversations, setConversations] = React.useState<ChatwootConversation[]>([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [filter, setFilter] = React.useState("unanswered")

    React.useEffect(() => {
        async function load() {
            setIsLoading(true)
            const data = await fetchConversations('open')
            setConversations(data)
            setIsLoading(false)
        }
        load()
    }, [])

    const filteredConversations = React.useMemo(() => {
        if (filter === "unanswered") {
            // Check for label 'unanswered' or unread count > 0, or just fallback to all open if filtered
            return conversations.filter(c => c.labels?.includes("unanswered") || c.status === 'open')
        }
        return conversations
    }, [conversations, filter])

    // Helper to format time
    const formatTime = (timestamp?: number) => {
        if (!timestamp) return ""
        const date = new Date(timestamp)
        const now = new Date()
        const diff = now.getTime() - date.getTime()

        if (diff < 1000 * 60 * 60 * 24) {
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
        return date.toLocaleDateString()
    }

    const handleClick = (id: number) => {
        if (onSelectConversation) {
            onSelectConversation(id)
        } else {
            router.push(`/inbox?id=${id}`)
        }
    }

    return (
        <div className={cn("flex flex-col h-full bg-white border-r border-zinc-200 w-full max-w-[320px]", className)}>
            {/* Header */}
            <div
                className="p-4 border-b border-zinc-100 space-y-3"
                suppressHydrationWarning
            >
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-zinc-900">Messages</h2>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </div>

                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-400" />
                    <Input
                        placeholder="Search..."
                        className="pl-9 bg-zinc-50 border-zinc-200 focus-visible:ring-zinc-400"
                    />
                </div>

                {/* Filter Tags */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                    <Badge
                        variant={filter === "unanswered" ? "default" : "outline"}
                        className={cn(
                            "cursor-pointer rounded-full font-normal capitalize",
                            filter === "unanswered" ? "bg-zinc-900 hover:bg-zinc-800" : "text-zinc-500 border-zinc-200 hover:bg-zinc-50"
                        )}
                        onClick={() => setFilter("unanswered")}
                    >
                        Un-attended
                        <span className="ml-1.5 opacity-60">×</span>
                    </Badge>
                    <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full ml-auto">
                        <Filter className="h-3 w-3 text-zinc-400" />
                    </Button>
                </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto">
                {isLoading ? (
                    <div className="p-4 space-y-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex gap-3">
                                <Skeleton className="h-10 w-10 rounded-full" />
                                <div className="space-y-2 flex-1">
                                    <Skeleton className="h-4 w-24" />
                                    <Skeleton className="h-3 w-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="divide-y divide-zinc-50">
                        {filteredConversations.map(conv => (
                            <div
                                key={conv.id}
                                onClick={() => handleClick(conv.id)}
                                className={cn(
                                    "p-4 hover:bg-zinc-50 cursor-pointer transition-colors relative group",
                                    activeConversationId === conv.id ? "bg-zinc-50 border-l-4 border-l-emerald-500 -ml-px pl-[15px]" : "border-l-4 border-l-transparent"
                                )}
                            >
                                <div className="flex items-start gap-3">
                                    {/* Avatar */}
                                    <div className="relative">
                                        <div className="h-10 w-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-bold border border-zinc-200 overflow-hidden">
                                            {conv.meta?.sender.thumbnail ? (
                                                <img src={conv.meta.sender.thumbnail} alt="" className="h-full w-full object-cover" />
                                            ) : (
                                                conv.meta?.sender.name.charAt(0)
                                            )}
                                        </div>
                                        {/* Channel Icon Badge */}
                                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-zinc-100">
                                            {conv.meta?.channel === 'whatsapp' ? (
                                                <MessageCircle className="h-3 w-3 text-emerald-500 fill-emerald-100" />
                                            ) : (
                                                <Phone className="h-3 w-3 text-zinc-400" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-0.5">
                                            <span className="font-semibold text-sm text-zinc-900 truncate">
                                                {conv.meta?.sender.name || "Unknown User"}
                                            </span>
                                            <div className="flex items-center gap-1">
                                                <span className="text-[10px] text-zinc-400">{formatTime(conv.timestamp)}</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                                            {conv.last_non_activity_message?.content || "No messages yet"}
                                        </p>

                                        {/* Tags/Labels */}
                                        {conv.labels && conv.labels.length > 0 && (
                                            <div className="flex items-center gap-1 mt-2">
                                                {conv.labels.map(label => (
                                                    <span key={label} className={cn(
                                                        "text-[10px] px-1.5 py-0.5 rounded-full font-medium border",
                                                        label === 'unanswered' ? "bg-red-50 text-red-600 border-red-100" :
                                                            label === 'urgent' ? "bg-amber-50 text-amber-600 border-amber-100" :
                                                                "bg-zinc-50 text-zinc-500 border-zinc-100"
                                                    )}>
                                                        {label}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
