import React from 'react'
import {
    HashRouter as Router, Route, Switch, Link,useParams
  } from "react-router-dom";
import PostList from "./PostList";
import PostDetails from "./PostDetails";
function PostContainer({arreglo}) {
    return (
        <Router>

            <Switch>

                <Route exact path="/"><PostList array={arreglo}/></Route>
                

                <Route to="/:id"><PostDetails arreglo={arreglo}/></Route>
          
                {/* <Route path="*">
                </Route> */}

            </Switch>

        </Router>
    )
}

export default PostContainer
