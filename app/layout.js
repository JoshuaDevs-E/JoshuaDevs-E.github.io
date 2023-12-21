export const metadata = {
  title: 'Joshua Emil P. R.',
  description: '¡Hola! Soy un apasionado desarrollador web Junior. Me especializo en el desarrollo de aplicaciones web utilizando tecnologías como React, Next.js y Tailwind CSS.',
  image: 'https://i.postimg.cc/y8vDdh47/logo.png',
  url: 'https://joshuapena.me',
  type: 'website',
  siteName: 'Joshua Emil P. R.',
  twitterUsername: '@joshuapenar',
  kewords: 'portfolio, Joshua, joshua, Peña, peña, Emil, emil, Rosario, rosario, junior,Junior, web developer'

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.kewords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content={metadata.type} />
        <meta property="og:site_name" content={metadata.siteName} />
        <link rel="icon" href={metadata.image} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
      </head>
      <body>{children}</body>
    </html>
  )
}
