import './globals.css'

export const metadata = {
  title: 'Azeem Ahmad | Portfolio',
  description: 'Full Stack Developer Portfolio',
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900">
        <main>{children}</main>
      </body>
    </html>
  );
}
