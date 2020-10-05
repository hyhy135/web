import React from 'react';
import "./Header.scss";
import { Link } from 'react-scroll';

export const Links = function(props){
    return(
        <div className="navigation_links">
            {   
                props.links.map((link,index) => {
                return(
                    <Link   key={index} 
                            offset={-(window.innerHeight*0.14)}
                            to={link.ref} 
                            spy={true} 
                            smooth={true} 
                            duration={500}>
                    <a key={index} href={link.ref} className="header_link"  >{link.label}</a>            
                    </Link>
                )}
                )
            }
        </div>
    )
     
}