"use client";

import { useChatwoot } from "@/lib/chatwoot";
import { useEffect, useState } from "react";
// import { User, Calendar, FileText } from "lucide-react";

export function PatientCRM() {
    const { data, isLoading } = useChatwoot();
    const [patientDetails, setPatientDetails] = useState<any>(null); // Replace with Patient type
    const [loadingDetails, setLoadingDetails] = useState(false);

    useEffect(() => {
        if (data?.contact?.id) {
            fetchPatientDetails(data.contact.id);
        }
    }, [data]);

    const fetchPatientDetails = async (chatwootId: number) => {
        setLoadingDetails(true);
        try {
            const res = await fetch(`/api/patients?chatwootId=${chatwootId}`);
            if (res.ok) {
                const json = await res.json();
                setPatientDetails(json);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoadingDetails(false);
        }
    };

    const createOrUpdatePatient = async (status: string) => {
        if (!data?.contact) return;

        const body = {
            chatwootId: data.contact.id,
            name: data.contact.name,
            email: data.contact.email,
            phone: data.contact.phone_number,
            status: status
        };

        await fetch('/api/patients', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        fetchPatientDetails(data.contact.id);
    };

    if (isLoading) return <div className="p-4">Loading Chatwoot context...</div>;
    if (!data?.contact) return <div className="p-4">No contact selected.</div>;

    return (
        <div className="p-4 space-y-6">
            {/* Contact Header */}
            <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                    {data.contact.name?.[0] || "?"}
                </div>
                <div>
                    <h2 className="text-xl font-bold">{data.contact.name}</h2>
                    <p className="text-sm text-gray-500">{data.contact.email}</p>
                </div>
            </div>

            {/* Status & Actions */}
            <div className="bg-slate-50 p-4 rounded-lg border">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Status</span>
                    <span className={`text-xs font-bold px-2 py-1 rounded ${patientDetails?.status === 'PATIENT' ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'}`}>
                        {patientDetails?.status || "LEAD"}
                    </span>
                </div>

                {patientDetails?.status !== 'PATIENT' && (
                    <button
                        onClick={() => createOrUpdatePatient('PATIENT')}
                        className="w-full mt-2 bg-blue-600 text-white text-sm py-2 rounded hover:bg-blue-700 transition"
                        disabled={loadingDetails}
                    >
                        Convert to Patient
                    </button>
                )}
            </div>

            {/* Appointment History Placeholder */}
            <div>
                <h3 className="font-semibold mb-2">Appointments</h3>
                <div className="text-sm text-gray-500 border rounded p-4 text-center">
                    No appointments found.
                </div>
            </div>

            {/* Medical History */}
            <div>
                <h3 className="font-semibold mb-2">Medical History</h3>
                <textarea
                    className="w-full text-sm p-2 border rounded h-24"
                    placeholder="Add medical notes..."
                    defaultValue={patientDetails?.medicalHistory || ""}
                />
            </div>
        </div>
    );
}
