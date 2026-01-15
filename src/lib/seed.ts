
'use server';

import { addBlogPost } from './blog';

const exampleContentEn = [
    {"id":"h1-1","type":"heading","level":2,"children":[{"type":"text","text":"The Art and Science of a Perfect Smile"}]},
    {"id":"p1","type":"paragraph","children":[{"type":"text","text":"A radiant smile is more than just an aesthetic asset; it's a reflection of health, confidence, and well-being. At Meva Clinic, we combine artistic vision with advanced dental science to craft smiles that are not only beautiful but also perfectly functional. Understanding the components of a great smile is the first step on your journey."}]},
    {"id":"p2","type":"paragraph","children":[{"type":"text","text":"Key elements we focus on include tooth color, alignment, spacing, and how your smile complements your overall facial features. Whether it's through professional "},{"type":"text","text":"teeth whitening","link":"/services/aesthetic-dentistry/teeth-whitening","bold":true},{"type":"text","text":", meticulously crafted "},{"type":"text","text":"E-Max veneers","link":"/services/aesthetic-dentistry/emax-veneers","bold":true},{"type":"text","text":", or transformative "},{"type":"text","text":"orthodontic treatments","link":"/services/orthodontics","bold":true},{"type":"text","text":", our goal is to achieve harmony and natural beauty."}]},
    {"id":"h2-1","type":"heading","level":3,"children":[{"type":"text","text":"Beyond the Aesthetics: The Health Connection"}]},
    {"id":"p3","type":"paragraph","children":[{"type":"text","text":"A great smile is intrinsically linked to great oral health. Straight teeth are easier to clean, reducing the risk of decay and gum disease. A proper bite alignment prevents issues like excessive wear and jaw pain. Our comprehensive approach ensures that every aesthetic enhancement also supports your long-term dental health."}]},
    {"id":"cta-1","type":"cta","text":"Ready to discover your perfect smile?","buttonText":"Book a Consultation","buttonLink":"/contact"}
];

const exampleContentIt = [
    {"id":"h1-1","type":"heading","level":2,"children":[{"type":"text","text":"L'Arte e la Scienza di un Sorriso Perfetto"}]},
    {"id":"p1","type":"paragraph","children":[{"type":"text","text":"Un sorriso radioso è più di un semplice bene estetico; è un riflesso di salute, fiducia e benessere. Alla Clinica Meva, combiniamo la visione artistica con la scienza dentale avanzata per creare sorrisi che non sono solo belli ma anche perfettamente funzionali. Comprendere i componenti di un grande sorriso è il primo passo nel tuo viaggio."}]},
    {"id":"p2","type":"paragraph","children":[{"type":"text","text":"Gli elementi chiave su cui ci concentriamo includono il colore dei denti, l'allineamento, la spaziatura e come il tuo sorriso si abbina alle tue caratteristiche facciali generali. Che si tratti di uno "},{"type":"text","text":"sbiancamento dei denti","link":"/servizi/dentistici-estetici/sbiancamento-denti","bold":true},{"type":"text","text":" professionale, di "},{"type":"text","text":"faccette E-Max","link":"/servizi/dentistici-estetici/faccette-emax","bold":true},{"type":"text","text":" meticolosamente realizzate, o di trasformazioni con "},{"type":"text","text":"trattamenti ortodontici","link":"/servizi/ortodonzia","bold":true},{"type":"text","text":", il nostro obiettivo è raggiungere l'armonia e la bellezza naturale."}]},
    {"id":"h2-1","type":"heading","level":3,"children":[{"type":"text","text":"Oltre l'Estetica: la Connessione con la Salute"}]},
    {"id":"p3","type":"paragraph","children":[{"type":"text","text":"Un grande sorriso è intrinsecamente legato a una grande salute orale. I denti dritti sono più facili da pulire, riducendo il rischio di carie e malattie gengivali. Un corretto allineamento del morso previene problemi come l'usura eccessiva e il dolore alla mascella. Il nostro approccio completo assicura che ogni miglioramento estetico supporti anche la tua salute dentale a lungo termine."}]},
    {"id":"cta-1","type":"cta","text":"Pronto a scoprire il tuo sorriso perfetto?","buttonText":"Prenota una Consulenza","buttonLink":"/contatti"}
];


export async function seedExampleBlogPost() {
  // Set a flag to bypass unique constraint errors during seeding
  process.env.SEED_SCRIPT_ACTIVE = 'true';

  try {
    // English version
    await addBlogPost({
      slug: 'the-art-of-a-perfect-smile',
      language: 'en',
      title: 'The Art and Science of a Perfect Smile',
      excerpt: 'Discover the key elements that make a smile truly beautiful and healthy, from color and alignment to how it complements your facial features.',
      content: exampleContentEn,
      author: 'Dr. Anna Petrova',
      category: 'Cosmetic Dentistry',
      imageUrl: '/images/emax-after.png',
      imageHint: 'perfect white smile'
    });

    // Italian version
    await addBlogPost({
      slug: 'the-art-of-a-perfect-smile',
      language: 'it',
      title: 'L\'Arte e la Scienza di un Sorriso Perfetto',
      excerpt: 'Scopri gli elementi chiave che rendono un sorriso veramente bello e sano, dal colore e allineamento a come si abbina alle tue caratteristiche facciali.',
      content: exampleContentIt,
      author: 'Dr. Anna Petrova',
      category: 'Odontoiatria Estetica',
      imageUrl: '/images/emax-after.png',
      imageHint: 'perfect white smile'
    });

  } catch (error) {
    if (error instanceof Error && error.message.includes('already exists')) {
        // This is expected if seeding has run before, do nothing.
    } else {
        console.error('Error seeding blog post:', error);
    }
  } finally {
    // Unset the flag
    process.env.SEED_SCRIPT_ACTIVE = 'false';
  }
}
