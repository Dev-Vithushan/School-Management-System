import { server } from '../../config'
import Head from 'next/head'
import ClassItem from '../../components/ClassItem'
import ImageStyles from '../../styles/Image.module.css'
import Link from 'next/link'

export default function Home({myclasses}) {
  return (
      <div className={ImageStyles.div1}>
        <Head>
          <title>My Class</title>
        </Head>

        <div className={ImageStyles.div2}>
          <h1 style={{color: "#d3414d", marginLeft: "15%", marginTop: "5%"}}>My Classes</h1>
        </div>
        
        {myclasses.map((myclass)=>(
          <ClassItem myclass={myclass}/>
        ))}
        {/* <img src="/bg.png"/> */}
        
        <button className={ImageStyles.button1}>
          <Link href='/class/createClass'>Create new class</Link>
        </button>
        <br/>
        <table className={ImageStyles.label1}>
          <tr>
            <th><label>Year of Study</label></th>
            <td>
              <select style={{width: '100px'}}>
                  <option selected value="grade"></option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
              </select>
            </td>
          </tr>
        </table>
      </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/myclasses`)
  const myclasses = await res.json()

  return {
    props: {
      myclasses,
    },
  }
}
