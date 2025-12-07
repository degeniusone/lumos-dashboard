"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, DollarSign } from "lucide-react"

export function FinancialScorecard() {
    return (
        <div className="grid gap-4 md:grid-cols-3">
            <Card className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                        Total Income
                    </CardTitle>
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                        <DollarSign className="h-4 w-4 text-green-600" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-foreground">$124,500</div>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center">
                        <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                        <span className="text-green-500 font-medium">+12.5%</span>
                        <span className="ml-1">from last month</span>
                    </p>
                </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                        Total Expenses
                    </CardTitle>
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                        <DollarSign className="h-4 w-4 text-red-600" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-foreground">$42,300</div>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center">
                        <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                        <span className="text-red-500 font-medium">+4.1%</span>
                        <span className="ml-1">from last month</span>
                    </p>
                </CardContent>
            </Card>

            <Card className="shadow-lg bg-black text-white dark:bg-white dark:text-black hover:scale-[1.02] transition-transform">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium opacity-80">
                        Net Profit
                    </CardTitle>
                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <DollarSign className="h-4 w-4 text-white dark:text-black" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold tabular-nums tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500 dark:from-green-600 dark:to-emerald-800">
                        $82,200
                    </div>
                    <p className="text-xs opacity-70 mt-1 flex items-center">
                        <span className="bg-green-500/20 text-green-300 px-1 rounded text-[10px] mr-2 dark:text-green-700">RECORD</span>
                        <span className="font-medium">+18.2%</span>
                        <span className="ml-1">margin</span>
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
