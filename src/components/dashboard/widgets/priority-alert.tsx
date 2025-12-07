"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { AlertCircle, MessageCircle } from "lucide-react"

export function PriorityAlert() {
    return (
        <Alert className="relative overflow-hidden border-none bg-gradient-to-r from-red-500/10 to-orange-500/10 dark:from-red-900/20 dark:to-orange-900/20 shadow-md">
            <div className="absolute left-0 top-0 h-full w-1 bg-red-500" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-red-100 p-2 dark:bg-red-900/50">
                        <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="space-y-1">
                        <AlertTitle className="text-lg font-semibold tracking-tight">
                            Urgent Attention Needed
                        </AlertTitle>
                        <AlertDescription className="text-muted-foreground">
                            You have <span className="font-bold text-foreground">12 unread messages</span> waiting for more than 4 hours.
                        </AlertDescription>
                    </div>
                </div>

                <div className="flex min-w-[200px] flex-col gap-2">
                    <div className="flex justify-between text-xs font-medium">
                        <span className="text-muted-foreground">Response Speed</span>
                        <span className="text-red-600">45m avg</span>
                    </div>
                    <Progress value={65} className="h-2 bg-red-200 dark:bg-red-950" indicatorClassName="bg-red-500" />
                    <Button size="sm" variant="destructive" className="mt-1 w-full shadow-lg hover:shadow-xl transition-all">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Go to Inbox
                    </Button>
                </div>
            </div>
        </Alert>
    )
}
