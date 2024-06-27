import {View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, ScrollView, Keyboard} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

export default function HomePage() {
    const date = new Date();
    
    const [text, setText] = useState("");

    const [tasks, setTasks] = useState([]);

    const [editIndex, setEditIndex] = useState(null);

    const handleAddTask = () => {
        if (text.length === 0) {
            alert("Please enter a task before adding");
            return null;
        }

        if (editIndex !== null) {
            const editTask = [...tasks];

            editTask[editIndex] = text;
    
            setTasks(editTask);
            setEditIndex(null);
        } else {
            setTasks((prev) => [...prev, text]);
        }

        setText("");
    }

    function handleDeleteTask(index) {
        const updateTasks = [...tasks];

        updateTasks.splice(index, 1)

        setTasks(updateTasks)
    }

    function handleEditTask(eachTask, index) {
        setText(eachTask);
        setEditIndex(index);
    }

    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.header}>
            <View style={styles.userGreeting}>
              <Text style={{ color: "white", fontSize: 22, marginBottom: 3 }}>
                Good morning
              </Text>
              <Text
                style={{ color: "white", fontSize: 25, fontWeight: "bold" }}
              >
                Nnabugwu
              </Text>
              <View style={styles.todaysDate}>
                <Text style={{ color: "white" }}>TODAY TASK TO DO</Text>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  {date.toDateString().toUpperCase()}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.todoList}>
            <View style={{ width: "88%", height: "100%", alignSelf: "center" }}>
              <Text style={styles.todoListHeader}>CREATE TO DO LIST</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Task"
                onChangeText={(taskInput) => setText(taskInput)}
                maxLength={40}
                value={text}
              />
              <TouchableOpacity style={styles.taskBtn} onPress={() => { handleAddTask(); Keyboard.dismiss() }}>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: 500,
                  }}
                >
                {editIndex !== null? "Update Task" : "Add Task"}
                </Text>
              </TouchableOpacity>
              <View style={{flex: 1, marginTop: 20 }}>
                <ScrollView style={{flex: 1, marginTop: 7}}>
                  {tasks.map((eachTask, index) => {
                    return (
                      <View style={{height: 40, flexDirection: 'row', justifyContent: 'space-between'}} key={index}>
                        <Text style={{fontSize: 18}}>{eachTask}</Text>
                        <View style={{flexDirection: 'row', gap: 13}}>
                          <TouchableOpacity onPress={() => handleEditTask(eachTask, index)}>
                            <Text style={{fontSize: 18, fontWeight: 500, color: 'green'}}>Edit</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => handleDeleteTask(index)}>
                            <MaterialIcons name="delete" size={24} color="rgb(205, 32, 19)" />
                          </TouchableOpacity>
                        </View>
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    //styling of header section
    header: {
        height: 195,
        justifyContent: 'center'
    },
    userGreeting: {
        height: '70%',
        width: '88%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    todaysDate: {
        flexDirection: 'row',
        marginTop: 38,
        gap: 50
    },

    //styling of todoList section
    todoList: {
        height: '100%',
        backgroundColor: '#fff',
        borderTopStartRadius: 40,
        borderTopEndRadius: 40
    },
    todoListHeader: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 30
    },
    textInput: {
        borderWidth: 1,
        padding: 15,
        borderRadius: 5,
        borderColor: 'gray',
        fontSize: 16
    },
    taskBtn: {
        backgroundColor: 'rgb(127, 0, 255)',
        marginTop: 12,
        height: 50,
        justifyContent: 'center',
        borderRadius: 7
    }
});