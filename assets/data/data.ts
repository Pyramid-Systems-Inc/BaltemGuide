import { images } from '..';

const { loc1, loc2, loc3, loc4, locF1, locF2, locF3 }: { [key: string]: any } =
  images;

interface WelcomeScreenData {
  title: string;
  subtitle: string;
}

export const welcomeScreenData: WelcomeScreenData = {
  title: `Find Your Services Around You`,
  subtitle: `Please Sign in to view personalized recommendations`,
};

export const locData: string[] = [
  '1',
  '2',
  '3',
  '4',
];

export const provincesData: string[] = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];

interface LocFullDataItem {
  name: string;
  subject: string;
  image: any; // Assuming image can be any type, adjust if specific type is known
}

export const locFullData: LocFullDataItem[] = [
  {
    name: 'Loc 1',
    subject: 'Type',
    image: loc1,
  },
  {
    name: 'Loc 2',
    subject: 'Type',
    image: loc2,
  },
  {
    name: 'Loc 3',
    subject: 'Type',
    image: loc4,
  },
  {
    name: 'Loc 4',
    subject: 'Type',
    image: loc3,
  },
];

interface LocFFullDataItem {
  name: string;
  field: string;
  description: string;
  rating: string;
  reviews: string;
  image: any; // Assuming image can be any type, adjust if specific type is known
}

export const locFFullData: LocFFullDataItem[] = [
  {
    name: 'LocF 1',
    field: 'Type',
    description:
      'Something Something.',
    rating: '4.5',
    reviews: '413',
    image: locF1,
  },
  {
    name: 'LocF 2',
    field: 'Type',
    description:
      'Something Something',
    rating: '4.1',
    reviews: '354',
    image: locF2,
  },
  {
    name: 'LocF 3',
    field: 'Type',
    description:
      'Something Something',
    rating: '3.0',
    reviews: '745',
    image: locF3,
  },
  {
    name: `LocF 4`,
    field: 'Type',
    description: 'Something Something',
    rating: '4.1',
    reviews: '354',
    image: locF1,
  },
];

export const type2Filters: string[] = ['1', '2', '3'];

export const typeFilters: string[] = [
  '1',
  '2',
  '3',
  '4',
  '5',
];
