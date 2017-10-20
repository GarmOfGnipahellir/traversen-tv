import * as React from 'react';
import Slide from './slide';

export interface State {
    interval: NodeJS.Timer;
    currentSlide: number;
    numSlides: number;
}

class SlideShow extends React.Component<any, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            ...this.state,
            currentSlide: 0,
            numSlides: 12,
        };
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            interval: setInterval(() => this.changeSlide(), 10000),
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    changeSlide() {
        this.setState({
            ...this.state,
            currentSlide: (this.state.currentSlide + 1) % this.state.numSlides,
        });
    }

    render() {
        return (
            <div style={styles.container}>
                {[...Array(this.state.numSlides)].map((x, i) => <Slide visible={i == this.state.currentSlide} index={i} image={'../assets/images/slide_'+(i+1)+'.jpg'} />)}
            </div>
        );
    }
}

const styles = {
    container: {
        zIndex: -1,
        background: '#222',
        width: '100%',
        height: '100%',
        fontSize: '72px',
    }
};


export default SlideShow;