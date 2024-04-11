import React from 'react';
import {Button} from 'react-native';

import {useStore, signal} from 'impact-react';

function CounterStore() {
  const count = signal(0);

  return {
    get count() {
      return count.value;
    },
    increase() {
      count.value++;
    },
  };
}

export default function App() {
  const {count, increase} = useStore(CounterStore);

  return <Button onPress={increase} title={`Increase (${count})`} />;
}
