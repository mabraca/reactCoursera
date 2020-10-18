import React from 'react';
import { Media,Card, CardImg, CardBody, CardText,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';


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

        const commentarios = props.comments.map((comment) => { 
            return (
                // this.renderComments(comment)
                <RenderComments comments = {comment} />
            );
        });
        if (props.dish != null ){
            return(
            
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr></hr>
                        </div>
                    </div>
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
        }

    }


export default DishDetail;