import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(SafeAreaView)`
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
    margin-top: ${RFValue(getStatusBarHeight())};
`