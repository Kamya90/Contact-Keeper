import React, { useContext, useRef , useEffect} from 'react'
import ContactContext from '../../context/contact/contactContext';


const ContactFilter = () => {
    const contactContext=useContext(ContactContext);
    const text=useRef(null);
    const {filterContacts, clearFilter, filtered}= contactContext;

    useEffect (() =>{
        if(filtered ===null){
            text.current.value='';
        }
       
    });

    const onChange=e=>{
      // text.current.valueOf = "adfsdgvsdfvsfvdfv"
      console.log(text)
        if(e.target.value !==''){
            filterContacts(e.target.value);
        }
        else{
            clearFilter();
        }

    }
  return (
    <form>
      <input ref={text} type="text" placeholder='Filter Contacts ...' onChange={onChange}/>
    </form>
  )
}

export default ContactFilter;
