import React from 'react';

class ErrorBoundary extends React.Component{
    state = {error: null, errorInfo: null};

    /*
    componentDidCatch(error, errorInfo)
    The method has two arguments:

    error: the actual error message that tells you what went wrong
    errorInfo: additional details about the error including the stack trace to help you debug the error.
    */

    componentDidCatch(error, errorInfo){
        this.setState({
            error:error,
            errorInfo:errorInfo
        });
    }

    render(){
        if(this.state.error){
            return(
                <div>
                    <h2>Something went wrong</h2>
                    <details style={{ whiteSpace: "pre-wrap" }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            )
        }

        return this.props.children;
    }
}

// class ErrorBoundary extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { error: null, errorInfo: null };
//     }
    
//     componentDidCatch(error, errorInfo) {
//       // Catch errors in any components below and re-render with error message
//       this.setState({
//         error: error,
//         errorInfo: errorInfo
//       })
//       // You can also log error messages to an error reporting service here
//     }
    
//     render() {
//       if (this.state.errorInfo) {
//         // Error path
//         return (
//           <div>
//             <h2>Something went wrong.</h2>
//             <details style={{ whiteSpace: 'pre-wrap' }}>
//               {this.state.error && this.state.error.toString()}
//               <br />
//               {this.state.errorInfo.componentStack}
//             </details>
//           </div>
//         );
//       }
//       // Normally, just render children
//       return this.props.children;
//     }  
//   }
  
export default ErrorBoundary;