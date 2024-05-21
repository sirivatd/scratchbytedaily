import { useState } from "react";
import { Text, View } from "tamagui";
import { Image, Adapt, Button, Input, Label, Popover, XStack, YStack } from "tamagui";
import './style/index.css';
// import placeholderImage from '../../assets/img/placeholder.png';

import ScratchView from "../ScratchView";

type ScratchCardProps = { 
data: Array<ScratchCardCell>;
}

const ScratchCard = (props: ScratchCardProps) => {
    const { data } = props;
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);
    return (
        <Popover
      >
           <View style={{ padding: 15 }}>
           <View style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around',height: 325 }}>
          {data.map((cell, index) => (
             <Popover.Trigger key={index} asChild>
            <View style={{ width: 60, height: 60, backgroundColor: 'gray', margin: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }} onTouchEndCapture={() =>setSelectedIndex(index)}>
              <Image source={{ uri: cell.isHidden ? 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/hidden.png?alt=media&token=b1c10a9c-305f-4fcd-94fd-13f48a7c8df5' : cell.image }}
              style={{ width: '90%', height: '90%' }} />
            </View>
            </Popover.Trigger>
            ))}
           </View>
           </View>
           <Adapt when="sm" platform="touch">
        <Popover.Sheet modal disableDrag>
          <Popover.Sheet.Frame padding="$4">
            <Adapt.Contents />
          </Popover.Sheet.Frame>
          <Popover.Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Popover.Sheet>
      </Adapt>
           <Popover.Content
        borderWidth={1}
        borderColor="$borderColor"
        enterStyle={{ y: -10, opacity: 0 }}
        exitStyle={{ y: -10, opacity: 0 }}
        elevate
        animation={[
          'quick',
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
      >
        <Popover.Arrow borderWidth={1} borderColor="$borderColor" />

        <YStack space="$3" justifyContent="space-between">
          <View style={{ width: '100%', height: '75%', backgroundColor: 'white' }}>
            {selectedIndex !== -1 &&
            <ScratchView coverImage={'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/hidden.png?alt=media&token=b1c10a9c-305f-4fcd-94fd-13f48a7c8df5'}
            rewardImage={data[selectedIndex].image || 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/bs_part_3.png?alt=media&token=0c226772-91ce-4691-a7a9-eb9c3b047eed'}
            canvasStyles={{ width: '100%', height: '100%'}}/>}
          </View>

          <Popover.Close asChild>
            <Button
              size="$3"
              onPress={() => {
                /* Custom code goes here, does not interfere with popover closure */
              }}
            >
              Go back
            </Button>
          </Popover.Close>
        </YStack>
      </Popover.Content>
           </Popover>
    )
}

export default ScratchCard;
