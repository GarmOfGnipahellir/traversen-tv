import { connect } from 'react-redux';
import { State } from '../reducers';
import { actionCreators } from '../actions';
import { DigitalTime } from '../components/DigitalTime';

const mapStateToProps = (state: State) => ({
    date: state.date,
});

export const Clock = connect(mapStateToProps, {
    doTick: actionCreators.tickClock
})(DigitalTime);