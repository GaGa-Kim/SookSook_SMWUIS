
const CheckBox=(item)=>{
    return(
      
        <input type="checkbox" checked={item.check} disabled={item.disable}/>
       
    );
};

export default CheckBox;