import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
export const style = StyleSheet.create({
    homestyle:{
        marginTop:moderateScale(12),
        width:70,
        height:70,
       marginHorizontal:moderateScale(7),
       shadowOpacity: 0.5,
       shadowRadius: 3,
       backgroundColor:'rgba(199, 222, 235, 1)',
       borderRadius:moderateScale(27),
    },
    contenthomestyle:{
        marginLeft:moderateScale(20),
        marginBottom:moderateScale(16),  
    },
});