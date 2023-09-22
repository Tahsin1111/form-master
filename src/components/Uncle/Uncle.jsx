import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <Cousin asset={asset} name={'kutta'}></Cousin>
        </div>
    );
};

export default Uncle;