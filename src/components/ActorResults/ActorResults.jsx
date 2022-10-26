import ActorCard from '../ActorCard/ActorCard'
import * as actorService from '../../services/actorService'

import styles from './ActorResults.module.css'

const ActorResults = ({actors, profile, setProfile}) => {
  const tmdbIDs = profile?.favoriteActors.map(a => a.tmdbID)

  const handleAddToFav = async actor => {
    try {
      const setFavActor={
        name: `${actor.name}`,
        photo: `https://image.tmdb.org/t/p/original${actor.profile_path}`,
        tmdbID: `${actor.id}`
      }
      const newActor = await actorService.create(setFavActor)
      setProfile({
        ...profile,
        favoriteActors:[...profile.favoriteActors,newActor]
      })
    } catch (err) {
      console.log(err)
    }
  }
  const handleDeleteFromFav = async actor => {
    try {
      const deleteFavActor ={
        tmdbID: `${actor.id}`
      }
      await actorService.deleteFav(deleteFavActor)
      setProfile({
        ...profile,
        favoriteActors: profile.favoriteActors.filter(a => {
          return a.tmdbID !== actor.id
        })
      })
    } catch (error) {
      console.log(error)
    }
  } 

  return (  
    <main className={styles.container}>
    {actors.length ?
    
      actors.map(actor => 
        {
          if (actor.profile_path){
            return (
              <ActorCard 
                key={actor.id} 
                actor={actor} 
                profile={profile}
                favActors={tmdbIDs}
                handleDeleteFromFav={handleDeleteFromFav} 
                handleAddToFav={handleAddToFav}
              />
            )
          }
        }
      )
      :

      <p>Search for Actors to get started!</p>
    }
    </main>
  );
}

export default ActorResults;