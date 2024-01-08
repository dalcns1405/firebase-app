import React from "react";
import styles from "./Button.style"
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

const Button = ({ title, onPress, loading ,theme="primary"}) => {
    return (
        <TouchableOpacity style={styles[theme].container} onPress={onPress} disabled={loading} >
            {loading ? (

                <ActivityIndicator color="white" />
            ) :
                (
                    <View style={styles[theme].button_container}>
                        <Text style={styles.title} >{title} </Text>
                    </View>
                )}


        </TouchableOpacity>

    )

}
export default Button;

