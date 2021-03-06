import React,{Component} from 'react';
import {Button, Row, Col,Label, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {LocalForm,Control,Errors} from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props);

        this.state= {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });
    }
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }



render(){

    return (<div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
        <ModalBody>
            <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                <Row className="form-group">
                <Label htmlFor="rating" md={12}>Rating</Label>
                <Col md={12}>
                <Control.select  className="form-control" model=".rating" id="rating" name="rating">
                <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>

                </Control.select>
                </Col>
                </Row>
                <Row className="form-group">
                <Label htmlFor="name" md={12}>Your Name</Label>
                <Col md={12}>
                <Control.text model=".name" id="name" name ="name"
                placeholder="Your Name"
                className="form-control"
                validators={{
                    required, minLength: minLength(3), maxLength: maxLength(15)
                }} />
                <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
            
                </Col>
                </Row>
                <Row className="form-group">
                
                <Label htmlFor="message" md={12}>Comment</Label>
                <Col md={12}>
                <Control.textarea model=".message" id="message"
                name ="message" rows="6"
                
                className="form-control" />

            </Col>

                </Row>
                <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                
            </LocalForm>

        </ModalBody>

        </Modal>
        <Button onClick={this.toggleModal}>make a comment</Button>
        </div>
    )
}
}
export default CommentForm