"use client"

import * as React from "react"
import Link from "next/link"
import { Send, Phone, Video, MoreVertical, Paperclip, Smile, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export function ConversationView({ conversationId }: { conversationId: number }) {
    return (
        <div className="flex flex-col h-full bg-white relative">
            {/* Header */}
            <div className="h-16 border-b border-zinc-100 flex items-center justify-between px-6 shrink-0">
                <div className="flex items-center gap-3">
                    <Link href="/" passHref>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-zinc-900 -ml-2 mr-2">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>

                    <Avatar className="h-9 w-9 border border-zinc-100">
                        <AvatarImage src={`https://i.pravatar.cc/150?u=${conversationId}`} />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="font-semibold text-zinc-900 text-sm">James Wood</span>
                        <span className="text-xs text-zinc-500 flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Online
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="text-zinc-500">
                        <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-zinc-500">
                        <Video className="h-4 w-4" />
                    </Button>
                    <Separator orientation="vertical" className="h-6 mx-2" />
                    <Button variant="ghost" size="icon" className="text-zinc-500">
                        <MoreVertical className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-zinc-50/50">

                {/* Date Divider */}
                <div className="flex items-center justify-center">
                    <span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider bg-zinc-100 px-2 py-0.5 rounded-full">
                        Today
                    </span>
                </div>

                {/* Incoming Message */}
                <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8 mt-1">
                        <AvatarImage src={`https://i.pravatar.cc/150?u=${conversationId}`} />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1 max-w-[70%]">
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-zinc-200 shadow-sm text-sm text-zinc-700">
                            Hi, I need to reschedule my appointment from tomorrow to next week if possible.
                        </div>
                        <span className="text-[10px] text-zinc-400 ml-1">10:42 AM</span>
                    </div>
                </div>

                {/* Outgoing Message */}
                <div className="flex items-start gap-3 flex-row-reverse">
                    <Avatar className="h-8 w-8 mt-1 bg-zinc-900 text-white">
                        <AvatarFallback>Me</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1 items-end max-w-[70%]">
                        <div className="bg-zinc-900 p-3 rounded-2xl rounded-tr-none shadow-sm text-sm text-white">
                            Sure James, let me check the availability for you. Give me a moment please.
                        </div>
                        <span className="text-[10px] text-zinc-400 mr-1">10:44 AM</span>
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <div className="min-h-[80px] p-4 border-t border-zinc-100 bg-white shrink-0">
                <div className="flex items-end gap-2 bg-zinc-50 border border-zinc-200 rounded-xl p-2 focus-within:ring-1 focus-within:ring-zinc-300 transition-all">
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-zinc-400 hover:text-zinc-600 shrink-0">
                        <Paperclip className="h-5 w-5" />
                    </Button>
                    <Input
                        className="border-none bg-transparent shadow-none focus-visible:ring-0 p-2 h-auto max-h-[120px] resize-none pb-2.5 text-sm"
                        placeholder="Type a message..."
                    />
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-zinc-400 hover:text-zinc-600 shrink-0">
                        <Smile className="h-5 w-5" />
                    </Button>
                    <Button size="icon" className="h-9 w-9 shrink-0 bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
                        <Send className="h-4 w-4 ml-0.5" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
