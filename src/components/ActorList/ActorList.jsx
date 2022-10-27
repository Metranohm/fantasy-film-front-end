import styles from './ActorList.module.css'

const ActorList = ({ actors, selectedCast, replaceActor }) => {

  if (actors.length > 0) {
    return (
      <div id='actorList'className={styles.actorContainer}>
        {actors.map(actor =>
          <span key={actor._id}  className='card' style={{'width': '12rem',}} >
            <img styles={styles} src={actor?.photo} alt={`${actor.name}`} />
            <div className="card-body d-flex flex-column">
              <h3 className="card-title">{actor.name}</h3>
              {selectedCast && <button className='btn btn-primary' onClick={()=> replaceActor(actor)}>Select</button>}
            </div>
          </span>
        )}
      </div>
    )
  }

  return <h1>Loading Actors...</h1>

}

export default ActorList;