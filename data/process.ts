export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  image: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Paddy Sourcing",
    description:
      "Paddy is procured directly from growers and aggregators across the basmati belt of Haryana, Punjab, and Sindh, selected for grain length and variety purity.",
    image: "/images/process/01-sourcing.jpg",
  },
  {
    step: 2,
    title: "Drying",
    description:
      "Freshly harvested paddy is dried to a controlled moisture level before storage, preventing spoilage and preserving grain integrity.",
    image: "/images/process/02-drying.jpg",
  },
  {
    step: 3,
    title: "Husking & Milling",
    description:
      "Paddy is husked and milled to remove the outer layers, producing brown or white rice depending on the target product.",
    image: "/images/process/03-milling.jpg",
  },
  {
    step: 4,
    title: "Parboiling / Steaming",
    description:
      "For sella and steam varieties, grains are parboiled and steamed to strengthen the kernel and set the characteristic golden or firm profile.",
    image: "/images/process/04-parboiling.jpg",
  },
  {
    step: 5,
    title: "Colour Sortex",
    description:
      "Optical colour-sorting removes discoloured, damaged, or foreign grains, ensuring a visually consistent, high-purity lot.",
    image: "/images/process/05-sortex.jpg",
  },
  {
    step: 6,
    title: "Polishing",
    description:
      "Grains are polished to a clean, uniform finish, improving shelf appeal without compromising cooking quality.",
    image: "/images/process/06-polishing.jpg",
  },
  {
    step: 7,
    title: "Grading",
    description:
      "Final grading sorts grains by length and breakage percentage, matching each lot to its export specification.",
    image: "/images/process/07-grading.jpg",
  },
  {
    step: 8,
    title: "Packaging & Export",
    description:
      "Rice is packed to order — bulk sacks, retail bags, or private-label — and container-loaded for export from Dubai.",
    image: "/images/process/08-packaging.jpg",
  },
];

export const qcChecks = [
  {
    title: "Moisture Testing",
    description:
      "Every incoming lot is tested for moisture content to prevent spoilage during transit and storage.",
  },
  {
    title: "Broken Grain %",
    description:
      "Grains are measured against the broken-percentage specification for each product before approval.",
  },
  {
    title: "Foreign Matter %",
    description:
      "Lots are screened for foreign matter, admixture, and damaged grains ahead of final grading.",
  },
  {
    title: "Aroma & Grain Length",
    description:
      "Basmati lots are checked for characteristic aroma and average grain length against variety standards.",
  },
];
