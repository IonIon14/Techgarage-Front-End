import React,{useEffect, useState} from 'react';
import Layout from '../components/Layout/Layout';
// Avem nevoie de vectorul de produse.
import products from '../utils/products.json';
import './Product.css';
// Trebuie sa ne conectam la store, pentru a dispatch-ui actiunea de addToCart.
import { connect } from 'react-redux';
import { addToCart } from '../redux/cart/CartActions';
import {addToFavorite} from '../redux/favorite/FavoriteActions';
import StarRating from '../components/StarRating/StarRating';
import Review from '../pages/Review/Review';
import {Link, useRouteMatch} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import ReviewList from './Review/ReviewList';


function Product (props){
   const [product,setProduct]=useState({});
   const [posts,setPosts]=useState([]);
   const [postVisible,setArePostsVisible]=useState(false);

   const showPosts = (event) =>{
        if(setArePostsVisible(posts)==="false"){
            setArePostsVisible(true);
        }
        else{
            setArePostsVisible(false);
        }
        console.log(postVisible);
   };

   const submitAddForm = (event,comment) =>{
        event.preventDefault();

        this.setState(prevState => {
            // Functia trebuie sa returneze un obiect care are ca cheie campul din state care va fi modificat.
            return {
                // ATENTIE! Facemn Array destructuring si apoi compunem un nou array care contine userii din state-ul anterior,
                // la care adaugam un nou user cu atributele venite din formular. Astfel, actualizam campul users din state.
                posts: [
                    ...prevState.posts,
                    {
                        // Pentru id luam valoarea maxima din state-ul precedent si il incrementam cu 1.
                        comment
                    }
                ]
            }
        });
        event.target.reset();

   };


   useEffect(()=>{
         // Id-ul produsului este luat din ruta.
         const { match } = props;
         const productId = match.params.productId;
         // In JSON-ul products avem un obiecte care are drept chei categoriile. Vrem sa preluam informatiile
         // despre categorii si sa le punem intr-un array.
         const categoryValues = Object.values(products);
         console.log(categoryValues);
 
         // Ne cream o variabila in care vom stoca datele despre produsul curent
         let currentProduct;
 
         // Trebuie sa parcurgem fiecare categorie
         categoryValues.forEach((category) => {
             // Si sa cautam in itemii categoriei produsul cu id-ul similar celui din ruta
             // Cum functioneaza find:
             // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
             const findResult = category.items.find((product) => {
                 // Cu typeof puteti verifica tipul si SURPRIZA: unul e string, altul e number... => CONVERTIM
                 // NU PUNETI ==, CONVERTITI!
                 console.log(typeof productId, typeof product.id);
                 return product.id === Number(productId);
             });
             // Daca am gasit produsul, il salvam in variabila currentProduct
             if (findResult) {
                 currentProduct = findResult;
             }
         });
 
         // La final, actualizam state-ul
         setProduct(currentProduct);
   })
    
        const { path, url } = useRouteMatch();
        return (
            <Layout>
                <div className="product-page content-min-height container-fluid container-min-max-width">
                    {/* Adaugam markup-ul pentru pagina de produs */}
                    <h1 className="my-5 h2">{product.name}</h1>
                    {/* Am aduagat clase pentru stilizarea pe mobile */}
                    <div className="product-info d-flex">
                        <div className="image-wrapper d-flex mr-5">
                            <img src={product.image} alt="Product presentation"/>
                        </div>
                        <div className="product-details">
                            <p className="h3 text-danger">{product.price} {product.currency}</p>
                            <button
                                className="btn btn-dark mb-4 font-weight-bold"
                                // La click pe buton, adaugam in cart-ul din store.
                                onClick={() => {
                                    props.addToCart({
                                        product: {
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            currency: product.currency,
                                            image: product.image
                                        }
                                    })
                                }}
                            >
                                Adaugă în coș
                            </button>
                            <button
                                className="btn btn-dark mb-4 font-weight-bold ml-3"
                                // La click pe buton, adaugam in cart-ul din store.
                                onClick={() => {
                                    props.addToFavorite({
                                        product: {
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            currency: product.currency,
                                            image: product.image
                                        }
                                    })
                                }}
                            >
                                Adaugă la favorite
                            </button>
                            <StarRating/>
                                <Link to={`/product/${product.id}/reviews`}>
                                <button
                                    className="btn btn-dark mb-4 font-weight-bold"
                                    // La click pe buton, adaugam in cart-ul din store.
                                 >
                                    Adauga review la produs
                                </button>
                                </Link>
                            <p><span className="font-weight-bold">Mărime</span>: {product.size}</p>
                            <p><span className="font-weight-bold">Culoare</span>: {product.colour}</p>
                            <p><span className="font-weight-bold">Material</span>: {product.material}</p>
                            <p><span className="font-weight-bold">Brand</span>: {product.brand}</p>
                            <p className="font-weight-bold mb-1">Descriere:</p>
                            <p>{product.description}</p>
                        </div>
                        <div className="product-review-form">
                            <Route path={`/product/${product.id}/reviews`} exact component={Review}/>
                        </div>
                        {postVisible===true?
                        <ReviewList posts={posts}/>:
                        null
                    }
                    </div>
                </div>
                <div className="col-6">
                    <Button variant="primary" block onClick={(event) => showPosts(event)}>
                                    Arata review-uri
                    </Button>
                </div>
            </Layout>
        );
};

// Avem nevoie sa ne conectam la store si sa aducem in props dispatch-ul metodei addToCart.
function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        addToFavorite:(payload)=>dispatch(addToFavorite(payload)),
    }
}

export default connect(null, mapDispatchToProps)(Product);