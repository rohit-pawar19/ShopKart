import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeContext'
import { useForm } from 'react-hook-form'

function Login() {
  const { state: themeState } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()


  const Submit = (data) => {
    console.log(data);
    const storedUser = localStorage.getItem("user");
    if(!storedUser){
      alert("USer is not register...!")
      return
    }
    const user = JSON.parse(storedUser)
    if(data.email === user.email && data.password === user.password){
      localStorage.setItem('isLoggedIn', true)
      alert("Login Successfull")
    }
    else{
      alert("Invalid Information..!")
    }
  }
  return (
    <main className="auth-page" data-theme={themeState.theme}>
      <section className="auth-card" aria-labelledby="auth-title">
        <Link to="/" className="auth-brand">ShopKart<span aria-hidden="true">.</span></Link>
        <header className="auth-header">
          <p className="auth-eyebrow">WELCOME BACK</p>
          <h1 id="auth-title">Login to your account</h1>
          <p>Your next favourite find is waiting.</p>
        </header>
        <form className="auth-form" onSubmit={handleSubmit(Submit)}>
          <div className="auth-field">
            <label htmlFor="login-email">Email address</label>
            <input id="login-email" type="email" placeholder="you@example.com"
              autoComplete="email" aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'login-email-error' : undefined}
              {...register("email", { required: "Email is required" })} />
            {errors.email && <p className="auth-error" id="login-email-error" role="alert">{errors.email.message}</p>}
          </div>
          <div className="auth-field">
            <label htmlFor="login-password">Password</label>
            <input id="login-password" type="password" placeholder="Enter your password"
              autoComplete="current-password" aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? 'login-password-error' : undefined}
              {...register("password", { required: "Password is required" })} />
            {errors.password && <p className="auth-error" id="login-password-error" role="alert">{errors.password.message}</p>}
          </div>
          <button className="auth-submit" type="submit">Login <span aria-hidden="true">&rarr;</span></button>
        </form>
        <p className="auth-footer">New to ShopKart? <Link to="/register">Create an account</Link></p>
      </section>
    </main>
  )
}

export default Login;
