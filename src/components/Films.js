import React from 'react'

export default function FilmsPresentation({films}) {
    console.log(films);
  return (
    <div className="container">
            {films.map((film) =>(
                <div className="column">
                <div className="card">
                    <img src = {film.img} alt=""></img>
                    <h3>{film.title}</h3>
                    <p className='year'>{film.year}</p>
                    <p className='nation'>{film.nation}</p>
                    <p><button class="glow-on-hover" type="button">Watch now</button></p>
                </div>
            </div>
            ))}  
        </div>
  )
}