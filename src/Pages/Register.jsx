import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeContext'
import { useForm } from 'react-hook-form'

function Register() {
  const { state: themeState } = useContext(ThemeContext);

  const{
    register,
    handleSubmit,
    formState:{errors}
  }=useForm()

  const Submit = (data)=>{
    console.log(data);
  }

  return (
    <main className="auth-page" data-theme={themeState.theme}>
      <section className="auth-card" aria-labelledby="auth-title">
        <Link to="/" className="auth-brand">ShopKart<span aria-hidden="true">.</span></Link>
        <header className="auth-header">
          <p className="auth-eyebrow">JOIN SHOPKART</p>
          <h1 id="auth-title">Create your account</h1>
          <p>A little inspiration. A lot to discover.</p>
        </header>
        <form className="auth-form" onSubmit={handleSubmit(Submit)}>
          <div className="auth-field">
            <label htmlFor="register-name">Username</label>
            <input id="register-name" type="text" placeholder="Choose a username"
              autoComplete="username" aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'register-name-error' : undefined}
              {...register("name", { required: "Username is required" })} />
            {errors.name && <p className="auth-error" id="register-name-error" role="alert">{errors.name.message}</p>}
          </div>
          <div className="auth-field">
            <label htmlFor="register-email">Email address</label>
            <input id="register-email" type="email" placeholder="you@example.com"
              autoComplete="email" aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'register-email-error' : undefined}
              {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" } })} />
            {errors.email && <p className="auth-error" id="register-email-error" role="alert">{errors.email.message}</p>}
          </div>
          <div className="auth-field">
            <label htmlFor="register-password">Password</label>
            <input id="register-password" type="password" placeholder="Create a password"
              autoComplete="new-password" aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? 'register-password-error' : undefined}
              {...register("password", { required: "Password is required", minLength: { value: 8, message: "Use at least 8 characters" } })} />
            {errors.password && <p className="auth-error" id="register-password-error" role="alert">{errors.password.message}</p>}
          </div>
          <button className="auth-submit" type="submit">Create account <span aria-hidden="true">&rarr;</span></button>
        </form>
        <p className="auth-footer">Already have an account? <Link to="/login">Login</Link></p>
      </section>
    </main>
  )
}

export default Register;
