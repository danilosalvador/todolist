import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',        
        backgroundColor: '#262626',
        padding: 10,
        marginBottom: 8,
        borderRadius: 5,
        borderColor: '333333',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    done: {
        padding: 10,
    },
    descriptionCheck: {
        color: '#808080',
        fontSize: 14,
        textDecorationLine: 'line-through',
    },
    descriptionUncheck: {
        flex: 1,
        color: '#F2F2F2',
        fontSize: 14,
    },
    trash: {
        padding: 10,
    }
});
