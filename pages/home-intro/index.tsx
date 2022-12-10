import Image from 'next/image'
import profilePic from '../../public/gallery/jhlc_logo.png'
import homeStyles from '../../styles/myhome.module.css'
import Link from 'next/link'

function homeIntro() {
  return (
    <div className={homeStyles.bg}>
      <h1>My Homepage</h1>
      <Image
        src={profilePic}
        alt="Picture of the author"
        width={600}
        height={600} 
        blurDataURL="data:..." 
        placeholder="blur"
      />
      <div className={homeStyles.title}>Welcome to <span>Jaffna Hindu Ladies College!</span></div>
      <br/>
      <Link href='../home-intro/gallery'>Gallery</Link>
    </div>
  )
}
export default homeIntro;