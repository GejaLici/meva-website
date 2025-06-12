
import { SITE_NAME } from './constants';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: `What should I expect during my first consultation?`,
    answer: `Your first consultation at ${SITE_NAME} is a comprehensive discussion with one of our expert specialists. We will discuss your aesthetic goals, evaluate your medical history, and explain suitable treatment options. This is a great opportunity to ask any questions you have and understand the potential outcomes, risks, and recovery process associated with your desired procedure.`,
  },
  {
    id: 'faq-2',
    question: 'How long is the recovery period for most procedures?',
    answer: 'Recovery periods vary significantly depending on the type and extent of the procedure. Non-invasive treatments may have little to no downtime, while surgical procedures can require several weeks for full recovery. We provide detailed post-operative care instructions and support to ensure a smooth and speedy recovery.',
  },
  {
    id: 'faq-3',
    question: 'Are the results permanent?',
    answer: 'The longevity of results depends on the specific treatment. Some procedures, like surgical alterations, offer long-lasting results, while others, such as fillers or Botox, are temporary and may require follow-up treatments to maintain the effect. Lifestyle factors like diet, sun exposure, and aging will also influence long-term outcomes.',
  },
  {
    id: 'faq-4',
    question: 'What are the risks associated with aesthetic procedures?',
    answer: 'All medical procedures carry some level of risk, though serious complications are rare with modern aesthetic techniques performed by qualified professionals. Common risks include bruising, swelling, infection, or an adverse reaction to anesthesia. During your consultation, we will thoroughly discuss all potential risks specific to your chosen procedure.',
  },
  {
    id: 'faq-5',
    question: 'How do I know which procedure is right for me?',
    answer: 'Choosing the right procedure is a collaborative process. Our specialists will listen to your concerns and goals, assess your individual characteristics, and recommend the most appropriate treatments to achieve your desired outcome. We prioritize patient education and ensure you have all the information needed to make an informed decision.',
  },
];

