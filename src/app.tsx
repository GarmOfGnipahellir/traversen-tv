import * as React from 'react';
import SlideShow from './slideShow';
import Clock from './clock';
import Logos from './logos';

export class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div>
        <SlideShow />
        <Clock />
        <Logos />
      </div>
    );
  }
}