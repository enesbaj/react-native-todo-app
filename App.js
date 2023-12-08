import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TodoList from './components/TodoList';
import { TodoProvider } from './components/Context';

export default function App() {
  return (
    <View style={styles.container}>
      <TodoProvider>
        <TodoList />
      </TodoProvider>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
