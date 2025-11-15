// paymentFeaturesData.ts
export interface BankingFeature {
  text: string; // title
  description: string; // description
}

export const Banking: BankingFeature[] = [
  {
    text: "Personalized Financial Insights",
    description:
      "Receive tailored insights and recommendations based on your spending habits, helping you make smarter financial decisions.",
  },
  {
    text: "Bill Payment Reminders",
    description:
      "Never miss a payment with automated reminders for all your bills and subscriptions.",
  },
  {
    text: "Peer-to-Peer Transfers",
    description:
      "Easily send and receive money from friends and family worldwide, securely and instantly.",
  },
];
