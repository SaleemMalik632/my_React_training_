import Footer from './Footer'

const Props = (props) => {
  return (
    <div>
      <div>{props.name}</div>
      <div> {props.age } , { props.number}</div>
       <Footer name = {props.name}/>     
    </div> 
  );
};

export default Props;
