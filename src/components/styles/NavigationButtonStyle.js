import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: '#0077B6',
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        width: '90%',
        elevation: 50
    },
    button: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 8

    }
})