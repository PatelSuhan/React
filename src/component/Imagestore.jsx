import React, { useState } from "react";

export default function Imagestore() {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [arr, setArr] = useState([]);

  const handleFile = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && file) {
      const fileURL = URL.createObjectURL(file);
      setArr([...arr, { name: name, file: fileURL }]);
      setName("");
      setFile(null);
    } else {
      alert("Enter a Name and Image");
    }
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input type="file" onChange={handleFile} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      <br />
      <table border={1}>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Image</th>
          </tr>
        </thead>

        <tbody>
          {arr.map((ele, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{ele.name}</td>
              <td>
                <img src={ele.file} alt="" width="20%" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}