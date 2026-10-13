import "../index.css";
import { useState } from "react"

function App() {

    const[name, setName] = useState<string>("");
    const[age, setAge] = useState<number>();
    const[desc, setDesc] = useState<string>("");
    const[info, setInfo] = useState<User[]>([])

    function Submitted(){
        console.log(name, age, desc);

    }

    return (
        <div>
            <h1>Welcome to Merge Conflict</h1>

            <form>
                <label>Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <br/>
                <label>Age:</label>
                <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)}/>
                <br/>
                <label>Description:</label>
                <input type="text" id="text" value={desc} onChange={(e) => setDesc(e.target.value)}/>
            </form>
            <button onClick={Submitted}>Submit</button>
        </div>
    )
}

export default App