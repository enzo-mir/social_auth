import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGooglePlusG, faGithub } from '@fortawesome/free-brands-svg-icons'

function SignInForm() {
  const [state, setState] = React.useState({
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

    const { email, password } = state
    alert(`You are login with email: ${email} and password: ${password}`)

    for (const key in state) {
      setState({
        ...state,
        [key]: '',
      })
    }
  }

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
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
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  )
}

export default SignInForm
