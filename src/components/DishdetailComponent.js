import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

    function RenderDish ({dish}) {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" top src={dish.image} atl={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    function RenderComments ({comments}){
        //const RenderComments = (comments) => {
        if (comments != null)

        return(
            <React.Fragment>
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className = "list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                            <p>{comment.comment}</p> 
                            <p>--{comment.author}, {formatDate(comment.date)}</p>   
                            </li>
                        );                    
                    })}
                </ul>
            </div>
            </React.Fragment>
        );
        else
            return(
            <div></div>
            );         
    }

    const DishDetail = (props) => {
        if (props.dish != null)
        return(
            <div class="container">
                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
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

    export default DishDetail;