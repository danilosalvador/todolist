import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        height: 54,
        backgroundColor: '#262626',
        color: '#F2F2F2',
        borderRadius: 5,
        padding: 16,
        marginRight: 10,        
    },
    button: {
        width: 54,
        height: 54,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E6F9F',
    }
});
