import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGooglePlusG, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from '@inertiajs/react'

function SignUpForm() {
  const [state, setState] = React.useState({
    name: '',
    email: '',
    password: '',
  })
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value
    setState({
      ...state,
      [evt.target.name]: value,
    })
  }

  const handleOnSubmit = (evt: React.FormEvent) => {
    evt.preventDefault()

    const { name, email, password } = state
    alert(`You are sign up with name: ${name} email: ${email} and password: ${password}`)

    for (const key in state) {
      setState({
        ...state,
        [key]: '',
      })
    }
  }

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="/discord/redirect" className="social">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="/google/redirect" className="social">
            <FontAwesomeIcon icon={faGooglePlusG} />
          </a>
          <a href="/github/redirect" className="social">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm
