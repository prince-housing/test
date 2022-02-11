import * as React from 'react';
import { FlatList } from 'react-native';

import ButtonsWithAnimated from '../../components/ButtonsWithAnimated';
import ButtonsWithReAnimated from '../../components/ButtonsWithReAnimated';
import SliderWithCircleProgress from '../../components/SliderWithCircleProgress';

const data = new Array(100)
  .fill(10)
  .map(item => (item * Math.random() * 100).toString());

const SliderExample = props => {
  const renderItem = () => {
    return (
      <>
        <SliderWithCircleProgress key="0" />
        <ButtonsWithAnimated key="1" />
        <ButtonsWithReAnimated key="2" />
      </>
    );
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
