import React from "react";
// nu uitai sa importati componentele folosite!
import ReviewItem from './ReviewItem';

// ATENTIE! Singurul motiv pentru care am facut componenta UserList sa fie clasa este pentru
// a avea acces la lyfecycle methods. Acestea nu sunt disponibile in cadrul unei componente
// declarate cu function!!
class ReviewList extends React.Component{
    constructor(props) {
        super(props);
        this.state={
          comment:''
        };
    }

    componentWillUnmount() {
        console.log('UserList Component was unmounted...');
    }

    componentDidMount() {
        console.log('UserList component was mounted!');
    }

    render() {
        console.log('UserList component rendered!');
        // preluam informatiile despre useri
        const { posts } = this.props;
        return (
            <div className='border p-4 user-list' style={{background:"white"}}>
                <h3 className='text-center mb-4'>USERS</h3>
                {posts.map((post, index) => {
                    // Fiecare obiect de tip user e transformat intr-o componenta UserItem.
                    return <ReviewItem
                        // Pasam props-urile corespunzatoare.
                       comment={post.comment}
                        key={index}
                    />
                })}
            </div>
        );
    }
}

export default ReviewList;