import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ansh Vishwakarma — Full-Stack Developer & Founder",
  description: "Portfolio of Ansh Vishwakarma: full-stack web development, responsive interfaces, booking flows, and data dashboards.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ansh-vishwakarma-portfolio-website.vercel.app"),
  openGraph: { title: "Ansh Vishwakarma — Full-Stack Developer & Founder", description: "Thoughtful web products, shipped from first sketch to production.", type: "website" },
}

export const viewport: Viewport = { themeColor: "#0c0c0c", colorScheme: "dark" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
