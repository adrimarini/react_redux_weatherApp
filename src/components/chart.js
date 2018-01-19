import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

// function to calculate the average of the data that is called in line 19
function average(data) {
  return _.round(_.sum(data)/data.length);
}

// we dont need to make use of state here, so no need
// for a class based component
export default (props) => {
  return (
    <div>
    <Sparklines height={120} width={180} data={props.data}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>{average(props.data)} {props.units}</div>
    </div>
  );
}
