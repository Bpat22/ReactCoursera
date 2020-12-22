import React, { } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

    function RenderDish ({dish}) {

        if(dish != null){
            return(
            <React.Fragment>
            <div className = "col-12 col-md-5 m-1">
                <card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                    </CardBody>
                </card>
            </div>

            <div className = "col-12 col-md-5 m-1" >
                <h4>Comments</h4>
                    <RenderComments comments = {dish.comments} />   
              </div>     
            </React.Fragment>
            )
        } else {
            return(<div></div>)
        }
    }
    function RenderComments ({comments}) {
        if(comments != null){
            const com = comments.map(co => {

                return (
                    <React.Fragment>
                        <li>{co.comment}</li><br></br>
                        <li>--{co.author}, {formatDate(co.date)}</li><br></br>
                    </React.Fragment>
                )
            });
            return (
                <ul className = "list-unstyled">
                    {com}
                </ul>
            )
        }else {
            return (<div></div>)
        }
    }

    const DishDetail = (props) => {    
        console.log('Dishdetail Component render invoked')    
           const {dish} = props;
           return(
               <div class="container">
               <div className = "row">
                   <RenderDish dish = {props.dish} />
                   {/* <RenderComments comments = {props.dish.comments} */}
               </div>
               </div>
           );
       }    

    const formatDate = (date) => {
        const option = {year: 'numeric', month: 'short', day: 'numeric' };
        const dateD = new Date(date)
        const newDate = dateD.toLocaleDateString("en-US", option)
        return newDate;
    }


// class DishDetail extends Component{
//     componentDidMount(){
//         console.log('Dishdetail Component componentDidMount invoked')
//     }
//     componentDidUpdate(){
//         console.log('Dishdetail Component componentDidUpdate invoked')
//     }
// }
//{ this.renderComments(dish.comments) } 
// <RenderComments comments = {props.dish.comments} />   
//{ this.renderComments(dish.comments) } 
export default DishDetail;