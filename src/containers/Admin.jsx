import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerRequest } from '../actions'
import moment from "moment"

import Button from '../components/Utils/Button'

import Logo from '../assets/static/images/img/admin-logo.png'
import Human from '../assets/static/images/svg/human-hello.svg'
import Arrow from '../assets/static/images/svg/arrow-right.svg'
import '../assets/styles/components/Register.scss';
import '../assets/styles/components/Admin.scss';

const EMAIL_REGEX = new RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
)

const handleInput = event => {
  handleValidation(event.target)

  setValues({
    ...form,
    [event.target.name]: event.target.value
  })
}

const handleSubmit = event => {
  event.preventDefault()
  props.registerUser(form, '/login')
}

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
    birthday: '',
    server: 'LAS',
    verified: false,
    created_at: moment().format()
  })

  return (
      <section className="admin">
        <div className="admin__inside flex">
        <img className="admin__login__img" src={Logo} alt=""/>
            <div className="admin__login__login">
            <div className="admin__inside__option flex">
              <div className="admin__inside__option__left"><p>Soy Administrador</p></div>
              <div className="admin__inside__option__right"><p>Soy Profesor</p></div>
            </div>
            <form className="admin__form" action="">
              <div className="admin__form__inside">
                <h5>Login</h5>
                <input className="admin__form__inside__input" type="text" name="" id="" placeholder="Usuario"/>
                <input className="admin__form__inside__input" type="text" name="" id="" placeholder="Contraseña"/>
                <br/>
                <div className="flex">
                <input className="admin__form__inside__ckeckout" type="checkbox" name="" id=""/><p className="admin__form__inside__ckeckout__text">Recordame</p>
                </div>
                <Button/>
              </div>
            </form>
            </div>
        </div>
      </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
