import React from 'react';
import {Text} from 'react-native';

function Title() {
  console.log('Rendering Title');
  return <Text>useCallback Hook</Text>;
}
//React.memo
// export default Title;
export default React.memo(Title);
