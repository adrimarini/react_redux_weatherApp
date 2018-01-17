import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
// we dont need to make use of state here, so no need
// for a class based component
export default (props) => {
  return (
    <div>
    <Sparklines height={120} width={180} data={props.data}>
      <SparklinesLine color={props.color} />
    </Sparklines>
    </div>
  );
}
