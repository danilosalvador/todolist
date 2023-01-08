import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
    id: string;
    description: string;
    done: boolean;
    onChange: (id: string, done: boolean) => void;
    onRemove: (id: string) => void;
}

export function TodDo({ id, description, done, onChange, onRemove }: Props) {
    return (
        <View style={styles.container}>
            {done && (
                <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.done}
                        onPress={() => onChange(id, !done)}>
                        <Image
                            source={require('../../../assets/check.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.descriptionCheck}>
                        {description}
                    </Text>
                </View>
            )}
            {!done && (
                <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.done}
                        onPress={() => onChange(id, !done)}>
                        <Image
                            source={require('../../../assets/uncheck.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.descriptionUncheck}>
                        {description}
                    </Text>
                </View>
            )}
            <TouchableOpacity
                style={styles.trash}
                onPress={() => onRemove(id)}>
                <Image
                    source={require('../../../assets/trash.png')}/>
            </TouchableOpacity>
        </View>
    );
}
