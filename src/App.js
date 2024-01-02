import React, {Component} from "react";
/*
1. 전체 코드 한눈에 볼 수 있게 만들기
1.1 코드 전체 출력  
1.2 줄마다 코드 라인에 맞는 들여쓰기 진행
1.3 2.2를 수행하면 해당한 문장 변환

2. 현재 타이핑하는 문장 불러와서 출력하기
2.1 실시간 타이핑 내용을 문장과 비교해서 출력

3. 정확도 / 타수 측정
*/

let [title, setTitle] = useState(['나는 화랑이다', '오늘은 목요일', '지금 날씨가 맑아']);
let [input, setInput] = useState('');

import "./App.css";
export default class App extends Component {

  state = {
    doSentence : [
      {
        id:"1",
        title : "import java.util.*",
        completed :false
      },
      {
        id:"2",
        title : "import java.io.*",
        completed :false
      },
      {
        id:"3",
        title : "public class Main{",
        completed :false
      },
      {
        id:"4",
        title : "public stati void main(String[] args) throws IOException{",
        completed :false
      },
      {
        id:"5",
        title : "BufferedReader br = new BufferedReader(new InputStreamReader));",
        completed :false
      },
      {
        id:"6",
        title : "int n = Integer.parseInt(br.readLine());",
        completed :false
      },
      {
        id:"7",
        title : "int[][] map = new int[n][n];",
        completed :false
      },
      {
        id:"8",
        title : "long[][] dp = new long[n][n];",
        completed :false
      },
      {
        id:"9",
        title : "StringTokenizer st;",
        completed :false
      },
      {
        id:"10",
        title : "for(int i = 0; i < n; i++){",
        completed :false
      },
      {
        id:"11",
        title : "st = new StringTokenizer(br.readLine());",
        completed :false
      },
      {
        id:"12",
        title : "for(int j =0; j<n ; j++){",
        completed :false
      },
      {
        id:"13",
        title : "map[i][j] = Integer.parseInt(st.nextToken());",
        completed :false
      },
    ],
    value : "",
  };

  handleChange =(e) => {
    console.log('e',e.target.value);
    this.setState({value: e.target.value});
    //문장 변환해야함
    
  };

  handleSubmit=(e) => {
    e.preventDefault();
    
    //값 비교해야함
  }
  
  //enter치면 현재 문장과 타이핑 문장 비교해서 볼드 표시 
  handleOnKeyPress = (e) => {
    if(e.key='enter'){
     this.handleSubmit(); 
    }
  }
  //  handleClick =(id) => {
  //    let newData = this.state.doSentence.filter((data)=>data.id !==id);
  //    console.log('newData',newData);
  //    this.setState({doSentence: newData});
  //  }

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
                {data.id +". "}
                {data.title}
                <hr></hr>
                {/* <button onClick={()=>this.handleClick(data.id)}/> */}
              </div>
            </div>
            ))}
        </div>


        <div className="typingContainer"> 
          <div className="now-sentence">
            {/*
            해당하는 문장만 출력하게..
          */}
              {this.state.doSentence[0].title}
              
            {/* {this.state.doSentence.map(data =>(
              <div className="total-code" key={data.id}>  
                <div>
                  {data.title}
                  <hr></hr>
                </div>
             </div>
            ))} */}
            </div>

            <form style={{ display: 'flex'}}>
              <input onChange={(e)=>{
                type="text" 
                placeholder="Typing.."
                setInput(e.target.value);
              }}
                />

                <button onClick={()=>{
                let copytitle = [...title]
                copytitle.push(input);
                 setTitle(copytitle)
                 }}>글작성
                 </button>
            </form>
          
        </div>
      </div>
      )
  }
}
