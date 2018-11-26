import React, {PureComponent} from 'react';
import './Button.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace } from '@fortawesome/free-solid-svg-icons'

library.add(faBackspace);

class removeLastOneElButton extends PureComponent {

    render() {
        return (

            <div className="button" onClick={() => {
                this.props.handleOnClickRemoveLastEl(this.props.equation)
            }}><FontAwesomeIcon
                style={{color: "#6f6f87" }}
                icon="backspace" /></div>
        );
    }
}
export default removeLastOneElButton;
