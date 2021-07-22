import React from "react";
import { Card, CardImg,  CardText, CardBody,CardTitle } from 'reactstrap';







function renderDish(dish){
    if (dish!=null){
  
        return (
            <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        )
    
}
    else {
        return(<div></div>)
    }
}


function renderComments(comments){
    if (comments != null){
   return comments.map((comment)=>{
        return (
            <div>
            <div key={comment.id}>
                <ul className="list-unstyled"><li>{comment.comment}</li>
                <li>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li></ul>  
            
         
            </div>
            </div>
        )
    })
}

else {
    return(
        <div></div>
    )
}
}


const  DishDetail = (props) => {
const dish = props.dish;
if (dish!= null){
    const dishDetail = renderDish(dish)
   const comment = renderComments(dish.comments)


    return(<div className="row">
        
            <div className="col-12 col-md-5 m-1">{dishDetail}</div>
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
               {comment} 
            </div>
        
    </div>)
    }

else {
    return (<div>
    </div>)
}}
   




export default DishDetail