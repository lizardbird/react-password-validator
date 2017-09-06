import React, { Component } from 'react'
import './Validator.css'

class Validator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      validPass: false,
      validEmail: false
    }
  }
  inputEmail (e) {
    this.setState({
      email: e.target.value
    })
  }
  inputPassword (e) {
    this.setState({
      password: e.target.value
    })
  }
  inputconfirmPassword (e) {
    this.setState({
      confirmPassword: e.target.value
    })
  }
  onSubmit (e) {
    e.preventDefault()
    this.checkValid()
  }

  checkValid () {
    if (this.state.email.includes('@', '.')) {
      this.setState({
        validEmail: true
      })
    } else {
      this.setState({
        validEmail: false
      })
    }
    if (this.state.password === this.state.confirmPassword) {
      this.setState({
        validPass: true
      })
    } else {
      this.setState({
        validPass: false
      })
    }

  }

  render () {
    var valid = "Please enter your sign up info."
    var className = "waiting"
    var emailClass = "waiting"
    if (this.state.email) {
      if (this.state.email.includes('@' && '.')) {
        emailClass = "valid"
      } else {
        emailClass = "invalid"
      }
    }
    if (this.state.confirmPassword) {
      if (this.state.password === this.state.confirmPassword) {
        className = "valid"
      } else {
        className = "invalid"
      }
      if (this.state.validPass === true && this.state.validEmail === true) {
        valid = 'Valid!'
      } else {
        valid = 'Invalid!'
      }
    }

    return (
      <div className='form'>
        <h1>Sign Up</h1>
        <p>{valid}</p>
        <input className={emailClass} type='text' placeholder='email' onChange={(e) => this.inputEmail(e)} />
        <input className={className} type='password' placeholder='password' onChange={(e) => this.inputPassword(e)} />
        <input className={className} type='password' placeholder='confirm password' onChange={(e) => this.inputconfirmPassword(e)} />
        <input type='submit' value='Submit' onClick={(e) => this.onSubmit(e)} />
      </div>
    )
  }
}

export default Validator
