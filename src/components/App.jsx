import React from 'react'
import { Section } from './Section/Section';
import { PageContainer } from './PageContainer/PageContainer';
import { GlobalStyle } from './GlobalStyle';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good }) =>
  Math.round((good * 100) / this.countTotalFeedback(this.state));

  render() {
    const { good, neutral, bad } = this.state;

  return (
    <PageContainer>
        <Section title="Please leave feedback">
          <h1>"Hello"</h1>
        options={Object.keys(good, neutral, bad)}
          </Section>
        <GlobalStyle />
    </PageContainer>    
  );}
}
 