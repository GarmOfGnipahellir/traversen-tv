import * as React from 'react';

export interface Props {
    date: Date;
    doTick: Function;
}

let intervalID: NodeJS.Timer;

export class DigitalTime extends React.Component<Props, any> {
    componentDidMount() {
        intervalID = setInterval(() => this.props.doTick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(intervalID);
    }

    render() {
        const date = this.props.date;
        const locale: string = 'sv-se';
        const options: Intl.DateTimeFormatOptions = {
            hour: '2-digit',
            minute: '2-digit',
        };

        return (
            <div style={style}>{date.toLocaleString(locale, options)}</div>
        );
    }
}

const style = {
    background: '#222',
    opacity: 0.5,
    color: 'white',
    position: 'absolute',
    left: 10,
    bottom: 10,
    padding: 10,
    fontSize: '72px',
}