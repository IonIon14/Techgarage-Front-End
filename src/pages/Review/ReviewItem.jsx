import React from "react";
import Button from "react-bootstrap/Button";
import Review from "./Review";
class ReviewItem extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            comment:'',
            arePostsShowed:false
        };
    }
    removeReview(event){
        const element=event.target.parentElement.parentElement.parentElement;
        element.remove();
    }
    editReview(event){
        console.log(this.props);
        let newData=new Review(this.state);
        newData.setState({comment:this.props.comment});


    }

    render(){
        const {comment} = this.props;
        return (
            <div>
                <div className='row user-info'>
                    <div className='col-4 m-0'>
                        <p>{ comment }</p>
                    </div>
                    <div className='col-4 m-0'>
                        <div className="d-flex justify-content-around">
                            <Button variant="primary" onClick={(event)=>this.editReview(event)}>
                                Edit Review
                            </Button>
                            <Button variant="danger" onClick={(event)=>this.removeReview(event)}>
                                Remove Review
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ReviewItem;