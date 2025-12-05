import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url = "" }) => {

    const siteTitle = "TA.GE S.A.S.";
    const siteUrl = "https://www.tagesas.it";
    const defaultImage = "/logo.png";


    const fullTitle = `${title} | ${siteTitle}`;
    const currentUrl = `${siteUrl}${url}`;

    return (
        <Helmet>
            {/* --- STANDARD SEO --- */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={currentUrl} />

            {/* --- FACEBOOK / WHATSAPP (Open Graph) --- */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:image" content={`${siteUrl}${defaultImage}`} />
            <meta property="og:site_name" content={siteTitle} />


            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}${defaultImage}`} />
        </Helmet>
    );
};

export default SEO;