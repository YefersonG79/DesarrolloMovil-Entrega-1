import { DefaultTheme } from "@react-navigation/native";
import colors from "./colors.js";

const CustomTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: colors.gradiantePrimario,
        card: colors.variente1,
        text: colors.texto,
        border: colors.variente2,
        notification: colors.success,
    }
};

export { CustomTheme };