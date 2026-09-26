import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  labelledBy: string;
  /** Narrower max-width for lightbox-style content (certificates/achievements). */
  variant?: "detail" | "lightbox";
}

export function Modal({ isOpen, onClose, children, labelledBy, variant = "detail" }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement as HTMLElement;
    dialogRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="presentation"
    >
      <div
        className="absolute inset-0 bg-void/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        className={`relative w-full ${
          variant === "lightbox" ? "max-w-2xl" : "max-w-3xl"
        } max-h-[88vh] overflow-y-auto rounded-2xl border border-gold/25 bg-void-soft text-bone shadow-2xl outline-none animate-fade-up`}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="sticky top-4 float-right mr-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-bone/20 bg-void/70 text-bone transition hover:border-gold hover:text-gold"
        >
          <X size={18} />
        </button>
        <div className="p-6 sm:p-10 pt-16">{children}</div>
      </div>
    </div>,
    document.body
  );
}
