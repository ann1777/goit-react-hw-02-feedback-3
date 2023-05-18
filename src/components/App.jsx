import { Component } from 'react'
import { Section } from './Section/Section';
import { PageContainer } from './PageContainer/PageContainer';
import { GlobalStyle } from './GlobalStyle';
import { Statistic } from './Statistic/Statistic';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    this.setState({ [e]: this.state[e] + 1});
  }

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good }) =>
  Math.round((good * 100) / this.countTotalFeedback(this.state));

  render() {
    const { good, neutral, bad } = this.state;

  return (
    <PageContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions  
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.leaveFeedback}>
          </FeedbackOptions>      
          </Section>
          <Section title="Statistic">
            <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}>
            </Statistic>
          </Section>
        <GlobalStyle />
    </PageContainer>    
  );}
}
 