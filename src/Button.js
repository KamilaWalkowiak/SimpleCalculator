import React, {PureComponent} from 'react';
import './Button.css';

class Button extends PureComponent {

    addClassName = (x) => {
        console.log("add class name:", x);
        switch (x) {
            case 0:
                return x = "zero";
            case 1:
                return x = "one";
            case 2:
                return x = "two";
            case 3:
                return x = "three";
            case 4:
                return x = "four";
            case 5:
                return x = "five";
            case 6:
                return x = "six";
            case 7:
                return x = "seven";
            case 8:
                return x = "eight";
            case 9:
                return x = "nine";
            case "AC":
                return x = "AC";
            case "=":
                return x = "equal";
            case "-":
                return x = "minus";
            case "+":
                return x = "plus";
            case "*":
                return x = "multiplication";
            case "/":
                return x = "division";
            case "(":
                return x = "left_bracket";
            case ")":
                return x = "right_bracket";
            case "x":
                return x = "remove_last_el";
            case ".":
                return x = "dot";
            default:
                return x = "oops" //todo ??? Do I need default???
        }
    };

    render() {
        return (

            <div className={`button  ${this.addClassName(this.props.value)}`} onClick={() => {
                this.props.onClick(this.props.value)
            }}>{this.props.value}</div>
        );
    }
}

export default Button;
