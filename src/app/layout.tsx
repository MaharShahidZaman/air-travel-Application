import type { Metadata } from "next";
import "./globals.css";
import "./whatsapp.css";
import "./navigation.css";
import "./copy-feedback.css";
import "./page-hero-spacing.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
export const metadata: Metadata = { title: { default: "Ghalib Air Travel | Concept Demo", template: "%s | Ghalib Air Travel" }, description: "Unofficial concept website for a travel agency in Dera Ghazi Khan.", robots: { index: false, follow: false }, openGraph: { title: "Ghalib Air Travel — Concept Demo", description: "A premium travel agency website concept." } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body suppressHydrationWarning><Header />{children}<Footer /></body></html>; }
