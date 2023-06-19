import React, { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
  
    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error, info.componentStack);
    }
  
    render() {
        const {hasError} = this.state;
        const {children} = this.props;

        if (hasError) {
            return <h1>Something went wrong</h1>
        }
  
        return children;
    }
}

// export default withTranslation()(ErrorBoundary)