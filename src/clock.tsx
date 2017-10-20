import * as React from 'react';

export interface State {
    interval: NodeJS.Timer;
    time: string;
}

class Clock extends React.Component<any, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            ...this.state,
            time: this.getTime(),
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
            time: this.getTime()
        });
    }

    getTime(): string {
        return new Date().toLocaleTimeString('sv-se');
    }

    render() {
        return (
            <div style={styles.container}>
                <div>{this.state.time}</div>
            </div>
        );
    }
}

const styles = {
    container: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        margin: 20,
        fontSize: '72px',
    }
}

export default Clock;