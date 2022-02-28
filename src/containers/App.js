import React, {Component} from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import './App.css'
import Scroll from '../components/Scroll';
import ErrorBoundary from "./ErrorBoundary";


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    
    componentDidMount(){
        document.title = "RoboFriends";
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})

        
    }
    render() { 
        const { robots, searchfield } = this.state;
        const filteredRobots =  robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });

        if(robots.length === 0){
            return <h1 className="tc">LOADING, PLEASE WAIT.</h1>
        }
        else {
            return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <ErrorBoundary>
                    <SearchBox changeOcurred={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </ErrorBoundary>
            </div>
            );
        }
        
    }
}
 
export default App;

