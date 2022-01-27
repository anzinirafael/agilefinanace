import styled, {css} from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { View } from 'react-native';

export const Container = styled(View)`
    background-color: ${({ theme }) => theme.colors.dark};
    height: ${RFPercentage(5)}px;       
`

export const Content = styled(View)`
    padding: ${RFValue(12)}px ${RFValue(8)}px;
`
