import { Component } from 'react';
import { Button, Title, BtnWrapper } from './Feedback.styled';

export class Feedback extends Component {
  //   state = {
  //     options: [],
  //   };
  render() {
    return (
      <>
        <Title>Please leave feedback</Title>
        <BtnWrapper>
          {this.props.options.map(el => (
            <Button
              key={el}
              value={el}
              type="button"
              onClick={this.props.onLeaveFeedback}
            >
              {el[0].toUpperCase() + el.slice(1)}
            </Button>
          ))}
        </BtnWrapper>
      </>
    );
  }
}
