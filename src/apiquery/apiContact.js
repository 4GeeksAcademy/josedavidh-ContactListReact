import { urlBase } from  "./config"

export const getAllContacts = async (username) => {
    try {
        const response = await fetch(`${urlBase}/${username}/contacts`)
        if (response.ok) {
            const data = await response.json()
            return data.contacts
        } else if (response.status === 404) {
            createAgenda(username)
        } else {
            throw new Error ("Fallo al obtener las agendas")
        }
    } catch (error) {
        console.error("Ocurrió un error al obtener las agendas", error)
        throw error
    }
}

export const createAgenda = async(username) => {
    try {
        const response = await fetch(`${urlBase}/${username}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }

        })
        if (response.ok) {
            return true
        } else {
            throw new Error ("Fallo al obtener la agenda")
        }

    } catch (error) {
        console.error ("Error al crear el contacto", error)
        throw error
    }
}

export const addContact = async(username, contact) => {
    try {
        const response = await fetch(`${urlBase}/${username}/contacts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)

        })
        if (response.ok) {
           const data = await response.json()
           return data
        } else {
            throw new Error ("Fallo al crear contacto")
        }
    } catch (error) {
        console.error ("Error creando el contacto:", error)
        throw error
    }
}

export const updateContact = async (username, id, contact) => {
    try {
        const response = await fetch(`${urlBase}/${username}/contacts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        })
        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            throw new Error("Falla en la actualizacion del contacto")
        }
    } catch (error){
        console.error("Error actualizando el contacto:", error)
        throw error
    }
}

export const deleteContact = async (username, id) => {
    try {
        const response = await fetch(`${urlBase}/${username}/contacts/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.ok) {
            return true
        } else {
            throw new Error ("Fallo al borrar el contacto")
        }
    } catch (error) {
        console.error("Error borrando el contacto:", error)
        throw error
    }
}