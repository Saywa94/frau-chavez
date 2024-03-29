import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kulturwelt",
  description: "Escuela de idiomas Kulturwelt Institut",
  viewport: "width=device-width, initial-scale=1",
  creator: "Saywa Chavez",
  category: "learning",
  keywords: ["Aprender", "cursos", "idiomas", "aleman", "frances"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
