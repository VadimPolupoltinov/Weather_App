import React, {Component} from 'react';
import './App.css';

const API_Key = "5202cda58acf62c22fc4cd2dd14a5968";

class App extends Component{

    state = {
        temp:undefined,
        name:undefined,
        error:undefined,
        cod:undefined

    }

     gettingWeather = async (e) => {
        e.preventDefault()
        const value = e.target.elements.city.value
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_Key}`)
        const data =  await api_url.json();
        console.log(data)
        if (data.cod === 200) {
            this.setState({
                temp: data.main.temp,
                name: data.name,
                error: undefined,
            })
        }
        if (data.cod === "400") {
            this.setState({
                temp: undefined,
                name: undefined,
                error:"Введите название города!!!!"
            })
        }
        if (data.cod === "404") {
             this.setState({
                 temp: undefined,
                 name: undefined,
                 error:"Введите верное название города!!!!"
             })
         }





    }
    render(){
        return (
            <div className="App">

                <header className="header">
                    <div className="header__img">
                        <h1>(.Y.)</h1>
                    </div>
                    <form className="header__search" onSubmit={this.gettingWeather}>
                        <input className="header__search-bar" type="text" name="city" autoCorrect="on" placeholder="enter your city"  />
                        <button>узнать погоду</button>
                    </form>
                </header>
                    <div>
                        <h1>{this.state.name}</h1>
                        <h2>{this.state.temp}</h2>
                        <h2>{this.state.error}</h2>
                    </div>
                <h2></h2>


            </div>

        );
    }
}

export default App;
