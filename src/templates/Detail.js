// import React from 'react'
// import { useParams, Link } from 'react-router-dom';
// import Loading from '../components/Loading'

// const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

// const Detail = () => {
//   const { id }= useParams();
//   const [loading, setLoading] = React.useState(false);
//   const [cocktail, setCocktails] = React.useState(null);
//   React.useEffect(() => {
//     setLoading(true);
//     async function getCocktail(){
//       try{
//         const response = await fetch(`${url}${id}`)
//         const data = await response.json()
//         console.log(data);
//       } catch {

//       }
//     }
//   },[id])
//   return (
//     <div>
//       <h2> hello</h2>
//     </div>
//   )
// }

// export default Detail