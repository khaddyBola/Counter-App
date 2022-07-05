import React from "react";

class CounterApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)


        this.state = {
            appOwner: 'Khaddy Bola...App 👍😎',
            counter: 0
        }
    }

    handleAddOne() {
        // State Component

        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    handleMinusOne() {
        this.setState((prevState) => {
            if (this.state.counter >= 1) {
                return {
                    counter: prevState.counter -1
                }
            }
        
        })
    }

    handleReset() {
        this.setState(() => {
            return {
                counter:  0
            }
        })
    }
    render() {
        return (
        <div>
            <div className="header">
                <div className="container">
                    <h2 className="header-name">{this.state.appOwner}</h2>
                    <h1 className="header-title">counter: {this.state.counter}</h1>
                    <div>
                        <button className="btn-small" onClick={this.handleAddOne}>AddOne +1</button>
                        <button className="btn-small" onClick={this.handleMinusOne}>MinusOne -1</button>
                        <button className="btn-small" onClick={this.handleReset}>Reset</button>
                    </div>
                    
                </div>
                
            </div>
           
        </div>)
    }


}
export default CounterApp;