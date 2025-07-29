

export interface ServiceImage {
  url: string;
  hint: string;
}

export interface Service {
  id: string;
  slug: string;
  categorySlug?: string;
  image?: string;
  imageHint?: string;
  gallery?: ServiceImage[];
}

export interface ServiceWithContent extends Service {
  description: string;
}


export interface ServiceCategory {
  id: string;
  slug: string;
  services: Service[];
  image?: string;
  imageHint?: string;
  displayOnHome?: boolean;
  icon?: string;
}
