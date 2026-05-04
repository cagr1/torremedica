export interface Tower {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  schedule: string;
}

export interface Doctor {
  id: string;
  slug: string;
  name: string;
  specialty: string;
  specialtySlug: string;
  tower: 1 | 2;
  phone: string;
  whatsapp: string;
  floor: string;
  office: string;
  hours: string;
  image: string;
  languages: string[];
}
