"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DailySalesTasks() {
    const tasks = [
        { id: 1, type: "Callback", priority: "High", patient: "Sarah Miller", time: "10:30 AM", done: false, source: "Google Ads" },
        { id: 2, type: "Quote Follow-up", priority: "Medium", patient: "John Doe", time: "11:00 AM", done: false, source: "Walk-in" },
        { id: 3, type: "Recall SMS", priority: "Low", patient: "Emma Wilson", time: "1:00 PM", done: true, source: "System" },
        { id: 4, type: "New Lead", priority: "Urgent", patient: "Mike Brown", time: "1:15 PM", done: false, source: "Meta Ads" },
        { id: 5, type: "Payment Due", priority: "High", patient: "Lisa Ray", time: "2:00 PM", done: false, source: "Accounts" },
        { id: 6, type: "Confirm Appt", priority: "Low", patient: "Tom Clark", time: "3:30 PM", done: false, source: "Organic" },
    ]

    return (
        <Card className="flex flex-col h-[350px] overflow-hidden shadow-lg border-t-4 border-t-primary">
            <CardHeader className="pb-2 bg-muted/30">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-bold uppercase tracking-wide">Daily Sales Tasks</CardTitle>
                    <Badge variant="outline" className="bg-background">6 Pending</Badge>
                </div>
            </CardHeader>
            <Separator />
            <CardContent className="p-0 flex-1">
                <ScrollArea className="h-full">
                    <div className="flex flex-col">
                        {tasks.map((task) => (
                            <div
                                key={task.id}
                                className="flex items-center gap-3 p-3 hover:bg-muted/50 transition-colors border-b last:border-0"
                            >
                                <Checkbox id={`task-${task.id}`} checked={task.done} className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />
                                <div className="flex-1 min-w-0">
                                    <label
                                        htmlFor={`task-${task.id}`}
                                        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${task.done ? 'line-through text-muted-foreground' : ''}`}
                                    >
                                        {task.type} - {task.patient}
                                    </label>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-xs text-muted-foreground">{task.time}</span>
                                        <Badge variant="secondary" className="text-[10px] h-4 px-1">{task.source}</Badge>
                                    </div>
                                </div>
                                {task.priority === "Urgent" && (
                                    <Badge variant="destructive" className="text-[10px]">Urgent</Badge>
                                )}
                                {task.priority === "High" && (
                                    <Badge className="text-[10px] bg-orange-500 hover:bg-orange-600">High</Badge>
                                )}
                                <Avatar className="h-6 w-6 border-2 border-background">
                                    <AvatarFallback className="text-[10px]">{task.patient.charAt(0)}</AvatarFallback>
                                </Avatar>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
            <div className="p-2 bg-muted/30 text-center text-xs text-muted-foreground border-t">
                Your completion rate: <span className="font-bold text-green-600">35%</span>
            </div>
        </Card>
    )
}
