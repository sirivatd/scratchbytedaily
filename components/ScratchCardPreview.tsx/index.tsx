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
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
            <Text fontWeight={'bold'} style={{ color: 'black', opacity: 0.7 }}>Win probability: 67%</Text>
            <View style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5, backgroundColor: 'black', borderRadius: 12 }}>
            <Text style={{color: 'white'}}>4 day streak</Text>
              </View>
            </View>
           <View style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around',height: 325, opacity: 0.7 }}>
          {data.map((cell, index) => (
            <View key={index} style={{ width: 60, height: 60, backgroundColor: 'white', margin: 10, borderRadius: 12, overflow: 'hidden' }} onTouchEndCapture={() => console.log(index + " index pressed")}>
              <Image source={{ uri: cell.isHidden ? 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/hidden.png?alt=media&token=b1c10a9c-305f-4fcd-94fd-13f48a7c8df5' : cell.image }} style={{ width: '100%', height: '100%' }} />
            </View>
            ))}
           </View>
           </View>

              )
}

export default ScratchCardPreview;
