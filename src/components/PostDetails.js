import React from 'react'
import {
    Link,
    Switch,
    useRouteMatch,
    Route,
    useParams,
  } from "react-router-dom";

  const Details = ({content, title}) => {
    return (
            <>
                <h3>{title}</h3>
                <p>{content}</p>
                <button><Link to="/">Regresar al inicio</Link></button>
            </>
            )
  };
  


function PostDetails({arreglo}) {
    let { path, url } = useRouteMatch();


    return (
        <div>
            <Switch>

            {arreglo.map((item) => {
                return (
                    <Route path={`${path}/${item.id}`}>
                        <Details content={item.content} title={item.title}/>
                    </Route>
                )
            })}

                <Route path={path}>404, regresa o ya verás <img src={"https://media.tenor.com/images/e051367347fb6fe80190f615ee1f0f1d/raw"}/>
                <button>
                <Link to="/">Apresurate o te atraparán</Link>
                </button></Route>

        </Switch>
        </div>
    )
}

export default PostDetails;