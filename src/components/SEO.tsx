import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
}

const SEO = ({ title, description, path, keywords }: SEOProps) => {
  const baseUrl = "https://posterscraft.com";
  const url = `${baseUrl}${path}`;
  const fullTitle = path === "/" ? title : `${title} | PostersCraft`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEO;
