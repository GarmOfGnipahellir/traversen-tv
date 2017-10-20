import * as React from 'react';
import SlideShow from './slide-show';
import Clock from './clock';

export class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div>
        <SlideShow />
        <Clock />
      </div>
    );
  }
}