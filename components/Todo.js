import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTodos } from './Context';

export default function Todo({ todo }) {
  const { onComplete, deleteTodo } = useTodos();

  return (
    <View style={styles.item}>
      <View style={styles.title}>
        <Text>{todo.title}</Text>
      </View>

      <TouchableWithoutFeedback
        onPress={() => {
          if (todo.completed) {
            deleteTodo(todo.id);
            return;
          }

          onComplete(todo.id);
        }}
      >
        <View style={styles.icon}>
          {!todo.completed ? (
            <Icon name="check" size={20} color="#900" />
          ) : (
            <Icon name="trash" size={20} color="#900" />
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
  },
  title: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    flex: 1,
  },
  icon: {
    padding: 10,
  },
});
