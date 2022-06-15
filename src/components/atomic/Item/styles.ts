import styled from 'styled-components/native';

import { TextFont } from '../../../themes/styles/fontStyle';

export const Container = styled.View`
   flex-direction: row;
   border-bottom-width: 1px;
   border-bottom-color: #ececec;
   padding: 16px 0;
   margin: 0 16px;
   align-items: center;
`;

export const ItemImage = styled.Image`
   width: 46px;
   height: 46px;
`;

export const ItemName = styled(TextFont)`
   font-size: 16px;
   line-height: 26px;
   margin-left: 11px;
   color: #464646;
`;