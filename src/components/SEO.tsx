import { Helmet } from "react-helmet-async";

export const SITE_NAME = "Kalix Scort";
export const SITE_URL = "https://kalixscort.com";
export const DEFAULT_DESCRIPTION =
  "Kalix Scort: compañía exclusiva con la máxima discreción y elegancia. Perfiles selectos, privacidad garantizada.";
export const DEFAULT_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5d32b709-6c20-4018-9d39-96d0a9197cc5/id-preview-24831095--e462e095-6dfc-4490-bc5a-332998231fa8.lovable.app-1780631358795.png";

interface SEOProps {
  title: string;
  description?: string;
  /** Ruta relativa, ej: "/catalogo" — se usa para canonical y og:url. */
  path?: string;
  image?: string;
  noIndex?: boolean;
  /** Uno o varios objetos Schema.org a inyectar como JSON-LD. */
  jsonLd?: object | object[];
}

const SEO = ({ title, description = DEFAULT_DESCRIPTION, path = "/", image = DEFAULT_IMAGE, noIndex, jsonLd }: SEOProps) => {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;
  const jsonLdList = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLdList.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
