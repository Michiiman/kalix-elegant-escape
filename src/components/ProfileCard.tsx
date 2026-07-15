import { Link } from "react-router-dom";
import type { Profile } from "@/data/profiles";
import { MapPin } from "lucide-react";
import WhatsAppContactPicker from "@/components/WhatsAppContactPicker";

const ProfileCard = ({ profile }: { profile: Profile }) => (
  <div className="group bg-card rounded-lg border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]">
    <div className="aspect-[3/4] bg-secondary flex items-center justify-center overflow-hidden">
      <img
        src={profile.images[0].url}
        alt={profile.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-5 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-xl font-semibold text-silver">{profile.name}</h3>
        <span className="text-xs text-muted-foreground">{profile.age} años</span>
      </div>
      <div className="flex items-center gap-1 text-xs text-muted-foreground">
        <MapPin size={12} />
        {profile.city}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{profile.shortDesc}</p>
      <Link
        to={`/catalogo/${profile.id}`}
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
