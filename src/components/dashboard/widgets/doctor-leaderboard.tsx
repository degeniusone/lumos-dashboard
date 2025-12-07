"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const doctors = [
    { name: "Dr. Rajput", revenue: "$14,600", acv: "$450", services: ["Botox", "Fillers"] },
    { name: "Dr. Saleh", revenue: "$9,875", acv: "$320", services: ["General", "Cleaning"] },
    { name: "Dr. Zahra", revenue: "$13,000", acv: "$890", services: ["Veneers"] },
]

export function DoctorLeaderboard() {
    return (
        <Card className="shadow-lg h-[350px]">
            <CardHeader>
                <CardTitle>Revenue Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Doctor</TableHead>
                            <TableHead className="text-right">Revenue</TableHead>
                            <TableHead className="text-right">ACV</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {doctors.map((doc) => (
                            <TableRow key={doc.name}>
                                <TableCell className="font-medium flex items-center gap-2">
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback>{doc.name[4]}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <span>{doc.name}</span>
                                        <span className="text-[10px] text-muted-foreground">{doc.services.join(", ")}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-right font-bold text-green-600">{doc.revenue}</TableCell>
                                <TableCell className="text-right">{doc.acv}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
