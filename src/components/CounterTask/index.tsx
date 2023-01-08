import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
    description: string;
    descriptionColor: | '#4EA8DE' | '#8284FA';
    count: number;
}

export function CounterTask({description, descriptionColor, count}: Props) {

    return (
        <View style={styles.container}>
            <Text style={[styles.description, {color: descriptionColor}]} >
                {description}
            </Text>
            <View style={styles.badge}>
                <Text style={styles.count}>
                    {count}
                </Text>
            </View>
        </View>
    );
}
