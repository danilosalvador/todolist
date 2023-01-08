import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
    onAdd: (description: string) => void;
}

export function NewTask({ onAdd }: Props) {
    const [description, setDescription] = useState('');

    function handleAdd() {
        onAdd(description);
        setDescription('');
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor='#808080'
                value={description}
                onChangeText={setDescription} />
            <TouchableOpacity
                style={styles.button}
                onPress={handleAdd}>
                <Image
                    source={require('../../../assets/plus.png')}/>
            </TouchableOpacity>
        </View>
    );
}
