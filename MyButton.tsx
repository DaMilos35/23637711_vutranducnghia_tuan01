import React from 'react';
import { Button, View, Alert, Platform } from 'react-native';

interface MyButtonProps {
  label: string;
  color?: string;
}

const MyButton: React.FC<MyButtonProps> = ({ label, color = '#2196F3' }) => {
  const handlePress = () => {
    const message = `Button: ${label}`;
    
    if (Platform.OS === 'web') {
      window.alert(message);
    } else {
      Alert.alert('Message', message);
    }
  };

  return (
    <View style={{ marginVertical: 5 }}>
      <Button 
        title={label} 
        color={color} 
        onPress={handlePress} 
      />
    </View>
  );
};

export default MyButton;