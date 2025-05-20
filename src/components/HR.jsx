import { View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { scale, verticalScale } from 'react-native-size-matters'

const HR = ({ width = "40%", height = verticalScale(2), color = Colors.DEACTIVE }) => {
    return (
        <View style={{ width: width, backgroundColor: color, height: height, }} />
    )
}

export default HR
