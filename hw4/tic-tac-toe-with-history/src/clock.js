//help is taken from https://medium.com/the-andela-way/create-a-pure-css-clock-with-svg-f123bcc41e46


import React, { Component } from 'react'
import './clock.css'; //help is taken from https://medium.com/the-andela-way/create-a-pure-css-clock-with-svg-f123bcc41e46

export default class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {

        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

        const svg = document.getElementById(this.props.id)
        const currentTime = new Date();
        svg.style.setProperty('--start-seconds', currentTime.getSeconds());
        svg.style.setProperty('--start-minutes', currentTime.getMinutes());
        svg.style.setProperty('--start-hours', currentTime.getHours() % 12);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {


        return (
            <div style={{ padding: 50 }}>
                <p> This is player {this.props.player}'s time</p>
                <svg viewBox="0 0 40 40" id={this.props.id}>
                    <circle cx="20" cy="20" r="19" />
                    <text x="0" y="0" className="tiaText">PARI</text>
                    <g className="marks">

                        <line x1="15" y1="0" x2="16" y2="0" />
                        <line x1="15" y1="0" x2="16" y2="0" />
                        <line x1="15" y1="0" x2="16" y2="0" />
                        <line x1="15" y1="0" x2="16" y2="0" />
                        <line x1="15" y1="0" x2="16" y2="0" />
                        <line x1="15" y1="0" x2="16" y2="0" />
                        <line x1="15" y1="0" x2="16" y2="0" />
                        <line x1="15" y1="0" x2="16" y2="0" />
                        <line x1="15" y1="0" x2="16" y2="0" />
                        <line x1="15" y1="0" x2="16" y2="0" />
                        <line x1="15" y1="0" x2="16" y2="0" />
                        <line x1="15" y1="0" x2="16" y2="0" />
                    </g>

                    <line x1="0" y1="0" x2="9" y2="0" className="hour" />
                    <line x1="0" y1="0" x2="13" y2="0" className="minute" />
                    <line x1="0" y1="0" x2="16" y2="0" className="seconds" />
                    <circle cx="20" cy="20" r="0.7" className="pin" />

                </svg>

                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>



            </div>
        )
    }
}
