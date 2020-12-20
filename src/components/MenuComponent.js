import React,{} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

    function RenderMenuItem({ dish }){

        return(
            <Card>      
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>                                    
            </Card>
        );
    }  

    const Menu = (props) => {

        const menu = props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
            );
        });

        console.log('Menu Component render is invonked');

        return ( 
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                              
            </div>
        );        
    }
     
// applying router
//    function RenderMenuItem({ dish, onClick}){
//       <Card onClick={() => onClick(dish.id)}>      
    
//Changing into functional component
//class Menu extends Component {
    // componentDidMount(){
    //     console.log('Menu Component componentDidMount invoked')
    // }
    // constructor(props){
    //     super(props);

    //     console.log('Menu Componenet constructor is invonked');
    // }
   
    //render(){

    //}
//}

export default Menu;