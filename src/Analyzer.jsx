import { UserButton } from '@clerk/clerk-react';
import SentimentAnalyzer from './SentimentAnalyzer';

export default function Analyzer() {
  return (
    <div className="container">
      <header className="auth-header">
        <UserButton afterSignOutUrl="/thanks" />
      </header>

      <SentimentAnalyzer />
    </div>
  );
}
