const styles = {
  width: '20px',
  height: '20px'
}

const ActorList = ({ actors, selectedCast, replaceActor }) => {

  if (actors.length > 0) {
    return (
      <section>
        <h1>Actor list component</h1>
        {actors.map(actor =>
          <div key={actor._id} className='card' style={{ 'width': '24rem' }} >
            <img styles={styles} src={actor.photo} alt={`${actor.name}`} />
            <div className="card-body d-flex flex-column">
              <h3 className="card-title">{actor.name}</h3>
              {selectedCast && <button onClick={()=> replaceActor(actor)}>Select</button>}
            </div>
          </div>
        )}
      </section>
    );
  }

  return <h1>Loading Actors...</h1>

}

export default ActorList;