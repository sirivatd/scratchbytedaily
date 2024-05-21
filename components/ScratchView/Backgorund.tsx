import {DataSourceParam, Image, SharedValueType, SkSize, rect, useImage} from '@shopify/react-native-skia';
import {useDerivedValue} from 'react-native-reanimated';

export const BackgroundImage = ({image, size}: {image: DataSourceParam; size: SharedValueType<SkSize>}) => {
  const skImage = useImage(image);
  const imageRect = useDerivedValue(() => {
    return rect(0, 0, size.value.width, size.value.height);
  }, [size]);

  return <Image image={skImage} rect={imageRect} fit={'cover'} />;
};
