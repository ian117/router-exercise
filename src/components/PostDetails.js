import React from 'react'
import {
    Link,
    Switch,
    useRouteMatch,
    Route,
  } from "react-router-dom";

  const Details = ({content, title}) => {
    return (
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
                <button><Link to="/">Regresar al inicio</Link></button>
            </div>
            )
  };
  


function PostDetails({arreglo}) {
    let { path, url } = useRouteMatch();
    console.log(url)

    return (
        <div>
            <Switch>

            {arreglo.map((item) => {
                return (
                    <Route key={item.id} path={`${path}${item.id}`}>
                        <Details content={item.content} title={item.title}/>
                    </Route>
                )
            })}

                <Route path={path}>404, regresa o ya verás <img alt="this404" src={"https://media.tenor.com/images/e051367347fb6fe80190f615ee1f0f1d/raw"}/>
                <button>
                <Link to="/">Apresurate o te atraparán</Link>
                </button></Route>

        </Switch>
        </div>
    )
}

export default PostDetails;