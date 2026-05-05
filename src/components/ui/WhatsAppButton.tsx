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
      className="flex w-full items-center justify-center gap-2 bg-medical-green py-2.5 font-sans text-xs font-semibold uppercase tracking-wide text-white transition-all hover:bg-[#0A7569]"
    >
      <MessageCircle className="h-4 w-4 fill-white" />
      {label}
    </a>
  );
}
