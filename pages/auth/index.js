import React from 'react';
import User from '../../components/User';

const authIndexpage = (props) => (

    <div>
        <h1>This is Auth index page - {props.appName}</h1>
        <User name="Safees Mohamed" age={25} />
    </div>

);

authIndexpage.getInitialProps = (context) => {
    const promise =new Promise((resolve,reject) => {

        setTimeout(()=>{
            resolve({appName:'My Next JS App (AUTH)'});
        },1000);
    
    });
    return promise;
};

export default authIndexpage;