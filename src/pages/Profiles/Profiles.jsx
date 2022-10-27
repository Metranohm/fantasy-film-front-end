import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as profileService from '../../services/profileService'

const Profiles = (profile) => {
  const [profiles, setProfiles] = useState([])
  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      <h1>Welcome all Fantasy Filmmakers!</h1>
      {profiles.length ? 
        <>
          <Link to={`/profiles/${profile._id}`}>
          {profiles.map(profile =>
            <p key={profile._id}>{profile.name}</p>
          )}
          </Link>
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles