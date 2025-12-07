"use client"

import { Bar, BarChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer, Cell } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowDown } from "lucide-react"

const data = [
    { name: "Raw Leads", value: 450, color: "oklch(0.5854 0.2041 277.1173)" },
    { name: "Qualified", value: 280, color: "oklch(0.5106 0.2301 276.9656)" },
    { name: "Booked", value: 120, color: "oklch(0.6368 0.2078 25.3313)" },
]

export function ConversionFunnel() {
    return (
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle>Conversion Funnel</CardTitle>
                <CardDescription>Monthly lead-to-booking flow</CardDescription>
            </CardHeader>
            <CardContent className="pl-0">
                <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} barSize={60}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                            <XAxis
                                dataKey="name"
                                tickLine={false}
                                axisLine={false}
                                fontSize={12}
                                tickMargin={10}
                            />
                            <Tooltip
                                cursor={{ fill: 'transparent' }}
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div className="flex flex-col">
                                                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                                                            Volume
                                                        </span>
                                                        <span className="font-bold text-muted-foreground">
                                                            {payload[0].value}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    return null
                                }}
                            />
                            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex items-center justify-center gap-2 mt-4 text-sm font-medium">
                    <span className="text-muted-foreground">Conv. Rate:</span>
                    <span className="text-xl font-bold text-primary">26.6%</span>
                    <ArrowDown className="text-green-500 h-4 w-4" />
                </div>
            </CardContent>
        </Card>
    )
}
