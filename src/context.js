import React, { useState, useContext, useEffect, useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading,setLoading] = useState(true);
  const [searchTerm,setSearchTerm] = useState('a');
  const [cocktails,setCocktails] = useState([]);
  
  const fetchData = async () => {
    setLoading(true);
    try {
      // console.log("hello, krishna")
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      // console.log(data)
      const {drinks} = data;
      if(drinks){
        // setCocktails(['a','b'])
        const newCocktails = drinks.map((drink) =>{
          const {idDrink, strDrink, strDrinkThumb, strAlcoholic,strCategory,} = drink;
          return {id:idDrink, name:strDrink,image: strDrinkThumb,info:strAlcoholic,category:strCategory}
        }) 
        setCocktails(newCocktails);
      }else{
        setCocktails([])
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData()
  },[searchTerm])

  return <AppContext.Provider value={{loading,cocktails,setSearchTerm}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
