import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    badge: {
        marginLeft: 10,
        backgroundColor: '#333333',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 10,
    },
    count: {
        color: '#D9D9D9',
        fontWeight: 'bold',
    },
});