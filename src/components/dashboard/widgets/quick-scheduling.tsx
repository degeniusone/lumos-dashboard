"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { CalendarClock, Plus } from "lucide-react"

export function QuickScheduling() {
    const slots = [
        { time: "09:00 AM", doctor: "Dr. Smith", type: "Consultation" },
        { time: "11:30 AM", doctor: "Dr. Jones", type: "Follow-up" },
        { time: "02:15 PM", doctor: "Dr. Smith", type: "Emergency" },
    ]

    return (
        <Card className="flex flex-col h-[350px] shadow-lg overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2 bg-primary/5">
                <CardTitle className="text-base font-bold">Quick Scheduling</CardTitle>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Today</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        3
                    </span>
                </div>
            </CardHeader>
            <CardContent className="p-0 flex-1 flex flex-col justify-between">
                <div>
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-transparent">
                                <TableHead className="w-[100px]">Time</TableHead>
                                <TableHead>Doctor</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {slots.map((slot, i) => (
                                <TableRow key={i} className="hover:bg-muted/50">
                                    <TableCell className="font-medium">{slot.time}</TableCell>
                                    <TableCell>{slot.doctor}</TableCell>
                                    <TableCell className="text-right">
                                        <Button size="sm" variant="ghost" className="h-7 w-7 p-0 rounded-full hover:bg-primary/10">
                                            <Plus className="h-4 w-4 text-primary" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="p-4 bg-muted/20 border-t">
                    <Button className="w-full shadow-md bg-gradient-to-r from-primary to-indigo-600 hover:opacity-90 transition-opacity">
                        <CalendarClock className="mr-2 h-4 w-4" />
                        Open Calendar
                    </Button>
                    <Button variant="outline" className="w-full mt-2 border-dashed">
                        Create New Patient
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
