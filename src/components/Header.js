import React, {useState} from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import BookInput from './BookInput';

const Header = () => {

  const [addBookInput, setAddBookInput] = useState(false);

  function handleButtonClick() {
    setAddBookInput(!addBookInput);
  }

  return (
    <div>
      <h1>Book Tracker</h1>
      <h3>The one-stop-shop to track your reading journey!</h3>
      <MDBBtn outline onClick={handleButtonClick}>Add Book</MDBBtn>
      {addBookInput && <BookInput />}
    </div>
  );
}

export default Header;