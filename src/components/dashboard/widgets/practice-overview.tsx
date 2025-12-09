"use client"

import * as React from "react"
import {
    Users,
    UserPlus,
    Calendar,
    DollarSign,
    MoreHorizontal,
    MessageCircle,
    MessageSquare,
    Phone,
    Globe,
    Instagram,
    Clock,
    CheckCircle2,
    XCircle
} from "lucide-react"
import {
    Bar,
    BarChart,
    ResponsiveContainer,
    XAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell
} from "recharts"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- Data ---
const monthlyData = [
    { name: "JAN", total: 2000, converted: 1200 },
    { name: "FEB", total: 2300, converted: 1000 },
    { name: "MAR", total: 2600, converted: 1300 },
    { name: "APR", total: 3000, converted: 2000 },
    { name: "MAI", total: 2200, converted: 1200 },
    { name: "JUN", total: 1500, converted: 700 },
    { name: "JUL", total: 1600, converted: 400 },
    { name: "AUG", total: 1900, converted: 900 },
    { name: "SEP", total: 2400, converted: 1300 },
    { name: "OCT", total: 2000, converted: 1300 },
    { name: "NOV", total: 2300, converted: 1000 },
    { name: "DEC", total: 2600, converted: 1300 },
]

const channelStats = [
    {
        id: "whatsapp1",
        count: "2540",
        label: "WhatsApp 4041",
        subLabel: "SEO PPC",
        icon: <MessageCircle className="h-4 w-4 text-zinc-400 fill-zinc-200" />,
        data: {
            usage: { answered: 85, missed: 15 },
            conversion: { booked: 1005, dead: 2240 },
            deadBreakdown: [
                { name: "Ghosted", value: 245, color: "#94a3b8" },
                { name: "Disengaged", value: 120, color: "#f0abfc" },
                { name: "Unanswered", value: 50, color: "#fca5a5" },
            ],
            avgTime: "12m"
        }
    },
    {
        id: "whatsapp2",
        count: "9534",
        label: "WhatsApp 8736",
        subLabel: "META ADS",
        icon: <MessageCircle className="h-4 w-4 text-zinc-400 fill-zinc-200" />,
        data: {
            usage: { answered: 92, missed: 8 },
            conversion: { booked: 4200, dead: 3000 },
            deadBreakdown: [
                { name: "Ghosted", value: 800, color: "#94a3b8" },
                { name: "Disengaged", value: 400, color: "#f0abfc" },
                { name: "Unanswered", value: 1100, color: "#fca5a5" },
            ],
            avgTime: "5m"
        }
    },
    {
        id: "sms",
        count: "3200",
        label: "SMS 4041",
        subLabel: "SEO PPC",
        icon: <MessageSquare className="h-4 w-4 text-zinc-400" />,
        data: {
            usage: { answered: 60, missed: 40 },
            conversion: { booked: 900, dead: 800 },
            deadBreakdown: [
                { name: "Ghosted", value: 100, color: "#94a3b8" },
                { name: "Disengaged", value: 50, color: "#f0abfc" },
                { name: "Unanswered", value: 200, color: "#fca5a5" },
            ],
            avgTime: "24m"
        }
    },
    {
        id: "phone",
        count: "1250",
        label: "PHONE 4041",
        subLabel: "SEO PPC",
        icon: <Phone className="h-4 w-4 text-zinc-400" />,
        data: {
            usage: { answered: 45, missed: 55 },
            conversion: { booked: 600, dead: 400 },
            deadBreakdown: [
                { name: "Ghosted", value: 50, color: "#94a3b8" },
                { name: "Disengaged", value: 20, color: "#f0abfc" },
                { name: "Unanswered", value: 80, color: "#fca5a5" },
            ],
            avgTime: "2m"
        }
    },
    {
        id: "messenger",
        count: "4500",
        label: "Messenger",
        subLabel: "META ADS",
        icon: <MessageCircle className="h-4 w-4 text-blue-500 fill-blue-100" />,
        data: {
            usage: { answered: 70, missed: 30 },
            conversion: { booked: 1200, dead: 1500 },
            deadBreakdown: [
                { name: "Ghosted", value: 200, color: "#94a3b8" },
                { name: "Disengaged", value: 100, color: "#f0abfc" },
                { name: "Unanswered", value: 500, color: "#fca5a5" },
            ],
            avgTime: "1h"
        }
    }
]

