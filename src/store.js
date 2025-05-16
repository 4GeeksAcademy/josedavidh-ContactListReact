export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    urlBase: "https://playground.4geeks.com/contact/agendas",
    contacts: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'SET_CONTACTS':
      return {
        ...store,
        contacts: action.payload
      }
    case 'ADD_CONTACT':
      return {
        ...store,
        contacts: [...store.contacts, action.payload]
      }
    case 'UPDATE_CONTACT':
      return {
        ...store,
        contacts: store.contacts.map((contact) => (contact.id === action.payload.id ? { ...contact, ...action.payload } : contact))
      }
    default:
      throw Error('Unknown action.');
  }    
}
