import React from 'react';
import Layout from '../../components/Layout/Layout';
import ProductItem from '../../components/ProductItem/ProductItem';
import Product from '../Product';
import { connect } from 'react-redux';
import './Favorite.css';

const Favorite = (props) => {

    return(
        <Layout>
            <div className="row my-4">
            { props.products.map((product) => {
                return <ProductItem
                    {...product}
                    key={product.id}
                /> || <Product
                {...product}
                key={product.id}
                />
            })}
        </div>
        </Layout>
    );
};

function mapStateToProps(state) {
    return {
        products: state.favorite.products
    };
}

export default connect(mapStateToProps, null)(Favorite);