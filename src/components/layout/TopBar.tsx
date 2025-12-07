import { Bell, Calendar as CalendarIcon, UserPlus } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

interface TopBarProps {
    title: string;
}

export function TopBar({ title }: TopBarProps) {
    return (
        <div className="h-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-between px-4 border-b sticky top-0 z-40">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <h1 className="text-sm font-semibold text-foreground">{title}</h1>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
                {/* Actions */}
                <button className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-background border text-foreground rounded-md hover:bg-muted text-sm font-medium transition-colors shadow-sm">
                    <CalendarIcon size={16} />
                    <span>New Appointment</span>
                </button>

                <button className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-foreground text-background rounded-md hover:bg-foreground/90 text-sm font-medium transition-colors shadow-sm">
                    <UserPlus size={16} />
                    <span>New Patient</span>
                </button>

                {/* Divider */}
                <div className="hidden md:block h-6 w-px bg-border mx-2" />

                {/* Notifications */}
                <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-background" />
                </button>

                {/* User Profile Hook - Layout only, no logic yet */}
                <div className="w-8 h-8 rounded-full bg-muted border border-border" />
            </div>
        </div>
    );
}
