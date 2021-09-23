import React from 'react'
import { useParams } from  'react-router-dom';

const About = () => {

    let  {id, action} = useParams();
    //console.log(params);

    return (
        <div>
            Esta es la página de about  idtarea: {id} action: {action}
        </div>
    )
}

export default About
