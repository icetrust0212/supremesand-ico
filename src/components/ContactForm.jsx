import React, { Component } from 'react'
import axios from 'axios'

class ContactForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      firstname: '',
      email: '',
      message: '',
      sendText: 'Send Message',
      error: false
    }
    this.handlerChange = this.handlerChange.bind(this)
    this.handlerSubmit = this.handlerSubmit.bind(this)
  }

  handlerChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async handlerSubmit (e) {
    e.preventDefault()

    const url = `https://alycoinappweb.appspot.com/alysystem/post/email`
    const requestApi = {
      name: this.state.firstname,
      email: this.state.email,
      message: this.state.message
    }

    if (this.state.firstname === '' && this.state.firstname.trim === '') {
      return null
    } else if (this.state.email === '' && this.state.firstname.trim === '') {
      return null
    } else if (this.state.message === '' && this.state.message === '') {
      return null
    } else {
      this.setState({ sendText: 'Sending message...' })
      axios.post(url, requestApi)
        .then(response => {
          if (response.data.success === 'send is Successfully') { this.setState({ sendText: 'Message Sent' }) } else {
            this.setState({ sendText: 'Failed', error: true })
          }
        })
    }
  }

  render () {
    return (
      <form className='form' autoComplete='off' onSubmit={this.handlerSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            className='form-input'
            value={this.state.name}
            onChange={this.handlerChange}
            name='firstname'
          />

          <input
            type='email'
            placeholder='Mail'
            className='form-input'
            value={this.state.email}
            onChange={this.handlerChange}
            name='email'
          />
        </div>

        <div className='form-group'>
          <textarea
            className='form-input form-area'
            placeholder='Message'
            value={this.state.message}
            name='message'
            onChange={this.handlerChange}
          />
        </div>

        <input
          type='submit'
          value={this.state.sendText}
          className={`form-submit ${this.state.error ? 'error' : ''}`}
        />
      </form>
    )
  }
}
export default ContactForm
