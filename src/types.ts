export interface Workspace {
  id: string;
  name: string;
  area: string;
  description: string;
  pricePerHour: number;
  rating: number;
  reviewsCount: number;
  wifiSpeedMbps: number;
  image: string;
  facilities: string[];
  address: string;
}

export interface Testimonial {
  id: string;
  name: string;
  profession: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CommunityType {
  id: string;
  title: string;
  description: string;
  bgGradient: string;
  icon: string;
}
