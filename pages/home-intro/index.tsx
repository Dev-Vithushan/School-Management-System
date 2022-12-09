import Image from 'next/image'
import profilePic from '../../public/jhlc_logo.png'
import homeStyles from '../../styles/gallery/myhome.module.css'
import Link from 'next/link'

function homeIntro() {
  return (
    <div className={homeStyles.bg}>
      <h1>My Homepage</h1>
      <Image
        src={profilePic}
        alt="Picture of the author"
        width={400}
        height={400} 
        blurDataURL="data:..." 
        placeholder="blur"
      />
      <div className={homeStyles.title}>Welcome to <span>Jaffna Hindu Ladies College!</span></div>
      <br/>
      <Link href='/gallery'>Gallery</Link>
    </div>
  )
}
export default homeIntro;