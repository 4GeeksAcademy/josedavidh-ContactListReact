import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react"
import { updateContact } from "../apiquery/apiContact"

const initialContactData = {
    name: "",
    email: "",
    phone: "",
    address: ""
}

export const EditContact = () => {
    const { store, dispatch } = useGlobalReducer()
    const [contact, setContact] = useState(initialContactData)
    const { theId } = useParams()
    const { contacts } = store

    const handleChange = ({ target }) => {
        setContact({
            ...contact,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const data = await updateContact("jose", theId, contact)
            if (data) {
                console.log(data)
                setContact(initialContactData)
                dispatch({ type: "UPDATE_CONTACT", payload: data })
            }
        } catch (error) {
            console.log("Error:", error)
        }
    }

    const getContact = async () => {
        try {
            const result = contacts.find((item) => item.id == theId)
            if (result) {
                console.log(result)
                setContact(result)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getContact()
    },
        [contacts])

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h1>EDIT CONTACT</h1>
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
                        Edit</button>

                </form>
                <Link to={"/"}>or get back to contacts</Link>
            </div>
        </div>
    )
}