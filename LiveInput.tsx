import {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const TextInputExample = () => {
  const [text, onChangeText] = useState<string>('');
  const handleTextChange = (newText: string) => {
    onChangeText(newText);
  };

  return (
    <View>
      <TextInput
        style={{
          padding: 10,
          borderColor: '#000',
          borderWidth: 1,
        }}
        onChangeText={handleTextChange} 
        value={text}
      />
      
      <Text>Text length: {text.length}</Text>
    </View>
  );
};
export default TextInputExample;