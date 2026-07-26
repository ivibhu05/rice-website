export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "1121-vs-1509-basmati-guide",
    title: "1121 vs. 1509 Basmati: Which Variety Fits Your Order?",
    excerpt:
      "A buyer's guide to the two most-traded extra-long-grain basmati varieties — grain length, price positioning, and where each performs best.",
    date: "2026-05-12",
    category: "Variety Guides",
    image: "/images/blog/1121-vs-1509.jpg",
    content: [
      "1121 and 1509 are both extra-long-grain basmati varieties, but they serve different points in a buyer's programme. 1121 offers the longest grain length on the market and commands a premium price, while 1509 — a shorter-duration crop — delivers a slightly shorter but still extra-long grain at a more competitive cost.",
      "For buyers targeting premium HORECA and retail-branded programmes, 1121 remains the benchmark. For volume-driven distribution where landed cost per tonne matters more than the last half-millimetre of grain length, 1509 is often the better fit.",
      "Both varieties are available from us in raw, steam, and sella processing, so the choice usually comes down to your target price point and market positioning rather than availability.",
    ],
  },
  {
    slug: "understanding-sella-vs-steam-rice",
    title: "Sella vs. Steam Rice: What's the Difference?",
    excerpt:
      "Parboiling, steaming, and raw milling all produce different grain characteristics. Here's what buyers need to know before specifying a processing type.",
    date: "2026-04-03",
    category: "Export Process",
    image: "/images/blog/sella-vs-steam.jpg",
    content: [
      "Sella (parboiled) rice is soaked, steamed, and dried before milling, which gelatinizes the starch inside the grain and produces a firmer, less sticky result after cooking — along with the golden hue seen in golden sella varieties.",
      "Steam-processed rice undergoes a shorter, milder steam treatment aimed primarily at reducing breakage during milling rather than fully parboiling the grain, sitting between raw and sella in both texture and colour.",
      "Raw (white) rice skips both processes and is milled directly from dried paddy, retaining the most natural aroma but with a softer, more delicate grain that requires more careful handling during export.",
    ],
  },
  {
    slug: "container-loading-guide-for-rice-importers",
    title: "A Container-Loading Guide for First-Time Rice Importers",
    excerpt:
      "MOQ, Incoterms, lead times, and what to check before your first 20ft or 40ft container of rice leaves port.",
    date: "2026-03-18",
    category: "Logistics",
    image: "/images/blog/container-loading.jpg",
    content: [
      "Most rice export programmes start at a minimum order of one 20ft container, roughly 25–27 metric tonnes depending on packaging format. Buyers should confirm packaging type early, since bagged cargo and palletized cargo load differently and affect total container yield.",
      "FOB pricing is common for buyers who manage their own freight forwarding, while CIF or CFR terms suit buyers who prefer the exporter to arrange shipping to the destination port.",
      "Lead time from order confirmation to loading typically runs 18–25 days, allowing for milling, quality testing, and documentation including phytosanitary certificates.",
    ],
  },
  {
    slug: "private-label-rice-packaging-explained",
    title: "Private-Label Rice Packaging: What's Actually Possible",
    excerpt:
      "From generic bulk sacks to fully branded consumer bags — a look at how private-label packaging programmes typically work for overseas buyers.",
    date: "2026-02-09",
    category: "Packaging",
    image: "/images/blog/private-label-packaging.jpg",
    content: [
      "Private-label packaging lets distributors and retailers sell rice under their own brand without operating a packing facility themselves. Programmes typically start with artwork approval, followed by a pre-production sample run before full-scale packing begins.",
      "Common formats range from 1kg and 5kg consumer retail bags to 25kg and 50kg bulk sacks for wholesale and food-service buyers, with pack size often varying by destination market.",
      "Minimum order quantities for private-label runs are generally higher than standard bulk orders, since packaging materials are produced to the buyer's specification.",
    ],
  },
];
