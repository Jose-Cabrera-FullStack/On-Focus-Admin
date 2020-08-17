import React, { Component } from 'react'
import apiTrash from "../../../../api/apiTrash"

class DeleteTrash extends Component {
    deleteUser = event => {
        event.preventDefault()
  
        if (
            window.confirm(
                `Do you want to delete this item permanently?`,
            )
        ) {
            apiTrash.deleteTrashById(this.props.id)
            window.location.reload()
        }
    }
  
    render() {
        return <div onClick={this.deleteUser} className="course_admin_delete_permanently">Eliminar definitivamente</div>

    }
  }

export default DeleteTrash
  