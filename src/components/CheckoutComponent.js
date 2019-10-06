import React, { Component } from 'react';
import Cart from './CartComponent';
import { ProductConsumer } from '../context';
import {Modal,ModalBody,ModalFooter,ModalHeader,Button} from 'reactstrap';

export default class Checkout extends Component {

    constructor(props){
        super(props);
        this.state={
            modal:false
        }
    }
    
    toggle=()=> {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    alertPayment=()=>{
        alert("Transaction Successful");
    }
    render() {

        return (
            <ProductConsumer>
            {(value) =>{
          const {cart, clearCart} =value;
          return(
           <>
            <Button color="danger" onClick={this.toggle}>Check out</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Items In Cart</ModalHeader>
            <ModalBody>
                <Cart/>
            </ModalBody>
            <ModalFooter>
                <Button className={`${cart.length?"visible":"hidden"} `} color="primary"  onClick={()=>{this.alertPayment();
                clearCart();}}>Proceed to Payment</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
            </>
          ) 
            }
        }
            </ProductConsumer>
        
        )
}
}
