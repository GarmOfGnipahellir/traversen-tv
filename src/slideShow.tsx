import * as React from 'react';
import Slide from './slide';
import { remote } from 'electron';

export interface State {
    interval: NodeJS.Timer;
    currentSlide: number;
    slides: string[];
}

class SlideShow extends React.Component<any, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            ...this.state,
            currentSlide: 0,
            slides: remote.getGlobal('slides'),
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
            currentSlide: (this.state.currentSlide + 1) % this.state.slides.length,
        });
    }

    render() {
        return (
            <div style={styles.container}>
                {this.state.slides.map((item, i) => 
                    <Slide visible={i == this.state.currentSlide} key={i} image={item} />
                )}
            </div>
        );
    }
}

const styles = {
    container: {
        zIndex: -10,
        background: '#222',
        width: '100%',
        height: '100%',
        fontSize: '72px',
    }
};

export default SlideShow;