import { site } from "@/config/site";
export function whatsappUrl(message: string) { return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`; }
export function openWhatsApp(message: string) { window.open(whatsappUrl(message), "_blank", "noopener,noreferrer"); }
