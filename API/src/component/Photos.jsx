import React, { useEffect, useState } from 'react';

const Photos = () => {
    const[item,setItem] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
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
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        item.map((ele,i)=>(
                            <tr key={i}>
                                <td>{ele.id}</td>
                                <td>{ele.title}</td>
                                <td><img src={ele.thumbnailUrl} /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Photos;
