
interface ServiceDetail {
  label: string;
  value: string;
}

interface ServiceFaq {
  id: string;
}

interface ServiceDetails {
  id: string;
  details: ServiceDetail[];
  faqs: ServiceFaq[];
}

const serviceDetailsData: ServiceDetails[] = [
  {
    id: 'rhinoplasty',
    details: [
      { label: 'procedureTime', value: '2-3 Hours' },
      { label: 'anesthesia', value: 'General' },
      { label: 'recoveryTime', value: '1-2 Weeks' },
      { label: 'results', value: '12-18 Months' },
    ],
    faqs: [
      { id: 'rhinoplasty-1' },
      { id: 'rhinoplasty-2' },
      { id: 'rhinoplasty-3' },
    ],
  },
   {
    id: 'lip-reshaping',
    details: [
      { label: 'procedureTime', value: '30-60 Minutes' },
      { label: 'anesthesia', value: 'Topical Numbing' },
      { label: 'recoveryTime', value: '1-3 Days' },
      { label: 'results', value: 'Immediate' },
    ],
    faqs: [
      { id: 'lip-reshaping-1' },
      { id: 'lip-reshaping-2' },
      { id: 'lip-reshaping-3' },
    ],
  },
  {
    id: 'blepharoplasty',
    details: [
      { label: 'procedureTime', value: '1-2 Hours' },
      { label: 'anesthesia', value: 'Local with Sedation' },
      { label: 'recoveryTime', value: '7-10 Days' },
      { label: 'results', value: '3-6 Months' },
    ],
    faqs: [
      { id: 'blepharoplasty-1' },
      { id: 'blepharoplasty-2' },
      { id: 'blepharoplasty-3' },
    ],
  },
   {
    id: 'facelift',
    details: [
      { label: 'procedureTime', value: '3-5 Hours' },
      { label: 'anesthesia', value: 'General' },
      { label: 'recoveryTime', value: '2-3 Weeks' },
      { label: 'results', value: '6-12 Months' },
    ],
    faqs: [
        { id: 'facelift-1' },
        { id: 'facelift-2' },
        { id: 'facelift-3' },
    ]
  },
  {
    id: 'breast-augmentation',
    details: [
        { label: 'procedureTime', value: '1-2 Hours' },
        { label: 'anesthesia', value: 'General' },
        { label: 'recoveryTime', value: '1 Week' },
        { label: 'results', value: '3-6 Months' }
    ],
    faqs: [
        { id: 'breast-augmentation-1' },
        { id: 'breast-augmentation-2' },
        { id: 'breast-augmentation-3' }
    ]
  },
  {
    id: 'tummy-tuck',
    details: [
        { label: 'procedureTime', value: '2-4 Hours' },
        { label: 'anesthesia', value: 'General' },
        { label: 'recoveryTime', value: '2-3 Weeks' },
        { label: 'results', value: '6-12 Months' }
    ],
    faqs: [
        { id: 'tummy-tuck-1' },
        { id: 'tummy-tuck-2' },
        { id: 'tummy-tuck-3' }
    ]
  },
  {
    id: 'teeth-whitening',
    details: [
      { label: 'procedureTime', value: '60-90 Minutes' },
      { label: 'anesthesia', value: 'None' },
      { label: 'recoveryTime', value: 'None' },
      { label: 'results', value: 'Immediate' },
    ],
    faqs: [
        { id: 'teeth-whitening-1' },
        { id: 'teeth-whitening-2' },
        { id: 'teeth-whitening-3' }
    ]
  }
  // NOTE: In a real application, you would add details for ALL services.
  // This is a representative sample.
];

const fallbackDetails: ServiceDetails = {
    id: 'fallback',
    details: [
      { label: 'procedureTime', value: 'Varies' },
      { label: 'anesthesia', value: 'Varies' },
      { label: 'recoveryTime', value: 'Varies' },
      { label: 'results', value: 'Varies' },
    ],
    faqs: [],
}

export function getServiceDetails(serviceId: string): ServiceDetails {
  return serviceDetailsData.find(s => s.id === serviceId) || fallbackDetails;
}
