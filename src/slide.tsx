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
                <img style={styles.image} src={this.props.image}/>
            </div>
        )
    }
}

const styles = {
    container: {
        background: 'gray',
        width: '100%',
        height: '100%',
        fontSize: '72px',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    }
}

export default Slide;