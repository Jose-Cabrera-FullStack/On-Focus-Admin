import React, { Component } from 'react'
import apiCourses from "../../../../api/apiCourses"
import Icon from '../../../../assets/static/images/svg/icon-trash.svg'

class DeleteCourse extends Component {
    deleteUser = event => {
        event.preventDefault()
  
        if (
            window.confirm(
                `Do you want to send this course to trash?`,
            )
        ) {
            apiCourses.sendCourseToTrash(this.props.id)
            window.location.reload()
        }
    }
  
    render() {
        return <div onClick={this.deleteUser}><img src={Icon} alt="Enviar a la papelera"/></div>
    }
  }

export default DeleteCourse
  