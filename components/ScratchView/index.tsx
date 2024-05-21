import {Canvas, Group, Image, rrect, useImage} from '@shopify/react-native-skia';
import {GestureDetector, GestureHandlerRootView} from 'react-native-gesture-handler';
import { Text } from 'tamagui';
import {useDerivedValue} from 'react-native-reanimated';
import {BackgroundImage} from './Backgorund';
import {CoverImage} from './CoverImage';
import {Glow} from './Glow';
import {ScratchCardProps} from './types';
import {useScratch} from './useScratch';
import {processPropsForScratchHandler} from './utils';

const ScratchView = (props: ScratchCardProps) => {
  const {canvasSize, path, transform, origin, scratchHandler, imageRect, blurRadius, strokeWidth} = useScratch(
    processPropsForScratchHandler(props),
  );
  const rewardImagae = useImage(props.rewardImage);
  const r = props.borderRadius ?? (props.applyGlow ? 16 : 0);
  const clipRect = useDerivedValue(() => rrect(imageRect.value, r, r), [imageRect]);

  return (
    <GestureHandlerRootView>
    <GestureDetector gesture={scratchHandler}>
      <Canvas onLayout={props.onLayout} onSize={canvasSize} style={props.canvasStyles}>
        {props.backgroundImage && <BackgroundImage size={canvasSize} image={props.backgroundImage} />}
        <Group origin={origin} transform={transform}>
          <Glow r={blurRadius} rrect={clipRect} props={props} />
          <Group clip={clipRect}>
            <Image fit={'cover'} image={rewardImagae} rect={imageRect} />
            <CoverImage
              applyShadow={props.applyShadowBeneathCover}
              shadowConfig={props.shadowConfig}
              strokeWidth={strokeWidth}
              path={path}
              image={props.coverImage}
              rect={imageRect}
            />
          </Group>
        </Group>
      </Canvas>
    </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default ScratchView;
