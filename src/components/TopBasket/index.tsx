import React from 'react';

import { ITop } from '../../interfaces/IMock';

import { TopImage, Title } from './styles';

interface Props {
   children?: React.ReactNode;
   basketTop: ITop;
}

const TopBasket: React.FC<Props> = ({ children, basketTop }) => {
   return (
      <>
         <TopImage source={ basketTop.image } />
         <Title $bold={true}>{ basketTop.title }</Title>
      </>
   );
}

export default TopBasket;