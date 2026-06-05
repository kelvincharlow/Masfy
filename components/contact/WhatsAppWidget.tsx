'use client';

import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const whatsappHref =
  'https://wa.me/254726365516?text=Hello%20Masfy%20Consulting%20Engineers%2C%20I%20would%20like%20to%20discuss%20a%20project.';

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-4 z-[70] flex items-end gap-3 sm:bottom-6 sm:right-6">
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="hidden rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-lg shadow-slate-950/10 transition hover:border-brand-500/40 hover:text-brand-700 sm:block"
        >
          Need help? Let&apos;s chat
        </button>
      )}

      {open && (
        <div className="w-[min(calc(100vw-2rem),320px)] rounded-[1.5rem] border border-border bg-white p-4 shadow-2xl shadow-slate-950/20">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-slate-950">
                  WhatsApp Chat
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Get instant responses and quick support via WhatsApp.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp chat"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-surface hover:text-slate-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#25D366]/20 transition hover:bg-[#1EBE5D]"
          >
            <MessageCircle className="h-4 w-4" />
            Start WhatsApp Chat
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Open WhatsApp chat"
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 transition hover:bg-[#1EBE5D] sm:h-16 sm:w-16"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </button>
    </div>
  );
}
