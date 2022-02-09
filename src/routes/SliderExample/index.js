import * as React from 'react';
import { FlatList } from 'react-native';

import SliderWithCircleProgress from '../../components/SliderWithCircleProgress';

// import styles from './styles';

const data = new Array(100)
  .fill(10)
  .map(item => (item * Math.random() * 100).toString());

const SliderExample = props => {
  const renderItem = () => {
    return <SliderWithCircleProgress />;
  };

  const keyExtractor = item => item;

  return (
    <FlatList
      removeClippedSubviews
      initialNumToRender={10}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default SliderExample;
