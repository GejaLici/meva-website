
export interface Service {
  id: string;
  slug: string;
  categorySlug?: string; // Make optional as it's added dynamically
  image?: string;
  imageHint?: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  services: Service[];
  image?: string;
  imageHint?: string;
  // New properties for homepage display
  displayOnHome?: boolean;
  homeColSpan?: string;
  icon?: string;
}
