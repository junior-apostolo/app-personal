import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle, ImageStyle, TextStyle, TouchableOpacityProps } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe'; 
import { colors } from '@/theme/colors';
import { Link } from 'expo-router';

interface CardProps extends TouchableOpacityProps {
    imageUri: string;
    text: string;
    onPress?: () => void;
    buttonText?: string;
    isYouTube?: boolean;  
    youTubeVideoId?: string; 
    cardStyle?: ViewStyle;
    textStyle?: TextStyle;
    imageStyle?: ImageStyle;
    buttonStyle?: ViewStyle;
    buttonTextStyle?: TextStyle;
}

export const Card: React.FC<CardProps> = ({
    imageUri,
    text,
    onPress,
    buttonText,
    isYouTube = false,  
    youTubeVideoId, 
    cardStyle,
    textStyle,
    imageStyle,
    buttonStyle,
    buttonTextStyle,
}) => {

    return (
        <View style={[styles.card, cardStyle]}>
            {isYouTube  && youTubeVideoId != undefined && youTubeVideoId? (
                <YoutubePlayer
                    height={200}
                    width="100%"
                    play={false} 
                    videoId={youTubeVideoId}
                />
            ) : (
                <Image 
                    source={{ uri: imageUri }}
                    style={[styles.image, imageStyle]}
                />
            )}
         
            <View style={[styles.cardTextContainer, !buttonText && { justifyContent: 'center' }]}>
                <Text style={[styles.cardText, textStyle]}>{text}</Text>
                {buttonText && onPress && (
                    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
                        <Text style={[styles.buttonText, buttonTextStyle]}>{buttonText}</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.blue_750,
        width: '90%',
        alignItems: 'center',
        marginBottom: 30,
        borderRadius: 10,
        paddingBottom: 15,
    },
    image: {
        width: '100%',
        height: 150,
        marginBottom: 10,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        resizeMode: 'stretch',
    },
    cardTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 50,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.white,
        marginLeft: 10,
    },
    button: {
        backgroundColor: colors.green_100,
        padding: 10,
        borderRadius: 20,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        width: 70,
    },
    buttonText: {
        color: colors.white,
        fontWeight: 'bold',
    },
});