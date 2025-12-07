"use client";

import { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { cn } from "@/lib/utils";

export function Scheduler() {
    const [selectedDate, setSelectedDate] = useState<Date>();
    const [selectedSlot, setSelectedSlot] = useState<string>();

    // Mock slots
    const timeSlots = [
        "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
        "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM",
        "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
    ];

    const handleBook = () => {
        if (!selectedDate || !selectedSlot) return;
        alert(`Booking for ${format(selectedDate, "PPP")} at ${selectedSlot}`);
        // Call API to book
    };

    return (
        <div className="flex flex-col md:flex-row gap-6 p-4">
            <div className="flex-1">
                <h3 className="font-semibold mb-2">Select Date</h3>
                <div className="border rounded-md inline-block bg-white p-2">
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={{ before: new Date() }}
                        modifiersClassNames={{
                            selected: "bg-blue-600 text-white rounded-full hover:bg-blue-600",
                            today: "font-bold text-blue-600"
                        }}
                    />
                </div>
            </div>

            <div className="flex-1">
                <h3 className="font-semibold mb-2">Available Slots</h3>
                {!selectedDate ? (
                    <div className="text-gray-500 italic">Please select a date first.</div>
                ) : (
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                        {timeSlots.map(slot => (
                            <button
                                key={slot}
                                onClick={() => setSelectedSlot(slot)}
                                className={cn(
                                    "px-3 py-2 text-sm border rounded hover:bg-gray-50 transition",
                                    selectedSlot === slot ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700" : ""
                                )}
                            >
                                {slot}
                            </button>
                        ))}
                    </div>
                )}

                {selectedDate && selectedSlot && (
                    <div className="mt-6 border-t pt-4">
                        <p className="mb-2 text-sm">
                            Booking: <strong>{format(selectedDate, "PPP")}</strong> at <strong>{selectedSlot}</strong>
                        </p>
                        <button
                            onClick={handleBook}
                            className="w-full bg-green-600 text-white font-bold py-2 rounded hover:bg-green-700 transition"
                        >
                            Confirm Booking
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
