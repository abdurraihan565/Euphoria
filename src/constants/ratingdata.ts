// testimonialsData.ts
export interface RatingTestimonial {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number; // 1-5
}

export const RatingData: RatingTestimonial[] = [
  {
    name: "John Smith",
    role: "Business Owner",
    image: "/images/user1.png",
    text: "Amazing service! The platform is intuitive and the customer support is excellent. Highly recommended!",
    rating: 5,
  },
  {
    name: "Jane Doe",
    role: "Entrepreneur",
    image: "/images/user2.png",
    text: "A seamless experience from start to finish. Great customer support and easy-to-use platform.",
    rating: 5,
  },
  {
    name: "Michael Lee",
    role: "Freelancer",
    image: "/images/user3.png",
    text: "The tools provided helped me manage my finances effortlessly. Truly outstanding service!",
    rating: 5,
  },
  {
    name: "Emily Clark",
    role: "Startup Founder",
    image: "/images/user4.png",
    text: "Highly professional and efficient platform. I recommend it to anyone looking for smart financial solutions.",
    rating: 5,
  },
];
