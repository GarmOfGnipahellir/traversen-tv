import * as React from 'react';
import SlideShow from './slide-show';
import { Clock } from './containers/Clock';

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