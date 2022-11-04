import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {COLORS, SIZES, FONTS, SHADOWS} from "../constants";

 export const CircleButton = ({imgUrl, handlePress, ...props}) => {
    return (
        <TouchableOpacity style={styles.circBtn} onPress={handlePress}>
            <Image source={imgUrl}
            resizeMode="contain"
            style={{width:24, height:24}}
            />
        </TouchableOpacity>
    
  )
}

 export const RectButton = ({minWidth, fontSize, handlePress, ...props}) => {
  return (
    <TouchableOpacity style={styles.circBtn2} onPress={handlePress}>
        
        <Text style = {styles.rectBtnText}>Place a bid</Text>
    </TouchableOpacity>

  )
}


const styles = StyleSheet.create({
    circBtn:{
    width:40,
    height:40,
    backgroundColor:COLORS.white,
    position: "absolute",
    borderRadius:SIZES.extraLarge,
    alignItems:"center",
    justifyContent:"center",
    ...SHADOWS.light,
    right:10,
    top:10


    },
    circBtn2:{
    backgroundColor:COLORS.primary,
    borderRadius:SIZES.extraLarge,
    // minWidth:minWidth,
    padding:SIZES.small,
    minWidth:120,
    fontSize:SIZES.font,
    // ...props
   

    },
    rectBtnText:{
      textAlign:"center",
      fontFamily:FONTS.semiBold,
      color:COLORS.white,
      fontSize:SIZES.font
    }
});  

