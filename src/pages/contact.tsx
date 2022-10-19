
import * as React from "react"
import { PageProps, Link, graphql, HeadFC } from 'gatsby'

const Contact: React.FC = () =>{
    return(
    <div style={{display:'flex',width:'100%',maxWidth:'500px',margin:'16px',flexDirection:'column',justifyContent:'center'}}>
        <ul>
            <li>
                <span>Phone:</span>
                <span>09023234983</span>    
            </li>
            <li>
                <span>Instagram:</span>
                <span>sdvogue.ng</span>    
            </li>
            <li>
                <span>Location:</span>
                <span>No 5 Tukur Road</span>    
            </li>
        </ul>
    </div>
    )
}

export default Contact