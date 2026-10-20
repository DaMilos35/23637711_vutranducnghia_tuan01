import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

type Gender = 'male' | 'female' | 'other';

const GenderSelector = () => {
  const [gender, setGender] = useState<Gender>('male');

  return (
    <View>
      <Text>Giới tính đã chọn: {gender}</Text>
      
      <Button title="Nam" onPress={() => setGender('male')} />
      <Button title="Nữ" onPress={() => setGender('female')} />
      <Button title="Khác" onPress={() => setGender('other')} />
    </View>
  );
};

export default GenderSelector;