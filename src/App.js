import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car.js'

class App extends Component {

    state = {
        cars:[
            {
                name: 'Ford',
                year: '2004'
            },
            {
                name: 'Kia',
                year: '2015'
            },
            {
                name: 'Volvo',
                year: '2018'
            }
        ],
        pageTitle: 'React components'
    };

    changeTitleHandler = (newTitle) => {
        this.setState({
            pageTitle: newTitle
        })
    };

    handleInput = (event) => {
        console.log('ggffdg', event.target.value)
        this.setState({
            pageTitle: event.target.value
        })
    };

    render() {
        const divStyle = {
            'textAlign': 'center'
        };

        const cars = this.state.cars;
        return (
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>
                <input type="text" onChange={this.handleInput}/>

                <button onClick={this.changeTitleHandler.bind(this, 'Changed')}>Change title</button>

                <Car
                    name={cars[0].name}
                    year={cars[0].year}
                    onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
                />
                <Car
                    name={cars[1].name}
                    year={cars[1].year}
                    onChangeTitle = {()=> this.changeTitleHandler(cars[1].name)}
                />
                <Car
                    name={cars[2].name}
                    year={cars[2].year}
                    onChangeTitle = {()=> this.changeTitleHandler(cars[2].name)}
                />
            </div>

        );
    }
}

export default App;
