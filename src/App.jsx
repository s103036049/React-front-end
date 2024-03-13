import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';




class App extends Component {
    state = { 
                
     } 
    render() { 
        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}
 
export default App;