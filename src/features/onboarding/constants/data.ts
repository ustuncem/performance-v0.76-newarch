import i18n from '#lang/i18n';

import { OnboardingData } from '../types';

export const ONBOARDING_DATA: OnboardingData[] = [
  {
    id: 0,
    stepName: 'welcome',
    title: 'Test',
    description: 'Testd',
    image: require('#assets/lottie/rocket.json'),
    ctaTitle: 'Test',
  },
  {
    id: 1,
    stepName: 'location',
    title: 'Test1',
    description: 'Test1D',
    image: require('#assets/lottie/rocket.json'),
    ctaTitle: 'Test1',
  },
  {
    id: 2,
    stepName: 'qrCode',
    title: 'Test2',
    description: 'Test2d',
    image: require('#assets/lottie/rocket.json'),
    ctaTitle: 'Test2',
  },
  {
    id: 3,
    stepName: 'maps',
    title: 'Test3',
    description: 'Test3D',
    image: require('#assets/lottie/rocket.json'),
    ctaTitle: 'Test3',
  },
  {
    id: 4,
    stepName: 'notifications',
    title: 'Test4',
    description: 'Test4D',
    image: require('#assets/lottie/rocket.json'),
    ctaTitle: 'Test4',
  },
  {
    id: 5,
    stepName: 'ready',
    title: 'Test5',
    description: 'Test5D',
    image: require('#assets/lottie/rocket.json'),
    ctaTitle: 'Test5',
  },
];
