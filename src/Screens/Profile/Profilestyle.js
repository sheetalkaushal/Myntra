import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
export const style = StyleSheet.create({
  viewmy: {
    flexDirection: "row",
    backgroundColor: "rgba(60,60,60,0.1)",
    justifyContent: "flex-start",
    height: moderateScale(77),
  },
  btnstyle2: {
    flexDirection: "row",
    flex: 0.3,
    borderColor: "rgba(60,60,60,0.3)",
    borderRadius: 22,
    borderWidth: 1,
    padding: 8,
    margin: 4,
    alignItems: "center",
    backgroundColor: "white",
    height: moderateScale(40),
    marginTop: moderateScale(20),
  },
  viewstyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: moderateScale(20),
    color: "black",
    fontWeight: "bold",
    marginTop: moderateScale(12),
  },
  becomeinside: {
    flexDirection: "row",
    marginLeft: moderateScale(3),
    alignItems: "center",
  },
  btninside: {
    flexDirection: "row",
    flex: 0.4,
    borderColor: "rgba(60,60,60,0.3)",
    borderWidth: 1,
    padding: 3,
    margin: 2,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-evenly",
  },
  insidebtn: {
    flexDirection: "row",
    marginTop: moderateScale(20),
    justifyContent: "space-around",
  },
  crown: {
    color: "rgba(60,60,60,0.6)",
    marginLeft: 8,
  },
  borderline: {
    height: moderateScale(35),
    backgroundColor: "rgba(60,60,60,0.1)",
    marginTop: moderateScale(14),
    marginHorizontal: moderateScale(20),
  },
  logstyle: {
    height: moderateScale(180),
    backgroundColor: "rgba(60,60,60,0.1)",
    marginTop: moderateScale(14),
    marginHorizontal: moderateScale(20),
  },
  shopcontent: {
    fontWeight: "bold",
    margin: moderateScale(17),
    fontSize: 16,
  },
  iconw: {
    width: 30,
    height: 30,
  },
  basecontent: {
    fontWeight: "700",
  },
  namstyle: {
    fontWeight: "600",
    fontSize: 18,
  },
  itemstyle: {
    height: 60,
    width: 60,
    marginHorizontal: moderateScale(20),
  },
  itemcontent: {
    marginLeft: moderateScale(20),
    marginBottom: moderateScale(16),
  },
  
});
