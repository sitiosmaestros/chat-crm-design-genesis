
export type Benefit = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export type Testimonial = {
  id: number;
  name: string;
  business: string;
  location: string;
  text: string;
  avatar: string;
};

export type FAQ = {
  id: number;
  question: string;
  answer: string;
};

export type PricingPlan = {
  id: number;
  name: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
  discount?: string;
};
