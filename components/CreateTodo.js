import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useTodos } from './Context';

export default function CreateTodo() {
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState('');
  const { todos, setTodos } = useTodos();

  const createNewTodo = () => {
    if (!value) {
      alert('Please enter a todo title');
      return;
    }
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: value,
        completed: false,
      },
    ]);

    setValue('');
  };

  const createTodoBtnText = showInput ? 'Cancel' : 'Create Todo';

  return (
    <View>
      <Button
        title={createTodoBtnText}
        onPress={() => setShowInput(!showInput)}
      />
      {showInput && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="New todo.."
            value={value}
            onChangeText={setValue}
          />
          <Button
            title="Save"
            onPress={() => {
              createNewTodo();
              setShowInput(false);
            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    minWidth: 200,
  },
});
