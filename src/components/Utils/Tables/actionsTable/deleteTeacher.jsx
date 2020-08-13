import React, { Component } from 'react'
import apiTeachers from "../../../../api/apiTeachers"
import Icon from '../../../../assets/static/images/svg/icon-trash.svg'

class DeleteTeacher extends Component {
    deleteUser = event => {
        event.preventDefault()
  
        if (
            window.confirm(
                `Do you want to send this teacher to trash?`,
            )
        ) {
            apiTeachers.sendTeacherToTrash(this.props.id)
            window.location.reload()
        }
    }
  
    render() {
        return <div onClick={this.deleteUser}><img src={Icon} alt="Borrar"/></div>
    }
  }

export default DeleteTeacher
  