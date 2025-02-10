import React, { useEffect, useState } from 'react';

const Posts = () => {

    const[item,setItem] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
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
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        item.map((ele,i)=>(
                            <tr key={i}>
                                <td>{ele.id}</td>
                                <td>{ele.title}</td>
                                <td>{ele.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Posts;
