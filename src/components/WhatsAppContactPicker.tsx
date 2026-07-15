import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import TermsModal from "@/components/TermsModal";

export interface WhatsAppContact {
  name: string;
  role?: string;
  phone: string;
}

interface WhatsAppContactPickerProps {
  contacts: WhatsAppContact[];
  className?: string;
}

const buildWhatsAppUrl = (phone: string): string => {
  const clean = phone.replace(/\D/g, "");
  return `https://wa.me/${clean}`;
};

const WhatsAppContactPicker = ({ contacts, className }: WhatsAppContactPickerProps) => {
  const [showTerms, setShowTerms] = useState(false);

  if (!contacts || contacts.length === 0) return null;

  const buttonClass = cn(
    "inline-flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-2.5 rounded-md font-medium text-sm transition-all duration-300 hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]",
    className
  );

  return (
    <>
      <button type="button" onClick={() => setShowTerms(true)} className={buttonClass}>
        <MessageCircle size={16} />
        Contactar por WhatsApp
      </button>
      <TermsModal
        open={showTerms}
        onClose={() => setShowTerms(false)}
        contacts={contacts}
      />
    </>
  );
};

export { buildWhatsAppUrl };
export default WhatsAppContactPicker;
