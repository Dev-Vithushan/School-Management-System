import Image from 'next/image'
import profile1Pic from '../../public/gallery/annai.png'
import profile2Pic from '../../public/gallery/teachers.png'
import profile3Pic from '../../public/gallery/gymnastic.png'
import profile4Pic from '../../public/gallery/sportsmeet.png'
import homeStyles from '../../styles/myhome.module.css'

function gallery() {
  return (
    <div className={homeStyles.bg1}>
      <h1 className={homeStyles.title}><span>Jaffna Hindu Ladies College </span>Gallery</h1>
      <div>
          <Image
            src={profile1Pic}
            alt="Picture of the author"
            width={500}
            height={500} 
            blurDataURL="data:..." 
            placeholder="blur"
          />
      </div>
      <div>
          <Image
            src={profile2Pic}
            alt="Picture of the author"
            width={400}
            height={400} 
            blurDataURL="data:..." 
            placeholder="blur"
          />
      </div>
      <div>
          <Image
            src={profile3Pic}
            alt="Picture of the author"
            width={400}
            height={400} 
            blurDataURL="data:..." 
            placeholder="blur"
          />
      </div>
      <div>    
          <Image
            src={profile4Pic}
            alt="Picture of the author"
            width={400}
            height={400} 
            blurDataURL="data:..." 
            placeholder="blur"
          />
      </div>
    </div>
  )
}
export default gallery;