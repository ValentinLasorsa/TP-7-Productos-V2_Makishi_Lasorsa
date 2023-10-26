import { useParams } from "react-router-dom";

const Persona = () => {
 const { personaId } = useParams();
 
 return (
   <div>
     PersonaID: {`ID: ${personaId}`}
   </div>
 );
};
export default Persona;