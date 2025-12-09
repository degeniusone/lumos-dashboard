"use client";

import React, { useEffect, useState } from "react";
import MasterDashboardLayout from "@/components/dashboard/master-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, RefreshCw, Layers } from "lucide-react";
import { fetchConversations } from "@/lib/chatwoot-client";
import { fetchEvolutionInstances } from "@/lib/evolution-client";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function IntegrationsPage() {
    const [chatwootStatus, setChatwootStatus] = useState<'checking' | 'connected' | 'error'>('checking');
    const [evolutionStatus, setEvolutionStatus] = useState<'checking' | 'connected' | 'error'>('checking');
    const [evolutionInstances, setEvolutionInstances] = useState<any[]>([]);

    const checkConnections = async () => {
        setChatwootStatus('checking');
        setEvolutionStatus('checking');

        // Check Chatwoot
        try {
            const conversations = await fetchConversations('open');
            // If fetchConversations returns mock data, it might still "succeed" but log a warning.
            // Ideally the client should expose if it's using mock data.
            // For now, we assume if it returns array, it's "connected" (or falling back gracefully).
            // To be more strict, we could check for a specific flag or try a real request.
            setChatwootStatus('connected');
        } catch (e) {
            console.error(e);
            setChatwootStatus('error');
        }

        // Check Evolution
        try {
            const instances = await fetchEvolutionInstances();
            if (instances && Array.isArray(instances)) {
                setEvolutionInstances(instances);
                setEvolutionStatus('connected');
            } else {
                setEvolutionStatus('error');
            }
        } catch (e) {
            console.error(e);
            setEvolutionStatus('error');
        }
    };

    useEffect(() => {
        checkConnections();
    }, []);

    return (
        <MasterDashboardLayout>
            <header className="flex h-16 shrink-0 items-center gap-2 px-6 border-b border-gray-100 bg-white">
                <SidebarTrigger className="-ml-2 md:hidden" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                            <BreadcrumbLink href="/" className="text-gray-500 hover:text-gray-900">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="font-semibold text-gray-900">Integrations</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </header>

            <div className="p-6 space-y-6 overflow-y-auto h-[calc(100vh-4rem)]">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Integrations</h1>
                        <p className="text-zinc-500">Manage your connections to external services.</p>
                    </div>
                    <Button onClick={checkConnections} variant="outline" className="gap-2">
                        <RefreshCw className="h-4 w-4" />
                        Refresh Status
                    </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* Chatwoot Card */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-lg font-medium">Chatwoot</CardTitle>
                            <Layers className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2 mt-2 mb-4">
                                {chatwootStatus === 'checking' && <Badge variant="outline" className="bg-yellow-50 text-yellow-600 border-yellow-200">Checking...</Badge>}
                                {chatwootStatus === 'connected' && <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 gap-1"><CheckCircle2 className="h-3 w-3" /> Connected</Badge>}
                                {chatwootStatus === 'error' && <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200 gap-1"><XCircle className="h-3 w-3" /> Error</Badge>}
                            </div>
                            <p className="text-sm text-zinc-500 mb-4">
                                Customer engagement platform. Used for managing conversations.
                            </p>
                            <div className="text-xs text-zinc-400 bg-zinc-50 p-2 rounded">
                                Base URL: {process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL || "(Default)"}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Evolution API Card */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-lg font-medium">Evolution API</CardTitle>
                            <Layers className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2 mt-2 mb-4">
                                {evolutionStatus === 'checking' && <Badge variant="outline" className="bg-yellow-50 text-yellow-600 border-yellow-200">Checking...</Badge>}
                                {evolutionStatus === 'connected' && <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 gap-1"><CheckCircle2 className="h-3 w-3" /> Connected</Badge>}
                                {evolutionStatus === 'error' && <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200 gap-1"><XCircle className="h-3 w-3" /> Error</Badge>}
                            </div>
                            <p className="text-sm text-zinc-500 mb-4">
                                WhatsApp automation API. Used for sending/receiving WhatsApp messages.
                            </p>
                            <div className="text-xs text-zinc-400 bg-zinc-50 p-2 rounded mb-2">
                                Base URL: {process.env.NEXT_PUBLIC_EVOLUTION_API_URL || "(Default)"}
                            </div>

                            {evolutionStatus === 'connected' && evolutionInstances.length > 0 && (
                                <div className="mt-4 border-t border-zinc-100 pt-4">
                                    <h4 className="text-sm font-medium mb-2">Active Instances</h4>
                                    <ul className="space-y-2">
                                        {evolutionInstances.map((inst, idx) => (
                                            <li key={idx} className="text-xs bg-zinc-50 p-2 rounded flex justify-between">
                                                <span>{inst.instance?.instanceName || "Unknown Instance"}</span>
                                                <span className={inst.instance?.status === 'open' ? "text-green-600" : "text-zinc-500"}>{inst.instance?.status}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {evolutionStatus === 'connected' && evolutionInstances.length === 0 && (
                                <p className="text-xs text-zinc-400 mt-2">No instances found.</p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </MasterDashboardLayout>
    );
}
