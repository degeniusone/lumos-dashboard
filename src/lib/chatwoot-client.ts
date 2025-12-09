
export interface ChatwootConversation {
    id: number;
    status: 'open' | 'resolved' | 'pending' | 'snoozed';
    meta?: {
        sender: {
            name: string;
            thumbnail?: string;
            phone_number?: string;
            email?: string;
        };
        channel?: string;
    };
    messages?: Array<{
        content: string;
        created_at: number;
        mesage_type: number; // 0=incoming, 1=outgoing
    }>;
    unread_count?: number;
    labels?: string[]; // tags
    last_non_activity_message?: {
        content: string;
        created_at: number;
    };
    timestamp?: number;
}

const BASE_URL = process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL || "https://app.chatwoot.com";
const API_TOKEN = process.env.NEXT_PUBLIC_CHATWOOT_API_TOKEN || "";
const ACCOUNT_ID = process.env.NEXT_PUBLIC_CHATWOOT_ACCOUNT_ID || "1";

// Mock Data for fallback
const MOCK_CONVERSATIONS: ChatwootConversation[] = [
    {
        id: 1,
        status: 'open',
        meta: {
            sender: { name: "James Wood", phone_number: "+971 50 555 5555", thumbnail: "" },
            channel: "whatsapp"
        },
        labels: ["unanswered"],
        unread_count: 1,
        last_non_activity_message: {
            content: "I need to reschedule my appointment for tomorrow.",
            created_at: Date.now() - 1000 * 60 * 60 * 3
        },
        timestamp: Date.now()
    },
    {
        id: 2,
        status: 'open',
        meta: {
            sender: { name: "Sarah Connor", phone_number: "+971 50 123 4567", thumbnail: "" },
            channel: "whatsapp"
        },
        labels: ["new-patient"],
        unread_count: 2,
        last_non_activity_message: {
            content: "Hi, do you have availability for a consultation?",
            created_at: Date.now() - 1000 * 60 * 60 * 5
        },
        timestamp: Date.now()
    },
    {
        id: 3,
        status: 'open',
        meta: {
            sender: { name: "Mike Ross", phone_number: "+971 52 999 8888", thumbnail: "" },
            channel: "sms"
        },
        labels: ["unanswered", "urgent"],
        unread_count: 1,
        last_non_activity_message: {
            content: "When will I get my test results?",
            created_at: Date.now() - 1000 * 60 * 60 * 24
        },
        timestamp: Date.now()
    }
];

export async function fetchConversations(status: 'open' | 'resolved' = 'open'): Promise<ChatwootConversation[]> {
    if (!API_TOKEN) {
        console.warn("Chatwoot API Token not found. Returning mock data.");
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        return MOCK_CONVERSATIONS.filter(c => c.status === status);
    }

    try {
        const response = await fetch(`${BASE_URL}/api/v1/accounts/${ACCOUNT_ID}/conversations?status=${status}`, {
            headers: {
                "api_access_token": API_TOKEN,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch conversations");
        }

        const data = await response.json();
        return data.data.payload as ChatwootConversation[];
    } catch (error) {
        console.error("Error fetching Chatwoot conversations:", error);
        return MOCK_CONVERSATIONS;
    }
}
