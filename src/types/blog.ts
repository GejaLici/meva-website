
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string; // ISO string for easy sorting/formatting
  author?: string;
  excerpt: string;
  content: string; // Can be simple text or markdown/HTML
  imageUrl?: string;
  imageHint?: string;
  category?: string;
}
