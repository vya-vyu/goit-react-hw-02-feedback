import { Component } from 'react';

import { Title, StatisticsList, ItemTitle } from './Statistics.styled';

export class Statistics extends Component {
  render() {
    return (
      <>
        <Title>Statistics</Title>
        <StatisticsList>
          {this.props.options.map(([key, value]) => (
            <li key={key}>
              <ItemTitle>{key[0].toUpperCase() + key.slice(1)} :</ItemTitle>
              <span> {value}</span>
            </li>
          ))}

          <li>
            {' '}
            <ItemTitle>Total :</ItemTitle>
            <span> {this.props.countTotalFeedback}</span>
          </li>
          <li>
            {' '}
            <ItemTitle>Positive feedback:</ItemTitle>
            <span> {this.props.positiveFeedback}%</span>
          </li>
        </StatisticsList>
      </>
    );
  }
}
