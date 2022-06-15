// import React from 'react';

// import { FlatList, ListRenderItem, VirtualizedList } from 'react-native';

// import Item from '../atomic/Item';

// import { IItem, IList } from '../../interfaces/IMock';

// import { Title } from './styles';

// interface Props {
//    children?: React.ReactNode;
//    list: IList;
// }

// const List: React.FC<Props> = ({ children, list }) => {
//    const renderItem: ListRenderItem<IItem> = ({ item }) => (
//       <Item item={item} />
//    );

//    // return (
//    //    <>

//    //       {/* <Title>{ list.title }</Title> */}
//    //       <FlatList
//    //          // if using styled-components FlatList try some of these
//    //          // <React.ElementType>
//    //          // <any>
//    //          ListHeaderComponent={<Title>{ list.title }</Title>}
//    //          data={list.items}
//    //          renderItem={renderItem}
//    //          keyExtractor={({ name }: IItem, index) => name }
//    //          // ListFooterComponent={}
//    //       />

//    //       {/* {
//    //          list.items.map((item, index) => {
//    //             return <Item item={item} key={index} />
//    //          }) 
//    //       } */}
//    //    </>
//    // );
// }

// export default List;