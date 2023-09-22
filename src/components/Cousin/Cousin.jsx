import SpecialPerson from "../SpecialPerson/SpecialPerson";


const Cousin = ({name,asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                <SpecialPerson asset={asset}></SpecialPerson>
            </section>
        </div>
    );
};

export default Cousin;