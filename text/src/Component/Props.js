import Footer from './Footer'
import pcropTypes from 'prop-types'

const Props = (props) => {
  return (
    <div>
      <div>{props.name}</div>
      <div> {props.age } , { props.number}</div>
       <Footer name = {props.name}/>  
    </div>   
  );
};

Props.pcropTypes = { 
    name:pcropTypes.string,
    age: pcropTypes.number , 
    number : pcropTypes.number 
}

Props.defaultProps  = {                  
    name: 'Nothing',
    age: 0,
    number : 0  
} 
 



export default Props;
