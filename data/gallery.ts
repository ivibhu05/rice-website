export interface GalleryImage {
  src: string;
  alt: string;
  category: "Warehouse" | "Milling" | "Facility" | "Grain";
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/facility/warehouse-1.jpg",
    alt: "Rows of branded rice bags stacked in the Dana Gulf warehouse",
    category: "Warehouse",
  },
  {
    src: "/images/facility/warehouse-2.jpg",
    alt: "Bulk sacks stacked floor-to-ceiling in the storage facility",
    category: "Warehouse",
  },
  {
    src: "/images/facility/milling-1.jpg",
    alt: "Milling and processing plant conveyor structure",
    category: "Milling",
  },
  {
    src: "/images/facility/milling-2.jpg",
    alt: "Interior of the rice milling facility",
    category: "Milling",
  },
  {
    src: "/images/facility/exterior-1.jpg",
    alt: "Exterior of the industrial processing facility with chimney",
    category: "Facility",
  },
  {
    src: "/images/facility/exterior-2.jpg",
    alt: "Loading bay at the Dana Gulf facility",
    category: "Facility",
  },
  {
    src: "/images/products/grain-closeup-1.jpg",
    alt: "Close-up of raw basmati grain on dark background",
    category: "Grain",
  },
  {
    src: "/images/products/grain-closeup-2.jpg",
    alt: "Close-up of golden sella basmati grain",
    category: "Grain",
  },
  {
    src: "/images/facility/warehouse-3.jpg",
    alt: "Private-label branded consumer bags on pallets",
    category: "Warehouse",
  },
];
