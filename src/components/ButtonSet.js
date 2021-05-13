import React from 'react';
import {Button} from 'react-native';

function ButtonSet({handleClick, children}) {
  console.log('Rendering button - ', children);
  //{children}</button>;
  return <Button onPress={handleClick} title={children} />;
}
// export default ButtonSet;
export default React.memo(ButtonSet);
