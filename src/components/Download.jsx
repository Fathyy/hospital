import Item from "./Item"
import { medicine } from "../assets"

const LeadingHealthcare = () => {
  return (
    <div className="my-32">
      <Item image={medicine} heading ='Download our 
mobile apps' 
      paragraph ='Our dedicated patient engagement app and 
      web portal allow you to access information instantaneously (no tedeous form, long calls, 
      or administrative hassle) and securely'/>
    </div>
    
  )
}

export default LeadingHealthcare