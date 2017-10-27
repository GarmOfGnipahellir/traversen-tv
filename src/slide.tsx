import * as React from 'react';

export interface Props {
    visible: boolean;
    key: number;
    image: string;
}

class Slide extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div style={{...styles.container, display: this.props.visible ? 'block' : 'none'}}>
                <div style={{zIndex: 1, position:'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
                    <img style={styles.image} src={this.props.image}/>
                </div>
                <div style={{zIndex: 0, position:'absolute', top: '0', left: '0', width: '100%', height: '100%'}}>
                    <img className='background' style={styles.background} src={this.props.image}/>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        background: 'black',
        width: '100%',
        height: '100%',
        fontSize: '72px',
    },
    image: {
        background: 'none',
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },
    background: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'blur(50px) opacity(50%)',
    }
}

export default Slide;