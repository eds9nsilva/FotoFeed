import styled from 'styled-components/native';
import fastImage from 'react-native-fast-image';

interface TabBarLabelProps {
  color: string;
}

export const TabBarLabel = styled.Text`
  color: ${(props: TabBarLabelProps) => props.color};
  font-size: 14px;
  font-weight: bold;
`;
