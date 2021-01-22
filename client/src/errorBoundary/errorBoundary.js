import React from 'react'

/* eslint-disable react/prop-types */
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
        console.log('\x1b[33mLC-1021 ', error)
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      this.setState({hasError: true})
      this.logErrorToMyService(error, errorInfo);
    }

    logErrorToMyService(error, errorInfo){
        console.log('\x1b[31mLC-1021 ', error, errorInfo)
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }

export default ErrorBoundary

/*
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
*/

// :boom:

// http://www.iemoji.com/view/emoji/695/animals-nature/collision


// Error('💥 KABOOM 💥')