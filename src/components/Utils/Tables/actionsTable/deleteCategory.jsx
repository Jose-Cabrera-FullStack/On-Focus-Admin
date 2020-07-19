import React, { Component } from 'react'
import apiCategories from "../../../../api/apiCategories"
import Icon from '../../../../assets/static/images/svg/icon-trash.svg'

class DeleteCategory extends Component {
    deleteUser = event => {
        event.preventDefault()
  
        if (
            window.confirm(
                `Do you want to delete this category permanently?`,
            )
        ) {
            apiCategories.deleteCategoryById(this.props.id)
            window.location.reload()
        }
    }
  
    render() {
        return <div onClick={this.deleteUser}><img src={Icon} alt="Borrar"/></div>
    }
  }

export default DeleteCategory
  