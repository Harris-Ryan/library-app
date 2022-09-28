import React from "react";
import { MDBBtn } from 'mdb-react-ui-kit';

const BookInput = () => {
  return (
    <div>
      <form>
        <label htmlFor="title"></label>
        <input type="text" id="title" name="title" placeholder="Book Title" />
        <br />
        <label htmlFor="author"></label>
        <input type="text" id="author" name="author" placeholder="Book Author" />
        <br />
        <label htmlFor="pages"></label>
        <input type="text" id="pages" name="pages" placeholder="Number of pages" />
        <br />
        <MDBBtn outline color="success">Add To List</MDBBtn>
      </form>
    </div>
  );
}

export default BookInput;