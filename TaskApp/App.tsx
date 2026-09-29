import { useState } from 'react';

import {

  View,

  Text,

  TextInput,

  TouchableOpacity,

  StyleSheet,

  FlatList,

} from 'react-native';

import TaskItem from './Components/TaskItem';

//FlatList props

type FlatListProps = {

  item: string;

  index: number;

};

function App() {

  const [task, setTask] = useState<string>('');

  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = () => {

    //  tasks.push(task);

    // setTask(task);

    if (task !== '') {

      setTasks([...tasks, task]);

      setTask('');

    }

  };

  const handleDeleteTask = (index: number): void => {

    const updatedTasks = tasks.filter((_, i) => i !== index);

    setTasks(updatedTasks);

  };

  return (
<View style={styles.container}>
<Text style={styles.heading}>Task App</Text>
<View style={styles.inputContainer}>
<TextInput

          placeholder="Enter a task"

          value={task}

          onChangeText={setTask}

          style={styles.input}

        />
<TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
<Text style={styles.addButtonText}>+</Text>
</TouchableOpacity>
</View>
<View style={styles.tasksContainer}>

        {/* Task list viewing*/}
<FlatList

          data={tasks}

          renderItem={({ item, index }: FlatListProps) => (
<TaskItem item={item} index={index} onDelete={handleDeleteTask} />

          )}

          keyExtractor={(item, index) => index.toString()}

        />
</View>
</View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    padding: 20,

  },

  heading: {

    fontSize: 24,

    marginBottom: 10,

  },

  input: {

    flex: 1,

    height: 40,

    borderColor: 'gray',

    borderWidth: 1,

    paddingHorizontal: 10,

  },

  inputContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  addButton: {

    width: 40,

    height: 40,

    backgroundColor: '#333',

    justifyContent: 'center',

    alignItems: 'center',

  },

  addButtonText: {

    fontSize: 24,

    color: '#fff',

  },

  tasksContainer: {

    marginTop: 20,

  },

  taskItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

    paddingVertical: 6,

    paddingHorizontal: 10,

    backgroundColor: '#f2f2f2',

    borderRadius: 4,

  },

  taskText: {

    fontSize: 18,

  },

  deleteButton: {

    backgroundColor: '#e53935',

    justifyContent: 'center',

    alignItems: 'center',

    borderRadius: 4,

    width: 20,

    height: 20,

  },

  deleteButtonText: {

    color: '#fff',

    fontWeight: 'bold',

  },

});

export default App;