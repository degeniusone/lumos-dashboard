"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function StaffScorecard() {
    const staff = [
        { name: "Alice", response: "2m", conversion: "34%", rank: 1 },
        { name: "Bob", response: "5m", conversion: "28%", rank: 2 },
        { name: "Charlie", response: "12m", conversion: "15%", rank: 3 },
    ]

    return (
        <Card className="h-[350px] shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <span>🏆</span> Staff Performance
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Staff</TableHead>
                            <TableHead>Avg Resp</TableHead>
                            <TableHead className="text-right">Conv %</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {staff.map((member) => (
                            <TableRow key={member.name}>
                                <TableCell className="font-medium flex items-center gap-2">
                                    {member.rank === 1 && <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">1st</Badge>}
                                    {member.rank === 2 && <Badge variant="secondary" className="bg-gray-100 text-gray-800 border-gray-200">2nd</Badge>}
                                    {member.rank === 3 && <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">3rd</Badge>}
                                    <Avatar className="h-6 w-6">
                                        <AvatarFallback className="text-[10px]">{member.name[0]}</AvatarFallback>
                                    </Avatar>
                                    {member.name}
                                </TableCell>
                                <TableCell>{member.response}</TableCell>
                                <TableCell className="text-right font-bold text-primary">{member.conversion}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
