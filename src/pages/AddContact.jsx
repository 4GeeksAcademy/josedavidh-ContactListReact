// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const AddContact = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

  return (
    <div className="container">
      <div className="col-12 d-flex justify-content-center">
        <h1>Add a new contact</h1>
      </div>
      <form>
        <div className="form-group mb-3">
          <label for="exampleInputEmail1">Full Name</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Full Name" />
        </div>
        <div className="form-group mb-3">
          <label for="exampleInputEmail1">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
        </div>
        <div className="form-group mb-3">
          <label for="exampleInputEmail1">Phone</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter phone" />
        </div>
        <div className="form-group mb-3">
          <label for="exampleInputEmail1">Address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter address" />
        </div>

        <Link to="/">
          <button type="submit" className="btn btn-primary w-100">save</button>
        </Link>
      </form>
      <Link to="/" >or get back to contacts</Link>
    </div>
    
  );
};
