import Link from 'next/link'
import ClassStyles from '../styles/Class.module.css'

const ClassItem = ({myclass}) => {
  return (
        <div className={ClassStyles.grid}>
          <Link legacyBehavior
          href="/myclass/[id]" as={`/myclass/${myclass.id}`}>
            <a className={ClassStyles.card}>
            <table>
              <tr>
                <td>{myclass.grade}</td>
                <td>{myclass.division}</td>
              </tr>
            </table>
            </a> 
          </Link>
        </div>
  )
}

export default ClassItem