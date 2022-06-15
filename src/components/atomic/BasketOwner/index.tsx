import React from 'react';

import { IFarmOwner } from '../../../interfaces/IMock';

import { Container, Avatar, Name } from './styles';

interface Props {
   children?: React.ReactNode;
   farmOwner: IFarmOwner;
}

const BasketOwner: React.FC<Props> = ({ children, farmOwner }) => {
   return (
      <Container>
         <Avatar source={farmOwner.logo} />
         <Name>{ farmOwner.name }</Name>
      </Container>
   );
}

export default BasketOwner;