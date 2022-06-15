import React from 'react';

import { ButtonWithFeedBack, ButtonText } from './styles';

interface Props {
   children?: React.ReactNode;
   buttonText: string;
}

const Button: React.FC<Props> = ({ children, buttonText }) => {
   return (
      <ButtonWithFeedBack>
         <ButtonText>
            {buttonText}
         </ButtonText>
      </ButtonWithFeedBack>
   );
}

export default Button;