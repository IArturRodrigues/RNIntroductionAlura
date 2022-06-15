import styled, { css } from 'styled-components/native';

interface Props {
   $bold?: boolean;
}

export const TextFont = styled.Text<Props>`
   ${(props) => {
      if(props.$bold) {
         return css`
            font-family: "MontserratBold";
            font-weight: normal;
         `;
      }

      return css`
         font-family: "MontserratRegular";
         font-weight: normal;
      `;
   }}
`;