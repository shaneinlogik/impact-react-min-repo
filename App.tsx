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

  // Trigger: set a signal value after awaiting any promise.

  // Each time this handler is called the number
  // of rerenders doubles.
  const handleButtonPress = async () => {
    await Promise.resolve();
    increase();
  };

  console.log('render');

  return <Button onPress={handleButtonPress} title={`Increase (${count})`} />;
}
