import { generatedProducts } from "./generatedProducts";

export type ProductCategory =
  | "curtains-window-solutions"
  | "furniture"
  | "carpets-flooring-decor"
  | "indoor-decor"
  | "lighting"
  | "interior-soft-furnishing"
  | "custom-interior-solutions";

export type ProductType = "curtains" | "blinds" | "motorized";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  category: ProductCategory;
  type?: ProductType;
  subcategory?: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  priceBanner: string;
  image: string;
  images: string[];
  longDescription: string[];
  features: string[];
  specs: ProductSpec[];
  sectionTitle: string;
  sectionParagraphs: string[];
  faqs: ProductFaq[];
}

export const productCategories: { key: ProductCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "curtains-window-solutions", label: "Curtains & Window Solutions" },
  { key: "furniture", label: "Furniture" },
  { key: "carpets-flooring-decor", label: "Carpets & Flooring Décor" },
  { key: "indoor-decor", label: "Indoor Décor" },
  { key: "lighting", label: "Lighting" },
  { key: "interior-soft-furnishing", label: "Interior Soft Furnishing" },
  { key: "custom-interior-solutions", label: "Custom Interior Solutions" },
];

export const productSubcategories: Record<
  ProductCategory,
  { key: string; label: string }[]
> = {
  "curtains-window-solutions": [
    { key: "curtains-and-drapes", label: "Curtains & Drapes" },
    { key: "sheer-curtains", label: "Sheer Curtains" },
    { key: "blackout-curtains", label: "Blackout Curtains" },
    { key: "motorized-curtains", label: "Motorized Curtains" },
    { key: "roller-blinds", label: "Roller Blinds" },
    { key: "roman-blinds", label: "Roman Blinds" },
    { key: "venetian-blinds", label: "Venetian Blinds" },
    { key: "zebra-blinds", label: "Zebra Blinds" },
    { key: "wooden-blinds", label: "Wooden Blinds" },
    { key: "outdoor-blinds", label: "Outdoor Blinds" },
    { key: "curtain-tracks-and-accessories", label: "Curtain Tracks & Accessories" },
  ],
  "furniture": [
    { key: "sofa-and-sofa-sets", label: "Sofa & Sofa Sets" },
    { key: "armchairs-and-lounge-chairs", label: "Armchairs & Lounge Chairs" },
    { key: "recliners", label: "Recliners" },
    { key: "dining-tables-and-chairs", label: "Dining Tables & Chairs" },
    { key: "coffee-and-side-tables", label: "Coffee & Side Tables" },
    { key: "console-tables", label: "Console Tables" },
    { key: "tv-units", label: "TV Units" },
    { key: "beds-and-bed-frames", label: "Beds & Bed Frames" },
    { key: "bedside-tables", label: "Bedside Tables" },
    { key: "wardrobes", label: "Wardrobes" },
    { key: "cabinets-and-storage-units", label: "Cabinets & Storage Units" },
    { key: "office-furniture", label: "Office Furniture" },
  ],
  "carpets-flooring-decor": [
    { key: "carpets", label: "Carpets" },
    { key: "area-rugs", label: "Area Rugs" },
    { key: "custom-carpets", label: "Custom Carpets" },
    { key: "carpet-tiles", label: "Carpet Tiles" },
    { key: "runners", label: "Runners" },
    { key: "entrance-mats", label: "Entrance Mats" },
  ],
  "indoor-decor": [
    { key: "wall-decor", label: "Wall Décor" },
    { key: "mirrors", label: "Mirrors" },
    { key: "decorative-panels", label: "Decorative Panels" },
    { key: "wallpapers", label: "Wallpapers" },
    { key: "art-and-paintings", label: "Art & Paintings" },
    { key: "decorative-accessories", label: "Decorative Accessories" },
    { key: "cushions-and-throws", label: "Cushions & Throws" },
    { key: "vases-and-decorative-items", label: "Vases & Decorative Items" },
    { key: "indoor-plants-and-planters", label: "Indoor Plants & Planters" },
  ],
  "lighting": [
    { key: "chandeliers", label: "Chandeliers" },
    { key: "pendant-lights", label: "Pendant Lights" },
    { key: "ceiling-lights", label: "Ceiling Lights" },
    { key: "wall-lights", label: "Wall Lights" },
    { key: "floor-lamps", label: "Floor Lamps" },
    { key: "table-lamps", label: "Table Lamps" },
    { key: "decorative-lighting", label: "Decorative Lighting" },
  ],
  "interior-soft-furnishing": [
    { key: "upholstery", label: "Upholstery" },
    { key: "cushion-covers", label: "Cushion Covers" },
    { key: "sofa-fabrics", label: "Sofa Fabrics" },
    { key: "bedding-and-bed-linen", label: "Bedding & Bed Linen" },
    { key: "throws", label: "Throws" },
    { key: "table-linen", label: "Table Linen" },
  ],
  "custom-interior-solutions": [
    { key: "custom-furniture", label: "Custom Furniture" },
    { key: "custom-curtains-and-blinds", label: "Custom Curtains & Blinds" },
    { key: "custom-sofa", label: "Custom Sofa" },
    { key: "custom-carpets-and-rugs", label: "Custom Carpets & Rugs" },
    { key: "full-indoor-interior-design", label: "Full Indoor Interior Design" },
    { key: "residential-interior", label: "Residential Interior" },
    { key: "hotel-and-hospitality-interior", label: "Hotel & Hospitality Interior" },
    { key: "office-and-commercial-interior", label: "Office & Commercial Interior" },
  ],
};

