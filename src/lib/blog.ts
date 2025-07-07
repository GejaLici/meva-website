
import { allPosts } from './blog/posts';
import type { BlogPost } from '@/types/blog';

/**
 * Retrieves all blog posts from the static file system.
 * @returns A promise that resolves to an array of all blog posts, sorted by date.
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const sortedPosts = [...allPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return sortedPosts;
}

/**
 * Retrieves a single blog post by its slug.
 * @param slug - The slug of the blog post to retrieve.
 * @returns A promise that resolves to the blog post, or undefined if not found.
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return allPosts.find(post => post.slug === slug);
}
