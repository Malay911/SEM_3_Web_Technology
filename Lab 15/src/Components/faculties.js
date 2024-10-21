import React, { useState } from 'react';

function Displayfaculties() {
    const [faculties, setFaculties] = useState([]);
    const [data, setData] = useState({ facultyName: "", salary: "" });

    const x = faculties.map((f) => {
        return (
            <div>
                <h1>{f.facultyName}</h1>
                <h1>{f.salary}</h1>
            </div>
        )
    })

    return (
        <>
            <div class="form-floating mb-3 col-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="Name" onChange={(e=>{
                    setData({ ...data, facultyName: e.target.value });
                })}/>
                    <label for="floatingInput">Faculty Name</label>
            </div>
            <div class="form-floating col-2">
                <input type="number" class="form-control" id="floatingPassword" placeholder="Salary" onChange={(e)=>{
                    setData({ ...data, salary: e.target.value });
                }}/>
                    <label for="floatingPassword">Salary</label><br/>
                    <button class="btn btn-primary" onClick={(e)=>{
                        e.preventDefault();
                        setFaculties([...faculties,data]);
                    }}>Submit</button>
            </div><br/>
            <div>{x}</div>
        </>
    )
}

export default Displayfaculties;
