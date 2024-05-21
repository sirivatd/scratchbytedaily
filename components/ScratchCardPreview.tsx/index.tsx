import { Text, View } from "tamagui";
import { Image, Adapt, Button, Input, Label, Popover, XStack, YStack } from "tamagui";
// import placeholderImage from '../../assets/img/placeholder.png';
import ScratchView from "../ScratchView";

type ScratchCardPreviewProps = {
    data: Array<ScratchCardCell>;
}

const ScratchCardPreview = (props: ScratchCardPreviewProps) => {
    const { data } = props;
    return (

           <View style={{ padding: 15 }}>
           <Text style={{ marginBottom: 15 }}>Scratch card</Text>
           <View style={{ backgroundColor: 'darkgray', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around',height: 325, opacity: 0.7 }}>
          {data.map((cell, index) => (
            <View key={index} style={{ width: 60, height: 60, backgroundColor: 'blue', margin: 10, borderRadius: 12, overflow: 'hidden' }} onTouchEndCapture={() => console.log(index + " index pressed")}>
              <Image source={{ uri: cell.image }} style={{ width: '100%', height: '100%' }} />
            </View>
            ))}
           </View>
           </View>

              )
}

export default ScratchCardPreview;
