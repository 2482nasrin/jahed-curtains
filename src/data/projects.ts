export interface Project {
  id: string;
  name: string;
  area: string;
  image: string;
}

export const projects: Project[] = [
  { id: "marina-gate-1", name: "Marina Gate 1", area: "Dubai Marina", image: "/images/curtain-1.png" },
  { id: "marina-diamond", name: "Marina Diamond", area: "Dubai Marina", image: "/images/curtain-2.png" },
  { id: "cayan-tower", name: "Cayan Tower", area: "Dubai Marina", image: "/images/curtain-3.png" },
  { id: "burj-vista", name: "Burj Vista", area: "Downtown Dubai", image: "/images/work-installation.png" },
  { id: "address-residences", name: "The Address Residences", area: "Downtown Dubai", image: "/images/work-installation-team.png" },
  { id: "bay-square-villa", name: "Bay Square Villa", area: "Business Bay", image: "/images/installation-team.png" },
  { id: "executive-towers", name: "Executive Towers", area: "Business Bay", image: "/products/sheer-blackout-curtains.png" },
  { id: "jlt-lake-view", name: "Jumeirah Lake Towers", area: "JLT", image: "/products/Sheer-Curtains.png" },
  { id: "lake-city-tower", name: "Lake City Tower", area: "JLT", image: "/products/wave-curtains.png" },
  { id: "palm-jumeirah-villa", name: "Palm Jumeirah Villa", area: "Palm Jumeirah", image: "/products/Linen-Organza-Queer.png" },
  { id: "dubai-hills-villa", name: "Dubai Hills Villa", area: "Dubai Hills Estate", image: "/products/roman-blinds-dubai.png" },
  { id: "al-majaz-apartment", name: "Al Majaz Waterfront Apartment", area: "Al Majaz, Sharjah", image: "/products/curtains.png" },
  { id: "al-khan-villa", name: "Al Khan Family Villa", area: "Al Khan, Sharjah", image: "/images/work-installaer.png" },
  { id: "corniche-residence", name: "Corniche Residence", area: "Corniche, Abu Dhabi", image: "/products/zebra-blinds-dubai.png" },
];
