export interface FooterLinkCategory {
  title: string;
  links: string[];
}

export const FOOTER_LINKS: FooterLinkCategory[] = [
  {
    title: "Home",
    links: [
      "Product Features",
      "Benifits",
      "How to Use ",
      "Key Features",
      "Priceing",
      "Testimonials",
      "FAQ'S",
    ],
  },
  {
    title: "Page",
    links: ["Mobile App", "Desktop APP", "How To USE"],
  },
  {
    title: "All Apps",
    links: [
      "Home",
      "App",
      "Blogs",
      "Open Blogs",
      "Contact",
      "Privacy Policy",
      "404",
    ],
  },
];
