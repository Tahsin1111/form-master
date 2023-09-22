import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";


const Aunty = () => {
    const [money,setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <Cousin name={'shiyal'}></Cousin>
            <section>
                <p>Money :{money}</p>
            </section>
        </div>
    );
};

export default Aunty;