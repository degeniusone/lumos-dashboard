import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { emrService } from "@/lib/emr";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const chatwootId = searchParams.get("chatwootId");

    if (chatwootId) {
        const patient = await prisma.patient.findUnique({
            where: { chatwootId: parseInt(chatwootId) },
            include: { appointments: true }
        });

        if (!patient) {
            return NextResponse.json({ status: "LEAD", appointments: [] }); // Default mock
        }
        return NextResponse.json(patient);
    }
    return NextResponse.json([]);
}

export async function POST(req: Request) {
    const data = await req.json();
    const { chatwootId, ...rest } = data;

    // Sync with EMR
    try {
        await emrService.syncPatient({
            name: rest.name,
            email: rest.email,
            phone: rest.phone
        });
    } catch (e) {
        console.error("Failed to sync with EMR", e);
    }

    const patient = await prisma.patient.upsert({
        where: { chatwootId: parseInt(chatwootId) },
        update: { ...rest },
        create: { chatwootId: parseInt(chatwootId), ...rest }
    });

    return NextResponse.json(patient);
}
