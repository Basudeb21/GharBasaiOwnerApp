import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from "react-native/Libraries/NewAppScreen";

const CalanderStyles = StyleSheet.create({
    calander: {
        borderRadius: scale(10),
        elevation: scale(4),
        margin: scale(20)
    }
});

export default CalanderStyles;