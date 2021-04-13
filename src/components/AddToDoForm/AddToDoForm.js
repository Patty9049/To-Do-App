import React from "react";
import { Grid } from "react-flexbox-grid";

const AddToDoForm = ({ addToDo }) => {
  return (
    <Grid>
      <form onSubmit={addToDo}>
        <input type="text" name="toDoTitle" placeholder="Type to do title.." />
        <textarea
          type="text"
          name="toDoContent"
          placeholder="Type to do content.."
          cols="30"
          rows="10"
        />
        <label htmlFor="toDoPriority">Choose todo priority: </label>
        <select name="toDoPriority" id="toDoPriority">
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>

        <button type="submit">add todo</button>
      </form>
    </Grid>
  );
};

export default AddToDoForm;
