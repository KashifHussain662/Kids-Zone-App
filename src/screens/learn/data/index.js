import {Image} from 'react-native';
import {Images} from '../../../theme';

export const data = [
  {
    id: 1,
    title: 'Alphabet',
    Image: <Image source={Images.icAlphabet} style={{height: 62, width: 85}} />,
    icon: <Image source={Images.icRight} style={{height: 40, width: 43}} />,
  },
  {
    id: 2,
    title: 'Numbers',
    Image: <Image source={Images.icNumber} style={{height: 62, width: 85}} />,
    icon: <Image source={Images.icRight} style={{height: 40, width: 43}} />,
  },
  {
    id: 3,
    title: 'Animals',
    Image: <Image source={Images.icAnimals} style={{height: 62, width: 85}} />,
    icon: <Image source={Images.icRight} style={{height: 40, width: 43}} />,
  },
  {
    id: 4,
    title: 'Colors',
    Image: <Image source={Images.icColors} style={{height: 62, width: 85}} />,
    icon: <Image source={Images.icRight} style={{height: 40, width: 43}} />,
  },
  {
    id: 5,
    title: 'Vagitables',
    Image: (
      <Image source={Images.icVegetables} style={{height: 62, width: 85}} />
    ),
    icon: <Image source={Images.icRight} style={{height: 40, width: 43}} />,
  },
  {
    id: 6,
    title: 'Plants',
    Image: <Image source={Images.icPlants} style={{height: 62, width: 85}} />,
    icon: <Image source={Images.icRight} style={{height: 40, width: 43}} />,
  },
  {
    id: 7,
    title: 'Fruits',
    Image: <Image source={Images.icFruits} style={{height: 62, width: 85}} />,
    icon: <Image source={Images.icRight} style={{height: 40, width: 43}} />,
  },
  {
    id: 8,
    title: 'Days',
    Image: <Image source={Images.icDays} style={{height: 62, width: 85}} />,
    icon: <Image source={Images.icRight} style={{height: 40, width: 43}} />,
  },
  {
    id: 9,
    title: 'Months',
    Image: <Image source={Images.icMonths} style={{height: 62, width: 85}} />,
    icon: <Image source={Images.icRight} style={{height: 40, width: 43}} />,
  },
  {
    id: 10,
    title: 'Tables',
    Image: <Image source={Images.icTables} style={{height: 62, width: 85}} />,
    icon: <Image source={Images.icRight} style={{height: 40, width: 43}} />,
  },
];