// --- Components ---

function StatTab({
    title,
    value,
    change,
    icon: Icon,
    isActive,
    onClick
}: {
    title: string,
    value: string,
    change: string,
    icon: React.ReactNode,
    isActive: boolean,
    onClick: () => void
}) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "flex-1 flex flex-col p-6 cursor-pointer transition-all duration-200 border-r border-zinc-200 last:border-r-0",
                isActive
                    ? "bg-white border-b-0"
                    : "bg-zinc-50 border-b border-zinc-200 hover:bg-zinc-100"
            )}
        >
            <div className="flex items-start justify-between mb-4">
                <span className="text-sm font-medium text-zinc-500">{title}</span>
                <div className="text-zinc-300">
                    {Icon}
                </div>
            </div>
            <div className="flex items-baseline gap-2 mt-auto">
                <span className="text-3xl font-bold text-zinc-700">{value}</span>
                <span className="text-sm font-bold text-emerald-500 ml-1">{change}</span>
            </div>
        </div>
    )
}

function ChannelCard({
    stat,
    isActive,
    onClick
}: {
    stat: typeof channelStats[0],
    isActive: boolean,
    onClick: () => void
}) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "rounded-md p-2.5 cursor-pointer transition-all duration-200 flex flex-col justify-between h-20 min-w-[120px]",
                isActive
                    ? "bg-zinc-100 shadow-none border border-transparent"
                    : "bg-white shadow-sm hover:shadow-md border border-transparent"
            )}
        >
            <div className="flex justify-between items-start">
                <span className="text-lg font-bold text-zinc-700">{stat.count}</span>
            </div>
            <div className="flex items-end justify-between">
                <div className="flex flex-col">
                    <span className="text-[11px] font-medium text-zinc-600 leading-tight">{stat.label}</span>
                    <span className="text-[9px] font-bold text-zinc-400">{stat.subLabel}</span>
                </div>
                <div className="flex items-center gap-1">
                    {stat.icon}
                </div>
            </div>
        </div>
    )
}

// Simple Icons for demo
const GoogleIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
)
const InstagramIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
)


