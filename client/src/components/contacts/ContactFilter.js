import React, { useContext, useRef , useEffect} from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactFilter = () => {
    const contactContext=useContext(ContactContext);
    const text=useRef('');
    const {filterContacts, clearFilter, filtered}= ContactContext;

    useEffect (() =>{
        if(filtered ===null){
            text.current.valueOf='';
        }
    });

    const onChange=e=>{
        if(text.current.valueOf !==''){
            contactContext.filterContacts(e.target.value);
        }
        else{
            contactContext.clearFilter();
        }

    }
  return (
    <form>
      <input ref={text} type="text" placeholder='Filter Contacts ...' onChange={onChange}/>
    </form>
  )
}

export default ContactFilter
