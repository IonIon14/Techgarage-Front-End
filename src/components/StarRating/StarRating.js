import React,{useEffect, useRef, useState} from 'react';
import {FaStar} from 'react-icons/fa';
import "./StarRating.css";
import {connect} from 'react-redux';
import { saveStarRating } from '../../redux/starRating/StarRatingActions';
const StarRating = () =>{

    const [ rating , setRating ]=useState(null);
    const [counter,setCounter]=useState(0);

    React.useEffect(() => {
        const parsedCount = Number(localStorage.getItem("rating") || 0)
        setRating(parsedCount)
      }, [])

    React.useEffect(() => {
        localStorage.setItem("rating", rating)
      }, [rating])

    return(
        <div className="ml-2">
            <div className="row">
                {[...Array(5)].map((star,i)=>{
                    const ratingValue=i+1;
                    return (
                            <label>
                                <input type="radio" name="rating" value={ratingValue} onClick={()=>{
                                    setRating(ratingValue);
                                    }}/>
                                <FaStar size={30} color={ratingValue<=rating ? "#ffc107" : "#e4e5e9"} className="mb-3 star"/>
                            </label>
                    ); 
                })}
                {   rating===5 ?
                    <p className="ml-2 mt-1">{rating}/5(Very Good)</p>
                :
                null}
                {   rating===4 ?
                    <p className="ml-2 mt-1">{rating}/5(Good)</p>
                :
                null}

                {   rating===3 ?
                    <p className="ml-2 mt-1">{rating}/5(Average)</p>
                :
                null}
                {   rating===2 ?
                    <p className="ml-2 mt-1">{rating}/5(Bad)</p>
                :
                null}
                {   rating===1 ?
                    <p className="ml-2 mt-1">{rating}/5(Very Bad)</p>
                :
                null}
            </div>
        </div>
    );
       
};

function mapStateToProps(state){

    return{
        rating:state.rating
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveStarRating: (payload) => dispatch(saveStarRating(payload))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(StarRating);