export function PracticeOverviewWidget() {
    const [activeTab, setActiveTab] = React.useState("Leads")
    const [activeChannelId, setActiveChannelId] = React.useState("whatsapp1")

    const activeChannelData = channelStats.find(c => c.id === activeChannelId) || channelStats[0]
    const d = activeChannelData.data

    // Data for Gauge (Answered)
    const gaugeData = [
        { name: 'Answered', value: d.usage.answered, color: '#22c55e' },
        { name: 'Missed', value: d.usage.missed, color: '#e5e7eb' },
    ];

    // Data for Dead Breakdown
    const deadData = d.deadBreakdown;

    return (
        <div className="col-span-1 lg:col-span-2 h-full flex flex-col rounded-2xl border border-zinc-200 overflow-hidden bg-white shadow-sm">

            {/* Top Tabs Row */}
            <div className="flex flex-row bg-zinc-50">
                <StatTab
                    title="Leads"
                    value="8,198"
                    change="↗2.1%"
                    icon={<MoreHorizontal className="h-5 w-5" />}
                    isActive={activeTab === "Leads"}
                    onClick={() => setActiveTab("Leads")}
                />
                <StatTab
                    title="Patients"
                    value="3,522"
                    change="↗1.6%"
                    icon={<Users className="h-5 w-5" />}
                    isActive={activeTab === "Patients"}
                    onClick={() => setActiveTab("Patients")}
                />
                <StatTab
                    title="Appointments"
                    value="156"
                    change="↗1.7%"
                    icon={<Calendar className="h-5 w-5" />}
                    isActive={activeTab === "Appointments"}
                    onClick={() => setActiveTab("Appointments")}
                />
                <StatTab
                    title="Revenue"
                    value="103,198"
                    change="↗11%"
                    icon={<DollarSign className="h-5 w-5" />}
                    isActive={activeTab === "Revenue"}
                    onClick={() => setActiveTab("Revenue")}
                />
            </div>

            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                {/* Chart Title */}
                <h3 className="text-lg font-medium text-zinc-700">{activeTab} Monthly Turnover</h3>

                {/* Chart */}
                <div className="h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={monthlyData} barGap={-32}>
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 11, fill: '#9ca3af' }}
                                dy={10}
                            />
                            <Tooltip
                                cursor={{ fill: 'transparent' }}
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                            />
                            {/* Background Bar (Total) */}
                            <Bar dataKey="total" barSize={32} radius={[6, 6, 6, 6]} fill="#e5e7eb" />
                            {/* Foreground Bar (Converted) */}
                            <Bar dataKey="converted" barSize={32} radius={[6, 6, 6, 6]} fill="#6ee7b7" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Bottom Section Container */}
                <div className="bg-zinc-50 rounded-2xl p-4 space-y-4 border border-zinc-100">

                    {/* Channel Tabs (Small Gap, smaller radius) */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                        {channelStats.map((stat) => (
                            <ChannelCard
                                key={stat.id}
                                stat={stat}
                                isActive={activeChannelId === stat.id}
                                onClick={() => setActiveChannelId(stat.id)}
                            />
                        ))}
                    </div>

                    {/* New Data Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">

                        {/* 1. Gauge: Answered vs Missed */}
                        <div className="bg-white rounded-xl p-3 shadow-none border border-dashed border-zinc-200 flex flex-col items-center justify-center relative">
                            <div className="h-20 w-40 relative">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={gaugeData}
                                            cx="50%"
                                            cy="100%"
                                            startAngle={180}
                                            endAngle={0}
                                            innerRadius={30}
                                            outerRadius={45}
                                            paddingAngle={0}
                                            dataKey="value"
                                            stroke="none"
                                        >
                                            {gaugeData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="absolute inset-x-0 bottom-0 text-center -mb-1">
                                    <span className="text-xl font-bold text-zinc-700">{d.usage.answered}%</span>
                                </div>
                            </div>
                            <div className="text-xs text-zinc-400 mt-1 font-medium text-center">
                                Answered Rate
                            </div>
                        </div>

                        {/* 2. Conversion: Booked vs Dead */}
                        <div className="bg-white rounded-xl p-4 shadow-none border border-dashed border-zinc-200 flex flex-col justify-center space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-xs text-zinc-400 font-medium">Booked</span>
                                    <span className="text-lg font-bold text-emerald-600">{d.conversion.booked}</span>
                                </div>
                                <CheckCircle2 className="h-5 w-5 text-emerald-100 fill-emerald-500" />
                            </div>
                            <div className="h-px bg-zinc-100 w-full" />
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-xs text-zinc-400 font-medium">Dead</span>
                                    <span className="text-lg font-bold text-zinc-500">{d.conversion.dead}</span>
                                </div>
                                <XCircle className="h-5 w-5 text-zinc-100 fill-zinc-400" />
                            </div>
                        </div>

                        {/* 3. Dead Breakdown (Donut) */}
                        <div className="bg-white rounded-xl p-3 shadow-none border border-dashed border-zinc-200 flex items-center justify-between">
                            {/* Chart */}
                            <div className="h-16 w-16 relative">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={deadData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={20}
                                            outerRadius={30}
                                            dataKey="value"
                                            stroke="none"
                                        >
                                            {deadData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            {/* Legend */}
                            <div className="flex flex-col gap-1 text-[10px] flex-1 pl-2">
                                {deadData.map((item, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <div className="flex items-center gap-1.5">
                                            <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                                            <span className="text-zinc-500">{item.name}</span>
                                        </div>
                                        <span className="font-bold text-zinc-700">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 4. Avg Time */}
                        <div className="bg-white rounded-xl p-4 shadow-none border border-dashed border-zinc-200 flex flex-col items-center justify-center gap-2">
                            <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                                <Clock className="h-5 w-5 text-blue-500" />
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-bold text-zinc-700">{d.avgTime}</span>
                                <span className="text-xs text-zinc-400 font-medium text-center">Avg. Answering<br />Time</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
