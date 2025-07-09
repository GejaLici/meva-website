
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import type { CtaBlock as CtaBlockType } from "@/types/blog";

export function CtaBlock({ block }: { block: CtaBlockType }) {
  return (
    <Card className="not-prose my-8 bg-accent/20 border-accent/50 shadow-lg">
      <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-lg font-semibold text-foreground text-center md:text-left">{block.text}</p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 flex-shrink-0 w-full md:w-auto">
          <Link href={block.buttonLink} target="_blank" rel="noopener noreferrer">{block.buttonText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
