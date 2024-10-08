const App = () => {

  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";
  const cinema1Movie1Title = "Film 1 - DeBrouckère";
  const cinema1Movie1Director = "Director A";
  const cinema1Movie2Title = "Film 2 - DeBrouckère";
  const cinema1Movie2Director = "Director B";

  const cinema2Name = "UGC Toison d'Or";
  const cinema2Movie1Title = "Film 1 - Toison d'Or";
  const cinema2Movie1Director = "Director C";
  const cinema2Movie2Title = "Film 2 - Toison d'Or";
  const cinema2Movie2Director = "Director D";

  return (
    <div>
      <Title title={pageTitle}/>
      <Cinema 
        name={cinema1Name} 
        movie1={cinema1Movie1Title} 
        movie1Director={cinema1Movie1Director} 
        movie2={cinema1Movie2Title} 
        movie2Director={cinema1Movie2Director}/>

      <Cinema 
        name={cinema2Name} 
        movie1={cinema2Movie1Title} 
        movie1Director={cinema2Movie1Director} 
        movie2={cinema2Movie2Title} 
        movie2Director={cinema2Movie2Director}/>
    </div>
  );
};

interface HeaderProps {
  title: string;
}

interface CinemaProps {
  name: string;
  movie1: string;
  movie1Director: string;
  movie2: string;
  movie2Director: string;
}

const Title = (props: HeaderProps) => {
  return (
    <header>
      <h1 className="animate__animated animate__bounce">{props.title}</h1>
    </header>
  );
};
const Cinema = (props: CinemaProps) => {
  return( <div><h2>{props.name}</h2>
    <ul>
      <li>
        <strong>{props.movie1}</strong> - Réalisateur :{" "}
        {props.movie1Director}
      </li>
      <li>
        <strong>{props.movie2}</strong> - Réalisateur :{" "}
        {props.movie2Director}
      </li>
    </ul>
    </div>);
}

export default App;
