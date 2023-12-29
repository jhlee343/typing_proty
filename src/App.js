import React, {Component} from "react";
//class component로 만들어보자..힝 아무것도 몰라 너무 어려워요 시발 리액트 포기햇는데 나한테 왜그래요ㅠ
import "./App.css";
export default class App extends Component {
  render(){
    return(
      <div className="container">
        <div className="view_Block">
          <h1> Whole Code</h1>
          <div className="total-code">  
             <p>
              import java.util.*;<br></br>
              import java.io*;<br></br>
                public class Main&#123;<br></br>
                public static void main(String args)throws IOEXception&#123;<br></br>
                  System.out.println("hello world");<br></br>
                  &#125; <br></br>
                  &#125;
                </p>
              
            </div>
        </div>
      </div>
      )
  }
}
