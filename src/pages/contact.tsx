
import * as React from "react"
import { PageProps, Link, graphql, HeadFC } from 'gatsby'

const Contact: React.FC = () =>{
    return(
    <div style={{display:'flex',width:'100%',maxWidth:'500px',margin:'16px',flexDirection:'column',justifyContent:'center'}}>
        <ul>
            <li>
                <span>Phone:</span>
                <span>09097386483</span>    
            </li>
            <li>
                <span>Instagram:</span>
                <span>@sd_vogue</span>    
            </li>
            <li>
                <span>Location:</span>
                <span>No 48, Hadeja Road, Kano State</span>    
            </li>
            <li>
                <span>Email:</span>
                <span>info@sdvogue.com</span>    
            </li>
        </ul>
    </div>
    )
}

export default Contact