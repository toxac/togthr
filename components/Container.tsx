import { SafeAreaView } from 'react-native';
interface ContainerProps {
  bgColor?: string;
  children: React.ReactNode;
}

const Container = ({ children, bgColor = "white" }: ContainerProps) => {
  return <SafeAreaView className={`flex-1 p-6 ${bgColor}`}>{children}</SafeAreaView>;
};

export default Container;

