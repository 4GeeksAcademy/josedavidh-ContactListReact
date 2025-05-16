import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom"
import { deleteContact } from "../apiquery/apiContact.js"

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const { contacts } = store

	const handleDeleteContact = async (id) => {
		try {
			const response = await deleteContact("jose", id)
			if (response) {
				dispatch({
					type: "SET_CONTACTS", 
					payload: contacts.filter((item) => item.id !==id)})
			}
		} catch (error) {
			console.log(error)
		}
	}


	return (
		<div className="container">
			<div className="row mt-3 justify-content-center">
				<div className="col-12 col-md-8 d-flex justify-content-end mb-3">
					<Link to={"/create-contact"}
						className="btn btn-success">Add new contact
					</Link>
				</div>

				<div className="col-12 col-md-8 text-center">
					{
						contacts.map((item) => {
							const { name, phone, email, address } = item
							return (
								<div
									key={item.id} className="d-flex justify-content-between border"
								>
									<div className="d-flex align-items-center py-2">
										<div className="px-2">
											<img
												src={'https://i.pravatar.cc/120'}
												className="img-fluid rounded-circle"
											/>
										</div>
										<div className="text-start text-contact ms-2">
											<p className="mb-1">{name}</p>
											<p className="mb-1">{address}</p>
											<p className="mb-1">{phone}</p>
											<p className="mb-0">{email}</p>
										</div>
									</div>
									<div>
										<Link className="btn"
											to={`/contact-edit/${item.id}`}>
											<i className="fas fa-pencil-alt"></i>
										</Link>
										<button
											type="button"
											className="btn"
											onClick={() => handleDeleteContact(item.id)}>
											<i className="fas fa-trash-alt"></i>
										</button>
									</div>
								</div>
							)
						})
					}


				</div>

			</div>

		</div>
	);
}; 