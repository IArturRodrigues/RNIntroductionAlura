import styled from 'styled-components/native';

import { TextFont } from '../../themes/styles/fontStyle';

export const Name = styled(TextFont)`
	color: #464646;
	font-size: 26px;
	font-weight: bold;
	line-height: 42px;
`;

export const Description = styled(TextFont)`
	color: #A3A3A3;
	font-size: 16px;
	line-height: 26px;
`;

export const Price = styled(TextFont)`
	color: #2A9F85;
	font-weight: bold;
	font-size: 26px;
	line-height: 42px;
	margin-top: 8px;
`;
