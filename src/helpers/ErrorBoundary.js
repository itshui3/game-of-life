import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { error: null, errorInfo: null }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <>
                    <h2>Something went wrong</h2>
                    <details>

                        {this.state.error && this.state.error.toString()}
                        <br></br>
                        {this.state.errorInfo}
                        <br></br>
                        {this.state.errorInfo.componentStack}
                    </details>
                    
                </>
            )
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary