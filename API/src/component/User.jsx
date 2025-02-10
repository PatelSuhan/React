import React, { useEffect, useState } from 'react';

const User = () => {
    const [item,setItem] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((Response) => Response.json())
    .then((data)=>{
        console.log(data)
        setItem(data)
    })
    .catch((err) => console.log(err))
    
  },[])
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        item.map((ele,index)=>(
                            <tr key={index}>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.username}</td>
                                <td>{ele.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default User;
