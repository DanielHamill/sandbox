import TodoItem from './components/TodoItem'
import Inputs from "./components/Inputs"
import { useState } from 'react'
import './App.css'

function App() {

  const [itemList, setItemList] = useState([])

  function pushList(item) {
    setItemList([...itemList, item])
  }

  return (
    <>
      <Inputs pushList={pushList}></Inputs>
      <div id="container">
        {
          itemList.map(item => {
            return <TodoItem 
                      title={item.title} 
                      description={item.description}
                      priority={item.priority}
                      dueDate={item.dueDate}
                      key={item.key}
                    >
                    </TodoItem>
        })}
      </div>
    </>
  )
}

export default App
