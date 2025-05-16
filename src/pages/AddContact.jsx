// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react"
import { addContact } from "../apiquery/apiContact"

const initialContactData = {
  name: "",
  phone: "",
  email: "",
  address: ""
}

export const AddContact = () => {
  const { store, dispatch } = useGlobalReducer()
  const [contact, setContact] = useState(initialContactData)

  const handleChange = ({ target }) => {
    setContact({
      ...contact,
      [target.name]: target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const data = await addContact("jose", contact)
      if (data) {
        console.log(data)
        setContact(initialContactData)
        dispatch({ type: "ADD_CONTACT", payload: data })
      }

    } catch (error) {
      console.log("Error:", error)
    }
  }

  return (
    <div className="container">
     <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <h1>Add a new contact</h1>
      </div>
      <form
        onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Full Name"
            name="name"
            value={contact.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={contact.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter phone"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter address"
            name="address"
            value={contact.address}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          save</button>

      </form>
      <Link to={"/"}>or get back to contacts</Link>
     </div>
    </div>
  );
};
