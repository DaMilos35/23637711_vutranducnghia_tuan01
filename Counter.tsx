import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1); 
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      console.log('Không thể giảm dưới 0'); 
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Giá trị đếm: {count}</Text>

      <Button title="Tăng (+)" onPress={handleIncrement} />  
      <View style={{ height: 10 }} /> 
      <Button title="Giảm (-)" onPress={handleDecrement} />
    </View>
  );
};

export default Counter;