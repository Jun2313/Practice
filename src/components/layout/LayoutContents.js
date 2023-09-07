import Search from "../Contents/Search"
import MovieList from '../Contents/Mainbenner'

export default function ContentsLayout(){
  return (
    <div style={{ border :'1px solid black', height : '350px'} }>
      <Search />
      <MovieList />
      <div>
      </div>
    </div>
  )
}