import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {FontAwesome5, AntDesign} from '@expo/vector-icons';
import styles from './styles/NavigationButtonStyle'

const NavegationButton = ({onPressHome, onPressChat, onPressProfile}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <AntDesign name='home' size={24} color={'#fff'} onPress={onPressHome} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <FontAwesome5 name='comment' size={24} color={'#fff'} onPress={onPressChat}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <AntDesign name='user' size={24} color={'#fff'} onPress={onPressProfile} />
            </TouchableOpacity>
        </View>
    )
}

export default NavegationButton;