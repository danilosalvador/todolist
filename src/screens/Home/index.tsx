import "react-native-get-random-values";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Alert, FlatList, Image, View } from "react-native";
import { CounterTask } from "../../components/CounterTask";
import { EmptyList } from "../../components/EmptyList";
import { NewTask } from "../../components/NewTask";
import { TodDo } from "../../components/ToDo";
import { styles } from "./styles";

type toDoItem = {
    id: string;
    description: string;
    done: boolean;
}

export function Home() {
    const [toDoList, setToDoList] = useState<toDoItem[]>([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalCompleted, setTotalCompleted] = useState(0);

    useEffect(() => {
        setTotalCompleted(toDoList.filter(item => item.done).length);
        setTotalItems(toDoList.length);
    }, [toDoList])

    function handleAdd(description: string) {
        if (!!description) {
            const newItem = {
                id: uuidv4(),
                description,
                done: false,
            };

            setToDoList(prevState => [...prevState, newItem]);
        }
    }

    function handleChange(id: string, done: boolean) {
        let list = [...toDoList];

        const index = list.findIndex(item => item.id === id);
        const item = list[index];

        list[index] = {...item, done};

        setToDoList(list);
    }

    function handleRemove(id: string) {
        Alert.alert('Remover', 'Deseja remover?', [
            {
                text: 'Sim',
                style: 'destructive',
                onPress: () => setToDoList(prevState => prevState.filter(item => item.id !== id)),
            },
            {
                text: 'Não',
                style: 'cancel',
            },
        ]);
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentLogo}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')}/>
            </View>
            <View style={styles.contentList}>
                <NewTask
                    onAdd={handleAdd}/>
                <View style={styles.counter}>
                    <CounterTask
                        description="Criadas"
                        descriptionColor="#4EA8DE"
                        count={totalItems} />
                    <CounterTask
                        description="Concluídas"
                        descriptionColor="#8284FA"
                        count={totalCompleted} />
                </View>
                <View style={styles.line} />
                <FlatList
                    data={toDoList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TodDo
                            id={item.id}
                            description={item.description}
                            done={item.done}
                            onChange={handleChange}
                            onRemove={handleRemove}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <EmptyList />
                    )}
                />
            </View>
        </View>
    );
}
