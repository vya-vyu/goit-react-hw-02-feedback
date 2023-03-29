import { Component } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = e => {
    this.setState(prevState => ({
      ...prevState,
      [e.target.value]: prevState[e.target.value] + 1,
    }));
  };
  countTotalFeedback() {
    return Object.values(this.state).reduce((total, value) => {
      total += value;
      return total;
    }, 0);
  }
  countPositiveFeedbackPercentage() {
    return Math.trunc((this.state.good / this.countTotalFeedback()) * 100);
  }
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Feedback
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {this.countTotalFeedback() === 0 ? (
          <h3>No feedback given</h3>
        ) : (
          <Statistics
            options={Object.entries(this.state)}
            countTotalFeedback={this.countTotalFeedback()}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}
