import styled from 'styled-components/native';

import { TextFont } from '../../../themes/styles/fontStyle';

export const ButtonWithFeedBack = styled.TouchableOpacity`
	margin-top: 16px;
	background-color: #2a9f85;
	padding: 16px 0;
	border-radius: 6px;
`;

export const ButtonText = styled(TextFont)`
	text-align: center;
	color: white;
	font-size: 16px;
	line-height: 26px;
	font-weight: bold;
`;