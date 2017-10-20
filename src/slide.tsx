import * as React from 'react';

class Slide extends React.Component<any, any> {
    render() {
        return (
            <div style={styles.container}>
                <div>Slide</div>
            </div>
        )
    }
}

const styles = {
    container: {
        zIndex: -1,
        background: 'gray',
        width: '100%',
        height: '100%',
        fontSize: '72px',
    }
}

export default Slide;