import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D',
    },
    contentLogo: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginTop: 44,
    },
    contentList: {
        flex: 1,
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#1A1A1A'
    },
    counter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 20,
    },
    line: {
        height: 1,
        backgroundColor: '#333333',
        marginBottom: 20,
    }
});
