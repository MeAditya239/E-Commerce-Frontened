import { mens_kurta } from '../../../Data/mens_kurta'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'

export default function HomePage() {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 '>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Kurta"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's dresses"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Sarees"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Tops"}/>

        </div>
    </div>
    )
}