import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // most likely this would be for logging in..., ie: new relic
    console.error("ErrorBoundary caught error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.componentError;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
