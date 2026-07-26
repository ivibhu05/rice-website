import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const NAVY = "#0f2036";
const NAVY_DEEP = "#0a1626";
const SAND = "#f5eee0";
const SAND_DEEP = "#eadfc4";
const GOLD = "#c7a252";

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function svg({ w, h, label, sub, tone }) {
  const dark = tone === "navy";
  const bg1 = dark ? NAVY_DEEP : SAND;
  const bg2 = dark ? NAVY : SAND_DEEP;
  const text = dark ? SAND : NAVY;
  const grainRows = 6;
  let grains = "";
  for (let r = 0; r < grainRows; r++) {
    for (let c = 0; c < 10; c++) {
      const gx = (w / 10) * c + ((r % 2) * w) / 20 + 20;
      const gy = (h / grainRows) * r + 30;
      grains += `<ellipse cx="${gx}" cy="${gy}" rx="${w * 0.018}" ry="${
        w * 0.007
      }" fill="${dark ? GOLD : NAVY}" opacity="0.06" transform="rotate(${
        (r + c) % 2 === 0 ? 20 : -15
      } ${gx} ${gy})"/>`;
    }
  }
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${bg1}"/>
      <stop offset="1" stop-color="${bg2}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  ${grains}
  <rect x="${w * 0.06}" y="${h * 0.06}" width="${w * 0.88}" height="${
    h * 0.88
  }" fill="none" stroke="${GOLD}" stroke-width="1.5" opacity="0.5"/>
  <text x="50%" y="${sub ? "47%" : "50%"}" text-anchor="middle" dominant-baseline="middle" font-family="Georgia, 'Times New Roman', serif" font-size="${
    w * 0.032
  }" fill="${text}" letter-spacing="1">${escape(label)}</text>
  ${
    sub
      ? `<text x="50%" y="56%" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif" font-size="${
          w * 0.014
        }" fill="${GOLD}" letter-spacing="3">${escape(sub.toUpperCase())}</text>`
      : ""
  }
</svg>`;
}

const manifest = [];
const add = (path, label, opts = {}) =>
  manifest.push({
    path: `public${path}`,
    label,
    sub: opts.sub ?? "Placeholder Photography",
    w: opts.w ?? 1600,
    h: opts.h ?? 1200,
    tone: opts.tone ?? "sand",
  });

// Product images
const products = [
  ["1121-steam-1", "1121 Steam Basmati"],
  ["1121-steam-2", "1121 Steam — Cooked"],
  ["1121-golden-sella-1", "1121 Golden Sella"],
  ["1121-golden-sella-2", "1121 Golden Sella — Cooked"],
  ["1121-sella-1", "1121 Sella"],
  ["1121-sella-2", "1121 Sella — Cooked"],
  ["1121-raw-1", "1121 Raw / White"],
  ["1121-raw-2", "1121 Raw — Cooked"],
  ["1509-sella-1", "1509 Sella New Crop"],
  ["1509-sella-2", "1509 Sella — Cooked"],
  ["1718-sella-1", "1718 Sella"],
  ["1718-sella-2", "1718 Sella — Cooked"],
  ["1847-steam-1", "1847 Steam"],
  ["1847-steam-2", "1847 Steam — Cooked"],
  ["1885-golden-sella-1", "1885 Golden Sella"],
  ["1885-golden-sella-2", "1885 Golden Sella — Cooked"],
  ["1885-raw-1", "1885 Raw / White"],
  ["1885-raw-2", "1885 Raw — Cooked"],
  ["1121-broken-1", "1121 Broken Basmati"],
  ["irri-6-1", "IRRI-6 Non-Basmati"],
  ["pk-386-1", "PK-386 Non-Basmati"],
  ["1121-brown-1", "1121 Brown Basmati"],
  ["grain-closeup-1", "Basmati Grain, Close-Up"],
  ["grain-closeup-2", "Golden Sella Grain, Close-Up"],
];
products.forEach(([slug, label]) =>
  add(`/images/products/${slug}.jpg`, label)
);

// Facility
const facility = [
  ["warehouse-1", "Warehouse — Stacked Bags"],
  ["warehouse-2", "Warehouse — Bulk Storage"],
  ["warehouse-3", "Private-Label Pallets"],
  ["milling-1", "Milling Plant"],
  ["milling-2", "Milling Plant — Interior"],
  ["exterior-1", "Facility Exterior"],
  ["exterior-2", "Loading Bay"],
];
facility.forEach(([slug, label]) =>
  add(`/images/facility/${slug}.jpg`, label, { tone: "navy" })
);

// Process
const process = [
  ["01-sourcing", "Paddy Sourcing"],
  ["02-drying", "Drying"],
  ["03-milling", "Husking & Milling"],
  ["04-parboiling", "Parboiling / Steaming"],
  ["05-sortex", "Colour Sortex"],
  ["06-polishing", "Polishing"],
  ["07-grading", "Grading"],
  ["08-packaging", "Packaging & Export"],
];
process.forEach(([slug, label]) =>
  add(`/images/process/${slug}.jpg`, label, { w: 1200, h: 900 })
);

// Blog
const blog = [
  ["1121-vs-1509", "1121 vs 1509 Basmati"],
  ["sella-vs-steam", "Sella vs Steam Rice"],
  ["container-loading", "Container Loading Guide"],
  ["private-label-packaging", "Private-Label Packaging"],
];
blog.forEach(([slug, label]) =>
  add(`/images/blog/${slug}.jpg`, label, { w: 1200, h: 800 })
);

// Hero / banners
add("/images/hero/home-hero.jpg", "Dana Gulf Rice Trading", {
  sub: "Sourced at the Source",
  w: 1920,
  h: 1280,
  tone: "navy",
});
add("/images/hero/products-hero.jpg", "Our Rice Catalog", {
  w: 1920,
  h: 800,
  tone: "navy",
});
add("/images/hero/quality-hero.jpg", "Quality & Process", {
  w: 1920,
  h: 800,
  tone: "navy",
});
add("/images/hero/global-export-hero.jpg", "Global Export", {
  w: 1920,
  h: 800,
  tone: "navy",
});
add("/images/hero/about-hero.jpg", "About Dana Gulf Rice", {
  w: 1920,
  h: 800,
  tone: "navy",
});
add("/images/hero/facility-hero.jpg", "Our Facility", {
  w: 1920,
  h: 800,
  tone: "navy",
});
add("/images/hero/contact-hero.jpg", "Request a Quote", {
  w: 1920,
  h: 700,
  tone: "navy",
});
add("/images/hero/blog-hero.jpg", "Insights", {
  w: 1920,
  h: 700,
  tone: "navy",
});
add("/images/og-image.jpg", "Dana Gulf Rice Trading LLC", {
  sub: "Basmati & Non-Basmati Rice Exporters — Dubai, UAE",
  w: 1200,
  h: 630,
  tone: "navy",
});

const run = async () => {
  for (const item of manifest) {
    await mkdir(dirname(item.path), { recursive: true });
    const buf = Buffer.from(svg(item));
    await sharp(buf).jpeg({ quality: 82 }).toFile(item.path);
  }
  console.log(`Generated ${manifest.length} placeholder images.`);
};

run();
