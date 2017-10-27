import * as React from 'react';

export interface State {
    interval: NodeJS.Timer;
    date: Date;
}

class Clock extends React.Component<any, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            ...this.state,
            date: new Date(),
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
            date: new Date(),
        });
    }

    getTimeString(date: Date): string {
        let options: Intl.DateTimeFormatOptions = {
            hour: '2-digit',
            minute: '2-digit',
        }
        return date.toLocaleString('sv-se', options);
    }

    render() {
        return (
            <div style={styles.container}>
                <div>{this.getTimeString(this.state.date)}</div>
            </div>
        );
    }
}

const styles = {
    container: {
        zIndex: 11,
        background: '#222',
        opacity: 0.5,
        color: 'white',
        position: 'absolute',
        left: 10,
        bottom: 10,
        padding: 10,
        fontSize: '72px',
    }
}

export default Clock;