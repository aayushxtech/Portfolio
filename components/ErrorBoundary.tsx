"use client";

import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Form error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="text-red-400 bg-red-400/10 p-4 rounded-lg">
          Sorry, there was a problem loading the contact form.
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
