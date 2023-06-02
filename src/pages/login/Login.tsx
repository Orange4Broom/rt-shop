import Icon from '../../components/icon/Icons';
import DefaultLayout from '../../layouts/DefaultLayouts';
import './login.scss';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <DefaultLayout>
      <div className="Login">
        <div className="form-wrapper">
          <form className="login-form">
            <h2 className="form-header">Login</h2>
            <input
              required
              type="email"
              className="input"
              placeholder="Email"
            />
            <input
              required
              type="password"
              className="input"
              placeholder="Password"
            />
            <div className="form-remember">
              <input type="checkbox" className="form-checkbox" />
              Remember me
            </div>

            <button className="btn">
              <Icon type="fas" name="user" color="" />
              Login
            </button>
            <p className="no-account">
              Don`t have account?
              <Link to={'/register'}>Register</Link>
            </p>
            <Link to={'/'} className="form-forget">
              Forgot password?
            </Link>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Login;
