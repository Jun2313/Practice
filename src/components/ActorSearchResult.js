function ActorSearchResult({actors}) {

    return (
        <>
            <div className="ActorSearchResult">
                {/* {actors.map((actor) => (
                <div key={actor.peopleCd} className="ActorResultBox">
                    <h2>{actor.peopleNm}</h2>
                    <p>영화인 코드: {actor.peopleCd}</p>
                    <p>영화인명(영문): {actor.peopleNmEn}</p>
                    <p>분야: {actor.repRoleNm}</p>
                    <p>필모리스트: {actor.filmoNames}</p>
                </div>
                ))} */}
            </div>
        </>
    );
  }
  
  export default ActorSearchResult;