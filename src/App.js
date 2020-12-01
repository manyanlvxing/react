// import logo from './logo.svg';
// import './App.css';
import React from "react";

import CustomBtn from "./customBtn";

import ImageComp from "./imageComp";
import SelectComp from "./SelectComp";
import FileSet from "./FileSet";


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           11111111111
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            c: 0,
            f: 0
        };

        this.onChanged = this.onChanged.bind(this);

        this.btnRef = React.createRef();

    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        //1不要直接修改state使用setState
        //2setState可能是异步的，为了性能问题会合并执行,所以不要想着setState之后就刷新状态,可以用回调函数
        //3state更新会被合并，而不是简单的替换
        this.setState({
            date: new Date()
        })
    }

    onClick(date, e) {
        console.log(this.btnRef);

        console.log(date, e);
    }

    onChanged(value) {
        this.setState({
            f: Number(value) + 100,
            c: Number(value)
        })
    }

    render() {

        return (
            <div>
                <h1 ref={this.btnRef}>
                    hello world
                </h1>

                <h2>
                    this time is {this.state.date.toLocaleTimeString()}
                </h2>

                <button onClick={(e) => this.onClick(this.state.date, e)}>点击</button>
                <CustomBtn text="点击" onClick={this.onClick}></CustomBtn>

                <ImageComp url="/logo192.png" altTips="未找到图片"/>

                <SelectComp/>

                <FileSet onChanged={this.onChanged} c={this.state.c} f={this.state.f}/>

            </div>



        )
    }
}

export default Clock;