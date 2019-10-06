import React, { Component } from 'react';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            resetProducts: [],
            cart: [],
            modalOpen: false,
            cartTotal: 0,
            error: null,
            isLoaded: false,        
        };
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/Shiivani/product-db/master/products.json')
        .then( res=> res.json())
        .then(
            (results) => {
                this.setProducts(results);
                this.setState({
                    isLoaded: true,
                    resetProducts: results
                });
            },
            (error) => {
                this.setState({
                    isLoaded:true,
                    error
                });
            }
            
        )
        
    }

    setProducts = (resetProducts) =>{
        let tempProducts = [];
        console.log(resetProducts);
        resetProducts.forEach(item =>{
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() =>{
            return{products: tempProducts}
        })
    
    };

    getItem = (id) =>{
        const product = this.state.products.find(item => item.id===id);
        return product;
    }

    addToCart = (id) =>{
        let tempProducts = this.state.products;
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=>{
            return { products:tempProducts, cart: [...this.state.cart, product] }
        },
        ()=>{
            this.addTotals();
        }
        );

    };
    
    clearCart = () =>{
        this.setState(() =>{
            return {cart:[]}
        },() =>{
            //fresh pair of copies of products
            this.setProducts(this.state.resetProducts);
            this.addTotals();
        })
        
    }
    increment = (id) => {
        let tempCart= [...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.id===id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(()=>{return {cart:[...tempCart]}},()=>{this.addTotals();})
    };

    decrement = (id) => {
        let tempCart= [...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.id===id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if (product.count === 0) {
            this.removeItem(id);
        }
        else{
            product.total = product.count * product.price;
        this.setState(()=>{return {cart:[...tempCart]}},()=>{this.addTotals();})
        }
    };

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !==id);
        const index=tempProducts.indexOf(this.getItem(id));
        let removedProduct= tempProducts[index];
        removedProduct.inCart=false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        this.setState(()=>{
            return{
                cart:[...tempCart],
                products:[...tempProducts]
            };
        },()=>{
            this.addTotals();
        });

    }
    
    addTotals = () => {
        let total = 0;
        this.state.cart.map(product =>(total += product.total));
        this.setState(()=>{
            return{
                cartTotal:total
            };
               
        });
    }

    openModal = () =>{
        this.setState(()=>{
            return {modalOpen: true};
        });
    }

    closeModal = () =>{
        this.setState(() =>{
            return{modalOpen:false};
        });
    }

    render() {
        return (
            <ProductContext.Provider value={{
                products: this.state.products,
                cart: this.state.cart,
                cartTotal: this.state.cartTotal,
                resetProducts: this.state.resetProducts,
                modalOpen: this.state.modalOpen,
                addToCart: this.addToCart,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                openModal: this.openModal,
                closeModal:this.closeModal,
                }}>
               { this.props.children } 
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
