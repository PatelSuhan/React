import React, { useEffect, useState } from 'react';

const Todos = () => {
    const[item,setItem] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((Response)=>Response.json())
        .then((data)=>{
            console.log(data)
            setItem(data)
        })
        .catch((err)=>console.log(err))
    },[])

    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        item.map((ele,i)=>(
                            <tr key={i}>
                                <td>{ele.id}</td>
                                <td>{ele.title}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Todos;
