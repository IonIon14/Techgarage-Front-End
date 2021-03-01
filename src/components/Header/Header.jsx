import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/techLogo.png';
import { ReactComponent as ShoppingCart } from '../../assets/icons/shopping-cart.svg';
import './Header.css';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/user/UserActions';
import {ReactComponent as FavoriteStar} from '../../assets/icons/favorite-star.svg';

function Header(props) {
    console.log(props);
    return(
        <header className="border-bottom mb-3">
            <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
                <Link to="/" className="my-3">
                    <img src={Logo} alt="TechGarage" className="logo"/>
                </Link>
                <div>
                    { props.user && props.user.uid

                        ?
                        
                        <p>Salut, {props.user.displayName}!<img src={`${props.user.photoURL}`} className="ml-2" style={{
                            borderRadius:"50%",
                            height:"40px"
                        }}/></p>
                        :null}
                    { props.user && props.user.uid
                        ?   <div className="favorite-link">
                        <Link to='/favorite' className="d-flex">
                            <FavoriteStar className="ml-2" style={{
                                position:"relative",
                                width:"10%",
                                height:"10%"
                            }}/>
                            <p className="mt-2 ml-1">Produse favorite</p>
                        </Link>
                    </div>
                    :null
                    }
                        
                    <div className="d-flex justify-content-end">
                        { props.user && props.user.uid
                            ? <p className="logout h5 mt-1" onClick={() => props.signOut()}>Delogare</p>
                            : <Link to="/login" className="text-dark h5 mb-0">Logare</Link>
                        }
                        <div className="d-flex align-items-center">
                            <Link to="/cart" className="d-flex">
                                <ShoppingCart className="ml-2 mt-1"/>
                                <p className="ml-1 mb-0 text-dark">{ props.numberOfProducts }</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

function mapStateToProps(state) {
    return {
        numberOfProducts: state.cart.products.length,
        user: state.user.data.user
    }
}
function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);