"use client";

import { useEffect } from "react";

export function DevDebug() {
    if (process.env.NODE_ENV === "production") return null;

    const simulateChatwoot = () => {
        const mockData = {
            conversation: {
                id: 1,
                contact: {
                    id: 101,
                    name: "John Doe",
                    email: "john@example.com",
                    phone_number: "+123456789",
                    custom_attributes: {}
                },
                agent_last_seen_at: Date.now(),
            },
            contact: {
                id: 101,
                name: "John Doe",
                email: "john@example.com",
                phone_number: "+123456789",
                custom_attributes: {}
            }
        };

        window.postMessage(JSON.stringify(mockData), "*");
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button
                onClick={simulateChatwoot}
                className="bg-red-500 text-white text-xs px-2 py-1 rounded shadow hover:bg-red-600"
            >
                Simulate Chatwoot Event
            </button>
        </div>
    );
}
