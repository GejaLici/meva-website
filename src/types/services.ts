export interface Service {
  id: string;
  name: string;
  slug: string;
  categorySlug: string;
  description: string;
  image?: string;
  imageHint?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  services: Service[];
  image?: string;
  imageHint?: string;
}
