import React, {Component} from 'react';
import { Button, Modal, ModalHeader,
    ModalBody,Label, Row, Col } from 'reactstrap';
import { Control,LocalForm, Errors } from 'react-redux-form';



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
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
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
export default CommentForm;