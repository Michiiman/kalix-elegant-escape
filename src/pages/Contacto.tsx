import Layout from "@/components/Layout";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import logo from "@/img/Kalix_scort_logo-removebg-preview.png";

const Contacto = () => {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-silver text-center mb-4">
            <span className="text-primary">Contacto</span>
          </h1>
          <p className="text-center text-muted-foreground mb-10">
            ¿Tienes alguna consulta? Escríbenos y te responderemos con total discreción.
          </p>

          <div className="flex flex-col gap-4 items-center">
            <button
              onClick={() => setShowTerms(true)}
              className="w-full sm:w-auto px-10 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-md font-medium transition-all duration-300 hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]"
            >
              <MessageCircle size={18} /> Comunicarse por WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Modal Términos y Condiciones */}
      {showTerms && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setShowTerms(false); }}
        >
          <div className="relative bg-card border border-border rounded-lg w-full max-w-lg max-h-[85vh] flex flex-col shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
              <h2 className="font-heading text-lg font-bold text-primary tracking-widest uppercase">
                Términos y Condiciones
              </h2>
              <button
                onClick={() => setShowTerms(false)}
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
              <a
                href="https://wa.me/573155140200"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-md font-medium transition-all duration-300 hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]"
              >
                <MessageCircle size={18} /> Acepto — Ir a WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Contacto;
