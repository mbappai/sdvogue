
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
                <span><a href="https://www.google.com/maps/place/SD+VOGUE+NIGERIA+LTD/@12.0073198,8.5557978,16.38z/data=!4m5!3m4!1s0x11ae81a9c43880ef:0x7097d1a983613cf3!8m2!3d12.0074995!4d8.5570063">No 48, Hadeja Road, Kano State</a></span>    
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