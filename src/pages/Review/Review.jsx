import React,{useState} from 'react';
import Layout from '../../components/Layout/Layout';
// Avem nevoie de vectorul de produse.
import products from '../../utils/products.json';
import { MDBInput } from 'mdbreact';
// Trebuie sa ne conectam la store, pentru a dispatch-ui actiunea de addToCart.
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
const Review = (props) =>{
    const [comment,setComment]=useState("");


    const {submitAddForm}=props;
    return(
        <div>
            <Form onSubmit={(event)=>submitAddForm(event,setComment(comment))}>
                <MDBInput type="textarea" label="Lasati un review aici" rows="8" />
                        <Button variant="primary" type="submit" block  >
                            Trimite un review
                        </Button>
            </Form>
        </div>
    );
};

export default Review;