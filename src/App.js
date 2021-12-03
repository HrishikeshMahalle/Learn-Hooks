
import './App.css';
import React,{useState, useReducer} from 'react';
import Todo from './todos';
import List from './List';

export const ACTION = {
  INCREMENT:'increment',
  DECREMENT:'decrement',
  ADD_TODO:'add-todo',
  TOGGLE:'toggle',
  DELETE:'delete'

}

function reducer(todos, action){
  switch(action.type) {
    case ACTION.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]

    case ACTION.TOGGLE:
      return todos.map(todo => {
        if(todo.id === action.payload.id)
        {
          return {...todo, completed : !todo.completed }
        }
        return todo
      })

    case ACTION.DELETE:
      return todos.filter( todo=>todo.id !== action.payload.id)
      
    default:
      return todos
      
     
  }
  
    // switch(type){
    //   case ACTION.INCREMENT:
    //     return {count: state.count + 1}
    //   case ACTION.DECREMENT:
    //     return {count:state.count - 1}
    //   default:
    //     return state
    // }
    // if(state.count !== 0 && payload === '-'){
    //   return {count: state.count - 1}
    // }
    // if(state.count !== 0 && payload === '+'){
    //   return {count : state.count + 1}
    // }
    // if(state.count === 0)
    // {
    //   return state
    // }
}

function newTodo(name){
  return { id: Date.now(), name: name, completed: false}
}

function App() {

  //Understanding useReducer() hook
  
  const [todos, dispatch] = useReducer(reducer, [])
  const [name,setName] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    dispatch({type: ACTION.ADD_TODO,payload:{name:name}})
    setName('')
  }

  console.log(todos)


  // const increment = () => {
  //   dispatch({/* type: ACTION.INCREMENT ,*/payload:"+"})
  // }

  // const decrement=()=>{
  //   dispatch({/* type: ACTION.DECREMENT, */payload:"-"})
  // }

  //Understanding useRef() hook

 /*  const [name,setName] = useState('')
  const renderCount = useRef(0)

  useEffect(() => {
   renderCount.current = renderCount.current + 1
  })

  const inputz = useRef('')

  const focus=()=>{
    inputz.current.focus();
    inputz.current.value = 'some value'
  } */
  


  //Understanding useCallbackHook

/*   const [number,setNumber] = useState(1)
  const [dark,setDark] = useState(false)

  //Imagine this as calling some Api and returning results
  const getItems = useCallback(() =>{
   
    return [number, number + 1,number + 2]
  },[number])

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  } */




  //Understanding useMemo Hook

  /* const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(()=>{ 
    return slowFunction(number)
  },[number])

  const themeStyles  = useMemo(()=>{
    return{
    backgroundColor:dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
    }
  },[dark])

  useEffect(() => {
   console.log("theme Changed")
    
  }, [themeStyles]) */
  



  //understanding useEffect hook

  // const [resourceType, setResourceType] = useState('posts')
  // const [data,setData] = useState([])



/*   const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleSize = () =>{
    setWindowWidth(window.innerWidth)
  }

  useEffect(()=>{
  window.addEventListener('resize',handleSize)
  console.log("changed")
  return ()=>{
    window.removeEventListener('resize',handleSize)
    console.log("re-changed")
  }
  },[]) */


  /* useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setData(json))
    
  },[resourceType]) *///whenever the hook value is going to change it will run Eg: if we write [resourceType] then whenever the resourceType value will change the hook will run



  //useState Hook
  // const [state, setState] = useState({count:4,bg:"red"})

  // const count = state.count
  // const theme = state.bg

  // function decrementCount(){
  //  setState(prevState => {
  //    return {...prevState, count: prevState.count - 1}
  //  })
  // }
  // function incrementCount(){
  //   setState(prevState =>{
  //     return {...prevState, count:prevState.count + 1, bg:"blue"}
  //   })
   
  // }

  return (
    <>
    {/* // <div className="useState-Hook">
    //   <button onClick={()=>decrementCount()}>-</button>
    //   <span>{count}</span>
    //   <span>{theme}</span>
    //   <button onClick={()=>incrementCount()} >+</button>
    // </div> */}

   {/* /*  <div className="useEffect-hook">

    <h3>{windowWidth}</h3> */}


      {/* <button onClick={()=>setResourceType('posts')}>Posts</button>
      <button onClick={()=>setResourceType('users')}>Users</button>
      <button onClick={()=>setResourceType('comments')}>Comments</button>
      <div className="output">
        {resourceType}
      </div>
    {data.map(dat => {
      return <p>{JSON.stringify(dat)}</p>
    })} */}
    {/* </div> */ }

  

    {/* <div className="useMemo-hook">
      <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))} />

      <button onClick={() => setDark(prevDark => !prevDark)}>Change theme</button>

      <div style={themeStyles}>{doubleNumber}</div>
    </div> */}

    {/* <div className="useCallback-hook">
      <div style={theme}>
        <input type="number"
          value={number}
          onChange={e =>setNumber(parseInt(e.target.value))} 
        />
        <button onClick={() =>setDark(prevDark => !prevDark)}>ToggleTheme
        </button>
        <List getItems={getItems}/>
      </div>
    </div> */}

   {/*  <div className="useRef-hook">
      <input ref={inputz} type="text" value={name} onChange={e => setName(e.target.value)} />
      <h3>My name is {name}</h3>
      <h2>Im rendered {renderCount.current} times</h2>
      <button onClick={()=>focus()}>Focus</button>
    </div> */}

    <div className="useReducer-hook">

    {/* <button onClick={()=>increment()}>+</button>
    <span>{state.count}</span>
    <button onClick={()=>decrement()}>- </button> */}

    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </form>
    {todos.map(todo=>{
    
    return <Todo key={todo.id} dispatch={dispatch} todo={todo}/>
    }
    )}


    </div>

</>
  );
}

/* const slowFunction=(num)=>{
  console.log("Slowfunnn")
  for(let i = 0;i <= 1000000000;i++){}
  return num * 2
} */

export default App;
