import React, { Component } from 'react';
import AppNavbar from './AppNavbar'

class Category extends Component {
    state = {  
        isLoading : true,
        categories : []
    }

    async componentDidMount() {
        const response = await fetch('/cat/total');
        const body = await response.json();
        this.setState({categories : body, isLoading : false});
    } 

    render() { 
        const { categories, isLoading} = this.state;
        if(isLoading) 
            return (<div>Getting stuff...</div>);
        return (           
            <div>
                <AppNavbar />
                <h2>Cost categories</h2>
                {
                    categories.map(
                         category => 
                         <div id={category.id}>
                              {category.categoryName}
                         </div>
                    )
                }

            </div>       

        );    
    }
}
 
export default Category; 
