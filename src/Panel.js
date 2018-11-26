import React, {PureComponent} from 'react';
import Button from './Button';
import RemoveLastOneElButton from './RemoveLastOneElButton'
import './Panel.css';

class Panel extends PureComponent {

    render(props) {
        return (

            <div className="panel">
                {this.props.children}
                {this.props.buttonsWithNumbers.map((item) => (
                        <Button
                            onClick={this.props.handleOnClickNumbers}
                            value={item}
                            key={item}
                        />
                    )
                )}
                {this.props.buttonsWithOperators.map((item) => (
                        <Button
                            onClick={this.props.handleOnClickOperators}
                            value={item}
                            key={item}
                        />
                    )
                )}
                <Button
                    onClick={this.props.handleOnClickOnEqualButton}
                    value="="
                />
                <RemoveLastOneElButton
                    handleOnClickRemoveLastEl={this.props.handleOnClickRemoveLastEl}
                    value="x"
                    equation={this.props.equation}
                />
                <Button
                    onClick={this.props.handleOnClickOnClearAll}
                    value="AC"
                />

            </div>
        );
    }
}

export default Panel;
