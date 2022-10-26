import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// components
// import Loading from "../Loading/Loading"
// import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

import styles from "./DreamcastList.module.css"

// Services
import * as dreamcastService from "../../services/dreamcastService.js"

const DreamcastDetails = (props) => {
  const { id } = useParams()
  const [dreamcast, setDreamcast] = useState(null)

  useEffect(() => {
    const fetchDreamcast = async () => {
      const data = await dreamcastService.show(id)
      setDreamcast(data)
    }
    fetchDreamcast()
  }, [id])

  console.log("Styles:", styles);

  // if (!dreamcast) return <Loading />

  return (
    <h1>Working component!</h1>
    // <main className={styles.container}>
    //   <article>
    //     <header>
    //       <h3>{dreamcast.category.toUpperCase()}</h3>
    //       <h1>{dreamcast.title}</h1>
    //       {/* <span>
    //         <AuthorInfo content={dreamcast} />
    //       </span> */}
    //     </header>
    //     <p>{dreamcast.text}</p>
    //   </article>
    //   <section>
    //     <h1>Comments</h1>
    //   </section>
    // </main>
  )
}

export default DreamcastDetails