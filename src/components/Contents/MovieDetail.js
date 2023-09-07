export default function MoviesDtail( {details}){
  if (!details) {
    return null;  // or you can return some loading indicator
  }
  return(
    <div style={{
      display: 'flex'
    }}>
    <div className="MovieDetail_Img" style={{
      background : 'pink',
      height : '40vw',
      width : '50%',
      boxSizing :'border-box',
      margin : '15% 5%'
    }}></div>
    <div className="MovieDetail_EnterDetails" style={{
      background : 'skyblue',
      height : '40vw',
      width : '50%',
      boxSizing :'border-box',
      margin : '15% 5%'
    }}>
        <h1>{details.movieNm}</h1>
        <p>Release Date: {details.openDt}</p>
        <p>Genre: {details.genreNm}</p>
        <p>Actors: {details.actors}</p>
    </div>
    </div>
  )
}