import { ImageSourcePropType } from 'react-native';

export interface IBasketMock {
   top: ITop;
   details: IDetails;
   list: IList;
}

export interface ITop {
   title: string;
   image: ImageSourcePropType;
}

export interface IDetails {
   name: string;
   farmOwner: IFarmOwner;
   description: string;
   price: string;
   button: string;
}

export interface IFarmOwner {
   name: string;
   logo: ImageSourcePropType;
}

export interface IList {
   title: string;
   items: IItem[];
}

export interface IItem {
   name: string;
   image: ImageSourcePropType;
}