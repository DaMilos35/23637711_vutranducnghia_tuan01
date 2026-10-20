import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';

import UserCard from './UserCard';
import Counter from './Counter';
import TodoList from './TodoList';
import MyButton from './MyButton';
import LiveInput from './LiveInput';
import LoadingContainer from './LoadingContainer';
import GenderSelector from './GenderSelector';
import AppButton from './AppButton';

const App = () => {
  return (
    <ScrollView style={{ padding: 20 }}>
        
        <View style={{ marginBottom: 30 }}>
            <Text>Bài 1: UserCard</Text>
            <UserCard name="Sinh Viên A" age={19} isAdmin={false} />
            <UserCard name="Giảng Viên B" age={35} isAdmin={true} />
        </View>

        <View style={{ marginBottom: 30 }}>
            <Text>Bài 2: Counter</Text>
            <Counter />
        </View>

        <View style={{ marginBottom: 30 }}>
            <Text>Bài 3: TodoList</Text>
            <TodoList />
        </View>

        <View style={{ marginBottom: 30 }}>
            <Text>Bài 4: MyButton</Text>
            <MyButton label="Xanh" />
            <MyButton label="Đỏ" color="red" />
        </View>
        
        <View style={{ marginBottom: 30 }}>
            <Text>Bài 5: LiveInput</Text>
            <LiveInput />
        </View>

        <View style={{ marginBottom: 30 }}>
            <Text>Bài 6: Loading Wrapper</Text>
            <LoadingContainer isLoading={false}>
              <Text>Nội dung sau khi tải xong</Text>
            </LoadingContainer>
        </View>
        
        <View style={{ marginBottom: 30 }}>
            <Text>Bài 7: Gender Selector</Text>
            <GenderSelector />
        </View>

        <View style={{ marginBottom: 30 }}>
            <Text>Bài 8: AppButton</Text>
            <AppButton 
              title="Thêm vào giỏ hàng" 
              variant="primary" 
              onPress={() => {}} 
            />
            
            <AppButton 
              title="Xem chi tiết" 
              variant="outline" 
              onPress={() => {}} 
            />
            
            <AppButton 
              title="Xóa sách" 
              variant="danger" 
              onPress={() => {}} 
            />
            
            <AppButton 
              title="Đang lưu..." 
              loading={true} 
              onPress={() => {}} 
            />
        </View>

    </ScrollView>
  );
};

export default App;