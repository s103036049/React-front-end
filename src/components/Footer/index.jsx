import React, { Component } from 'react';

class Footer extends Component {
    state = {  } 
    render() { 
        return (

            <div>

                <footer>
                <div className=" bg-secondary p-3 font-size=50 mt-5 text-center" >

                <p className="text-light">
                04-1234-5678<br/> sweetaste@email.com<br/> 800 台中市南屯區幸福路 520 號
                </p>
                <p className="text-light">
                    Copyright 2023 Sweetaste ALL Right Reserved.
                </p>
                </div>
                </footer>


            </div>
        );
    }
}
 
export default Footer;