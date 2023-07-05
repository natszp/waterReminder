
import Navigation from './Navigation'

const Header = (props) => {


    // to be developed
  return (
    <>
     <Navigation text={props.text} buttonText={props.buttonText} onClick={props.onClick}/>

    </>
  );
};

export default Header;