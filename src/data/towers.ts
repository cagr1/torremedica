const sharedAddress =
  "Circunvalacion Norte y Marcel Laniado, Machala, El Oro, Ecuador";
const sharedMapUrl =
  "https://maps.app.goo.gl/oc3wULDx7J1EY3TRA";
const sharedMapEmbedUrl =
  "https://www.google.com/maps?q=-3.264127,-79.9440455&z=17&output=embed";

export const towers = [
  {
    id: "torre-1",
    number: 1 as const,
    name: "Torre Medica La Carolina I",
    address: sharedAddress,
    floors: "Pisos 1 al 6",
    schedule: "Complejo medico con acceso 24 horas",
    phone: "+593 7 298 1574",
    mapUrl: sharedMapEmbedUrl,
    mapsUrl: sharedMapUrl,
    locationNote: "Aparece junto a la Torre II en una sola ficha de Google Maps.",
  },
  {
    id: "torre-2",
    number: 2 as const,
    name: "Torre Medica La Carolina II",
    address: sharedAddress,
    floors: "Pisos 1 al 5",
    schedule: "Complejo medico con acceso 24 horas",
    phone: "+593 7 298 1574",
    mapUrl: sharedMapEmbedUrl,
    mapsUrl: sharedMapUrl,
    locationNote: "Comparte la misma ubicacion publica del complejo en Google Maps.",
  },
];
