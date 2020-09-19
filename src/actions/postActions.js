import { FETCH_POSTS } from "./types";

export const fetchPosts = () => (dispatch) => {


   var request = new Request("https://swapi.dev/api/people/");

   fetch(request)
     .then((res) => res.json())
     .then((posts) =>
       dispatch({
         type: FETCH_POSTS,
         payload: posts,
       })
     );
      
};
