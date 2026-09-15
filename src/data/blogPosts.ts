export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; src: string; alt: string };

export interface BlogPost {
  slug: string;
  date: string;
  readTime: string;
  timeAgo: string;
  image: string;
  category: string;
  title: string;
  description: string;
  author: string;
  content: BlogContentBlock[];
}

const AUTHOR = "Jahed Curtains Team";

export const blogPosts: BlogPost[] = [
  {
    slug: "blackout-curtains-dubai-guide",
    date: "5 JULY 2026",
    readTime: "6 MIN READ",
    timeAgo: "1 week ago",
    image: "/products/sheer-blackout-curtains.png",
    category: "Curtains",
    title: "Blackout Curtains in Dubai: The Complete Guide (2026)",
    description:
      "Fabrics, linings, heat, cost and the mistakes we fix most often — everything to know before buying blackout curtains in the UAE.",
    author: AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "Between the summer sun and the glass-heavy apartments common across Dubai, Sharjah and Abu Dhabi, blackout curtains are one of the most requested upgrades we install. Done well, they turn a bright, hot bedroom into a cool, dark one in minutes - but not every 'blackout' curtain on the market actually blocks light completely.",
      },
      {
        type: "heading",
        text: "What Makes a Curtain Truly Blackout",
      },
      {
        type: "paragraph",
        text: "True blackout comes from the fabric's construction, not its colour. A proper blackout curtain has a tightly woven or coated backing layer bonded to the face fabric, which blocks light regardless of whether the front is cream, navy or bright white. Thinner 'room-darkening' fabrics reduce light but still let a soft glow through - useful in a living room, less so in a bedroom you want fully dark.",
      },
      {
        type: "image",
        src: "/products/sheer-blackout-curtains.png",
        alt: "Blackout curtain fabric rolled out during installation",
      },
      {
        type: "heading",
        text: "Common Mistakes We Fix",
      },
      {
        type: "paragraph",
        text: "The most common issue we see is a track that's too narrow for the window, leaving strips of light down each side. We size every blackout track 15-20cm wider than the frame and slightly higher, so the fabric fully overlaps the glass. The second issue is fitting blackout alone with no sheer layer behind it - most households end up wanting a softer daytime option too, so we usually recommend a day-and-night double track from the start.",
      },
      {
        type: "paragraph",
        text: "If you're planning a blackout curtain for a nursery, bedroom or home cinema, our team can bring fabric samples to your home, measure your exact window and quote a fixed price on the spot - with no advance payment.",
      },
    ],
  },
  {
    slug: "are-motorized-curtains-worth-it",
    date: "5 JULY 2026",
    readTime: "5 MIN READ",
    timeAgo: "1 month ago",
    image: "/products/curtains.png",
    category: "Curtains",
    title: "Are Motorized Curtains Worth It in the UAE? An Honest Look",
    description:
      "We install them every week — here's our honest take on when motorized curtains are genuinely worth it, and when they're not.",
    author: AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "Motorized curtains have gone from a luxury novelty to a fairly common request on our home visits. They're genuinely useful in some homes and unnecessary in others, so here's our honest take after installing them across dozens of villas and apartments.",
      },
      {
        type: "heading",
        text: "When Motorization Pays Off",
      },
      {
        type: "paragraph",
        text: "Tall or double-height windows, wide curtain runs that are heavy to pull by hand, and blackout curtains you want closed automatically before the afternoon sun hits a west-facing wall are the cases where motorization earns its cost. Scheduling the blackout layer to close in the early afternoon can noticeably reduce how hard your AC has to work in that room.",
      },
      {
        type: "image",
        src: "/products/Pale-Gold-Silk-Window-Curtain.png",
        alt: "Motorized curtain track installed along a large window",
      },
      {
        type: "heading",
        text: "When It's Not Worth It",
      },
      {
        type: "paragraph",
        text: "For a single small window that you open and close once a day, a manual track does the same job for less money. Motorization adds the most value on wide or hard-to-reach windows, not on every window in the house - our team will tell you honestly during the home visit if a manual track makes more sense for a particular room.",
      },
    ],
  },
  {
    slug: "how-to-choose-curtains-blinds-uae",
    date: "5 JULY 2026",
    readTime: "6 MIN READ",
    timeAgo: "2 months ago",
    image: "/products/roman-blinds-dubai.png",
    category: "Buying Guide",
    title: "Choosing Curtains & Blinds in Dubai, Sharjah & Abu Dhabi",
    description:
      "Sheer, blackout, roller, zebra, roman or wooden? A simple room-by-room method for picking the right treatment for UAE light.",
    author: AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "Window coverings are one of the most impactful and most confusing decisions in furnishing a UAE home. Between curtains, roller blinds, zebra blinds, roman blinds and wooden blinds, every option looks reasonable in a showroom - the trick is matching the treatment to how each room is actually used and how much sun it gets.",
      },
      {
        type: "heading",
        text: "Start With How the Room Is Used",
      },
      {
        type: "paragraph",
        text: "Bedrooms usually want maximum light control - a blackout curtain or blackout roller blind. Living rooms with a view often do better with a sheer curtain that filters glare without closing off the outside. Kitchens and home offices, where moisture or screen glare are the issue, tend to suit roller or venetian blinds that wipe clean easily.",
      },
      {
        type: "image",
        src: "/images/curtain-1.png",
        alt: "Living room with sheer curtains filtering daylight",
      },
      {
        type: "heading",
        text: "Discover Energy-Efficient Window Covering Options For Your Interiors",
      },
      {
        type: "paragraph",
        text: "UAE summers make heat control as important as light control. Lined curtains and blackout-backed roller blinds both reduce solar heat gain on west- and south-facing windows, which takes some load off your air conditioning during peak afternoon hours. Layering a sheer with a blackout curtain gives you the same benefit while keeping a softer daytime look.",
      },
      {
        type: "image",
        src: "/products/roman-blinds-dubai.png",
        alt: "Roman blind fabric fold detail",
      },
      {
        type: "heading",
        text: "Matching Treatments Across Dubai, Sharjah and Abu Dhabi",
      },
      {
        type: "paragraph",
        text: "Apartment towers with floor-to-ceiling glass in Dubai Marina or Downtown Dubai usually suit motorized or wave curtains for a clean, tailored look. Villas in Sharjah and Abu Dhabi's suburban communities often mix wooden or roman blinds in studies and majlis rooms with curtains in bedrooms and living areas. There's no single right answer - it comes down to the light, the layout and your own taste.",
      },
      {
        type: "paragraph",
        text: "If you're not sure where to start, book a free home visit and our team will walk your home with you, room by room, and recommend a treatment for each window along with a fixed quote.",
      },
    ],
  },
  {
    slug: "how-to-measure-windows-for-curtains",
    date: "12 JUNE 2026",
    readTime: "4 MIN READ",
    timeAgo: "2 months ago",
    image: "/images/curtain-1.png",
    category: "Curtains",
    title: "How to Measure Your Windows for Curtains, Step by Step",
    description:
      "The exact tape-measure method our team uses on every home visit, plus the two mistakes that ruin a perfect fit.",
    author: AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "Curtains that are cut even a few centimetres wrong can look off for years - too short, gapping at the sides, or dragging on the floor. Here's the method our installers use on every home visit, in case you want to double-check measurements yourself before we arrive.",
      },
      {
        type: "heading",
        text: "Tools You Need",
      },
      {
        type: "paragraph",
        text: "A metal tape measure (fabric tapes stretch and throw off the numbers), a pencil, and a ladder if your windows are tall. If you already have a track or rod installed, measure from that; if not, decide roughly where you'd like it mounted before measuring.",
      },
      {
        type: "image",
        src: "/images/curtain-1.png",
        alt: "Measuring a window before curtain installation",
      },
      {
        type: "heading",
        text: "Step by Step",
      },
      {
        type: "paragraph",
        text: "Measure the width of the window frame, then add 15-20cm to each side for the track - this lets the curtain stack away from the glass when open instead of blocking part of the view. For length, measure from the top of the track down to where you want the fabric to end: just above the floor, at the sill, or with a slight break on the floor for a fuller look. Measure both the left and right sides separately, since floors and ceilings are rarely perfectly level, and use the longer measurement.",
      },
      {
        type: "paragraph",
        text: "The two mistakes we fix most often are measuring the window glass instead of the intended track width, and forgetting to account for the header (the folded fabric at the top of pleated or wave headings), which shortens the finished drop by a few centimetres. If that sounds like a lot to get exactly right, our team measures every window for free during the home visit.",
      },
    ],
  },
  {
    slug: "how-to-block-light-top-and-sides",
    date: "2 JUNE 2026",
    readTime: "4 MIN READ",
    timeAgo: "3 months ago",
    image: "/images/curtain-2.png",
    category: "Curtains",
    title: "How to Block Light From the Top & Sides of Your Curtains",
    description:
      "Wrap panels, side channels and pelmets - the fixes we recommend when light keeps sneaking in around the edges.",
    author: AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "A blackout curtain that still lets in a bright strip of light along the top or sides is one of the most common complaints we hear - and almost always fixable without replacing the curtain itself.",
      },
      {
        type: "heading",
        text: "Why Light Sneaks In",
      },
      {
        type: "paragraph",
        text: "Light at the top usually comes from a track mounted too close to the ceiling with a gap behind the fabric header. Light at the sides comes from a track that's the same width as the window, so the curtain has nowhere to overlap the frame when closed.",
      },
      {
        type: "image",
        src: "/images/curtain-2.png",
        alt: "Curtain fitted close to the ceiling to block light at the top",
      },
      {
        type: "heading",
        text: "Fixes That Work",
      },
      {
        type: "paragraph",
        text: "For the sides, extending the track 15-20cm past each edge of the frame solves most cases - we build this into every blackout order by default. For the top, a pelmet (a fabric-covered board above the track) or a wrap-around return at the ends of the track blocks the gap completely. For a truly sealed, cinema-dark room, we can also fit a side channel that the curtain edge slides into, similar to a blackout blind.",
      },
      {
        type: "paragraph",
        text: "If your existing curtains are letting light through and you're not sure why, send us a photo on WhatsApp - we can usually tell you the fix before we even see the window in person.",
      },
    ],
  },
  {
    slug: "curtain-hooks-and-tracks-explained",
    date: "20 MAY 2026",
    readTime: "5 MIN READ",
    timeAgo: "3 months ago",
    image: "/products/t13.png",
    category: "Curtains",
    title: "Curtain Hooks & Tracks Explained: Which One Fits Your Home",
    description:
      "A plain-English guide to eyelet, pinch-pleat and wave hanging systems, and which one suits your ceiling and budget.",
    author: AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "The heading style - how the top of your curtain attaches to the track or rod - changes both how the curtain looks and how it moves. Here's a plain-English rundown of the systems we install most.",
      },
      {
        type: "heading",
        text: "Eyelet, Pinch Pleat or Wave",
      },
      {
        type: "paragraph",
        text: "Eyelet curtains have metal rings built into the fabric and slide on a simple rod - relaxed folds, easy to open and close, a casual modern look. Pinch pleat curtains gather into structured, stitched folds on hooks or rings - a formal, tailored look that suits heavier fabrics. Wave curtains use a special tape and track to create continuous, even S-folds - the smoothest, most contemporary option, and the easiest to motorize.",
      },
      {
        type: "image",
        src: "/products/t13.png",
        alt: "Curtain heading and track detail",
      },
      {
        type: "heading",
        text: "Which One Should You Choose",
      },
      {
        type: "paragraph",
        text: "If you want something simple and casual for a bedroom, eyelet is hard to beat. For a majlis or formal living room, pinch pleat gives a heavier, more traditional look. For a large modern living space or floor-to-ceiling glass, wave heading gives the cleanest line and stacks flattest when open. Ceiling height and the weight of your fabric also matter - our team will recommend a track and heading combination during the home visit based on your specific window.",
      },
    ],
  },
  {
    slug: "hang-curtains-without-drilling",
    date: "3 MAY 2026",
    readTime: "4 MIN READ",
    timeAgo: "4 months ago",
    image: "/images/work-installaer.png",
    category: "Curtains",
    title: "How to Hang Curtains Without Drilling: A Renter's Guide",
    description:
      "Tension rods, adhesive brackets and other landlord-approved ways to hang real curtains in a rented apartment.",
    author: AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "Renting doesn't mean giving up on real, tailored curtains. A few drill-free mounting options let you hang proper curtains and take them - and the hardware - with you when you move.",
      },
      {
        type: "heading",
        text: "Renter-Friendly Options",
      },
      {
        type: "paragraph",
        text: "Tension rods wedge inside the window recess with no fixings at all, and work well for lightweight sheers. Adhesive brackets rated for the weight of your curtain can hold a real rod or lightweight track, and come off cleanly without marking the wall when removed correctly. For heavier blackout curtains, an adhesive-mounted track is usually a better bet than a tension rod, which can bow under weight over time.",
      },
      {
        type: "image",
        src: "/images/work-installaer.png",
        alt: "Curtain track being installed without drilling",
      },
      {
        type: "heading",
        text: "What to Avoid",
      },
      {
        type: "paragraph",
        text: "Skip the cheapest adhesive hooks for anything heavier than a sheer panel - they're rated for light decor, not the ongoing pull of daily curtain use. Also check with your landlord before using any adhesive product on painted walls, since some paints react badly to strong adhesives. If you're not sure what your window and fabric combination needs, ask us on WhatsApp - we're happy to advise even on jobs we're not installing ourselves.",
      },
    ],
  },
  {
    slug: "sheer-vs-blackout-fabric-guide",
    date: "18 APR 2026",
    readTime: "5 MIN READ",
    timeAgo: "4 months ago",
    image: "/products/Sheer-Curtains.png",
    category: "Curtains",
    title: "Sheer vs Blackout: Which Curtain Fabric Suits Your Room?",
    description:
      "How to layer sheers and blackouts across a bedroom, living room and majlis so every space gets the light it needs.",
    author: AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "Sheer and blackout fabrics do almost opposite jobs, which is exactly why most UAE homes end up using both - just in different rooms, or layered together on the same window.",
      },
      {
        type: "heading",
        text: "What Each Fabric Does Best",
      },
      {
        type: "paragraph",
        text: "Sheer fabric filters daylight into a soft glow, keeps your outside view, and gives privacy from the street without darkening the room - ideal for living rooms and balconies. Blackout fabric uses a coated or tightly woven backing to block light almost entirely, which matters most in bedrooms, nurseries and media rooms where you want full control over darkness.",
      },
      {
        type: "image",
        src: "/products/Sheer-Curtains.png",
        alt: "Sheer curtain fabric filtering daylight",
      },
      {
        type: "heading",
        text: "How to Layer Them Room by Room",
      },
      {
        type: "paragraph",
        text: "In a bedroom, we usually recommend a blackout layer as the primary curtain, with sheers optional for a softer daytime look. In a living room or majlis, sheers alone are often enough unless the room faces direct afternoon sun, in which case a lined curtain or a sheer-and-blackout pair on one double track gives you both options without buying two separate sets.",
      },
      {
        type: "paragraph",
        text: "Not sure which combination suits your home? We bring both sheer and blackout swatches to every free home visit, so you can compare them in your own natural light before deciding.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getOtherBlogPosts(post: BlogPost, count = 4): BlogPost[] {
  return blogPosts.filter((item) => item.slug !== post.slug).slice(0, count);
}
