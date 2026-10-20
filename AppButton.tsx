import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';

interface AppButtonProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'small' | 'medium' | 'large';
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

const variantStyles = {
  primary: { backgroundColor: 'blue' },
  secondary: { backgroundColor: 'gray' },
  outline: { borderWidth: 1, borderColor: 'purple' },
  danger: { backgroundColor: 'red' },
};

const sizeStyles = {
  small: { padding: 5 },
  medium: { padding: 10 },
  large: { padding: 15 },
};

const AppButton = ({
  title,
  variant = 'primary',
  size = 'medium',
  onPress,
  disabled = false,
  loading = false,
  icon
}: AppButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[variantStyles[variant], sizeStyles[size]]}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={{ flexDirection: 'row' }}>
          {icon}
          <Text>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;