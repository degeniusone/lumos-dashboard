import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { emrService } from "@/lib/emr";

export async function POST(req: Request) {
    const data = await req.json();
    // data: { patientId, doctorId, date }

    // Basic validation omitted for brevity

    const appointment = await prisma.appointment.create({
        data: {
            patientId: data.patientId,
            doctorId: data.doctorId || 1, // Default doctor for demo
            date: new Date(data.date),
            status: "SCHEDULED",
            notes: data.notes
        }
    });

    // Sync to EMR
    if (appointment) {
        // We use a try-catch to ensure EMR failure doesn't block the UI response
        try {
            await emrService.createAppointment({
                patientId: appointment.patientId,
                date: appointment.date.toISOString(),
                doctorId: appointment.doctorId,
            });
        } catch (e) {
            console.error("Failed to sync appointment with EMR", e);
        }
    }

    return NextResponse.json(appointment);
}
