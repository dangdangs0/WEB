import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Header(props){//내가 만든 사용자 정의 태그(컴포넌트)!!
  console.log('props',props,props.title);
  return <header>
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault();//a태그가 작동하는 기본 동작 방지(리로드 방지)
      props.onChangeMode();//밑에 onChangeMode (alert해주는애) 호출
    }}>{props.title}</a></h1>
  </header> 
}

function Nav(props){//lis 배열 하나씩 꺼내서 배치시켜줌
  const lis=[]
  for(let i =0; i<props.topics.length; i++){//topic 원소 숫자만큼 반복됨
    let t=props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{//event처럼 파라미터 하나일땐 괄호 생략 가능
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));//event.target은 a태그를 가리킴(이벤트를 유발시킨거)
      }}>{t.title}</a>
    </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
    </article>
}

function Create(props){
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      //Submit시 페이지 리로드되는거 막아아됨
      event.preventDefault();
      const title=event.target.title.value;//event target은 form 태그
      const body=event.target.body.value;
      props.onCreate(title,body);
    }}>
      <p><input type="text" name="title" placeholder='title'/></p>
      <p><textarea name="body" placeholder='body'></textarea></p>
      <p><input type="submit" value="Create"></input></p>
    </form>
  </article>
}

function Update(props){
  const [title,setTitle]=useState(props.title);
  const [body,setBody]=useState(props.body);
  return <article>
  <h2>Update</h2>
  <form onSubmit={event=>{
    //Submit시 페이지 리로드되는거 막아아됨
    event.preventDefault();
    const title=event.target.title.value;//event target은 form 태그
    const body=event.target.body.value;
    props.onUpdate(title,body);
  }}>
    <p><input type="text" name="title" placeholder='title' value={title} onChange={event=>{//새로운 값 입력될때마다
      setTitle(event.target.value);
    }}/></p>
    <p><textarea name="body" placeholder='body' value={body} onChange={event=>{
      setBody(event.target.value);
    }}></textarea></p>
    <p><input type="submit" value="Update"></input></p>
  </form>
</article>
}

function App() {
  // const _mode = useState("WELCOME");
  // const mode=_mode[0];//useState 인자는 state 초기값이라서, 0번째의 인덱스값을 읽음
  // const setMode=_mode[1];//state값 변경시
  const [mode,setMode]=useState("WELCOME");//위에 세줄이랑 같은 코드
  const [id,setId]=useState(null);
  const [nextId,setNextId]=useState(4);
  const [topics,setTopics]= useState([//<li>태그를 위한 배열
    {id:1,title:'html',body:"html is ..."},//객체로 만들어주는 것
    {id:2,title:'css',body:"css is ..."},
    {id:3,title:'javascript',body:"javascript is ..."}
  ] );//state로 승격
  let content=null;
  let contextControl=null;
  if(mode==="WELCOME"){
    content=<Article title="Welcome" body="Hello, WEB"></Article>
  }
  else if(mode==="READ"){
    let title, body=null;
    for(let i=0;i<topics.length;i++){
      if(topics[i].id===id){
        title=topics[i].title;
        body=topics[i].body;
      }
    }
    content=<Article title={title} body={body}></Article>
    contextControl=<>
      <li><a href={'/update/'+id} onClick={event=>{
        event.preventDefault();
        setMode("UPDATE");
      }}>Update</a></li>
      <li><input type="button" value="Delete" onClick={()=>{
          const newTopics=[]
          for(let i=0;i<topics.length;i++){
            if(topics[i].id!==id){
              newTopics.push(topics[i]);//id값 일치 안하는것만 newTopics에 추가
            }
          }
        setTopics(newTopics);
        setMode('WELCOME');
      }}/></li>
    </>
  }
  else if(mode==="CREATE"){
    content=<Create onCreate={(_title,_body)=>{
      const newTopic={id:nextId,title:_title,body:_body}
      const newTopics=[...topics]//복제본을 만들어서 그 복제본에 새로 추가하고, 변경사항이 있을때 새로고침함
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
  }
  else if(mode==="UPDATE"){
    let title, body=null;
    for(let i=0;i<topics.length;i++){
      if(topics[i].id===id){
        title=topics[i].title;
        body=topics[i].body;
      }
    }
    content=<Update title={title} body={body} onUpdate={(title,body)=>{
      console.log(title,body);
      const newTopics=[...topics]
      const updatedTopic={id:id,title:title,body:body}
      for(let i=0; i<newTopics.length;i++){
        if(newTopics[i].id===id){
          newTopics[i]=updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('READ');
    }}></Update>
  }
  
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{ //Header태그 클릭시, 함수를 통해 이벤트 발생
        setMode("WELCOME");
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode("READ");
        setId(_id);
      }}></Nav>
      {content}
      <ul>
        <li><a href="/create" onClick={event=>{//생성
          event.preventDefault();
          setMode("CREATE");
        }}>Create</a></li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;