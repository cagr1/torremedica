import { MessageCircle } from "lucide-react";

type WhatsAppButtonProps = {
  href: string;
  label: string;
};

export function WhatsAppButton({ href, label }: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#16a34a] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#15803d]"
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}
