import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '12px', margin: '40px' }}>
          <h2 style={{ color: '#991B1B', marginBottom: '16px' }}>ClaimShield Error Caught</h2>
          <p style={{ color: '#7F1D1D', marginBottom: '8px' }}>Something went wrong while rendering this component.</p>
          <pre style={{ background: '#FFF', padding: '16px', borderRadius: '8px', fontSize: '12px', color: '#B91C1C', overflow: 'auto' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </pre>
          <button 
            onClick={() => window.location.reload()}
            style={{ marginTop: '20px', padding: '10px 20px', background: '#991B1B', color: '#FFF', borderRadius: '8px', fontWeight: '600' }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
