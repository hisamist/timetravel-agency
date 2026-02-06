"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "bot";
  content: string;
}

const initialMessages: Message[] = [
  {
    id: "welcome",
    role: "bot",
    content:
      "Welcome to TimeTravel Agency. How can I assist you in planning your journey through time?",
  },
];

const botResponses = [
  "Our Paris 1889 package includes front-row seats to the Eiffel Tower unveiling. Shall I share more details?",
  "The Cretaceous expedition features armored temporal observation pods for your safety. It's our most popular adventure.",
  "Renaissance Florence is breathtaking this time of year - or rather, that time of year. I can arrange a private audience with the Medici.",
  "Our temporal vessels are equipped with the latest chrono-stabilization technology. You'll barely feel the transition.",
  "I'd recommend our Premium Chrononaute package - it includes era-appropriate attire and a personal historian guide.",
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: botResponses[Math.floor(Math.random() * botResponses.length)],
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1000);
  }

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center border border-gold bg-card shadow-2xl transition-all duration-300 hover:bg-gold hover:text-background"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <X size={20} className="text-current" />
        ) : (
          <MessageCircle size={20} className="text-gold" />
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed right-6 bottom-24 z-50 flex h-[440px] w-[340px] flex-col border border-border bg-card shadow-2xl sm:w-[380px]">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-border px-5 py-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gold">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gold"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 6v6l4 2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                Chrono Concierge
              </p>
              <p className="text-[10px] uppercase tracking-wider text-gold">
                Online
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-4">
            <div className="flex flex-col gap-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gold text-background"
                        : "border border-border bg-secondary text-foreground"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-border px-4 py-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our journeys..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-8 w-8 items-center justify-center text-gold transition-colors hover:text-gold-light"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
