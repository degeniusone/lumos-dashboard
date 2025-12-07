"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

// Types based on Chatwoot Dashboard App docs
interface User {
    id: number;
    name: string;
    email: string;
    // Add other fields as needed
}

interface Contact {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    custom_attributes: Record<string, any>;
}

interface Conversation {
    id: number;
    contact: Contact;
    agent_last_seen_at: number;
    // Add other fields as needed
}

interface ChatwootContextType {
    data: {
        conversation?: Conversation;
        contact?: Contact;
        currentAgent?: User;
    } | null;
    isLoading: boolean;
}

const ChatwootContext = createContext<ChatwootContextType>({
    data: null,
    isLoading: true,
});

export const useChatwoot = () => useContext(ChatwootContext);

export function ChatwootProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<ChatwootContextType["data"]>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            // Security check: ensure the event is from a trusted source if possible,
            // but for Chatwoot iframe, we mostly rely on the payload structure.
            // Chatwoot docs say:
            // window.addEventListener("message", function (event) { ... })

            if (!event.data || typeof event.data !== "string") {
                return;
            }

            try {
                const parsedData = JSON.parse(event.data);
                // Basic validation to check if it looks like a Chatwoot event
                // The payload usually contains 'event' type or just the data objects.
                // Based on docs: "Chatwoot will deliver the conversation and contact context as a window event"
                // It provides fields like "conversation", "contact", "currentAgent".

                if (parsedData.conversation || parsedData.contact) {
                    console.log("Chatwoot context received:", parsedData);
                    setData(parsedData);
                    setIsLoading(false);
                }
            } catch (e) {
                // Not a JSON message, ignore
            }
        };

        window.addEventListener("message", handleMessage);

        // Also try to request data immediately in case we missed the initial load event
        // or if we are verifying.
        // For now, we just listen.

        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, []);

    return (
        <ChatwootContext.Provider value={{ data, isLoading }}>
            {children}
        </ChatwootContext.Provider>
    );
}
