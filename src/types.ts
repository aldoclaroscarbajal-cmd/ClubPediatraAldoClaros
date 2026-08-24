export interface LiveMeetingPart {
  partNumber: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface ScheduledMeeting {
  id: string;
  month: string;
  date: string;
  time: string;
  topic: string;
  description: string;
  tags: string[];
  status: 'upcoming' | 'past';
  recordingAvailable?: boolean;
}

export interface MiniAppFeature {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  badge?: string;
  previewType: 'fever' | 'nutrition' | 'milestones' | 'sleep' | 'alarm';
}

export interface Testimonial {
  id: string;
  parentName: string;
  childAge: string;
  city: string;
  quote: string;
  highlight: string;
  avatarBg: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'reunion' | 'apps' | 'pago' | 'medico';
}
