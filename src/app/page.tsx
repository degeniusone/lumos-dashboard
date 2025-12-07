"use client";


import { useState } from "react";
import { ChatwootProvider } from "@/lib/chatwoot";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { TreatmentsPanel } from "@/components/TreatmentsPanel";
import { PatientCRM } from "@/components/PatientCRM";
import { Scheduler } from "@/components/Scheduler";
import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";
import { Stethoscope, Users, Calendar, BarChart3 } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("treatments");

  return (
    <ChatwootProvider>
      <main className="min-h-screen bg-gray-50 flex flex-col">
        <div className="bg-white border-b px-4 py-2 sticky top-0 z-10 shadow-sm">
          <Tabs className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto bg-transparent p-0 space-x-1">
              <TabsTrigger
                value="treatments"
                activeValue={activeTab}
                setActiveValue={setActiveTab}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-transparent bg-gray-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white hover:bg-gray-200 transition-colors"
              >
                <Stethoscope className="w-4 h-4" /> <span>Treatments</span>
              </TabsTrigger>
              <TabsTrigger
                value="crm"
                activeValue={activeTab}
                setActiveValue={setActiveTab}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-transparent bg-gray-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white hover:bg-gray-200 transition-colors"
              >
                <Users className="w-4 h-4" /> <span>CRM</span>
              </TabsTrigger>
              <TabsTrigger
                value="schedule"
                activeValue={activeTab}
                setActiveValue={setActiveTab}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-transparent bg-gray-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white hover:bg-gray-200 transition-colors"
              >
                <Calendar className="w-4 h-4" /> <span>Schedule</span>
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                activeValue={activeTab}
                setActiveValue={setActiveTab}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-transparent bg-gray-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white hover:bg-gray-200 transition-colors"
              >
                <BarChart3 className="w-4 h-4" /> <span>Analytics</span>
              </TabsTrigger>
            </TabsList>

            <div className="mt-4">
              <TabsContent value="treatments" activeValue={activeTab}>
                <TreatmentsPanel />
              </TabsContent>
              <TabsContent value="crm" activeValue={activeTab}>
                <PatientCRM />
              </TabsContent>
              <TabsContent value="schedule" activeValue={activeTab}>
                <Scheduler />
              </TabsContent>
              <TabsContent value="analytics" activeValue={activeTab}>
                <AnalyticsDashboard />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </main>
    </ChatwootProvider>
  );
}

