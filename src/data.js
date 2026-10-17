import rehabefyLogo from './assets/rehabefy-logo.jpg';
import rehabefyScreen from './assets/rehabefy-screen.jpg';
import myhealthbookScreen from './assets/myhealthbook-screen.jpg';
import nukkdScreen from './assets/nukkd-screen.jpg';

export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.rehabiphy';

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#vision', label: 'Vision' },
  { href: '#partners', label: 'Partnerships' },
];

export const ABOUT_PILLARS = [
  {
    product: 'rehabefy',
    icon: 'pulse',
    title: 'Digital Healthcare & Recovery',
    text: 'Making physiotherapy, exercise guidance and recovery support easier to reach.',
  },
  {
    product: 'myhealthbook',
    icon: 'book',
    title: 'Personal Health Management',
    text: 'Keeping records, readings and medications organised in one place.',
  },
  {
    product: 'nukkd',
    icon: 'pin',
    title: 'Hyperlocal Community Technology',
    text: 'Bringing neighbours, local businesses and nearby opportunities closer.',
  },
];

export const PRODUCTS = [
  {
    id: 'rehabefy',
    name: 'Rehabefy',
    category: 'Digital Rehabilitation & Wellness',
    tagline: 'Rehab Easy for You.',
    logo: rehabefyLogo,
    screen: rehabefyScreen,
    screenAlt: "Rehabefy app showing today's habits: sleep, breathing, hydration, cycling, walking and reading",
    description:
      'Rehabefy is a digital rehabilitation and wellness platform designed to connect users with physiotherapists, fitness professionals, and recovery services. It aims to make physiotherapy access, exercise guidance, recovery tracking, and healthy habit-building more convenient through technology.',
    features: [
      'Discover physiotherapists and fitness professionals.',
      'Access online consultations and rehabilitation services.',
      'Explore clinic and home-visit physiotherapy options.',
      'Track health habits and recovery progress.',
      'Build healthier routines through digital engagement.',
    ],
    cta: 'Download Rehabefy',
    playStore: true,
    status: 'Live',
    short: 'Rehabilitation, physiotherapy & wellness',
  },
  {
    id: 'myhealthbook',
    name: 'MyHealthBook',
    category: 'Personal Health Management',
    tagline: 'Your Health Information. Organized.',
    icon: 'healthbook',
    screen: myhealthbookScreen,
    screenAlt: 'MyHealthBook app home screen showing medicines and latest readings',
    description:
      'MyHealthBook is a personal health management platform designed to help users organize important health information in one convenient place. It aims to simplify the tracking of health records, vital measurements, medications, and medical history, helping individuals maintain a more structured view of their health over time.',
    features: [
      'Organize personal medical records and health history.',
      'Record and monitor blood pressure and blood glucose readings.',
      'Keep track of medications and health-related information.',
      'Maintain health information for easier reference.',
      'Support more informed conversations with healthcare professionals.',
    ],
    cta: 'Discover MyHealthBook',
    reverse: true,
    status: 'Live',
    short: 'Personal health records & management',
  },
  {
    id: 'nukkd',
    name: 'NUKKD',
    category: 'Hyperlocal Action & Community Network',
    tagline: 'Your Neighbourhood. Your Network.',
    icon: 'nukkd',
    screen: nukkdScreen,
    screenAlt: 'NUKKD app home screen with Buy/Sell, Shops, Community and Activities',
    description:
      "NUKKD is an upcoming hyperlocal digital platform designed to bring people, local communities, businesses, and nearby opportunities closer together. Its vision is to make it easier for people to discover what's happening around them, participate in local activities, and engage with their neighbourhood.",
    features: [
      'Discover local activities and opportunities.',
      'Encourage neighbourhood-level participation.',
      'Connect people with relevant local communities.',
      'Help local businesses and initiatives gain visibility.',
      'Enable more meaningful hyperlocal engagement.',
    ],
    launchingSoon: true,
    status: 'Launching Soon',
    short: 'Hyperlocal action & community network',
  },
];

export const WHY_ITEMS = [
  { title: 'Purpose-Driven Innovation', text: 'Products designed around real-world user needs.' },
  { title: 'User-Centric Experiences', text: 'Intuitive interfaces built for everyday use.' },
  { title: 'A Multi-Product Approach', text: 'Distinct digital platforms under one technology company.' },
  { title: 'Scalable Digital Vision', text: 'A growing product portfolio designed for future expansion.' },
];

export const PARTNER_TYPES = [
  'Healthcare organizations',
  'Technology providers',
  'Wellness brands',
  'Local businesses',
  'Distribution partners',
];

export const INTEREST_OPTIONS = [
  'Healthcare & rehabilitation (Rehabefy)',
  'Health records & wellness (MyHealthBook)',
  'Local business & community (NUKKD)',
  'Technology or integration',
  'Distribution',
  'Something else',
];
