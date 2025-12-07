"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const data = [
    { name: "Mon", leads: 4, bookings: 2 },
    { name: "Tue", leads: 7, bookings: 4 },
    { name: "Wed", leads: 3, bookings: 1 },
    { name: "Thu", leads: 9, bookings: 6 },
    { name: "Fri", leads: 12, bookings: 8 },
    { name: "Sat", leads: 8, bookings: 5 },
    { name: "Sun", leads: 2, bookings: 0 },
];

const camData = [
    { name: "AdWords", cost: 400, clicks: 2400 },
    { name: "FB Ads", cost: 300, clicks: 1398 },
    { name: "Organic", cost: 0, clicks: 9800 },
];

export function AnalyticsDashboard() {
    return (
        <div className="p-4 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold mb-4 text-sm text-gray-500 uppercase tracking-wider">Weekly Conversion</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={12} />
                                <YAxis axisLine={false} tickLine={false} fontSize={12} />
                                <Tooltip />
                                <Line type="monotone" dataKey="leads" stroke="#3b82f6" strokeWidth={2} />
                                <Line type="monotone" dataKey="bookings" stroke="#10b981" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex gap-4 justify-center mt-2 text-xs">
                        <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Leads</div>
                        <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Bookings</div>
                    </div>
                </div>

                <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold mb-4 text-sm text-gray-500 uppercase tracking-wider">Source Performance</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={camData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={12} />
                                <YAxis axisLine={false} tickLine={false} fontSize={12} />
                                <Tooltip />
                                <Bar dataKey="clicks" fill="#8884d8" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="text-2xl font-bold text-blue-700">124</div>
                    <div className="text-xs text-blue-600">Total Leads</div>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                    <div className="text-2xl font-bold text-emerald-700">45</div>
                    <div className="text-xs text-emerald-600">Total Bookings</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                    <div className="text-2xl font-bold text-purple-700">$1,290</div>
                    <div className="text-xs text-purple-600">Ad Spend</div>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <div className="text-2xl font-bold text-orange-700">$54</div>
                    <div className="text-xs text-orange-600">Cost per Lead</div>
                </div>
            </div>
        </div>
    );
}
