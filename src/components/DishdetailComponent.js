import React from 'react';
import { Media,Card, CardImg, CardBody, CardText,CardTitle } from 'reactstrap';



    // componentDidMount(){
    //     console.log("ComponentDidMount Dish Detail")
    // }

    // componentDidUpdate(){
    //     console.log("ComponentDidUpdate Dish Detail")
    // }

    function RenderDish({dish}) {
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

    function RenderComments({comments}) {
        return(
            <Media tag="li" key={comments.id}>
                <Media body >
                    <p>{comments.comment}</p>
                    <p>-- {comments.author}, {new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short',day:'2-digit' }).format(new Date(Date.parse(comments.date)))} </p>
                </Media>
                    
            </Media>
        );
    }

    const DishDetail = (props) => {
        if (props.dish != null){
            const commentarios = props.dish.comments.map((comment) => { 
                return (
                    // this.renderComments(comment)
                    <RenderComments comments = {comment} />
                );
            });

            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <Media list className="list-unstyled">
                                <h4>Comments</h4>
                                { commentarios }
                            </Media>
                        </div>
                    </div>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }


export default DishDetail;