export interface Service {
  id: string;
  slug: string;
  categorySlug: string;
  image?: string;
  imageHint?: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  services: Service[];
  image?: string;
  imageHint?: string;
}

    