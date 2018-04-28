import React,{Component} from "react";

import Message from "./components/Message.js"

 export default class App extends Component {
     render () {
         return (
            <div>
                <Message name="小明"/>
            </div>
        )
     }
 }
