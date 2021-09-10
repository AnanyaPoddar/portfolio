import {React, useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollButton(){
    const [visible, setVisibility] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 20) {
          setVisibility(true);
        } else {
          setVisibility(false);
        }
      };

    useEffect(() => { window.addEventListener("scroll", toggleVisibility);}, []);  
    /*conditional rendering with scrolled &&*/
    return(visible && 
    <div className="scrollToTop" onClick={() =>window.scroll({top:0,behavior:'smooth'})}>
    <FontAwesomeIcon icon={faChevronCircleUp}  size='2x' color='#ed003f' className="scrollBtn" />
    </div>
    );
}
