import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const treatments = await prisma.treatment.findMany();
    // seed if empty for demo
    if (treatments.length === 0) {
        await prisma.treatment.createMany({
            data: [
                { title: "Teeth Whitening", price: 299, description: "Professional laser whitening locally.", promoInfo: "Summer Sale: 20% off" },
                { title: "Invisalign Consultation", price: 0, description: "Free consultation scan.", promoInfo: "Free cleaning with start" },
                { title: "Root Canal", price: 800, description: "Molar root canal therapy.", promoInfo: null },
                { title: "Dental Implant", price: 1500, description: "Titanium implant + crown.", promoInfo: "Family discount available" },
            ]
        });
        return NextResponse.json(await prisma.treatment.findMany());
    }
    return NextResponse.json(treatments);
}

export async function POST(req: Request) {
    const data = await req.json();
    const treatment = await prisma.treatment.create({ data });
    return NextResponse.json(treatment);
}
