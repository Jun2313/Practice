import HeaderLayout from './LayoutHaeder'
import ContentsLayout from './LayoutContents'
import Footer from './LayoutFooter'

export default function MainLayout(){
  return (
    <div>
      <HeaderLayout/>
      <ContentsLayout/>
      <div style={{ border : '1px solid black', height : '200px'}}>영화 메인 레이아웃입니다.</div>
      <Footer />

      <div>
        
      </div>
    </div>
  )
}