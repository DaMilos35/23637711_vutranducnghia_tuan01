import React from 'react';
import { View, Text } from 'react-native';

interface UserCardProps {
  name: string;
  age: number;
  isAdmin: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ name, age, isAdmin }) => {
  
  if (isAdmin === true) {
    return (
      <View style={{ backgroundColor: 'pink', padding: 10, margin: 10 }}>
        <Text>Tên: {name}</Text>
        <Text>Tuổi: {age}</Text>
        <Text>Quyền: Admin</Text>
      </View>
    );
  } 
  
  else {
    return (
      <View style={{ backgroundColor: 'lightblue', padding: 10, margin: 10 }}>
        <Text>Tên: {name}</Text>
        <Text>Tuổi: {age}</Text>
        <Text>Quyền: User</Text>
      </View>
    );
  }

};

export default UserCard;