import {
  SiStripe,
  SiPaypal,
  SiShopify,
  SiAmazon,
  SiGoogle,
  SiNetflix,
  SiFacebook,
  SiApple,
} from "react-icons/si";
import { IconType } from "react-icons";

interface Brand {
  name: string;
  icon: IconType;
  color: string;
}

export const BRANDS_DATA: Brand[] = [
  {
    name: "Stripe",
    icon: SiStripe,
    color: "#635BFF",
  },
  {
    name: "PayPal",
    icon: SiPaypal,
    color: "#003087",
  },
  {
    name: "Shopify",
    icon: SiShopify,
    color: "#96BF48",
  },
  {
    name: "Amazon",
    icon: SiAmazon,
    color: "#FF9900",
  },
  {
    name: "Google",
    icon: SiGoogle,
    color: "#4285F4",
  },
  {
    name: "Netflix",
    icon: SiNetflix,
    color: "#E50914",
  },
  {
    name: "Facebook",
    icon: SiFacebook,
    color: "#1877F2",
  },
  {
    name: "Apple",
    icon: SiApple,
    color: "#000000",
  },
];
