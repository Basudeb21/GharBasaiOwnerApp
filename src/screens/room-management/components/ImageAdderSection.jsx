import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Alert,
    PermissionsAndroid,
    Platform,
} from 'react-native';
import React, { useState } from 'react';
import ImageUploaderCard from '../../../components/ImageUploaderCard';
import Colors from '../../../constants/Colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure this is installed

const ImageAdderSection = () => {
    const [images, setImages] = useState([]);

    const requestGalleryPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                if (Platform.Version >= 33) {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
                        {
                            title: "Images Permission",
                            message: "App needs access to your images to upload.",
                            buttonNeutral: "Ask Me Later",
                            buttonNegative: "Cancel",
                            buttonPositive: "OK"
                        }
                    );
                    return granted === PermissionsAndroid.RESULTS.GRANTED;
                } else {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                        {
                            title: "Storage Permission",
                            message: "App needs access to your storage to upload images.",
                            buttonNeutral: "Ask Me Later",
                            buttonNegative: "Cancel",
                            buttonPositive: "OK"
                        }
                    );
                    return granted === PermissionsAndroid.RESULTS.GRANTED;
                }
            } catch (err) {
                console.warn(err);
                return false;
            }
        }
        return true; // iOS auto-grants
    };

    const pickImage = async () => {
        const hasPermission = await requestGalleryPermission();

        if (!hasPermission) {
            Alert.alert("Permission Denied", "Please allow gallery access to upload images.");
            return;
        }

        launchImageLibrary({ mediaType: 'photo', selectionLimit: 0 }, response => {
            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.errorCode) {
                console.log("ImagePicker Error: ", response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                const newImages = response.assets.map(asset => asset.uri);
                setImages(prev => [...prev, ...newImages]);
            }
        });
    };

    const handleRemoveImage = (indexToRemove) => {
        setImages(prevImages => prevImages.filter((_, index) => index !== indexToRemove));
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputArea}>
                <ScrollView horizontal contentContainerStyle={styles.imageRow}>
                    {images.map((uri, index) => (
                        <View key={index} style={styles.imageWrapper}>
                            <ImageBackground
                                source={{ uri }}
                                style={styles.image}
                                imageStyle={{ borderRadius: scale(8) }}
                            >
                                <TouchableOpacity
                                    style={styles.removeBtn}
                                    onPress={() => handleRemoveImage(index)}
                                >
                                    <Icon name="close" size={20} color="white" />
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <ImageUploaderCard onPress={pickImage} />
        </View>
    );
};

export default ImageAdderSection;

const styles = StyleSheet.create({
    container: {
        marginVertical: verticalScale(10),
        paddingHorizontal: moderateScale(10),
    },
    inputArea: {
        backgroundColor: Colors.WHITE,
        padding: scale(20),
        borderRadius: scale(12),
        minHeight: verticalScale(60),
    },
    imageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: scale(5),
    },
    imageWrapper: {
        position: 'relative',
        marginRight: scale(10),
        borderWidth: 2,
        borderColor: Colors.THEME,
        borderRadius: scale(8),
    },
    image: {
        width: scale(100),
        height: scale(100),
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    removeBtn: {
        backgroundColor: Colors.THEME_TRANSPARENT,
        borderRadius: scale(100),
        padding: scale(2),
        margin: scale(4),
    },
});
