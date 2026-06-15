import "./globals.css";
import cursor from "@/assets/images/cursor.png";

export default function RootLayout({ children }) {
  console.log(cursor);

  return (
    <html lang="de" className="h-full">
      <head>
        <title>Gartenzwerg Klicker</title>
      </head>
      <body className="h-screen bg-white">{children}</body>
    </html>
  );
}
