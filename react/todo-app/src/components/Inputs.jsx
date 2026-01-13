import "./Inputs.css"
import { useState } from "react"
import PrioritySelector from "./Priority.jsx"
import DueDate from "./DueDate.jsx"
import Steps from "./Steps.jsx"

export default function Inputs({pushList}) {

    const [inputData, setInputData] = useState({title: "", description: "", key: "", priority: ""})
    const [expanded, setExpanded] = useState(false)

    function addItem() {
        if (inputData.title != "") {
            pushList({...inputData, key:crypto.randomUUID()})
            setInputData({
                title: "", 
                description: "", 
                key: "", 
                priority: "",
                dueDate: "",
            })
        }
    }

    if (!expanded) {
        return (
            <div id="minContainer">
                <input 
                    id="inputField"
                    value={inputData.title}
                    placeholder="Task Name"
                    onChange={(event)=>setInputData({
                        ...inputData, 
                        title: event.target.value,
                    })}
                />
                <button id="addButton" onClick={addItem}>
                    Add
                </button>
                <button
                    id="expandButton"
                    onClick={()=>setExpanded(true)}             
                >▼</button>
 
            </div>
        )
    }
    else {
        return (
            <div id="maxContainer">
                <div id="mainControls">
                    <div>
                        <input 
                            value={inputData.title}
                            placeholder="Task Name"
                            onChange={(event)=>setInputData({...inputData, title:event.target.value})}
                        />
                        <input
                            value={inputData.description}
                            placeholder="Task Description"
                            onChange={(event)=>setInputData({...inputData, description:event.target.value})}
                        ></input>
                    </div>
                    <button id="addButton" onClick={addItem}>
                        Add
                    </button>
                </div>
                <div id="additionalControls">
                    <div class="additionalControlItem">
                        <PrioritySelector 
                            selectedPriority={inputData.priority} 
                            setSelectedPriority={(priority) => setInputData({...inputData, priority})} 
                        />
                    </div>
                    <div class="additionalControlItem">
                        <DueDate 
                            dueDate={inputData.dueDate} 
                            setDueDate={(dueDate) => setInputData({...inputData, dueDate})}
                        />
                    </div>
                    <div class="additionalControlItem">
                        <Steps />
                    </div>
                    <div class="expandControlItem">
                        <button
                            id="expandButton"
                            onClick={()=>setExpanded(false)}             
                        >▲</button>
                    </div>
                </div>
            </div>
        )
    }
}

                // <input 
                //     id="inputField"
                //     value={inputData.description}
                //     onChange={(event)=>setInputData({...inputData, description:event.target.value})}
                // ></input>