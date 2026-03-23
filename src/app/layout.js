import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <title>Gartenzwerg Klicker</title>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
