"use client"

import * as React from "react"
import { MoreVertical, Phone, MessageSquare, X, Clock, Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface MissedConversation {
    id: string
    name: string
    phone: string
    avatar: string
    message: string
    time: string
    status: "Lead" | "Patient"
    category: "Dental" | "Ortho" | "General"
    source: {
        platform: "google" | "whatsapp" | "facebook"
        id?: string
    }
}

const missedConversations: MissedConversation[] = [
    {
        id: "1",
        name: "James Wood",
        phone: "+971 56 555 5555",
        avatar: "https://i.pravatar.cc/150?u=1",
        message: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore...",
        time: "3hour",
        status: "Lead",
        category: "Dental",
        source: {
            platform: "google",
            id: "8736"
        }
    },
    {
        id: "2",
        name: "James Wood",
        phone: "+971 56 555 5555",
        avatar: "https://i.pravatar.cc/150?u=2",
        message: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore...",
        time: "31min",
        status: "Lead",
        category: "Dental",
        source: {
            platform: "whatsapp",
            id: "8736"
        }
    },
    {
        id: "3",
        name: "James Wood",
        phone: "+971 56 555 5555",
        avatar: "https://i.pravatar.cc/150?u=3",
        message: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore...",
        time: "3min",
        status: "Lead",
        category: "Dental",
        source: {
            platform: "google",
            id: "8736"
        }
    },
    {
        id: "4",
        name: "James Wood",
        phone: "+971 56 555 5555",
        avatar: "https://i.pravatar.cc/150?u=4",
        message: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore...",
        time: "3min",
        status: "Lead",
        category: "Dental",
        source: {
            platform: "google",
            id: "8736"
        }
    }
]

export function MissedConversationsWidget() {
    return (
        <Card className="h-full border-none shadow-sm bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-border/50">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-full">
                        <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-base font-semibold">Missed Conversations</CardTitle>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                    <MoreVertical className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent className="p-0">
                <ScrollArea className="h-[600px]">
                    <div className="flex flex-col">
                        {missedConversations.map((conversation) => (
                            <div
                                key={conversation.id}
                                className="relative flex flex-col gap-3 p-4 border-b border-border/50 hover:bg-muted/30 transition-colors group"
                            >
                                {/* Left Status Indicator Bar */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-400" />

                                <div className="flex items-start justify-between pl-2">
                                    <div className="flex gap-3">
                                        <Avatar className="h-10 w-10 border border-border">
                                            <AvatarImage src={conversation.avatar} alt={conversation.name} />
                                            <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col gap-0.5">
                                            <span className="font-semibold text-sm">{conversation.name}</span>
                                            <span className="text-xs text-muted-foreground">{conversation.phone}</span>
                                        </div>
                                    </div>

                                    {/* Action Buttons (visible on hover or always?) - Design shows icons */}
                                    <div className="flex items-center gap-1 text-muted-foreground/50">
                                        <Button variant="ghost" size="icon" className="h-6 w-6 hover:text-primary">
                                            <Check className="h-3.5 w-3.5" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-6 w-6 hover:text-primary">
                                            <Phone className="h-3.5 w-3.5" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-6 w-6 hover:text-destructive">
                                            <X className="h-3.5 w-3.5" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="pl-2">
                                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                        {conversation.message}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pl-2 mt-1">
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="text-[10px] gap-1 px-1.5 h-5 font-normal text-muted-foreground">
                                            <Clock className="h-3 w-3" />
                                            {conversation.time}
                                        </Badge>
                                        <Badge className="text-[10px] h-5 bg-sky-500 hover:bg-sky-600 border-none px-2">
                                            {conversation.status}
                                            <X className="h-2 w-2 ml-1 opacity-70" />
                                        </Badge>
                                        <Badge className="text-[10px] h-5 bg-lime-400 hover:bg-lime-500 text-lime-950 border-none px-2">
                                            {conversation.category}
                                            <X className="h-2 w-2 ml-1 opacity-70" />
                                        </Badge>
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        {/* Platform Icons */}
                                        <div className="flex -space-x-1">
                                            <div className="h-4 w-4 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm z-10">
                                                {/* Google Icon placeholder */}
                                                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05" />
                                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                                </svg>
                                            </div>
                                            <div className="h-4 w-4 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm z-20">
                                                {/* WhatsApp Icon placeholder */}
                                                <svg className="h-3 w-3 text-green-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="text-xs font-medium text-muted-foreground">{conversation.source.id}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
                {/* Footer or view all button could go here */}
            </CardContent>
        </Card>
    )
}
