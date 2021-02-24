import React from 'react'
import {Link,useRouteMatch} from "react-router-dom";


function PostList({array}) {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <h3>Blog entries</h3>
            <ul>

                {array.length > 0 ? array.map((item) => (
                   <li key={item.id}>
                        <Link to={`${url}/${item.id}`} >{item.title}</Link>
                    </li>
                )) : null}

            </ul>
        </div>
    )
}

export default PostList;