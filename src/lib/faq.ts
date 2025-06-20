
import { SITE_NAME } from './constants';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: `What should I expect during my first consultation at ${SITE_NAME}?`,
    answer: `Your initial consultation at ${SITE_NAME} is a confidential and comprehensive meeting with one of our expert medical specialists. During this session, we will thoroughly discuss your aesthetic objectives, conduct a careful evaluation of your relevant medical history, and clearly explain the most suitable treatment options available. This dedicated time allows you to ask any questions and gain a full understanding of the potential outcomes, benefits, specific risks, and anticipated recovery process for your proposed procedure. Our goal is to empower you with all necessary information to make a well-informed decision about your care.`,
  },
  {
    id: 'faq-2',
    question: 'How long is the typical recovery period for aesthetic procedures?',
    answer: `Recovery periods vary significantly depending on the specific type and invasiveness of the procedure performed. Non-invasive treatments, such as certain facials or light chemical peels, may involve little to no downtime, allowing an immediate return to daily activities. Minimally invasive procedures like injectable fillers might result in minor swelling or bruising for a few days. Surgical procedures, such as a facelift or abdominoplasty, will necessitate a more extended recovery period, potentially several weeks, for complete healing. At ${SITE_NAME}, we provide detailed, personalized post-operative care instructions and dedicated support to ensure a smooth, comfortable, and efficient recovery process.`,
  },
  {
    id: 'faq-3',
    question: 'Are the results of aesthetic treatments permanent?',
    answer: `The longevity of results from aesthetic treatments depends greatly on the specific procedure undertaken, individual patient factors like genetics and lifestyle, and ongoing maintenance. Surgical alterations, such as rhinoplasty or breast augmentation with implants, generally offer long-lasting, often considered permanent, structural changes, though natural aging will continue. Non-surgical treatments like dermal fillers or botulinum toxin injections are temporary and typically require follow-up treatments at regular intervals (e.g., every 6-18 months for fillers, 3-4 months for Botox) to maintain the desired effect. Lifestyle factors including diet, sun exposure, skincare regimen, and smoking also significantly influence the durability of outcomes. Our specialists at ${SITE_NAME} will provide a realistic expectation of result longevity during your consultation.`,
  },
  {
    id: 'faq-4',
    question: 'What are the potential risks associated with aesthetic procedures?',
    answer: `All medical and surgical procedures carry some inherent level of risk, though serious complications are uncommon when aesthetic treatments are performed by qualified, experienced medical professionals in an accredited facility like ${SITE_NAME}. Potential risks, which vary by procedure, may include bruising, swelling, discomfort, infection, bleeding, scarring, or an adverse reaction to anesthesia or injected materials. During your comprehensive pre-treatment consultation, our specialists will thoroughly discuss all potential risks and benefits specific to your chosen procedure, ensuring you have a complete understanding before proceeding. We prioritize patient safety above all and adhere to the strictest medical protocols.`,
  },
  {
    id: 'faq-5',
    question: 'How do I determine which aesthetic procedure is right for me?',
    answer: `Choosing the most appropriate aesthetic procedure is a crucial and collaborative decision-making process undertaken with your specialist at ${SITE_NAME}. It begins with a detailed consultation where our experts will attentively listen to your concerns, aesthetic aspirations, and expectations. We will then conduct a thorough assessment of your individual anatomical characteristics, skin type, and overall health. Based on this comprehensive evaluation, we will recommend the most suitable and effective treatment options tailored to achieve your desired, natural-looking outcome. We are committed to patient education, ensuring you receive all the necessary information to make an informed and confident decision regarding your care pathway.`,
  },
];
