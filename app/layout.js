export const metadata = {
  description: '¡Hola! Soy un apasionado desarrollador web Junior. Me especializo en el desarrollo de aplicaciones web utilizando tecnologías como React, Next.js y Tailwind CSS.',
  image: 'https://i.postimg.cc/y8vDdh47/logo.png',
  type: 'website',
  siteName: 'Joshua Emil P. R.',
  keywords: 'portfolio, Joshua, joshua, Peña, peña, Emil, emil, Rosario, rosario, junior, Junior, web developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Joshua Peña - Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Español" />
        <meta name="author" content="Joshua Peña" />
        <meta name="revisit-after" content="1 day" />
        <meta name="copyright" content="Joshua Peña" />
        <meta name="application-name" content="Joshua Peña" />
        <meta property="og:title" content={metadata.title} />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://www.joshuapena.me" />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:type" content={metadata.type} />
        <meta property="og:site_name" content={metadata.siteName} />
        <link rel="icon" href={metadata.image} />
<script type="application/ld+json">
  {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Joshua Peña",
      "url": "https://www.joshuapena.me",
      "sameAs": [
        "https://github.com/JoshuaDevs-E",
        "https://www.instagram.com/joshua.epr/"
      ],
      "memberOf": {
        "@type": "WebSite",
        "name": "Joshua Peña - Portfolio",
        "url": "https://www.joshuapena.me",
        "image": "https://i.postimg.cc/y8vDdh47/logo.png"
      }
    }
  `}
</script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
