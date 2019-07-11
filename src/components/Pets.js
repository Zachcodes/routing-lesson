import React from 'react';

export default function Pets(props) {
  console.log('props in pets', props);
  return <div>{props.children}</div>;
}
