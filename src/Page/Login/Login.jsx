
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, } from 'react';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, } from 'react-simple-captcha';
import logo from '../../assets/assets/Tablet login-bro.png'
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2'


const Login = () => {
    // const [disabled, setDisabled] = useState(true)

     const { login } = useContext(AuthContext);
     const navigate = useNavigate();
      const location = useLocation();

      const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    


        const handleLogin = event => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);
            login(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    Swal.fire({
                        title: 'User Login Successful.',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    });
                    navigate(from, { replace: true });
                })
        }


            
    
    // const handleValidateCaptcha = (e) => {
    //     const user_captcha_value = e.target.value;
    //     if (validateCaptcha(user_captcha_value)) {
    //         setDisabled(false)

    //     }
    //     else {

    //         setDisabled(true)

    //     }

    // }



    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left pl-10 ml-10">
                        
                        <img src={logo} alt=''></img>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>

                                {/* <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" /> */}

                            </div>
                            {/* TODO: make button disabled for captcha */}
                            <div className="form-control mt-6">
                               
                                <input  className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center'><small>New Here? <Link to="/register">Create an account</Link> </small></p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;