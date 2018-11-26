import React, {PureComponent} from 'react';
import './Result.css';

class Result extends PureComponent {

    trimResult = (equation) => {
        if (equation.length > 9) {
            return "..." + equation.substring(equation.length - 7);
        } else {
            return equation;
        }
    };

    render() {
        return (
            <div className="result">
                    <span> {/* unnecessary span?*/}
                        {this.props.result ? this.props.result : this.trimResult(this.props.equation)}
                    </span>
            </div>
        );
    }
}

export default Result;
