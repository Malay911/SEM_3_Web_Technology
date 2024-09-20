import React,{useState} from 'react';

function Displaystudents() {
    const [students, setStudents] = useState([]);
    const [data, setData] = useState({Name:"",sem:""});
    
        const x=students.map((s)=>{
            return(
                <div>
                    <h1>{s.Name}</h1>
                    <h1>{s.sem}</h1>
                </div>
            )
        })
    return (
        <>
            <div class="form-floating mb-3 col-lg-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="Name"onChange={(e)=>{
                    setData({...data,Name:e.target.value});
                }}/>
                    <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating col-lg-2">
                <input type="number" class="form-control " id="floatingPassword" placeholder="Sem" onChange={(e)=>{
                    setData({...data,sem:e.target.value});
                }}/>
                    <label for="floatingPassword">Sem</label><br/>
                    <button class="btn btn-primary" onClick={(e)=>{
                        e.preventDefault();
                        setStudents([...students,data]);
                        console.log(students);
                    }}>Submit</button>
            </div>
            <div>{x}</div>
        </>
    );
}

export default Displaystudents;