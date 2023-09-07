import HeaderLayout from './LayoutHaeder'
import ContentsLayout from './LayoutContents'
import Footer from './LayoutFooter'

export default function MainLayout(){
  return (
    <div id="Main_Layout" style={{ margin: 'auto'}}>
      <HeaderLayout/>
      <ContentsLayout/>
      <Footer />
      <div>
      </div>
    </div>
  )
}