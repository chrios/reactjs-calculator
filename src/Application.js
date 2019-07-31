import React, {Component} from 'react';

class Application extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expression: '',
            result: '',
            resetStateOnNextNumber: false
        }
    }
    
    addFigure = (n) => {
        if (this.state.resetStateOnNextNumber === true) {
            this.resetState();
            this.setState({
                expression: n.toString()
            });
        } else {
            this.setState({
                expression: this.state.expression.concat(n)
            });
        }
    }

    resetState = (e) => {
        this.setState({
            expression: '',
            result: '',
            resetStateOnNextNumber: false
        });
    }

    calculateResult = (e) => {
        let regex = /((^(\d+[*/+-])+\d+$)|(^\d+$))/g;
        if (regex.test(this.state.expression) === true) {
            this.setState({
                result: eval(this.state.expression),
                resetStateOnNextNumber: true
            });
        } else {
            this.setState({
                result: '"' + this.state.expression + '" is an invalid expression!',
                expression: ''
            });
        }
        
    }

    render() {
        return (
            <div>
                <h1>Calculator</h1>
                <table>
                    <tbody>
                        <tr>
                            <td><button onClick={(e) => this.addFigure(1)}>1</button></td>
                            <td><button onClick={(e) => this.addFigure(2)}>2</button></td>
                            <td><button onClick={(e) => this.addFigure(3)}>3</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={(e) => this.addFigure(4)}>4</button></td>
                            <td><button onClick={(e) => this.addFigure(5)}>5</button></td>
                            <td><button onClick={(e) => this.addFigure(6)}>6</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={(e) => this.addFigure(7)}>7</button></td>
                            <td><button onClick={(e) => this.addFigure(8)}>8</button></td>
                            <td><button onClick={(e) => this.addFigure(9)}>9</button></td>
                        </tr>
                    </tbody>
                </table>
                <div className="calc__layout">
                    <button onClick={(e) => this.addFigure('+')}>+</button>
                    <button onClick={(e) => this.addFigure('-')}>-</button>
                    <button onClick={(e) => this.addFigure('/')}>/</button>
                    <button onClick={(e) => this.addFigure('*')}>*</button>
                </div>
                <div className="calc__layout">
                    <button onClick={(e) => this.resetState()}>Reset</button>
                    <button onClick={(e) => this.calculateResult()}>Calculate</button>
                </div>
                <h2>Expression</h2>
                <p className="expressionField">{this.state.expression}</p>
                <h2>Result</h2>
                <p className="resultField">{this.state.result}</p>
            </div>
        )
    }
}

export default Application;