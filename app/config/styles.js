import { Platform } from "react-native";
import colors from "../config/colors.js";

export default {
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  colors,
};
