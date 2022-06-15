import React from 'react';

import { FlatList } from 'react-native';

import TopBasket from '../../components/TopBasket';
import Details from '../../components/Details';

import { IBasketMock } from '../../interfaces/IMock';

import { Container, Title } from './styles';
import Item from '../../components/atomic/Item';

interface Props {
	children?: React.ReactNode;
	basketMock: IBasketMock;
}

const Basket: React.FC<Props> = ({ children, basketMock }) => {
	return (
		<FlatList 
			ListHeaderComponent={() => {
					return (
						<>
							<TopBasket basketTop={basketMock.top} />
							<Container>
								<Details basketDetails={basketMock.details} />
								<Title>{ basketMock.list.title }</Title>
							</Container>
						</>
					);
				}
			}
			data={basketMock.list.items}
			renderItem={({ item }) => <Item item={item} />}
			keyExtractor={({ name }, index) => name }
		/>
			
	);
};

export default Basket;
