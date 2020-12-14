import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class DishDetail extends Component{

   render(){
       const {dish} = this.props;
       return(
           <div className = "row">
               {this.renderDish(dish)}
           </div>
       );
   }

    renderDish (dish) {

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

            <div className = "col-12 col-ms-5 m-1" >
                <h4>Comments</h4>
                { this.renderComments(dish.comments) }
            </div>    
            </React.Fragment>
            )
        } else {
            return(<div></div>)
        }

    }

    renderComments (comments) {

        if(comments != null){
            const com = comments.map(co =>{

                return (
                    <React.Fragment>
                        <li>{co.comment}</li><br></br>
                        <li>--{co.author}, {this.formatDate(co.date)}</li><br></br>
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

    formatDate(date){
        const option = {year: 'numeric', month: 'short', day: 'numeric' };
        const dateD = new Date(date)
        const newDate = dateD.toLocaleDateString("en-US", option)
        return newDate;
    }
}

export default DishDetail;