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
        <p>개봉날자 :  {details.openDt}</p>
        <p>장르 : {details.genreNm}</p>
        <p>배우 : {details.actors}</p>
        <p>국가 : {details.genres}</p>
            </div>
    </div>
  )
}