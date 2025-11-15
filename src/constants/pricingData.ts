export interface Plan {
  name: string;
  description: string;
  
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  features: string[];
}

export const PLANS: Plan[] = [
  {
    name: "Starter Plan",
    description: "Perfect for large organizations with advanced needs.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Basic Salary Systems",
      "Expense Tracking",
      "Basic Analytics System",
      "Budgeting Tools",
      "24/7 Customer Support",
    ],
  },
  {
    name: "Growth Plan",
    description: "Ideal for growing startups and mid-sized businesses.",
    monthlyPrice: 49,
    yearlyPrice: 490,
    popular: true,
    features: [
      "Everything in Starter",
      "Automated Reporting Tools",
      "Custom Dashboards",
      "Transaction Insights",
      "Financial Security",
    ],
  },
  {
    name: "Business Plan",
    description: "Perfect for large organizations with advanced needs.",
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      "Everything in Growth Plan",
      "Supervisor Tracking",
      "Integration Services",
      "API/3rd Support",
      "Premium Security",
    ],
  },
];
