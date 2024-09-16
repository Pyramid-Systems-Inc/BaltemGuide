import {AnimationObject} from 'lottie-react-native';

export interface OnboardingData {
    id: number;
    animation: AnimationObject;
    text: string;
    textColor: string;
    backgroundColor: string;
}

const data: OnboardingData[] = [
    {
        id: 1,
        animation: require('../assets/animations/Lottie1.json'),
        text: 'ابحث وجد كل الأماكن التي تريدها بسهولة',
        textColor: '#66c398',
        backgroundColor: '#394c8e',
    },
    {
        id: 2,
        animation: require('../assets/animations/Lottie2.json'),
        text: 'شاهد تقييمات الأماكن وتعرف على تجارب الآخرين',
        textColor: '#1e2169',
        backgroundColor: '#bae4fd',
    },
    {
        id: 3,
        animation: require('../assets/animations/Lottie3.json'),
        text: 'مكان غير موجود؟ أضفه بنفسك وشاركه مع الآخرين',
        textColor: '#F15937',
        backgroundColor: '#faeb8a',
    },
];

export default data;