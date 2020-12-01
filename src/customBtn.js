import React from "react"

let style = {
    "listStyle": "none"
};

class CustomBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    id: 1,
                    name: "lucy"
                },
                {
                    id: 2,
                    name: "tony"
                },
                {
                    id: 3,
                    name: "jack"
                },
            ]
        };
    }

    render() {

        return (
            <ul>
                {
                    this.state.list.map((value) => (
                        <li style={style} key={value.id}>姓名:{value.name}</li>
                    ))
                }
            </ul>


            // <button onClick={this.props.onClick}>{this.props.text}</button>
        )

    }
}

export default CustomBtn;