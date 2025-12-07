"use client"

import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const data = [
    {
        name: "Utilization",
        value: 73,
        fill: "oklch(0.5854 0.2041 277.1173)",
    },
]

export function DoctorUtilization() {
    return (
        <Card className="shadow-lg h-[350px] flex flex-col justify-between">
            <CardHeader className="pb-0">
                <CardTitle>Doctor Utilization</CardTitle>
                <CardDescription>Overall clinic efficiency</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col items-center justify-center relative">
                <div className="h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart
                            innerRadius="80%"
                            outerRadius="100%"
                            barSize={10}
                            data={data}
                            startAngle={90}
                            endAngle={-270}
                        >
                            <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                            <RadialBar
                                background
                                dataKey="value"
                                cornerRadius={30}
                                fill="var(--color-primary)"
                            />
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-6">
                    <span className="text-4xl font-bold">73%</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Efficiency</span>
                </div>
                <div className="mt-4 text-center">
                    <div className="text-sm font-medium text-red-500">
                        -$6,950 Loss
                    </div>
                    <div className="text-xs text-muted-foreground">
                        Idle Doctor Time
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
