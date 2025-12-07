"use client";

import { useState, useEffect } from "react";
import { Search, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

// Type definition (should be shared later)
interface Treatment {
    id: number;
    title: string;
    description: string | null;
    price: number; // string in Decimal from Prisma usually, but for UI number
    promoInfo: string | null;
}

export function TreatmentsPanel() {
    const [treatments, setTreatments] = useState<Treatment[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchTreatments();
    }, []);

    const fetchTreatments = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/treatments");
            if (res.ok) {
                const data = await res.json();
                setTreatments(data);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const filtered = treatments.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase())
    );

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        // Could add toast here
    };

    return (
        <div className="p-4 space-y-4">
            <div className="flex items-center space-x-2 border rounded-md px-3 py-2 bg-white">
                <Search className="w-4 h-4 text-gray-500" />
                <input
                    className="flex-1 outline-none text-sm"
                    placeholder="Search treatments..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="grid gap-4">
                {loading ? (
                    <div className="text-center text-sm text-gray-500">Loading...</div>
                ) : filtered.length === 0 ? (
                    <div className="text-center text-sm text-gray-500">No treatments found.</div>
                ) : (
                    filtered.map((t) => (
                        <div
                            key={t.id}
                            className="border rounded-lg p-4 bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow relative group"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-semibold">{t.title}</h3>
                                    <p className="text-sm text-gray-500">{t.description}</p>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-lg">${t.price}</div>
                                </div>
                            </div>
                            {t.promoInfo && (
                                <div className="mt-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded inline-block">
                                    Promo: {t.promoInfo}
                                </div>
                            )}

                            <button
                                onClick={() => copyToClipboard(`${t.title}: $${t.price} ${t.promoInfo ? `(${t.promoInfo})` : ''}`)}
                                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded transition-opacity"
                                title="Copy details"
                            >
                                <Copy className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
