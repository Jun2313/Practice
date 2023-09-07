import HeaderLayout from './LayoutHaeder'
import ContentsLayout from './LayoutContents'
import Footer from './LayoutFooter'

export default function MainLayout(){
  return (
    <div id="Main_Layout">
      <HeaderLayout/>
      <ContentsLayout/>
      <Footer />
      <div>
      </div>
    </div>
  )
}