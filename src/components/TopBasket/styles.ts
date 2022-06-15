import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { TextFont } from '../../themes/styles/fontStyle';

const width = Dimensions.get('screen').width;

export const TopImage = styled.Image`
	width: 100%;
	height: ${578 / 768 * width}px;
`;

export const Title = styled(TextFont)`
	width: 100%;
	position: absolute;
	text-align: center;
	font-size: 16px;
	line-height: 26px;
	color: white;
	font-weight: bold;
	padding: 16px;
`;