import React, {Component} from "react";
//class component로 만들어보자..힝 아무것도 몰라 너무 어려워요 시발 리액트 포기햇는데 나한테 왜그래요ㅠ
/*
1. 전체 코드 한눈에 볼 수 있게 만들기
1.1 코드 전체 출력    12.31.20.01
1.2 줄마다 코드 라인에 맞는 들여쓰기 진행
1.3 2.2를 수행하면 해당한 문장이 bold체로 변환

2. 현재 타이핑하는 문장 불러와서 출력하기
2.1 실시간 타이핑 내용을 문장과 비교해서 출력
*/
import "./App.css";
export default class App extends Component {
  state = {
    doSentence : [
      {
        id:"1",
        title : "import java.util.*",
        completed :true
      },
      {
        id:"2",
        title : "import java.io.*",
        completed :true
      },
      {
        id:"3",
        title : "public class Main{",
        completed :true
      },
      {
        id:"4",
        title : "public stati void main(String[] args) throws IOEXCEPTION{",
        completed :true
      },
      {
        id:"5",
        title : "BufferedReader br = new BufferedReader(new InputStreamReader));",
        completed :true
      },
      {
        id:"6",
        title : "int n = Integer.parseInt(br.readLine());",
        completed :true
      },
      {
        id:"7",
        title : "int[][] map = new int[n][n];",
        completed :true
      },
      {
        id:"8",
        title : "long[][] dp = new long[n][n];",
        completed :true
      },
      {
        id:"9",
        title : "StringTokenizer st;",
        completed :true
      },
      {
        id:"10",
        title : "for(int i = 0; i < n; i++){",
        completed :true
      },
      {
        id:"11",
        title : "st = new StringTokenizer(br.readLine());",
        completed :true
      },
      {
        id:"12",
        title : "for(int j =0; j<n ; j++){",
        completed :true
      },
      {
        id:"13",
        title : "map[i][j] = Integer.parseInt(st.nextToken());",
        completed :true
      },
    ],
    value : "",
  };

  handleChange =(e) => {
    console.log('e',e.target.value);
    this.setState({value: e.target.value});
  };

  handleSubmit=(e) => {
    e.preventDefault();

  }


  // handleClick =(id) => {
  //   let newData = this.state.doSentence.filter((data)=>data.id !==id);
  //   console.log('newData',newData);
  //   this.setState({doSentence: newData});
  // }

  render(){
    return(
      <div className="container">
        <div className="view_Block">
          <div className="title">
            <h1> Whole Code</h1>
          </div>

          {this.state.doSentence.map(data =>(
            <div className="total-code" key={data.id}>  
              <div>
                {data.id +" "}
                {data.title}
                <hr></hr>
                {/* <button onClick={()=>this.handleClick(data.id)}/> */}
              </div>
            </div>
            ))}
        </div>


        <div className="typingContainer">
          <div className="senctence-Block">
            
          </div>
          
            <form style={{ display: 'flex'}} onSubmit ={this.handleSubmit}>
              <input 
                type="text" 
                name="value" 
                style={{flex:'10', padding:'5px'}}
                placeholder={this.state.doSentence.title}
                value={this.state.doSentence.value}
                onChange={this.handleChange} 
                />
                <input
                type="submit"
                value = "enter"
                className="btn"
                style={{flex: 1}}
                />
            </form>
          
        </div>
      </div>
      )
  }
}
