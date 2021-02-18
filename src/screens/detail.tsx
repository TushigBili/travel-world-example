import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LeftIcon } from '../components';

export const TravelDetail: React.FC<any> = ({ route }) => {
    const { id, title, uri, description } = route.params;
    const navigation = useNavigation();

    const styles = StyleSheet.create({
        container: {
            flex: 1
        }
    })

    return (
        <View style={[styles.container]}>
            <Image style={[StyleSheet.absoluteFillObject, { resizeMode: 'cover' }]} source={{ uri }} />
            <SafeAreaView style={{ flex: 1, zIndex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <LeftIcon height={25} width={25} color={'#FFFFFF'} />
                    </TouchableOpacity>
                    <Text style={{ padding: 10, color: 'white', fontSize: 20, fontWeight: '700' }}>{title}</Text>
                </View>
                <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center'}]}>
                    <Text style={{ padding: 20, color: 'white', fontSize: 18, fontWeight: '400', textAlign: 'justify' }}>{description}</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}