import React, {Component} from 'react';
import { Media,Card, CardImg, CardBody, CardText,CardTitle } from 'reactstrap';

class DishDetail  extends Component {
    constructor( props ){
        super(props);
        this.state = {
        };
        
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(comments) {
        return(
            <Media tag="li" key={comments.id}>
                <Media body >
                    <p>{comments.comment}</p>
                    <p>-- {comments.author}, {comments.date} </p>
                </Media>
                    
            </Media>
        );
    }

    render() {
        if (this.props.dish != null){
            const commentarios = this.props.dish.comments.map((comment) => { 
                return (
                    this.renderComments(comment)
                );
            });

            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        { this.renderDish(this.props.dish) }
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Media list list-unstyled="true">
                            <h4>Comments</h4>
                            { commentarios }
                        </Media>
                    </div>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

}

export default DishDetail;