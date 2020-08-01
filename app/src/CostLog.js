import React, { Component } from 'react';
import AppNavbar from './AppNavbar'
import DatePicker from 'react-datepicker'
import './App.css' 
import { Table, Container, FormGroup, Form, Button, Input, Label } from 'reactstrap'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class CostLog extends Component {

    newInstance = {
        id : 4,
        paymentTime : new Date(),
        description : '',
        place: '',
        category : {id: 1, name: 'Food and essentials'} 
    }

    constructor(props) {
        super(props)
        this.state = {
            isLoading : false,
            categories : [],
            costs: [],
            date : new Date(),
            instance : this.newInstance
        } 
        this.pushRecord = this.pushRecord.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.inputDateHandler = this.inputDateHandler.bind(this);

    } 

    state = {  
        isLoading : true,
        categories : [],
        date : new Date(),
        instance : this.newInstance
    }

    async remove(id) {
                await fetch(`/cost/remove/${id}`, { 
                    method: 'DELETE',
                    headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                    } 
                }).then(() => {
                    let costRefresh = [...this.state.costs].filter(i => i.id !== id);
                    this.setState({costs : costRefresh});
                });       
    }

    async pushRecord(event) {        
        const instance = this.state.instance;
        await fetch(`/cost/add`, {
             method: 'POST',
             headers: {
                 'Accept' : 'application/json',
                 'Content-Type' : 'application/json'
             },
             body : JSON.stringify(instance),
        });
        console.log(this.state);
        event.preventDefault();
        this.props.history.push("/costLog");
    }

    inputHandler(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let instance = {...this.state.instance};
        instance[name] = value;
        this.setState({instance});
        console.log(instance);
    }

    inputDateHandler(date) {
        let instance={...this.state.instance};
        instance.paymentTime = date;
        this.setState(instance);
        console.log(instance); 
    }


    async componentDidMount() {
        const response = await fetch('/cat/total');
        const body = await response.json();
        this.setState({categories : body, isLoading : false});

        const costResponse = await fetch('/cost/total');
        const costBody = await costResponse.json();
        this.setState({costs : costBody, isLoading : false});
    } 

    render() { 
        const title = <p style={{fontSize: '22px', fontWeight: '500'}}>Append your cost record</p>
        const { categories} = this.state;
        const { costs, isLoading} = this.state;

        if(isLoading) 
            return (<div>Loading some stuff...</div>);

            let optionList = 
                        categories.map(category => 
                            <option value={category.id}  key={category.id}>
                                {category.categoryName}
                            </option>
                        )

            let costRecords =
                        costs.map(record => 
                            <tr key={record.id}>
                                <td>{record.description}</td>                               
                                <td><Moment date={record.paymentTime} format='YYYY/MM/DD' /></td>
                                <td>{record.place}</td>
                                <td>{record.category.categoryName}</td>
                                <td><Button color='secondary' style={{width: '100px'}} onClick={ () => this.remove(record.id)} >Delete</Button></td>
                            </tr> 
                        )             
            
        return (           
            <div>                
                 <AppNavbar />
                 <h2 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px'}}>Cost overview</h2>
            <Container>
                {title}
                <Form onSubmit={this.pushRecord}>
                <FormGroup>
                        <Label for='description'>Acquired</Label>
                        <div className='input-cust'>
                            <Input className='input-cust' type='description' name='description' id='description' onChange={this.inputHandler} autoComplete='name' />
                        </div>
                    </FormGroup>

                <FormGroup>
                        <Label for='category'> category</Label>                        
                       
                         <select style={{marginLeft: '10px'}} onChange={this.inputHandler}>
                             {optionList}
                         </select>                        

                </FormGroup>

                <FormGroup>
                        <Label for='date'>Date of Invoicing</Label>                        
                            <div className='datepicker-cust'>
                                <DatePicker className='datepicker-cust' selected={this.state.instance.paymentTime} onChange={this.inputDateHandler} />
                            </div>
                                                    
                </FormGroup>

                <FormGroup>
                        <Label for='Place of Receipt Issuance'>Place of Invoicing</Label>
                        <div className='input-cust'>
                            <Input type='text' name='place' id='place' onChange={this.inputHandler} />
                        </div>
                </FormGroup>

                <FormGroup>                   
                        <Button className='btns' color='info' type='submit'>Save</Button>{' '}
                        <Button className='btns' color='secondary' tag={Link} to="/cat/total">Drop</Button>
                </FormGroup>
                </Form>
            </Container>

        {' '}
           <Container>
               <div id='toxic-greet'>
                    Your bank exposed your costs to us (you're a loser as well as twice)
               </div>
               <Table className='mt-4'>
                   <thead>
                       <tr>
                           <th width="26%">Note</th> 
                           <th width="23%">Date of Invoicing</th> 
                           <th width="16%">Place of Invoicing</th> 
                           <th>Cost category</th> 
                           <th width="15%">Control</th>  
                       </tr> 
                    </thead>
                    <tbody>
                        {costRecords}
                    </tbody>                  
                </Table>              
            </Container>            
        </div>  
        );
    }
}
 
export default CostLog;