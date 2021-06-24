import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

function CocktailData() {
    const { cocktails, loading } = useGlobalContext();
    if(loading){
       return <Loading />
    }
    if(cocktails.length < 1) {
        return (
          <h2 className='section-title'>
            no cocktails matched your search criteria
          </h2>
        )
      }
    return (
        <section className="section">
            <h2 className="section-title">
                Cocktails
            </h2>
            <div className="cocktails-center">
                {
                    cocktails.map((drink)=>{
                        return <Cocktail key={drink.id} {...drink} />
                    })
                }
            </div>
        </section>
    )
}

export default CocktailData
