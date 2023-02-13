import React, { useState } from "react";

const InputTodo = () => {
  const [description, setDiscripition] = useState("");

  const onSubmitForm = async (e) =>{
    e.preventDefault();
    try {
        const body = {description};
        const response = await fetch("http://localhost:5000/todos",{
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(body)
        });

        window.location="/";
    } catch (error) {
        console.error(error.message);
    }
  }
  return (
    <div>
      <h1 className="text-center mt-5">Ayla's todo list</h1>
      <form action="" className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          name=""
          id=""
          className="form-control"
          value={description}
          onChange={(e) => setDiscripition(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  );
};

export default InputTodo;
