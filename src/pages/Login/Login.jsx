import React from 'react';
import {Link} from 'react-router-dom';
// importam componente noi
import Logo from '../../assets/images/techLogo.png';
import {ReactComponent as Google} from '../../assets/icons/google.svg';
import {ReactComponent as Facebook} from "../../assets/icons/iconfacebook.svg";
import './Login.css'
import video from '../../video/presentationVideo.mp4';
import { connect } from 'react-redux';
import { loginUserUsingGoogle,loginUserUsingFacebook } from '../../redux/user/UserActions';
// ATENTIE! Cu toate ca Login are constante si functii, nu e nevoie sa fie declarata
// drept class, pentru ca nu are un state propriu.
class Login extends React.Component {

    componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user) {
            this.props.history.push('/');
        }
    }

    
    render(){
        const {handleGoogleLogin,handleFacebookLogin,handleSubmit,handleInputChange} =this.props;
        return (
            <div className="login-page">
                <video autoPlay loop  muted style={
                    {
                        position:'absolute',
                        width:"100%",
                        left:"50%",
                        top:"50%",
                        height:"1450px",
                        objectFit:"cover",
                        transform:"translate(-50%,-50%)",
                        zIndex:"-1",
                        backgroundRepeat:"no-repeat",
                        backgroundSize:"cover"
    
                    }
                }>
                    <source src={video} type="video/mp4">
                    </source>
                </video>
                {/* Logo-ul va duce catre Home. */}
                <Link to='/'>
                    <img src={Logo} alt="logo" className="mb-5 tech-logo"/>
                </Link>
    
                <h1 className="h2 text-white">Login</h1>
                <p className="text-white">Alege providerul cu care vrei să vrei să te loghezi:</p>
    
                {/* Butonul de login cu Google, la pachet cu  */}
                <button
                    // Clasele sunt de Bootstrap, din nou, daca nu le stiti, cautati-le!
                    className="btn btn-outline-dark d-flex align-items-center google-button"
                    // La click apelam functia handleGoogleLogin
                    onClick={()=>this.props.signInWithGoogle()}
                    style={
                        {
                            backgroundColor:"lightgray"
                        }
                    }
                >
                    <Google className="w-50 mr-3"/>
                    {/* text-nowrap nu lasa textul sa se intinda pe mai multe randuri */}
                    <span className="text-nowrap">Loghează-te cu Google</span>
                </button>
    
                <button
                    // Clasele sunt de Bootstrap, din nou, daca nu le stiti, cautati-le!
                    className="btn btn-outline-dark d-flex align-items-center mt-4 facebook-button"
                    // La click apelam functia handleGoogleLogin
                    onClick={()=>this.props.signInWithFacebook()}
                    style={
                        {
                            backgroundColor:"lightgray"
                        }
                    }
                >
                    <Facebook className="w-50 mr-3"/>
                    {/* text-nowrap nu lasa textul sa se intinda pe mai multe randuri */}
                    <span className="text-nowrap">Loghează-te cu Facebook</span>
                </button>
                <p className="text-muted align-items-center mt-4 text-white">or</p>
                <form onSubmit={handleSubmit}>
                    <h3 className="text-white">Sign In using personal email</h3>
                    <div className="mt-4">
                        <div className="form-group text-white">
                            <label>Full name</label>
                            <input type="text" className="form-control" placeholder="Enter full name"
                                   onChange={handleInputChange}/>
                        </div>
    
                        <div className="form-group text-white">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" onChange={handleInputChange}/>
                        </div>
    
                        <div className="form-group text-white">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password"/>
                        </div>
    
                        <div className="form-group text-white">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>
    
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        <p className="forgot-password text-right mt-3">
                        <a href="#" className="text-white">Forgot password?</a>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
   
}

function mapStateToProps(state) {
    return {
        user: state.user.data.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signInWithGoogle: () => dispatch(loginUserUsingGoogle()),
        signInWithFacebook:() =>dispatch(loginUserUsingFacebook())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
