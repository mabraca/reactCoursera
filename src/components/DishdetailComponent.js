import React, {Component} from 'react';
import { Media,Card, CardImg, CardBody, CardText,CardTitle,Breadcrumb,BreadcrumbItem, 
    Button, Modal, ModalHeader,ModalBody,Label, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control,LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
    

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


    function RenderComments( {comments , dishId, addComment}) {
        if (comments === null) {
            return <div></div>;
        }
    
        const comment = comments.map((comment) => {
            return (
                <div>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                </div>
            );
        })
        return (
            <div>
                <h4>Comments</h4>
                {comment}
                <CommentForm dishId={dishId} addComment={addComment}/>
            </div>
        );
    
    }
      

    const DishDetail = (props) => {
        if( props.isLoading){
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        } else if (props.errMess){
            return (
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        } else if (props.dish != null ){
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
                            <RenderComments comments={props.comments} dishId={props.dish.id} addComment={props.addComment} />
                            {/* <Media list className="list-unstyled">
                                { commentarios }
                            </Media>
                            <CommentForm dishId={props.dishId} addComment={props.addComment}/> */}
                        </div>
                    </div>
                </div>
            );
        }

    }


    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);

    class CommentForm extends Component {
        constructor(props){
            super(props);
            this.state = {
                isModalOpen: false
            }
    
            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
    
        toggleModal(){
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }
    
        handleSubmit(values) {
            this.toggleModal();
            this.props.addComment(this.props.dishId, values.rating, values.name, values.message);
        }
    
        render() {
            return (
                <div className="row">
                    <Button outline onClick={this.toggleModal}> <span className="fa fa-pencil fa-lg"></span>Submmit Comment</Button>
    
    
                    <Modal isOpen={this.state.isModalOpen } toggle={this.toggleModal}>
                        <ModalHeader  toggle={this.toggleModal}>
                            Submit Comment
                        </ModalHeader>
                        <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" className="form-control" name="raiting">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
    
                            <Row className="form-group">
                                <Label htmlFor="name" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{required,maxLength : maxLength(15), minLength:minLength(3) }} />
                                    <Errors 
                                        className="text-danger" model=".name"  show="touched"
                                        messages={{
                                            required : "Required",
                                            minLength : "Must be greater than two",
                                            maxLength : "Must be 15 characters or less"
                                        }}
                                    />
                                    
                                </Col>
                            </Row>
                        
                            <Row className="form-group">
                                <Label htmlFor="message" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".message" className="form-control" id="message" name="message"
                                        rows="12"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
    
                );
            
        };
    
    }


export default DishDetail;