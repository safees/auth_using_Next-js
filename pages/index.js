import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class indexPage extends Component{
    static getInitialProps(context){
        const promise =new Promise((resolve,reject) => {

            setTimeout(()=>{
                resolve({appName:'My Next JS App'});
            },1000);
        
        });
        return promise;
    }

    render(){
        return(
            <div>
        <h1>This is main {this.props.appName}</h1>
        <p>Goto <Link href="/auth"><a>Auth</a></Link></p>

        <button onClick={() => Router.push('/auth')}>Goto Auth</button>
    </div>
        );

    }
} 
export default indexPage;