import React from 'react';
import Countdown from 'react-countdown';
import {BsArrowRight} from 'react-icons/bs';
const CountDownTimer = () => {
    const presaleDate = new Date('Dec 8, 2021');
    // Random component
    const Completionist = () => <span>You are good to go!</span>;

    const getFormattedText = (value) => {
        value = value + '';
        if (value.length === 1) {
            return '0' + value;
        } else {
            return value;
        }
    }
    // Renderer callback with condition
    const renderer = ({days, hours, minutes, seconds, completed }) => {
    
        // Render a countdown
        return (
            <>
            {
                completed ? (
                    <h3 className="countdown-title">PRESALE PINKSALE.FINANCE LIVE!</h3>
                ) : (
                    <h3 className="countdown-title">PRESALE PINKSALE.FINANCE ARE COMING!</h3>
                )
            }
            <div className="time-wrapper">
                <div className="time-letter-layout">
                    <span className="time-value">{getFormattedText(days)}</span>
                    <span className="time-label">Days</span>
                </div>
                <div className="time-divider">:</div>
                <div className="time-letter-layout">
                    <span className="time-value">{getFormattedText(hours)}</span>
                    <span className="time-label">Hours</span>
                </div>
                <div className="time-divider">:</div>
                <div className="time-letter-layout">
                    <span className="time-value">{getFormattedText(minutes)}</span>
                    <span className="time-label">Minutes</span>
                </div>
                <div className="time-divider">:</div>
                <div className="time-letter-layout">
                    <span className="time-value">{getFormattedText(seconds)}</span>
                    <span className="time-label">Seconds</span>
                </div>
            </div>
            </>
        )
    };

    const value = 70;
    const capValue = 120;
    const minValue = 20;
    const midValue = capValue / 2;
    const targetValue = 80; 
    const offset = '0px';
    return (
        <div className="countdown-wrapper">
            <Countdown date={presaleDate.getTime()} renderer={renderer}/>
            <div className="progress-wrapper">
                <div className="progress-step">
                    <span className="step minValue" style={{left: `calc(${minValue * 100 / capValue}% - ${offset})`}}>{minValue}</span>
                    <span className="step midValue" style={{left: `calc(${midValue * 100 / capValue}% - ${offset})`}}>{midValue}</span>
                    <span className="step targetValue" style={{left: `calc(${targetValue * 100 / capValue}% - ${offset})`}}>{targetValue}</span>
                </div>
                <div className="progressbar" style={{width: value + '%'}}>
                    {value}
                </div>
                <span className="capValue">{capValue}BNB</span>
            </div>
            <button className="btn-buy"><span>Goto Presale</span> <BsArrowRight size={16}/></button>
        </div>
    );
}
export default CountDownTimer;