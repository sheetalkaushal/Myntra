import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
export const style = StyleSheet.create({
  container1: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: moderateScale(12),     
  },
  container2: {
    flex: 0.6,
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    marginRight: moderateScale(10),
  },
  main: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ebebe0",
    marginTop: moderateScale(23),
    paddingBottom: 9,
    marginBottom: moderateScale(23),
    top: moderateScale(18),
  },
});
