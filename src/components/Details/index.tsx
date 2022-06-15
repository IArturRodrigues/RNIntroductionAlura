import React from 'react';

import FarmOwner from '../atomic/BasketOwner';
import Button from '../atomic/Button';

import { IDetails } from '../../interfaces/IMock';

import { Name, Description, Price } from './styles';

interface Props {
   children?: React.ReactNode;
   basketDetails: IDetails;
}

const Details: React.FC<Props> = ({ children, basketDetails }) => {
   return (
      <>
         <Name $bold={true} >{ basketDetails.name }</Name>
         <FarmOwner farmOwner={basketDetails.farmOwner} />
         <Description>{ basketDetails.description }</Description>
         <Price>{ basketDetails.price }</Price>
         <Button buttonText={basketDetails.button} />
      </>
   );
}

export default Details;