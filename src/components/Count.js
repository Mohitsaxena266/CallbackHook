import React from 'react';
import {Text} from 'react-native';

function Count({text, count}) {
  console.log(`Rendering ${text}`);
  return (
    <Text>
      {text} - {count}
    </Text>
  );
}
// export default Count;
export default React.memo(Count);
