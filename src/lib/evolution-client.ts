
export interface EvolutionInstance {
    instance: {
        instanceName: string;
        owner: string;
        profileName: string;
        profilePictureUrl: string;
        status: string;
    };
    hash: string;
    settings: {
        reject_call: boolean;
        msg_call: boolean;
        groups_ignore: boolean;
        always_online: boolean;
        read_messages: boolean;
        read_status: boolean;
    };
}

const BASE_URL = process.env.NEXT_PUBLIC_EVOLUTION_API_URL || "http://localhost:8080";
const API_KEY = process.env.NEXT_PUBLIC_EVOLUTION_API_KEY || "";

export async function fetchEvolutionInstances(): Promise<EvolutionInstance[]> {
    if (!API_KEY) {
        console.warn("Evolution API Key not found.");
        return [];
    }

    try {
        const response = await fetch(`${BASE_URL}/instance/fetchInstances`, {
            headers: {
                "apikey": API_KEY,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch Evolution instances");
        }

        const data = await response.json();
        return data as EvolutionInstance[];
    } catch (error) {
        console.error("Error fetching Evolution instances:", error);
        return [];
    }
}

export async function fetchInstanceStatus(instanceName: string): Promise<any> {
    if (!API_KEY) {
        console.warn("Evolution API Key not found.");
        return null;
    }

    try {
        const response = await fetch(`${BASE_URL}/instance/connectionState/${instanceName}`, {
            headers: {
                "apikey": API_KEY,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch instance status");
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching instance status:", error);
        return null;
    }
}
