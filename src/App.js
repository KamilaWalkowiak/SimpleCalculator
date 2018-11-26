import React, {Component} from 'react';
import Panel from './Panel';
import Result from './Result';

class App extends Component {

    constructor(props) {
        super(props);
        this.buttonsWithNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.buttonsWithOperators = ["+", "-", "*", "/", ".", "(", ")"];
        this.handleOnClickNumbers = this.handleOnClickNumbers.bind(this);
        this.handleOnClickOperators = this.handleOnClickOperators.bind(this);
        this.handleOnClickOnEqualButton = this.handleOnClickOnEqualButton.bind(this);
        this.calculateTheResult = this.calculateTheResult.bind(this);
        this.handleOnClickRemoveLastEl = this.handleOnClickRemoveLastEl.bind(this);
        this.handleOnClickOnClearAll = this.handleOnClickOnClearAll.bind(this);
        this.state = {
            result: false,
            equation: ''
        };
    }

    handleOnClickNumbers = (x) => {
        const equation = this.state.equation + x;
        this.setState((state) => {
                return {
                    equation: equation,
                    result: false
                }
            }
        );
    };

    handleOnClickOperators = (x) => {
        const equation = this.state.equation + x;
        this.setState((state) => {
                return {
                    equation: equation,
                    result: false,
                }
            }
        );
    };

    handleOnClickOnEqualButton = (x) => {
        const result = this.calculateTheResult(this.state.equation);
        this.setState((state) => {
            return {
                result: result ? result : "ERROR",
                equation: state.equation.replace(state.equation, result)
            }
        });
    };

    roundDown = (number, decimals) => {
        decimals = decimals || 0;
        return ( Math.floor( number * Math.pow(10, decimals) ) / Math.pow(10, decimals) );
    };

    calculateTheResult = (equation) => {
        try {
            return this.roundDown(eval(equation), 2)
        } catch (e) {
            return false
        }
    };

    handleOnClickRemoveLastEl = (x) => {
        const changedEquation = x.substring(0, x.length - 1);
        this.setState((state) => {
                return {
                    equation: changedEquation
                }
            }
        );
    };

    handleOnClickOnClearAll = () => {
        this.setState((state) => {
            return {
                result: false,
                equation: ''
            }
        });
    };

    render() {
        return (
            <div className="App">
                <Panel
                    equation={this.state.equation}
                    buttonsWithNumbers={this.buttonsWithNumbers}
                    buttonsWithOperators={this.buttonsWithOperators}
                    handleOnClickNumbers={this.handleOnClickNumbers}
                    handleOnClickOperators={this.handleOnClickOperators}
                    handleOnClickOnEqualButton={this.handleOnClickOnEqualButton}
                    handleOnClickRemoveLastEl={this.handleOnClickRemoveLastEl}
                    handleOnClickOnClearAll={this.handleOnClickOnClearAll}>
                    <Result
                        equation={this.state.equation}
                        result={this.state.result}
                    />
                </Panel>
            </div>
        );
    }
}

export default App;
