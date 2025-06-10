
import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/types/blog';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays, UserCircle } from 'lucide-react';
import { formatDate } from '@/lib/utils'; // We'll create this utility

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      {post.imageUrl && (
        <Link href={`/blog/${post.slug}`} className="block relative w-full h-56 overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={post.imageHint || 'blog post image'}
            className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </Link>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary group-hover:text-accent transition-colors duration-300">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
        <div className="text-xs text-muted-foreground flex items-center space-x-4 mt-1">
          <div className="flex items-center">
            <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
            <span>{formatDate(post.date)}</span>
          </div>
          {post.author && (
            <div className="flex items-center">
              <UserCircle className="mr-1.5 h-3.5 w-3.5" />
              <span>{post.author}</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
          {post.excerpt}
        </CardDescription>
        <Button asChild variant="link" className="mt-auto p-0 self-start text-accent hover:text-accent/90 group-hover:text-primary transition-colors duration-300">
          <Link href={`/blog/${post.slug}`}>
            Read more <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
