export const site = {
  name: "Ghalib Air Travel", shortName: "Ghalib", phone: "+92 333 7031303", whatsapp: "923027434561",
  address: "Alkarim Commercial Center, Manka Canal Road, Dera Ghazi Khan, Punjab, Pakistan",
  city: "Dera Ghazi Khan", country: "Pakistan",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ghalib%20Air%20Travel%20Dera%20Ghazi%20Khan&query_place_id=ChIJwbUyrFyxOjkRrBxBXAKwk8o",
  // Retained only for the non-authoritative visual map embed. Location CTAs use googleMapsUrl.
  mapsQuery: "Alkarim Commercial Center Manka Canal Road Dera Ghazi Khan Punjab Pakistan"
} as const;
export const nav = [{ href: "/", label: "Home" }, { href: "/about", label: "About Us" }, { href: "/flights", label: "Air Tickets" }, { href: "/umrah", label: "Umrah Packages" }, { href: "/visa", label: "Visa Services" }, { href: "/contact", label: "Contact" }];
