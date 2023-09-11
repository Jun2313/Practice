import MovieList from '../Contents/SearchList'
import MoviesDtail from '../Contents/MovieDetail'
export default function ContentsLayout(){
  return (
    <div style={{ height : '60vw'} }>
      <MovieList />
      <MoviesDtail />
      <div>
      </div>
    </div>
  )
}