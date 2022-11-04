import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {COLORS, SIZES, SHADOWS, assets} from "../constants";
import { CircleButton, RectButton } from './Button';
import { EthPrice, SubInfo, NFTTitle } from './SubInfo';

const NFTCard = ({data}) => {
  const navigation = useNavigation();
  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius:SIZES.font,
      marginBottom:SIZES.extraLarge,
      margin:SIZES.base,
      ...SHADOWS.dark


    }}>
      <View style={{width:"100%", height: 250}}>
        <Image
          source={data.image}
          resizeMode= "cover"
          style={styles.mode}
        />
        <CircleButton imgUrl= {assets.heart}/>
      </View>

      <SubInfo/>

      <View style={{width:"100%", padding:SIZES.font}}>
          <NFTTitle
              title={data.name}
              subTitle={data.creator}
              titleSize={SIZES.large}
              subTitleSize={SIZES.small}
          />
          <View style={{
            marginTop:SIZES.font,
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center"
          }}>
            <EthPrice price= {data.price}/>
            <RectButton
                minWidth={120}
                fontSize={SIZES.font}
                handlePress={() => navigation.navigate("Details", {data})}
            />

          </View>
      </View>
    </View>
  )
}

export default NFTCard;

const styles = StyleSheet.create({
  mode:{
    width:"100%",
    height:"100%",
    borderTopLeftRadius:SIZES.font,
    borderBottomRightRadius:SIZES.font
  }
});