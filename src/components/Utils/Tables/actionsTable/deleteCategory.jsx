import React, { Component } from 'react'
import apiCategories from "../../../../api/apiCategories"
import Icon from '../../../../assets/static/images/svg/icon-trash.svg'

class DeleteCategory extends Component {
    deleteUser = event => {
        event.preventDefault()
  
        if (
            window.confirm(
                `Do you want to send this category to trash?`,
            )
        ) {
            apiCategories.sendCategoryToTrash(this.props.id)
            window.location.reload()
        }
    }
  
    render() {
        return <div onClick={this.deleteUser}><img src={Icon} alt="Enviar a la papelera"/></div>
    }
  }

export default DeleteCategory
  