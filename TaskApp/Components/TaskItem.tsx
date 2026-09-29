import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  } from 'react-native';

import App from '../App';

type TaskItemProps = {

  item: string;

  index: number;

  onDelete: (index: number) => void;

};

const TaskItem = ({ item, index, onDelete }: TaskItemProps) => {

  return (
<View style={styles.taskItem}>
<Text style={styles.taskText}>

        {index} - {item}
</Text>
<TouchableOpacity

        style={styles.deleteButton}

        onPress={() => onDelete(index)}>
<Text style={styles.deleteButtonText}>X</Text>
</TouchableOpacity>
</View>

  );

};



const styles = StyleSheet.create({


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

export default TaskItem;