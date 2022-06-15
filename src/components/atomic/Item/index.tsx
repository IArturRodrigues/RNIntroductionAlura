import React from 'react';

import { IItem } from '../../../interfaces/IMock';

import { Container, ItemName, ItemImage } from './styles';

interface Props {
   children?: React.ReactNode;
   item: IItem;
}

const Item: React.FC<Props> = ({ children, item }) => {
   return (
      <Container>
         <ItemImage source={item.image} />
         <ItemName>{ item.name }</ItemName>
      </Container>
   );
}

export default Item;