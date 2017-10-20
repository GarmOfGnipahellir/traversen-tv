import * as React from 'react';

export interface State {
    interval: NodeJS.Timer;
    time: string;
    happyHour: boolean;
}

class Clock extends React.Component<any, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            ...this.state,
            time: this.getTime(),
            happyHour: true,
        };
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            interval: setInterval(() => this.tick(), 1000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    tick() {
        this.setState({
            ...this.state,
            time: this.getTime(),
            happyHour: new Date().getHours() < 22,
        });
    }

    getTime(): string {
        return new Date().toLocaleTimeString('sv-se');
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={{fontSize: 45, display: this.state.happyHour ? 'block' : 'none'}}>HAPPY HOUR</div>
                <div>{this.state.time}</div>
            </div>
        );
    }
}

const styles = {
    container: {
        background: '#222',
        color: 'white',
        position: 'absolute',
        left: 10,
        bottom: 10,
        padding: 10,
        fontSize: '72px',
    }
}

export default Clock;