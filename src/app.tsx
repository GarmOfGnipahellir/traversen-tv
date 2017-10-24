import * as React from 'react';
import SlideShow from './slide-show';
import { Clock } from './containers/Clock';
import FullscreenButton from './components/FullscreenButton';
import { connect } from 'react-redux';
import { RootState } from './reducers';
import { actionCreators } from './actions';

let timeoutID: NodeJS.Timer;

const mapStateToProps = (state: RootState) => ({
  uiHidden: state.isUiHidden,
});

const mapDispatchToProps = {
  onUiShow: actionCreators.showUi,
  onUiHide: actionCreators.hideUi,
};

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<any, any> {
  componentDidMount() {
    document.onmousemove = (ev) => {
      if (this.props.uiHidden) {
        this.props.onUiShow();
      }

      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => this.props.onUiHide(), 1000);
    };
  }

  render() {
    return (
      <div style={{cursor: this.props.uiHidden ? 'none' : 'default'}}>
        <SlideShow />
        <Clock />
        <FullscreenButton />
      </div>
    );
  }
}