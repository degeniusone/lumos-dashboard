export interface EMRPatient {
    id: string;
    name: string;
    email: string;
    phone: string;
    // Add other EMR specific fields
}

export interface EMRAppointment {
    id: string;
    patientId: string;
    date: string;
    doctorId: string;
    status: string;
}

const EMR_API_URL = process.env.EMR_API_URL;
const EMR_API_KEY = process.env.EMR_API_KEY;

export const emrService = {
    async getPatientByEmail(email: string): Promise<EMRPatient | null> {
        if (!EMR_API_URL) {
            console.warn("EMR_API_URL not set");
            return null;
        }
        try {
            const res = await fetch(`${EMR_API_URL}/patients?email=${email}`, {
                headers: { Authorization: `Bearer ${EMR_API_KEY}` },
            });
            if (!res.ok) return null;
            return await res.json();
        } catch (e) {
            console.error("EMR Sync Error:", e);
            return null;
        }
    },

    async syncPatient(data: Partial<EMRPatient>) {
        // Logic to create or update patient in EMR
        console.log("Syncing patient to EMR:", data);
        // return fetch(...)
        return { id: "emr_123", ...data }; // Mock return
    },

    async createAppointment(appointment: any) {
        console.log("Syncing appointment to EMR:", appointment);
        // return fetch(...)
        return { id: "appt_emr_999", status: "confirmed" }; // Mock return
    }
};
