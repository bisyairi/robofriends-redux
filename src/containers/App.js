import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import './fonts/BIONICKIDSLANTED3D.ttf';

class App extends Component{
    constructor(){
        super();
        this.state = {
            robot : [],
            searchField : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robot:users}));
    }
    
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render(){
        const {robot, searchField} = this.state;

        const filterRobots = robot.filter(robots =>robots.name.toLowerCase().includes(searchField.toLowerCase()));

        if(!robot){
            return <h1>Loading</h1>
        }
        else{
            return(
                <div className='tc'>
                    <h1 className='f2'>Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={ filterRobots }/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
                
            );
        }
    }
}

export default App;