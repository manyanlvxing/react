import React from "react";

var style = {
    "color": "green",
    "backgroundColor": "red"
};


class SelectComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'apple'
        };

        this.onSelectChange = this.onSelectChange.bind(this);
    }

    onSelectChange(event) {

        this.setState({
            value: event.target.value
        })

    }

    render() {
        return (

            <select style={style} value={this.state.value} onChange={this.onSelectChange}>
                <option value="orange">orange</option>
                <option value="apple">apple</option>
                <option value="melon">melon</option>
            </select>


        )
    }


}

export default SelectComp;