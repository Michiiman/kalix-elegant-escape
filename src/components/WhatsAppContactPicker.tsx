import { MessageCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

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
  if (!contacts || contacts.length === 0) return null;

  const buttonClass = cn(
    "inline-flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-2.5 rounded-md font-medium text-sm transition-all duration-300 hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]",
    className
  );

  if (contacts.length === 1) {
    return (
      <a href={buildWhatsAppUrl(contacts[0].phone)} target="_blank" rel="noopener noreferrer" className={buttonClass}>
        <MessageCircle size={16} /> Contactar por WhatsApp
      </a>
    );
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button type="button" className={buttonClass}>
          <MessageCircle size={16} /> Contactar por WhatsApp
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-3 bg-card border border-gold/20 shadow-lg" align="center" sideOffset={6}>
        <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-2 px-1">
          Selecciona un contacto
        </p>
        <div className="space-y-1">
          {contacts.map((contact, i) => (
            <a
              key={i}
              href={buildWhatsAppUrl(contact.phone)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 px-3 py-2.5 rounded-md hover:bg-secondary transition-colors group"
            >
              <div className="mt-0.5 shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                <User size={13} className="text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-silver leading-tight truncate">{contact.name}</p>
                {contact.role && (
                  <p className="text-xs text-muted-foreground leading-tight mt-0.5 truncate">{contact.role}</p>
                )}
                <p className="text-xs text-gold font-medium mt-1">{contact.phone}</p>
              </div>
              <MessageCircle size={14} className="text-primary/60 group-hover:text-primary mt-0.5 shrink-0 transition-colors" />
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export { buildWhatsAppUrl };
export default WhatsAppContactPicker;
