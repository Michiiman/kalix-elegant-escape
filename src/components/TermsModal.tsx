import { X, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import logo from "@/img/Kalix_scort_logo-removebg-preview.png";
import type { WhatsAppContact } from "@/data/profiles";
import { buildWhatsAppUrl } from "@/components/WhatsAppContactPicker";

interface TermsModalProps {
  open: boolean;
  onClose: () => void;
  contacts: WhatsAppContact[];
}

const TermsModal = ({ open, onClose, contacts }: TermsModalProps) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative bg-card border border-border rounded-lg w-full max-w-lg max-h-[85vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
          <h2 className="font-heading text-lg font-bold text-primary tracking-widest uppercase">
            Términos y Condiciones
          </h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-silver transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-6 py-5 space-y-5 text-sm text-muted-foreground leading-relaxed">
          <p className="text-center font-heading text-silver font-semibold tracking-widest text-base">
            KALIX ESCORT
          </p>
          <p className="text-center text-xs">
            La contratación de nuestros servicios implica la aceptación total de los siguientes términos y condiciones.
          </p>

          <div className="border-t border-border/40 pt-4 space-y-1">
            <h3 className="text-silver font-semibold flex items-center gap-2">
              <img src={logo} alt="" className="h-5 w-auto opacity-80" />1. PERFIL DEL SERVICIO
            </h3>
            <p>Nuestros servicios están orientados a clientes ejecutivos, empresarios y turistas que buscan una experiencia discreta, exclusiva y de alto nivel.</p>
          </div>

          <div className="border-t border-border/40 pt-4 space-y-1">
            <h3 className="text-silver font-semibold flex items-center gap-2">
              <img src={logo} alt="" className="h-5 w-auto opacity-80" />2. TARIFAS
            </h3>
            <p>Las tarifas publicadas son fijas y no están sujetas a descuentos, negociaciones ni promociones no autorizadas.</p>
          </div>

          <div className="border-t border-border/40 pt-4 space-y-1">
            <h3 className="text-silver font-semibold flex items-center gap-2">
              <img src={logo} alt="" className="h-5 w-auto opacity-80" />3. ATENCIÓN A PAREJAS
            </h3>
            <p>La atención a parejas tendrá un recargo adicional sobre la tarifa base:</p>
            <ul className="list-none space-y-1 mt-1">
              <li>♦️ 50% adicional cuando ambos integrantes interactúen con la escort.</li>
              <li>♦️ 25% adicional cuando solo uno de los integrantes participe en la interacción.</li>
            </ul>
          </div>

          <div className="border-t border-border/40 pt-4 space-y-1">
            <h3 className="text-silver font-semibold flex items-center gap-2">
              <img src={logo} alt="" className="h-5 w-auto opacity-80" />4. ELEMENTOS NO INCLUIDOS
            </h3>
            <p>Las tarifas publicadas no incluyen:</p>
            <ul className="list-none space-y-1 mt-1">
              <li>♦️ Preservativos.</li>
              <li>♦️ Lubricantes.</li>
              <li>♦️ Gastos de transporte.</li>
              <li>♦️ Servicios adicionales no contemplados en la reserva inicial.</li>
            </ul>
          </div>

          <div className="border-t border-border/40 pt-4 space-y-1">
            <h3 className="text-silver font-semibold flex items-center gap-2">
              <img src={logo} alt="" className="h-5 w-auto opacity-80" />5. FORMA DE PAGO
            </h3>
            <p>El valor total del servicio deberá ser cancelado al inicio de la cita, antes de comenzar cualquier actividad.</p>
          </div>

          <div className="border-t border-border/40 pt-4 space-y-1">
            <h3 className="text-silver font-semibold flex items-center gap-2">
              <img src={logo} alt="" className="h-5 w-auto opacity-80" />BESOS Y CONTACTO AFECTIVO
            </h3>
            <p>La prestación del servicio no implica la obligación de realizar besos ni manifestaciones de afecto específicas.</p>
            <p className="mt-1">La escort se reserva el derecho de aceptar o rechazar cualquier interacción de carácter afectivo o personal, de acuerdo con su criterio, comodidad y bienestar, sin que ello genere modificaciones en la tarifa acordada ni derecho a reclamaciones por parte del cliente.</p>
          </div>

          <div className="border-t border-border/40 pt-4 space-y-1">
            <h3 className="text-silver font-semibold flex items-center gap-2">
              <img src={logo} alt="" className="h-5 w-auto opacity-80" />6. RESERVAS Y ANTICIPO
            </h3>
            <p>Para confirmar cualquier reserva, el cliente deberá realizar un pago anticipado correspondiente al treinta por ciento (30%) del valor total del servicio.</p>
            <p className="mt-1">Este anticipo tiene como finalidad garantizar la disponibilidad, desplazamiento y programación de la escort.</p>
            <p className="mt-1">La reserva solo se considerará confirmada una vez recibido y verificado el pago del anticipo. El saldo restante deberá ser cancelado al inicio del servicio.</p>
          </div>

          <div className="border-t border-border/40 pt-4 space-y-1">
            <h3 className="text-silver font-semibold flex items-center gap-2">
              <img src={logo} alt="" className="h-5 w-auto opacity-80" />7. PARA EVENTOS IMPORTANTES
            </h3>
            <p>Reservar la escort mínimo un día antes del evento deseado.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border shrink-0">
          {contacts.length === 1 ? (
            <a
              href={buildWhatsAppUrl(contacts[0].phone)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-md font-medium transition-all duration-300 hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]"
            >
              <MessageCircle size={18} /> Acepto — Ir a WhatsApp
            </a>
          ) : (
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground text-center pb-1">
                Acepto los términos. Comunicarme con:
              </p>
              {contacts.map((contact, i) => (
                <a
                  key={i}
                  href={buildWhatsAppUrl(contact.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="w-full flex items-center gap-3 bg-primary text-primary-foreground px-4 py-2.5 rounded-md font-medium transition-all duration-300 hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                >
                  <MessageCircle size={16} className="shrink-0" />
                  <div className="text-left min-w-0 flex-1">
                    <p className="text-sm font-medium leading-tight">{contact.name}</p>
                    {contact.role && (
                      <p className="text-xs opacity-75 leading-tight mt-0.5">{contact.role}</p>
                    )}
                  </div>
                  <span className="text-xs opacity-75 shrink-0">{contact.phone}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
