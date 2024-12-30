import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type ButtonProps = {
  bgColor?: string;
  textColor?: string;
} & TouchableOpacityProps;

const Button = forwardRef<View, ButtonProps>(({ children, bgColor = "bg-teal-600", textColor = "text-white", ...touchableProps }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      {...touchableProps}
      className={`${styles.button} ${touchableProps.className} ${bgColor} ${textColor}`}>
      <Text className={`${styles.buttonText} ${textColor}`}>{children}</Text>
    </TouchableOpacity>
  );
});

const styles = {
  button: 'items-center rounded-xl shadow-md p-4',
  buttonText: 'text-lg font-semibold text-center',
};

export default Button;
