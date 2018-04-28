import React,{Component} from "react";
 class Message extends Component {
     constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            status: true
        };
        this.handleClick = this.handleClick.bind(this);
     }
     componentDidMount () {
         this.timer = setInterval(() => {
            this.changeTime()
         },1000)
     }
     componentWillUnmount () {
         clearInterval(this.timer)
     }
     changeTime () {
         this.setState({
             date:new Date()
         })
     }
     handleClick () {
        this.setState(prevState => ({
            status:!prevState.status
        }))
     }
     render () {
         const box = this.state.status && (<div className="box"></div>);
         return (
             <div>
                  <p className="name">hello,{this.props.name}</p>
                  <h1>标题测试</h1>   
                  <p>now the time is :{this.state.date.toLocaleTimeString()}</p> 
                  <button onClick={this.handleClick}>{this.state.status ? "ON" : "OFF"}</button>
                    {box}
             </div>
           
        )
     }
 }

 export default Message