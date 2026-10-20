import React, { PropsWithChildren } from 'react';
import { View, ActivityIndicator } from 'react-native';

type LoadingContainerProps = PropsWithChildren<{
  isLoading: boolean;
}>;

const LoadingContainer = ({ isLoading, children }: LoadingContainerProps) => {
  if (isLoading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return <View>{children}</View>;
};

export default LoadingContainer;