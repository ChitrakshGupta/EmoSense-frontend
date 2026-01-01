import { useState } from 'react';

export default function SentimentAnalyzer() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

const API_URL = import.meta.env.VITE_API_URL;

  const handleAnalyze = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (!response.ok) {
        throw new Error(`Server error ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(
        err.message.includes('Failed to fetch')
          ? 'Network/CORS error: Backend blocked the request.'
          : err.message
      );
    } finally {
      setLoading(false);
    }
  };

  // ✅ Safe extraction (prevents crashes)
  const sentiment = result?.ai_analysis?.sentiment ?? 'Unknown';
  const confidence = result?.ai_analysis?.confidence ?? 0;
  const backendReply = result?.backend_reply ?? 'No reply';

  return (
    <div className="analyzer">
      <h1>AI Sentiment Analyzer</h1>
      <p className="subtitle">Powered by Azure Container Apps</p>

      <form onSubmit={handleAnalyze} className="analysis-form">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text (e.g. Azure is amazing)"
          rows="4"
          required
        />

        <button type="submit" disabled={loading || !inputText.trim()}>
          {loading ? 'Analyzing...' : 'Analyze Text'}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {result && (
        <div className="result-card">
          <h2>Analysis Result</h2>

          <div className="stat-grid">
            <div className="stat-item">
              <span className="label">Sentiment</span>
              <span className={`value ${sentiment.toLowerCase()}`}>
                {sentiment}
              </span>
            </div>

            <div className="stat-item">
              <span className="label">Confidence</span>
              <span className="value">
                {(confidence * 100).toFixed(2)}%
              </span>
            </div>
          </div>

          <div className="backend-reply">
            <strong>Backend says:</strong> “{backendReply}”
          </div>
        </div>
      )}
    </div>
  );
}
