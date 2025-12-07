import MasterDashboardLayout from "@/components/dashboard/master-layout"
import { PriorityAlert } from "@/components/dashboard/widgets/priority-alert"
import { DailySalesTasks } from "@/components/dashboard/widgets/daily-sales-tasks"
import { ConversionFunnel } from "@/components/dashboard/widgets/conversion-funnel"
import { QuickScheduling } from "@/components/dashboard/widgets/quick-scheduling"
import { StaffScorecard } from "@/components/dashboard/widgets/staff-scorecard"
import { FinancialScorecard } from "@/components/dashboard/widgets/financial-scorecard"
import { RevenueTrend } from "@/components/dashboard/widgets/revenue-trend"
import { DoctorUtilization } from "@/components/dashboard/widgets/doctor-utilization"
import { DoctorLeaderboard } from "@/components/dashboard/widgets/doctor-leaderboard"
import { MarketingAnalytics } from "@/components/dashboard/widgets/marketing-analytics"

export default function MasterDashboardPage() {
    return (
        <MasterDashboardLayout>
            <div className="flex flex-col gap-6 pb-8">
                {/* Section I: Immediate Action */}
                <div className="grid gap-4">
                    <PriorityAlert />
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <div className="lg:col-span-1">
                            <DailySalesTasks />
                        </div>
                        <div className="lg:col-span-1">
                            <QuickScheduling />
                        </div>
                        <div className="lg:col-span-1">
                            <ConversionFunnel />
                        </div>
                        <div className="lg:col-span-1">
                            <StaffScorecard />
                        </div>
                    </div>
                </div>

                {/* Section II: Financial Health */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Financial Health</h2>
                    <FinancialScorecard />
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <RevenueTrend />
                        </div>
                        <div className="md:col-span-1">
                            <DoctorUtilization />
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="md:col-span-1">
                            <DoctorLeaderboard />
                        </div>
                        {/* Placeholder for future expansion or additional charts */}
                        <div className="md:col-span-2 hidden md:block" />
                    </div>
                </div>

                {/* Section III: Marketing */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Marketing Intelligence</h2>
                    <MarketingAnalytics />
                </div>
            </div>
        </MasterDashboardLayout>
    )
}
