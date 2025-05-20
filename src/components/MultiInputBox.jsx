import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../constants/Colors';
import Aminity from './Aminity';
import InputWithLabel from './InputWithLabel';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'

const MultiInputBox = ({ label }) => {
    const [items, setItems] = useState([]);
    const [amenityName, setAmenityName] = useState('');

    const handleAddAmenity = () => {
        const trimmed = amenityName.trim();
        if (trimmed !== '') {
            setItems(prev => [...prev, trimmed]);
            setAmenityName('');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <View style={styles.inputArea}>
                <View style={styles.amenityList}>
                    {items.map((amenity, index) => (
                        <Aminity
                            key={`${amenity}-${index}`}
                            label={amenity}
                            onRemove={() => {
                                setItems(prevItems =>
                                    prevItems.filter((_, i) => i !== index)
                                );
                            }}
                        />
                    ))}
                </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <InputWithLabel
                    label={"Name"}
                    placeholder={"Enter amenity name"}
                    value={amenityName}
                    onChangeText={setAmenityName}
                />
                <TouchableOpacity style={styles.btn} onPress={handleAddAmenity}>
                    <MaterialIcons
                        name="add"
                        size={26}
                        color={Colors.WHITE}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MultiInputBox;

const styles = StyleSheet.create({
    container: {
        marginVertical: verticalScale(10),
        paddingHorizontal: moderateScale(10),
    },
    label: {
        marginBottom: verticalScale(5),
        color: Colors.LABEL,
        fontWeight: '500',
    },
    inputArea: {
        backgroundColor: Colors.WHITE,
        padding: scale(20),
        borderRadius: scale(12),
        minHeight: verticalScale(60),

    },
    amenityList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    btn: {
        marginTop: verticalScale(30),
        marginStart: moderateScale(18),
        backgroundColor: Colors.THEME_TRANSPARENT,
        borderRadius: scale(100),
        justifyContent: 'center',
        alignItems: 'center',
        padding: scale(5)
    },
});
