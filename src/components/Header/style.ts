import styled, {css} from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const Container = styled(View)`
    background-color: ${({ theme }) => theme.colors.dark};
    height: ${RFPercentage(5)}px;       
`

export const Content = styled(View)`
    padding: ${RFValue(12)}px ${RFValue(8)}px;
`

export const ComponentTitle = styled(View)`

`

export const MenuTitleFinance = styled(Text)`
    font-family: ${({theme}) => theme.fonts.bold};

`
export const MenutTitleAgile = styled(Text)`

`

export const HamburguerMenu = styled(Feather)`

`