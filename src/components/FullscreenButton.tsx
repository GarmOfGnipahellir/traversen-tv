import * as React from 'react';
import { remote } from 'electron';
import { connect } from 'react-redux';
import { RootState } from './reducers';
import { actionCreators } from './actions';

export interface Props {
    uiHidden: boolean;
}

const mapStateToProps = (state: RootState) => ({
    uiHidden: state.isUiHidden,
});

export const FullscreenButton: React.StatelessComponent<Props> = (props) => {
    let handleClick = () => {
        let win = remote.getCurrentWindow();
        
        win.setFullScreen(!win.isFullScreen());
    };

    const style = {
        display: props.uiHidden ? 'none' : 'block',
        background: '#222',
        opacity: 0.5,
        color: 'white',
        position: 'absolute',
        right: 10,
        bottom: 10,
        padding: 10,
        fontSize: '72px',
        cursor: props.uiHidden ? 'none' : 'pointer',
    }

    return (
        <i 
            style={style} 
            className='material-icons' 
            onClick={handleClick}>

            {remote.getCurrentWindow().isFullScreen() ? 'fullscreen_exit' : 'fullscreen'}
        </i>
    );
};

export default connect(mapStateToProps, {})(FullscreenButton);