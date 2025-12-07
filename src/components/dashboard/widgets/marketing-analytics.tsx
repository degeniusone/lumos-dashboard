"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ArrowUpRight, TrendingUp, Search, Share2, Video, Globe } from "lucide-react"

export function MarketingAnalytics() {
    const campaigns = [
        { source: "Google Ads", campaign: "Search_Gen_Leads", cpa: "$45.20", cpc: "$2.50", convRate: "5.6%", spend: "$1,807", return: "$8,505", roas: "4.7x" },
        { source: "Meta Ads", campaign: "Retargeting_Offer", cpa: "$32.10", cpc: "$1.20", convRate: "3.2%", spend: "$950", return: "$2,850", roas: "3.0x" },
        { source: "TikTok", campaign: "Viral_Video_1", cpa: "$15.50", cpc: "$0.40", convRate: "1.2%", spend: "$500", return: "$600", roas: "1.2x" },
        { source: "Organic", campaign: "SEO_Blog", cpa: "$0.00", cpc: "$0.00", convRate: "8.5%", spend: "$0", return: "$4,200", roas: "∞" },
    ]

    return (
        <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-4">
                <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-none shadow-lg">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-indigo-100">Overall ROAS</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">4.2x</div>
                        <div className="text-xs text-indigo-200 mt-1">Return on Ad Spend</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Spent</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$3,257</div>
                        <div className="text-xs text-muted-foreground mt-1 flex items-center">
                            <TrendingUp className="h-3 w-3 text-red-500 mr-1" />
                            +12% this month
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Attributed Rev</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">$16,155</div>
                        <div className="text-xs text-muted-foreground mt-1">From paid channels</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Active Promos</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2</div>
                        <div className="text-xs text-muted-foreground mt-1">Ending in 5 days</div>
                    </CardContent>
                </Card>
            </div>

            <Card className="shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Attribution Data</CardTitle>
                        <CardDescription>Performance by Channel & Campaign</CardDescription>
                    </div>
                    <Tabs defaultValue="all" className="w-[400px]">
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="google">Google</TabsTrigger>
                            <TabsTrigger value="meta">Meta</TabsTrigger>
                            <TabsTrigger value="organic">Organic</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Source</TableHead>
                                <TableHead>Campaign</TableHead>
                                <TableHead className="text-right">CPA</TableHead>
                                <TableHead className="text-right">CPC</TableHead>
                                <TableHead className="text-right">Conv. %</TableHead>
                                <TableHead className="text-right">Spent</TableHead>
                                <TableHead className="text-right">Return</TableHead>
                                <TableHead className="text-right">ROAS</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {campaigns.map((camp) => (
                                <TableRow key={camp.campaign}>
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-2">
                                            {camp.source === "Google Ads" && <Search className="h-4 w-4 text-blue-500" />}
                                            {camp.source === "Meta Ads" && <Share2 className="h-4 w-4 text-blue-700" />}
                                            {camp.source === "TikTok" && <Video className="h-4 w-4 text-pink-500" />}
                                            {camp.source === "Organic" && <Globe className="h-4 w-4 text-green-500" />}
                                            {camp.source}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-xs text-muted-foreground">{camp.campaign}</TableCell>
                                    <TableCell className="text-right">{camp.cpa}</TableCell>
                                    <TableCell className="text-right">{camp.cpc}</TableCell>
                                    <TableCell className="text-right">{camp.convRate}</TableCell>
                                    <TableCell className="text-right">{camp.spend}</TableCell>
                                    <TableCell className="text-right font-bold">{camp.return}</TableCell>
                                    <TableCell className="text-right">
                                        <Badge variant="outline" className={
                                            camp.roas.includes("4") || camp.roas.includes("∞") ? "bg-green-100 text-green-800 border-green-200" : "bg-gray-100"
                                        }>{camp.roas}</Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
