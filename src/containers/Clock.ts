import { connect } from 'react-redux';
import { RootState } from '../reducers';
import { actionCreators } from '../actions';
import { DigitalTime } from '../components/DigitalTime';

const mapStateToProps = (state: RootState) => ({
    date: state.date,
});

export const Clock = connect(mapStateToProps, {
    doTick: actionCreators.tickClock
})(DigitalTime);