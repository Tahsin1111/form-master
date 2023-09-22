

const ReusableForm = ({formTitle,handleSubmit,children}) => {
    
    return (
        <div>
             <form onSubmit={handleSubmit}>
                {/* <h2>{formTitle}</h2> */}
                {children}
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
               <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ReusableForm;