const baseProducts: Product[] = [
  {
    slug: "sheer-blackout",
    category: "curtains-window-solutions",
    type: "curtains",
    subcategory: "blackout-curtains",
    badge: "CURTAINS & DRAPES",
    title: "Sheer & Blackout Curtains",
    tagline: "the Day & Night Set",
    description:
      "The complete window: airy sheers for daytime, full blackout for night - two layers on one neat track.",
    priceBanner: "Best price in UAE - free quote at your home",
    image: "/products/sheer-blackout-curtains.png",
    images: [
      "/products/sheer-blackout-curtains.png",
      "/products/Office-Curtain.png",
      "/products/Sheer-Curtains.png",
    ],
    longDescription: [
      "Why choose between light and privacy? The day-and-night combination layers a soft sheer behind a full blackout curtain on a double track, so your window can do everything: bright and private at noon, completely dark at midnight.",
      "It's our most-ordered configuration for UAE bedrooms and living rooms - and because both layers are made to measure together, they move smoothly and stack neatly without tangling.",
    ],
    features: [
      "Two layers, one clean double-track system",
      "Total blackout when you need it",
      "Each layer operates independently",
      "Daytime privacy with full daylight",
      "Blocks heat and protects furniture from sun fading",
      "Endless fabric and colour pairings",
    ],
    specs: [
      { label: "Best for", value: "Bedrooms, living rooms, hotel-style master suites" },
      { label: "Light control", value: "From soft filtered light to 100% blackout" },
      { label: "System", value: "Double track or double rod, wall or ceiling fixed" },
      { label: "Fabrics", value: "Any sheer from our collection + any blackout fabric" },
      { label: "Heading styles", value: "Pinch pleat, pencil pleat or wave on both layers" },
      { label: "Motorization", value: "Either or both layers can be motorized" },
      { label: "Warranty", value: "12 months on stitching, tracks and installation" },
    ],
    sectionTitle: "One window, two moods",
    sectionParagraphs: [
      "The double-layer setup is the standard in good hotels for a reason: it matches how rooms are actually used. Through the day you want light without feeling watched - that's the sheer. In the evening and for sleep you want the world switched off - that's the blackout. With both on independent tracks you tune the room hour by hour.",
      "The blackout layer earns its keep in the UAE beyond sleep: closed over sun-facing glass at peak hours, it blocks solar heat before it builds up in the room and protects sofas, rugs and wooden floors from UV fading. True blackout comes from the fabric's coated construction, not its colour - cream, beige and even white-faced blackouts darken a room completely.",
      "Visually, layering is what gives windows that finished, designer depth - the sheer glows while the blackout frames it in colour. We'll help you pair tones during the home visit: contrast pairings for drama, tone-on-tone for calm.",
    ],
    faqs: [
      {
        question: "Do I need a special track for two layers?",
        answer:
          "Yes - we fit a double track (or a double rod) so the sheer and blackout each glide independently. It's included in the installation and adds only a few centimetres of ceiling or wall clearance.",
      },
      {
        question: "Can I have the blackout layer in a light colour?",
        answer:
          "Yes. True blackout comes from a coated or triple-woven backing, not a dark colour, so you can have a white, cream or pastel blackout curtain that still blocks light completely.",
      },
      {
        question: "What stops light leaking around the edges?",
        answer:
          "We fit the track a little wider and higher than the window frame, and can add side channels or a pelmet if you want a completely sealed, cinema-dark room.",
      },
      {
        question: "Is a day & night set much more expensive than a single curtain?",
        answer:
          "It costs more than one layer alone since you're paying for two curtains and a double track, but it replaces buying separate sheers and blackouts later - we'll give you an exact, itemised quote at the home visit.",
      },
    ],
  },
  {
    slug: "sheer-curtains",
    category: "curtains-window-solutions",
    type: "curtains",
    subcategory: "sheer-curtains",
    badge: "CURTAINS & DRAPES",
    title: "Sheer Curtains",
    tagline: "Soft Light, Full Privacy",
    description:
      "Soft, light-filtering panels that keep your view and your privacy - the UAE living-room essential.",
    priceBanner: "Free measurement & fabric swatches at your door",
    image: "/products/curtains.png",
    images: ["/products/curtains.png", "/products/t13.png", "/products/t15.png"],
    longDescription: [
      "Sheer curtains are the fabric equivalent of gauze: light passes through and softens, your outside view stays intact, and anyone looking in from outside sees only a bright, private glow.",
      "In the UAE's high-glare climate, a good sheer does real work - cutting the sharp edge off direct sun and reducing glare on screens and glossy floors, without switching the room into shadow.",
    ],
    features: [
      "Filters harsh daylight without darkening the room",
      "Keeps your view out while blocking the view in",
      "Lightweight fabrics that move beautifully in AC airflow",
      "Machine washable options for easy upkeep",
      "Pairs cleanly with a blackout layer later",
      "Wide range of weaves, from crisp voile to soft linen-look",
    ],
    specs: [
      { label: "Best for", value: "Living rooms, balconies, floor-to-ceiling glass" },
      { label: "Light control", value: "Filtered daylight, no full blackout" },
      { label: "System", value: "Single track or rod, wall or ceiling fixed" },
      { label: "Fabrics", value: "Voile, linen-look sheer, embroidered sheer" },
      { label: "Heading styles", value: "Wave, eyelet or pencil pleat" },
      { label: "Warranty", value: "12 months on stitching, tracks and installation" },
    ],
    sectionTitle: "Why sheers work so well in the UAE",
    sectionParagraphs: [
      "Big glass and bright sun are a UAE default, and a plain glass window either blinds you with glare or forces the blinds shut all day. A sheer curtain solves both: it breaks up direct light into a soft wash and keeps the room feeling open.",
      "They're also the quiet workhorse behind a lot of finished-looking interiors - hung floor to ceiling and slightly wider than the window, sheers make a room look taller and the window look bigger, even before you add a second layer.",
    ],
    faqs: [
      {
        question: "Will sheer curtains keep the sun's heat out?",
        answer:
          "They cut glare and diffuse direct light, but for real heat blocking you'll want a lined or blackout layer behind them - we can fit both together.",
      },
      {
        question: "Can sheers be washed at home?",
        answer:
          "Most of our sheer fabrics are machine washable on a gentle cycle; we'll tell you the exact care instructions for the fabric you choose.",
      },
      {
        question: "Do sheers need a wider track than the window?",
        answer:
          "Yes, we extend the track 15-20cm past each side of the frame so the curtain fully covers the glass when closed, without cutting off light when open.",
      },
      {
        question: "Can I add a blackout layer later?",
        answer:
          "Yes - if we fit a double track from the start, adding a blackout layer later is a simple add-on, no need to replace the sheers.",
      },
    ],
  },
  {
    slug: "wave-curtains",
    category: "curtains-window-solutions",
    type: "curtains",
    subcategory: "curtains-and-drapes",
    badge: "CURTAINS & DRAPES",
    title: "Wave Curtains",
    tagline: "The Magazine Fold",
    description:
      "The heading style from the design magazines - fabric that falls in smooth, even S-folds, in sheer, blackout or both.",
    priceBanner: "Free home visit - see the wave fold before you order",
    image: "/products/wave-curtains.png",
    images: [
      "/products/wave-curtains.png",
      "/products/t14.png",
      "/products/Hotel-Curtains-Near-me.png",
    ],
    longDescription: [
      "Wave curtains use a special tape and glider system so the fabric falls in continuous, even S-shaped folds - no pinches, no hooks visible, just one smooth wave from ceiling to floor.",
      "It's the heading style you see in high-end hotels and showhomes because it reads as effortless and modern, and it works equally well in sheer, blackout, or a day-and-night pair.",
    ],
    features: [
      "Continuous S-fold with no visible hooks or pins",
      "Glides smoothly, even on wide or curved tracks",
      "Works with sheer, blackout or a combined set",
      "Consistent, tailored look across large windows",
      "Compatible with motorized tracks",
      "Ceiling or wall-mounted track options",
    ],
    specs: [
      { label: "Best for", value: "Modern living rooms, villas, large glass walls" },
      { label: "Light control", value: "Depends on fabric - sheer to full blackout" },
      { label: "System", value: "Dedicated wave track (ceiling or wall mounted)" },
      { label: "Fabrics", value: "Any sheer or blackout fabric in our range" },
      { label: "Fold spacing", value: "Tailored to your track width for even waves" },
      { label: "Motorization", value: "Fully compatible" },
      { label: "Warranty", value: "12 months on stitching, tracks and installation" },
    ],
    sectionTitle: "Why the wave fold looks so clean",
    sectionParagraphs: [
      "Traditional pleats bunch fabric into fixed pinch points, which can look slightly stiff on very wide windows. Wave heading spaces special gliders evenly along the track, so the fabric falls into consistent, soft curves no matter how wide the run is.",
      "Because the fold spacing is fixed by the track rather than the fabric, wave curtains also stack much flatter when opened - useful if you have a narrow gap beside the window and still want the curtain to disappear neatly.",
    ],
    faqs: [
      {
        question: "Does the wave fold work on curved tracks?",
        answer:
          "Yes - wave tracks bend to follow bay windows and curved walls while keeping the fold even, which is difficult with standard pleat headings.",
      },
      {
        question: "How much fabric does a wave heading use?",
        answer:
          "Slightly more than a flat panel but usually less than a full pinch pleat, since the fold is shaped by the track rather than stitched fullness.",
      },
      {
        question: "Can wave curtains be motorized?",
        answer:
          "Yes - wave tracks are one of the most common choices for motorization since the gliders run very smoothly.",
      },
      {
        question: "Is the wave heading sewn in or clipped on?",
        answer:
          "We sew a special wave tape into the top of the curtain, then clip it directly onto the track gliders - it's a permanent, tailored finish.",
      },
    ],
  },
  {
    slug: "pinch-pleat-curtains",
    category: "curtains-window-solutions",
    type: "curtains",
    subcategory: "curtains-and-drapes",
    badge: "CURTAINS & DRAPES",
    title: "Pinch Pleat Curtains",
    tagline: "Classic Tailored Folds",
    description:
      "Classic and elegant design featuring tailored folds at the top for a traditional luxurious look.",
    priceBanner: "Free swatches at your home - no advance payment",
    image: "/products/sheer-curtains2.png",
    images: [
      "/products/sheer-curtains2.png",
      "/products/Sheer-Gold-Fabric.png",
      "/products/Organza-Malax-Sheer.png",
    ],
    longDescription: [
      "Pinch pleat curtains gather the fabric into neat, stitched clusters of two or three folds at the header, giving a structured, tailored look that has stayed a favourite for formal living and dining rooms.",
      "Because each pleat is hand-finished and evenly spaced, the fabric hangs with a fuller, more sculptural drape than a flat panel - especially in heavier fabrics like velvet or textured linen.",
    ],
    features: [
      "Structured, tailored fold at every pleat",
      "Fuller drape than flat-panel headings",
      "Suits heavier and textured fabrics beautifully",
      "Traditional look for formal rooms and majlis",
      "Hooks or rings for easy opening and closing",
      "Custom pleat spacing to match your window width",
    ],
    specs: [
      { label: "Best for", value: "Majlis, dining rooms, formal living areas" },
      { label: "Light control", value: "Depends on fabric - sheer to full blackout" },
      { label: "System", value: "Curtain rod or track with hooks or rings" },
      { label: "Fabrics", value: "Velvet, heavy linen, textured weaves, sheer" },
      { label: "Pleat style", value: "Double or triple pinch pleat" },
      { label: "Warranty", value: "12 months on stitching, tracks and installation" },
    ],
    sectionTitle: "A tailored look that suits heavier fabrics",
    sectionParagraphs: [
      "Pinch pleats are stitched by hand at fixed intervals, so the fold holds its shape whether the curtain is open, closed, or somewhere in between. That structure is what lets heavier fabrics - velvet, brocade, thick linen - hang with real weight instead of looking flat.",
      "It's also a forgiving style for traditional and majlis-style interiors, where a curtain often stays mostly closed for privacy and shade: the pleats keep their sculptural shape even under constant use.",
    ],
    faqs: [
      {
        question: "How many folds are in a pinch pleat?",
        answer:
          "We typically use double or triple pinch pleats, spaced evenly across the width - we'll show you both in fabric samples during the home visit.",
      },
      {
        question: "Do pinch pleat curtains work with heavy fabrics?",
        answer:
          "Yes - the stitched pleats are ideal for velvet and other heavy fabrics that would otherwise sag or lose shape on a simple rod pocket heading.",
      },
      {
        question: "Can pinch pleats be hung on a track instead of a rod?",
        answer:
          "Yes - we can fit hooks that clip directly onto a ceiling or wall track if you prefer a track over a visible rod.",
      },
      {
        question: "Is this style suitable for a majlis?",
        answer:
          "Very much so - the tailored, formal look and durable structure make pinch pleat one of our most requested styles for majlis and formal sitting rooms.",
      },
    ],
  },
  {
    slug: "eyelet-curtains",
    category: "curtains-window-solutions",
    type: "curtains",
    subcategory: "curtains-and-drapes",
    badge: "CURTAINS & DRAPES",
    title: "Eyelet Ring Curtains",
    tagline: "Modern Metal-Ring Glide",
    description:
      "Modern metal rings built into the fabric header for smooth sliding and soft, uniform folds.",
    priceBanner: "Free home visit - measured and quoted on the spot",
    image: "/products/Linen-Organza-Queer.png",
    images: [
      "/products/Linen-Organza-Queer.png",
      "/products/Organza-Queer.png",
      "/products/Organza-Queer-Linen.png",
    ],
    longDescription: [
      "Eyelet curtains have metal rings punched directly into the top hem, so the rod passes straight through the fabric - no hooks, no separate rings, no visible tape.",
      "The result is a relaxed, evenly spaced wave that slides open and closed with almost no effort, which is why it's become one of the most popular modern headings for bedrooms and casual living spaces.",
    ],
    features: [
      "Rings built directly into the fabric header",
      "Glides open and closed with minimal effort",
      "Relaxed, evenly spaced folds",
      "No separate hooks or rings to lose",
      "Clean, minimal look on a simple rod",
      "Suits both sheer and blackout fabrics",
    ],
    specs: [
      { label: "Best for", value: "Bedrooms, casual living rooms, apartments" },
      { label: "Light control", value: "Depends on fabric - sheer to full blackout" },
      { label: "System", value: "Curtain rod (rings integrated into fabric)" },
      { label: "Fabrics", value: "Any sheer or blackout fabric in our range" },
      { label: "Ring finish", value: "Brushed silver, matte black or antique brass" },
      { label: "Warranty", value: "12 months on stitching, tracks and installation" },
    ],
    sectionTitle: "Easy to live with, easy to move",
    sectionParagraphs: [
      "Because the rings are reinforced into the fabric itself, there's nothing extra to install or maintain - just slide the rod through and hang. It's one of the fastest headings to open and close by hand, which matters if you're adjusting curtains daily for light or privacy.",
      "The exposed rod and ring detail also reads as more casual and contemporary than a hidden track, so it suits apartments and bedrooms that want a relaxed, modern finish rather than a formal drape.",
    ],
    faqs: [
      {
        question: "What finishes are the rings available in?",
        answer:
          "We offer brushed silver, matte black and antique brass rings and rods, so you can match your existing hardware or fixtures.",
      },
      {
        question: "Do the rings scratch or damage the rod?",
        answer:
          "No - the rings are sized to move freely on the rod, and we recommend a smooth rod finish to keep the glide quiet and effortless.",
      },
      {
        question: "Can eyelet curtains be blackout?",
        answer:
          "Yes - any of our blackout fabrics can be finished with an eyelet header, so you get the easy glide with full darkness.",
      },
      {
        question: "Is eyelet suitable for wide windows?",
        answer:
          "Yes, though for very wide runs we sometimes recommend a wave or pinch pleat track instead, since a heavy rod can bow under a lot of fabric - we'll advise at the home visit.",
      },
    ],
  },
  {
    slug: "motorized-drapes",
    category: "curtains-window-solutions",
    type: "motorized",
    subcategory: "motorized-curtains",
    badge: "MOTORIZED",
    title: "Motorized Drapes",
    tagline: "Open And Close On Command",
    description:
      "Smart automated curtain tracks controllable via remote, smartphone app, or home automation systems.",
    priceBanner: "Free demo at your home - see it in action",
    image: "/products/Pale-Gold-Silk-Window-Curtain.png",
    images: [
      "/products/Pale-Gold-Silk-Window-Curtain.png",
      "/products/Pale-Gold-Silk-Window-Curtains.png",
      "/products/Pale-Gold-Silk-Window-Curtain-FAbric.png",
    ],
    longDescription: [
      "Motorized drapes replace the pull cord with a quiet electric track: open them from a remote, an app on your phone, a voice assistant, or on a schedule that matches sunrise and sunset.",
      "The mechanism fits inside the track itself, so from the room it still looks like an ordinary curtain - just one that opens itself at 6am and closes again the moment the sun gets too strong.",
    ],
    features: [
      "Remote, app or voice control",
      "Schedule opening and closing automatically",
      "Works with existing smart home systems",
      "Quiet motor built into the track",
      "No visible wiring once installed",
      "Fits sheer, blackout or double-layer setups",
    ],
    specs: [
      { label: "Best for", value: "Bedrooms, living rooms, hard-to-reach windows" },
      { label: "Control", value: "Remote, smartphone app, voice assistant, schedule" },
      { label: "System", value: "Motorized track, wall or ceiling mounted" },
      { label: "Power", value: "Rechargeable battery or hardwired options" },
      { label: "Fabrics", value: "Any sheer or blackout fabric in our range" },
      { label: "Warranty", value: "12 months on the motor, track and installation" },
    ],
    sectionTitle: "Convenience that pays for itself",
    sectionParagraphs: [
      "Beyond the obvious comfort - not getting out of bed to close the blackout curtain - motorized tracks earn their keep on tall or hard-to-reach windows, double-height living rooms, and any curtain wide enough that pulling it by hand puts strain on the fabric and track over time.",
      "Scheduling also has a real energy benefit in the UAE: closing blackout curtains automatically before the sun hits a west-facing wall keeps the room cooler through the afternoon, taking some load off the air conditioning.",
      "We size the motor to the width and weight of your specific curtain, so it opens and closes smoothly for years rather than straining on day one.",
    ],
    faqs: [
      {
        question: "Does the motor need a wired power connection?",
        answer:
          "Most of our motorized tracks run on a rechargeable battery pack that lasts months per charge; a hardwired option is available if you prefer never to charge it.",
      },
      {
        question: "Can I still open the curtain by hand?",
        answer:
          "Yes - our motorized tracks allow gentle manual override in case of a power or connectivity issue.",
      },
      {
        question: "Will it work with my existing smart home app?",
        answer:
          "Our motorized tracks support the major smart home ecosystems - tell us what you use during the home visit and we'll confirm compatibility.",
      },
      {
        question: "Is installation different from a normal curtain?",
        answer:
          "The track needs a nearby power source or charging access, so our team checks this during the free home visit and plans the cleanest cable route before installing.",
      },
    ],
  },
  {
    slug: "roller-blinds",
    category: "curtains-window-solutions",
    type: "blinds",
    subcategory: "roller-blinds",
    badge: "BLINDS & SHADES",
    title: "Roller Blinds",
    tagline: "Sleek, Minimal Light Control",
    description:
      "Sleek, minimal light control for modern apartments and offices, in sunscreen and blackout fabrics.",
    priceBanner: "Free measuring - fitted across Dubai, Sharjah & Abu Dhabi",
    image: "/products/White-Door-Curtain.png",
    images: ["/products/White-Door-Curtain.png", "/images/curtain-2.png", "/images/curtain-3.png"],
    longDescription: [
      "Roller blinds roll a single flat sheet of fabric up into a slim headrail, giving the cleanest, most minimal profile of any window covering - ideal where you want the fabric to disappear completely when open.",
      "Choose a sunscreen weave to filter glare while keeping your view, or a blackout roller for total darkness in bedrooms and media rooms - both roll up into the same discreet headrail.",
    ],
    features: [
      "Slim, minimal headrail that disappears when open",
      "Sunscreen or full blackout fabric options",
      "Chain, spring or motorized operation",
      "Ideal for offices, apartments and home offices",
      "Easy to wipe clean",
      "Wide range of colours and weave densities",
    ],
    specs: [
      { label: "Best for", value: "Offices, apartments, kitchens, home offices" },
      { label: "Light control", value: "Sunscreen filter or full blackout" },
      { label: "System", value: "Chain, spring-loaded or motorized roller" },
      { label: "Fabrics", value: "Polyester sunscreen, blackout-coated fabric" },
      { label: "Mount", value: "Inside or outside window recess" },
      { label: "Warranty", value: "12 months on mechanism and installation" },
    ],
    sectionTitle: "The cleanest line on any window",
    sectionParagraphs: [
      "A roller blind's whole job is to disappear - the fabric sits in one flat sheet against the glass and rolls into a headrail barely a few centimetres deep, so there's no bunched fabric taking up space at the sides of the window.",
      "Sunscreen fabrics are the quiet favourite for UAE offices and home workspaces: they cut glare on screens and reduce solar heat while keeping the outside view, so the room stays bright but comfortable.",
    ],
    faqs: [
      {
        question: "What's the difference between sunscreen and blackout roller fabric?",
        answer:
          "Sunscreen fabric filters light and reduces glare while keeping some visibility through the weave; blackout fabric is fully coated to block all light.",
      },
      {
        question: "Can roller blinds be motorized?",
        answer:
          "Yes - we offer motorized roller mechanisms controlled by remote or app, useful for tall or hard-to-reach windows.",
      },
      {
        question: "Inside or outside mount - which is better?",
        answer:
          "Inside mount sits neatly within the window recess for a built-in look; outside mount covers the full frame and blocks more light at the edges - we'll recommend based on your window during the visit.",
      },
      {
        question: "Are roller blinds easy to clean?",
        answer: "Yes - most of our roller fabrics can simply be wiped down with a damp cloth.",
      },
    ],
  },
  {
    slug: "zebra-blinds",
    category: "curtains-window-solutions",
    type: "blinds",
    subcategory: "zebra-blinds",
    badge: "BLINDS & SHADES",
    title: "Zebra Blinds",
    tagline: "Adjustable Stripe, Any Light",
    description:
      "Alternating sheer and solid fabric strips giving you versatile privacy and stylish light filtering.",
    priceBanner: "Free home visit - dial in your ideal light level",
    image: "/products/zebra-blinds-dubai.png",
    images: ["/products/zebra-blinds-dubai.png", "/images/curtain-1.png", "/images/curtain-3.png"],
    longDescription: [
      "Zebra blinds alternate solid and sheer fabric strips on a double layer - slide one layer past the other and you shift smoothly from soft filtered light, to a striped half-open look, to full privacy.",
      "It's the most adjustable blind we install: instead of just up or down, you're dialling the exact amount of light and privacy a room needs, hour to hour.",
    ],
    features: [
      "Solid and sheer strips on one double layer",
      "Smooth light adjustment from open to blackout",
      "Modern striped look when partially closed",
      "Chain or motorized operation",
      "Works well in bedrooms, kitchens and offices",
      "Easy-clean fabric options",
    ],
    specs: [
      { label: "Best for", value: "Bedrooms, kitchens, home offices" },
      { label: "Light control", value: "Fully adjustable, sheer to blackout" },
      { label: "System", value: "Chain-operated or motorized dual roller" },
      { label: "Fabrics", value: "Alternating sheer/solid polyester weaves" },
      { label: "Mount", value: "Inside or outside window recess" },
      { label: "Warranty", value: "12 months on mechanism and installation" },
    ],
    sectionTitle: "One blind, several light settings",
    sectionParagraphs: [
      "Most window coverings give you two states: open or closed. Zebra blinds give you a sliding scale in between - align the sheer strips for a soft, filtered glow, or shift to fully solid for complete privacy and blackout, with every setting in between just a slide away.",
      "That flexibility makes them a practical choice for rooms used differently through the day - a kitchen that wants daylight in the morning and privacy in the evening, or a bedroom that needs to go from bright to blackout in seconds.",
    ],
    faqs: [
      {
        question: "How do I adjust the light level?",
        answer:
          "Pull the chain (or use the remote on a motorized version) to slide the sheer and solid strips into alignment - anywhere from fully open to fully closed.",
      },
      {
        question: "Can zebra blinds achieve full blackout?",
        answer:
          "Yes - when the solid strips are fully aligned, most of our zebra fabrics block light almost completely; we offer a dedicated blackout-backed option for total darkness.",
      },
      {
        question: "Are zebra blinds hard to clean?",
        answer:
          "No - the fabric can be wiped down or lightly vacuumed; it doesn't require special cleaning.",
      },
      {
        question: "Can this be motorized?",
        answer:
          "Yes - we offer a motorized dual roller mechanism for zebra blinds, controlled by remote or app.",
      },
    ],
  },
  {
    slug: "wooden-blinds",
    category: "curtains-window-solutions",
    type: "blinds",
    subcategory: "wooden-blinds",
    badge: "BLINDS & SHADES",
    title: "Wooden Blinds",
    tagline: "Natural Warmth, Real Timber",
    description:
      "Natural warmth and sophisticated texture crafted from premium wood for timeless interior elegance.",
    priceBanner: "Free swatches - see real timber tones at home",
    image: "/products/Kitchen-Curtains.png",
    images: [
      "/products/Kitchen-Curtains.png",
      "/products/Belroses-Embroidered-Linen-Kitchen-Curtains.png",
      "/images/curtain-2.png",
    ],
    longDescription: [
      "Wooden blinds bring genuine timber slats to the window - warm, tactile, and completely different in character from any fabric or synthetic covering. Tilt the slats to control light and airflow while keeping full privacy.",
      "They suit studies, majlis rooms and villas particularly well, where a natural material adds texture against stone, wood flooring or heavier furniture.",
    ],
    features: [
      "Genuine timber slats, not printed vinyl",
      "Tilt control for light, privacy and airflow",
      "Warm, natural texture and tone",
      "Durable and suited to UAE indoor climates",
      "Wide range of stains and finishes",
      "Coordinating tape or cord options",
    ],
    specs: [
      { label: "Best for", value: "Studies, majlis, villas, home offices" },
      { label: "Light control", value: "Tilt slats for adjustable light and privacy" },
      { label: "System", value: "Corded or cordless tilt mechanism" },
      { label: "Material", value: "Premium timber, range of stains and finishes" },
      { label: "Slat width", value: "Standard 50mm slats (other widths on request)" },
      { label: "Warranty", value: "12 months on mechanism and installation" },
    ],
    sectionTitle: "A material, not just a colour",
    sectionParagraphs: [
      "Fabric and vinyl coverings can imitate a lot of looks, but timber has a texture and depth that's genuinely different - grain, warmth, and a weight to the slats that changes how a room feels, not just how it looks.",
      "Tilting the slats gives you fine control over both light and airflow without fully opening or closing the blind, which is useful in rooms that get strong midday sun but still need ventilation.",
    ],
    faqs: [
      {
        question: "Are these real wood or a wood-look material?",
        answer:
          "Genuine timber slats - we can also show you a faux-wood option if you prefer a more moisture-resistant alternative for kitchens or bathrooms.",
      },
      {
        question: "Do wooden blinds need special maintenance?",
        answer:
          "Just occasional dusting or a dry wipe; we'll advise on the specific finish's care during the home visit.",
      },
      {
        question: "Can I get cordless wooden blinds for child safety?",
        answer:
          "Yes - we offer cordless tilt wands and lift mechanisms as a safer alternative to traditional cords.",
      },
      {
        question: "What slat width do you offer?",
        answer:
          "Our standard is 50mm slats, which suits most window sizes; other widths are available on request.",
      },
    ],
  },
  {
    slug: "roman-blinds",
    category: "curtains-window-solutions",
    type: "blinds",
    subcategory: "roman-blinds",
    badge: "BLINDS & SHADES",
    title: "Roman Blinds",
    tagline: "Fabric Folds, Tidy Stack",
    description:
      "The warmth of curtains, the tidiness of blinds - real fabric folds that stack into a soft pelmet of colour.",
    priceBanner: "Free home visit - real fabric, tailored to your window",
    image: "/products/roman-blinds-dubai.png",
    images: ["/products/roman-blinds-dubai.png", "/images/curtain-1.png", "/images/curtain-3.png"],
    longDescription: [
      "Roman blinds are made from a single flat panel of real fabric that gathers into neat horizontal folds as it's raised, sitting as a soft pelmet of colour and texture at the top of the window when fully open.",
      "They bring the warmth and colour choice of a curtain fabric into a tidier, more structured shape - a favourite in kitchens, studies and smaller windows where a full curtain would feel heavy.",
    ],
    features: [
      "Real fabric, not a synthetic roller sheet",
      "Neat horizontal folds when raised",
      "Cordless or corded lift options",
      "Suits smaller and awkward-shaped windows",
      "Can be lined for light control or blackout",
      "Wide fabric and colour choice",
    ],
    specs: [
      { label: "Best for", value: "Kitchens, studies, smaller or narrow windows" },
      { label: "Light control", value: "Standard, blackout-lined or thermal-lined" },
      { label: "System", value: "Corded or cordless lift mechanism" },
      { label: "Fabrics", value: "Any fabric from our curtain collection" },
      { label: "Fold style", value: "Classic flat-fold roman" },
      { label: "Warranty", value: "12 months on mechanism and installation" },
    ],
    sectionTitle: "Curtain fabric, blind-tidy shape",
    sectionParagraphs: [
      "If you love a fabric but the window is too small or awkward for a full curtain, a roman blind lets you use that same fabric in a shape built for tighter spaces - it lifts flat against the window instead of pooling to the sides.",
      "Adding a blackout or thermal lining behind the face fabric turns a decorative roman blind into a functional one too, without changing how it looks from the room.",
    ],
    faqs: [
      {
        question: "Can any curtain fabric be made into a roman blind?",
        answer:
          "Yes - almost any fabric from our curtain range can be tailored into a roman blind, so you can match blinds and curtains in the same home.",
      },
      {
        question: "Do roman blinds come in blackout?",
        answer:
          "Yes - we offer a blackout lining behind the face fabric for bedrooms or media rooms that need full darkness.",
      },
      {
        question: "Are cordless roman blinds available?",
        answer:
          "Yes - we offer a cordless lift mechanism as a safer option, particularly recommended for homes with young children.",
      },
      {
        question: "Will the folds stay neat over time?",
        answer:
          "Yes - the fold lines are built into the construction with internal battens, so the blind folds in the same place every time it's raised.",
      },
    ],
  },
  {
    slug: "vertical-blinds",
    category: "curtains-window-solutions",
    type: "blinds",
    badge: "BLINDS & SHADES",
    title: "Vertical Blinds",
    tagline: "Wide Windows, Easy Light",
    description:
      "Ideal for large sliding glass doors and wide windows, offering effortless light adjustment.",
    priceBanner: "Free measuring for sliding doors & wide windows",
    image: "/images/curtain-2.png",
    images: ["/images/curtain-2.png", "/images/curtain-1.png", "/images/curtain-3.png"],
    longDescription: [
      "Vertical blinds hang a series of fabric or PVC louvres from an overhead track, rotating together to open or close and sliding to one or both sides - the natural choice for wide sliding doors and floor-to-ceiling glass.",
      "Because the louvres stack neatly to the side when fully open, they keep a wide door or window completely clear for access, unlike a horizontal blind that gathers upward.",
    ],
    features: [
      "Suited to wide windows and sliding doors",
      "Rotate to adjust light without fully opening",
      "Stacks neatly to one or both sides",
      "Fabric or PVC louvre options",
      "Chain or wand-operated control",
      "Doesn't obstruct door access when open",
    ],
    specs: [
      { label: "Best for", value: "Sliding doors, wide windows, offices" },
      { label: "Light control", value: "Rotate louvres for adjustable light" },
      { label: "System", value: "Overhead track, chain or wand control" },
      { label: "Materials", value: "Fabric or PVC louvres" },
      { label: "Stack direction", value: "One-sided or split-stack" },
      { label: "Warranty", value: "12 months on mechanism and installation" },
    ],
    sectionTitle: "Built for doors, not just windows",
    sectionParagraphs: [
      "A sliding door needs a covering that gets fully out of the way when you want to walk through it - vertical blinds solve this by stacking the louvres tightly against one or both sides of the track, leaving the full opening clear.",
      "Rotating the louvres gives quick, stepless light control without moving the whole blind, which is convenient for wide glass walls that catch strong sun for part of the day.",
    ],
    faqs: [
      {
        question: "Can vertical blinds be used on a sliding door?",
        answer:
          "Yes - they're one of the most common and practical choices for sliding glass doors since the louvres stack fully to the side, clearing the opening.",
      },
      {
        question: "Fabric or PVC louvres - what's the difference?",
        answer:
          "Fabric louvres give a softer look and more colour choice; PVC is more moisture-resistant and easier to wipe clean, often used in kitchens or bathrooms.",
      },
      {
        question: "Can the blind stack to just one side?",
        answer:
          "Yes - we can set the track to stack fully to one side, or split to stack at both ends, depending on your door and furniture layout.",
      },
      {
        question: "Do vertical blinds work on very wide openings?",
        answer:
          "Yes - the track can be joined and motorized for openings too wide for a single mechanism, common on large sliding walls.",
      },
    ],
  },
  {
    slug: "venetian-blinds",
    category: "curtains-window-solutions",
    type: "blinds",
    subcategory: "venetian-blinds",
    badge: "BLINDS & SHADES",
    title: "Venetian Aluminium Blinds",
    tagline: "Precise Tilt, Modern Metal",
    description:
      "Durable metallic slats providing precise light tilting and contemporary corporate or home aesthetics.",
    priceBanner: "Free home visit - precise fit for home or office",
    image: "/images/curtain-3.png",
    images: ["/images/curtain-3.png", "/images/curtain-1.png", "/images/curtain-2.png"],
    longDescription: [
      "Venetian aluminium blinds use narrow horizontal metal slats that tilt in unison, giving precise, stepless control over light and privacy - a favourite in offices and modern kitchens for its clean, contemporary look.",
      "Aluminium slats resist moisture and heat far better than fabric, making them a practical choice near kitchen windows, balconies, or anywhere direct sun and humidity are a daily factor.",
    ],
    features: [
      "Precise tilt control for light and privacy",
      "Durable aluminium resists heat and moisture",
      "Clean, contemporary look for home or office",
      "Wide range of slat colours and finishes",
      "Corded or cordless operation",
      "Easy to wipe clean",
    ],
    specs: [
      { label: "Best for", value: "Offices, kitchens, balconies, modern interiors" },
      { label: "Light control", value: "Tilt slats for stepless adjustment" },
      { label: "System", value: "Corded or cordless tilt and lift" },
      { label: "Material", value: "Aluminium slats, various finishes" },
      { label: "Slat width", value: "25mm standard (other widths on request)" },
      { label: "Warranty", value: "12 months on mechanism and installation" },
    ],
    sectionTitle: "The practical choice for sun and moisture",
    sectionParagraphs: [
      "Aluminium doesn't warp, fade or absorb moisture the way fabric or timber can, which makes venetian blinds a reliable option for windows that face direct sun most of the day, or rooms like kitchens where steam and splashes are routine.",
      "The narrow slats also give very fine control over light angle - tilt them just slightly and you cut direct glare while still letting daylight bounce into the room, useful for desks, screens and workspaces.",
    ],
    faqs: [
      {
        question: "Are aluminium blinds durable in direct sunlight?",
        answer:
          "Yes - aluminium resists the fading and warping that can affect fabric or timber blinds under constant direct sun.",
      },
      {
        question: "Are these suitable for a kitchen?",
        answer: "Yes - their moisture resistance makes them a popular choice near kitchen windows and sinks.",
      },
      {
        question: "What slat width do you offer?",
        answer: "Our standard is 25mm slats; other widths are available on request for a different look.",
      },
      {
        question: "Can venetian blinds be cordless?",
        answer:
          "Yes - we offer a cordless tilt and lift option, recommended for households with young children.",
      },
    ],
  },
];

export const products: Product[] = [...baseProducts, ...generatedProducts];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product, count = 3): Product[] {
  const rest = products.filter((item) => item.slug !== product.slug);
  const sameSub = rest.filter(
    (item) => product.subcategory && item.subcategory === product.subcategory
  );
  const sameCategory = rest.filter(
    (item) => !sameSub.includes(item) && item.category === product.category
  );
  const others = rest.filter(
    (item) => !sameSub.includes(item) && item.category !== product.category
  );
  return [...sameSub, ...sameCategory, ...others].slice(0, count);
}
