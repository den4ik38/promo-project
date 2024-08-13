import React, { ErrorInfo, Suspense } from "react";
import { PageError } from "widgets/PageError";

interface ErrorState {
  hasError: boolean
}

interface ErrorProps {
  children: React.ReactNode
}

export class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
    constructor(props: ErrorProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        // eslint-disable-next-line react/prop-types
        const { children } = this.props
        const { hasError } = this.state
        if (hasError) {
            // You can render any custom fallback UI
            return <Suspense fallback=''><PageError /></Suspense>
        }

        return children; 
    }
}