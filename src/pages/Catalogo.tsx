import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import ProfileCard from "@/components/ProfileCard";
import { profiles } from "@/data/profiles";
import { Search } from "lucide-react";

const Catalogo = () => {
  const [search, setSearch] = useState("");
  const [ageFilter, setAgeFilter] = useState("");

  const ages = useMemo(
    () => [...new Set(profiles.map((p) => p.age))].sort((a, b) => a - b),
    []
  );

  const filtered = useMemo(() => {
    return profiles.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchAge = !ageFilter || p.age === Number(ageFilter);
      return matchSearch && matchAge;
    });
  }, [search, ageFilter]);

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-silver text-center mb-10">
            Nuestro <span className="text-primary">Catálogo</span>
          </h1>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-10 max-w-3xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <input
                type="text"
                placeholder="Buscar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <select
              value={ageFilter}
              onChange={(e) => setAgeFilter(e.target.value)}
              className="bg-card border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            >
              <option value="">Edad</option>
              {ages.map((age) => (
                <option key={age} value={age}>{age}</option>
              ))}
            </select>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <ProfileCard key={p.id} profile={p} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-20">No se encontraron perfiles con estos filtros.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Catalogo;

