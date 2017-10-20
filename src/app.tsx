import * as React from 'react';
import Slide from './slide';
import Clock from './clock';

export class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div>
        <Slide />
        <h2>Welcome to React with Typescript!</h2>
        <Clock />
      </div>
    );
  }
}