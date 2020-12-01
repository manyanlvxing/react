import React from "react";

class FileSet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.onChanged = this.onChanged.bind(this);

    }

    onChanged(e) {
        this.props.onChanged(e.target.value);
    }

    render() {
        return (
            <fieldset>
                <legend>温度</legend>
                华氏温度<input value={this.props.f} type="text" onChange={this.onChanged}/>
                摄氏温度<input value={this.props.c} type="text" onChange={this.onChanged}/>
            </fieldset>


        )
    }

}

export default FileSet;