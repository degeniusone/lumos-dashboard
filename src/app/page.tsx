"use client";

import { useState } from "react";
import { ChatwootProvider } from "@/lib/chatwoot";
import { AppLayout } from "@/components/layout/AppLayout";
import { TreatmentsPanel } from "@/components/TreatmentsPanel";
import { PatientCRM } from "@/components/PatientCRM";
import { Scheduler } from "@/components/Scheduler";
import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";

export default function Home() {
  const [activeRoute, setActiveRoute] = useState("dashboard");

  // Map routes to titles
  const getTitle = (route: string) => {
    switch (route) {
      case "dashboard": return "Treatments & Dashboard";
      case "contacts": return "Contacts / Patients";
      case "schedules": return "Clinic Schedule";
      case "services": return "Services";
      case "reports": return "Reports & Analytics";
      default: return route.charAt(0).toUpperCase() + route.slice(1);
    }
  };

  return (
    <ChatwootProvider>
      <AppLayout
        activeTitle={getTitle(activeRoute)}
        currentRoute={activeRoute}
        onNavigate={setActiveRoute}
      >
        {activeRoute === "dashboard" && <TreatmentsPanel />}
        {activeRoute === "contacts" && <PatientCRM />}
        {activeRoute === "schedules" && <Scheduler />}
        {activeRoute === "reports" && <AnalyticsDashboard />}

        {/* Placeholders for new sections */}
        {["inbox", "services", "settings"].includes(activeRoute) && (
          <div className="flex flex-col items-center justify-center h-96 text-gray-500">
            <div className="text-6xl mb-4 opacity-20">🚧</div>
            <h2 className="text-xl font-semibold">Under Construction</h2>
            <p>The {activeRoute} module is coming soon.</p>
          </div>
        )}
      </AppLayout>
    </ChatwootProvider>
  );
}

