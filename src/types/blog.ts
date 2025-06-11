
// More flexible child type for text content
export interface RichTextSpan {
  type: 'text';
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
  link?: string; // URL for links
}

export type ContentLeaf = RichTextSpan;

export interface ContentBlockBase {
  id: string; // Unique ID for each block for React keys
}

export interface HeadingBlock extends ContentBlockBase {
  type: 'heading';
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ContentLeaf[];
}

export interface ParagraphBlock extends ContentBlockBase {
  type: 'paragraph';
  children: ContentLeaf[];
}

export interface ImageBlock extends ContentBlockBase {
  type: 'image';
  src: string;
  alt: string;
  imageHint?: string;
  caption?: ContentLeaf[];
}

export interface ListBlock extends ContentBlockBase {
  type: 'list';
  ordered: boolean;
  items: ContentLeaf[][]; // Each item can be an array of RichTextSpans
}

export interface CodeBlock extends ContentBlockBase {
  type: 'code';
  language?: string;
  code: string;
}

export interface BlockquoteBlock extends ContentBlockBase {
  type: 'blockquote';
  children: ContentLeaf[];
}

export type ContentBlock = HeadingBlock | ParagraphBlock | ImageBlock | ListBlock | CodeBlock | BlockquoteBlock;

// Update BlogPost
export interface BlogPost {
  id: string; // Firestore document ID
  slug: string;
  title: string;
  date: string; // ISO string
  author?: string;
  excerpt: string;
  content: ContentBlock[]; // Changed from string
  imageUrl?: string; // Main feature image for the post
  imageHint?: string; // Hint for main feature image
  category?: string;
}
