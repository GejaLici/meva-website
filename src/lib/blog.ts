
import type { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'latest-advancements-in-aesthetic-treatments',
    title: 'Exploring the Latest Advancements in Aesthetic Treatments',
    date: '2024-07-15T10:00:00Z',
    author: 'Dr. Evelyn Reed',
    excerpt: 'Discover the cutting-edge technologies and techniques revolutionizing the world of aesthetic medicine, offering safer and more effective results.',
    content: `
      <p>The field of aesthetic medicine is constantly evolving, with new innovations emerging at a rapid pace. At NovaSculpt Clinic, we are committed to staying at the forefront of these advancements to provide our patients with the best possible care.</p>
      <p>Recent breakthroughs include more sophisticated laser technologies for skin rejuvenation, advanced filler formulations for natural-looking volume, and non-invasive body contouring methods that offer remarkable results with minimal downtime.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Non-Invasive Body Contouring</h3>
      <p>One of the most exciting areas is non-invasive body contouring. Technologies like cryolipolysis and radiofrequency treatments are helping patients achieve their desired body shape without surgery. These procedures are ideal for targeting stubborn fat pockets and improving skin laxity.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Advanced Dermal Fillers</h3>
      <p>Dermal fillers have also seen significant improvements. Newer products are designed to integrate more seamlessly with tissues, providing smoother, more natural-looking results and often lasting longer. The focus is on holistic facial harmonization rather than just treating individual lines.</p>
      <p>We invite you to schedule a consultation to learn more about how these latest advancements can help you achieve your aesthetic goals.</p>
    `,
    imageUrl: 'https://placehold.co/800x400.png',
    imageHint: 'aesthetic technology clinic',
    category: 'Aesthetic Medicine',
  },
  {
    id: 'post-2',
    slug: 'benefits-of-prp-therapy',
    title: 'The Transformative Benefits of PRP Therapy',
    date: '2024-06-28T14:30:00Z',
    author: 'Dr. Marcus Chen',
    excerpt: 'Platelet-Rich Plasma (PRP) therapy is a natural and effective treatment for skin rejuvenation and hair restoration. Learn how it works and what it can do for you.',
    content: `
      <p>Platelet-Rich Plasma (PRP) therapy has gained popularity as a versatile treatment in aesthetic medicine. It harnesses your body's own healing power to rejuvenate skin and stimulate hair growth.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">How PRP Works</h3>
      <p>PRP involves drawing a small amount of your blood, processing it to concentrate the platelets, and then injecting this platelet-rich plasma into the target area. Platelets are rich in growth factors that promote tissue repair, collagen production, and new cell growth.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">PRP for Skin Rejuvenation</h3>
      <p>When used on the face, PRP can improve skin texture and tone, reduce fine lines and wrinkles, and enhance overall radiance. It's often referred to as a "vampire facial" when combined with microneedling.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">PRP for Hair Restoration</h3>
      <p>For hair loss, PRP injections into the scalp can stimulate dormant hair follicles, promoting new hair growth and increasing hair thickness. It's a promising option for both men and women experiencing hair thinning.</p>
      <p>Consult with our specialists to see if PRP therapy is the right choice for your concerns.</p>
    `,
    imageUrl: 'https://placehold.co/800x400.png',
    imageHint: 'prp therapy procedure',
    category: 'Regenerative Treatments',
  },
  {
    id: 'post-3',
    slug: 'choosing-the-right-dental-veneer',
    title: 'A Guide to Choosing the Right Dental Veneers',
    date: '2024-05-10T09:00:00Z',
    author: 'NovaSculpt Dental Team',
    excerpt: 'Dental veneers can dramatically transform your smile. Understand the differences between composite and porcelain (E-Max) veneers to make an informed decision.',
    content: `
      <p>Dental veneers are an excellent solution for correcting a variety of cosmetic dental issues, such as chips, stains, gaps, or misalignments. Two popular types of veneers are composite and porcelain (often E-Max).</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Composite Veneers</h3>
      <p>Composite veneers are made from a tooth-colored resin material that is applied directly to the tooth surface and sculpted into shape. They are generally more affordable, require less tooth preparation, and the procedure can often be completed in a single visit. However, they may not be as durable or stain-resistant as porcelain veneers.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Porcelain (E-Max) Veneers</h3>
      <p>Porcelain veneers, particularly E-Max veneers, are custom-fabricated thin shells that are bonded to the front surface of your teeth. They offer superior aesthetics, mimicking the translucency and shine of natural teeth very closely. E-Max veneers are highly durable, stain-resistant, and can last for many years with proper care. This option typically requires more tooth preparation and multiple visits.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Making Your Choice</h3>
      <p>The best choice depends on your specific needs, budget, and aesthetic goals. A consultation with our dental experts will help you determine which type of veneer is most suitable for achieving your dream smile.</p>
    `,
    imageUrl: 'https://placehold.co/800x400.png',
    imageHint: 'dental veneers smile',
    category: 'Aesthetic Dentistry',
  },
];

export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
