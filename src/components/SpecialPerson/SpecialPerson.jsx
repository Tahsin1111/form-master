import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const SpecialPerson = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h4>Special person</h4>
            <p>has : {asset}</p>
            <p>also has : {gift}</p>
        </div>
    );
};

export default SpecialPerson;