import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { TextFont } from '../../themes/styles/fontStyle';

export const Container = styled.View`
	padding: 8px 16px;
`;

export const Title = styled(TextFont)`
   color: #464646;
   font-weight: bold;
   margin-top: 32px;
   margin-bottom: 8px;
   font-size: 20px;
   line-height: 32px;
`;