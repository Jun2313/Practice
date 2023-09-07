import MovieList from '../Contents/SearchList'
import MoviesDtail from '../Contents/MovieDetail'
export default function ContentsLayout(){
  return (
    <div style={{ border :'1px solid black', height : '60vw' ,background : ''} }>
      <MovieList />
      <MoviesDtail />
      <div>
      </div>
    </div>
  )
}