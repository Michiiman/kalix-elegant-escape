import { Link } from "react-router-dom";
import type { Profile } from "@/data/profiles";
import WhatsAppContactPicker from "@/components/WhatsAppContactPicker";

const ProfileCard = ({ profile, priority = false }: { profile: Profile; priority?: boolean }) => (
  <div className="group bg-card rounded-lg border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]">
    <h3 className="font-heading text-2xl font-semibold text-center text-gold-gradient pt-5 px-5">{profile.name}</h3>
    <div className="aspect-[3/4] bg-secondary flex items-center justify-center overflow-hidden mt-3">
      <img
        src={profile.images[0].url}
        alt={`${profile.name}, acompañante en Bucaramanga`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-5 space-y-3">
      <p className="text-sm text-muted-foreground">
        <span className="text-silver font-medium">Edad:</span> {profile.age} años
      </p>
      {profile.pricing && profile.pricing.length > 0 && (
        <p className="text-sm text-muted-foreground">
          <span className="text-silver font-medium">Precio inicial:</span> {profile.pricing[0].price} + costo de taxis
        </p>
      )}
      <Link
        to={`/bucaramanga/catalogo/${profile.id}`}
        className="inline-block w-full text-center bg-primary text-primary-foreground text-sm font-medium py-2.5 rounded-md transition-all duration-300 hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]"
      >
        Ver Perfil
      </Link>
      {profile.whatsappContacts && profile.whatsappContacts.length > 0 && (
        <WhatsAppContactPicker contacts={profile.whatsappContacts} />
      )}
    </div>
  </div>
);

export default ProfileCard;

