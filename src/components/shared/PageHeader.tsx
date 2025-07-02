
interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={`py-8 md:py-12 bg-muted/50 ${className}`}>
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
          {title}
        </h1>
        {description && (
          <p className="mt-2 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
