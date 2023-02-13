import React, { useState } from "react";

const EditTodo = ({ todo }) => {
    const [description, setDiscripition] = useState(todo.description);
    
    //edit description function
    const updateDescrition = async (e) =>{
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
                method: "PUT",
                headers : { "Content-Type" : "application/json"},
                body: JSON.stringify(body)
            });

            window.location= "/";
        } catch (error) {
            console.error(error.message);
        }
    }
  
    return (
    <div>
      <button
        type="button"
        class="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div
        class="modal fade"
        id={`id${todo.todo_id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Edit Todo
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setDiscripition(todo.description)}
              ></button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                name=""
                id=""
                className="form-control"
                value={description}
                onChange={(e) => setDiscripition(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => setDiscripition(todo.description)}
              >
                Close
              </button>
              <button type="button" class="btn btn-warning" onClick={e => updateDescrition(e)}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
