import { StyleSheet, ScrollView, Text, View, Button } from 'react-native';
import Todo from './Todo';
import { useTodos } from './Context';
import CreateTodo from './CreateTodo';

export default function TodoList() {
  const { todos } = useTodos();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Todo List</Text>

        <View style={styles.list}>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
        </View>

        <CreateTodo />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 100,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
});
