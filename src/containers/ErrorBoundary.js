import React, { Component } from "react";

class ErrorBoundary extends Component {

    constructor(props){
        super(props);
        this.state = { hasError: false } 
    };
   

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({hasError:true})
    }   
    render(){ 
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Uh, Houston, we've had a problem.</h1>;
          }
      
          return this.props.children; 
    }
}
 
export default ErrorBoundary;