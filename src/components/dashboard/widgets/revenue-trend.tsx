"use client"

import { Area, AreaChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const data = [
    { month: "Jan", new: 4000, recurring: 2400 },
    { month: "Feb", new: 3000, recurring: 1398 },
    { month: "Mar", new: 2000, recurring: 9800 },
    { month: "Apr", new: 2780, recurring: 3908 },
    { month: "May", new: 1890, recurring: 4800 },
    { month: "Jun", new: 2390, recurring: 3800 },
    { month: "Jul", new: 3490, recurring: 4300 },
]

export function RevenueTrend() {
    return (
        <Card className="shadow-lg h-[350px] flex flex-col">
            <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>
                    New Patient vs Recurring Revenue
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 min-h-0 pl-0">
                <div className="h-full w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="oklch(0.5854 0.2041 277.1173)" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="oklch(0.5854 0.2041 277.1173)" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorRecurring" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="oklch(0.5106 0.2301 276.9656)" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="oklch(0.5106 0.2301 276.9656)" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="month" axisLine={false} tickLine={false} fontSize={12} tickMargin={10} />
                            <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.3} />
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="new"
                                stroke="oklch(0.5854 0.2041 277.1173)"
                                fillOpacity={1}
                                fill="url(#colorNew)"
                                strokeWidth={3}
                            />
                            <Area
                                type="monotone"
                                dataKey="recurring"
                                stroke="oklch(0.5106 0.2301 276.9656)"
                                fillOpacity={1}
                                fill="url(#colorRecurring)"
                                strokeWidth={3}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}
