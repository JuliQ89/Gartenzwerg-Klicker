import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="de" className="h-full">
      <head>
        <title>Gartenzwerg Klicker</title>
      </head>
      <body className="h-full">{children}</body>
    </html>
  );
}
