import './Card.css';

function Card(props) {
  const classes = 'Card '+ props.className;
return (
  <div className={classes}>{props.children}</div>
);

  
}

export default Card;