import React, { Component } from 'react'
import apiStudent from "../../../../api/apiStudents"
import Icon from '../../../../assets/static/images/svg/icon-trash.svg'

class DeleteStudent extends Component {
    deleteUser = event => {
        event.preventDefault()
  
        if (
            window.confirm(
                `Do you want to delete this student permanently?`,
            )
        ) {
            apiStudent.deleteStudentById(this.props.id)
            window.location.reload()
        }
    }
  
    render() {
        return <div onClick={this.deleteUser}><img src={Icon} alt="Borrar"/></div>
    }
  }

export default DeleteStudent
  