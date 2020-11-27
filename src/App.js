import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// Components
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SignIn from "./components/signIn";
import AddMovie from "./components/AddMovie";

function App() {
  const [ListOfMovies, setListOfMovies] = useState([
    {
      title: "Jumanji",
      description:
        "Quatre lycéens découvrent un vieux jeu qui les introduit dans la jungle associée aux paramètres du jeu. Le jeu incarné dans leurs choix sur lesquels reposent leurs activités, pour se rendre compte que (Jumanji) n'est pas qu'un jeu, mais un défi à terminer jusqu'à sa fin pour pouvoir revenir à leur monde réel",
      posterUrl: "http://cima4u.io/wp-content/uploads/00-2312.jpg",
      rate: {
        size: 30,
        count: 5,
        value: 5,
        edit: false,
      },
      id: "1",
      watched: false,
    },
    {
      title: "joker",
      description:
        "Lentement, la pression et les circonstances unissent leurs forces sur un comédien raté jusqu'à ce qu'il devienne fou et se transforme en un tueur criminel et obsédé",
      posterUrl: "http://cima4u.io/wp-content/uploads/0-9760.jpg",
      rate: {
        size: 30,
        count: 5,
        value: 4,
        edit: false,
      },
      id: "2",
      watched: false,
    },
    {
      title: "Pirates Of the caribbean",
      description:
        "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
      posterUrl: "http://cima4u.io/wp-content/uploads/1000-41.jpg",
      rate: {
        size: 30,
        count: 5,
        value: 3,
        edit: false,
      },
      id: "3",
      watched: false,
    },
    {
      title: "Dachra",
      description:
        "Yasmine(étudiante en journalisme)et ses deux amis enquêtent sur l’affaire de Mongia, du nom d’une femme retrouvée mutilée vingt-cinq ans, suspectée de sorcellerie. Leur enquête les conduit jusqu’à Dachra, village archaïque isolé dans la campagne tunisienne.Son chef les invite à rester la nuit, Yasmine se retrouve mêlée aux secrets de Dachra et n’a que de lutter pour sa survie.",
      posterUrl:
        "https://imgr.cineserie.com/2018/09/1356320.jpg?imgeng=/f_jpg/cmpr_0/w_212/h_318/m_cropbox&ver=1",
      rate: {
        size: 30,
        count: 5,
        value: 4,
        edit: false,
      },
      id: "4",
      watched: false,
    },
    {
      title: "Avatar",
      description:
        "Ce film raconte l'histoire d'un soldat américain assis sur une lune lointaine dans l'espace appelée Pandora, la planète habitée par de paisibles créatures bleues",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61ADl6omqPL._AC_SL1500_.jpg",
      rate: {
        size: 30,
        count: 5,
        value: 3,
        edit: false,
      },
      id: "5",
      watched: false,
    },
    {
      title: "The Three Musketeers",
      description:
        "Ce film est basé sur le roman de 1844 d'Alexandre Dumas. Il a présenté Logan Lerman, Matthew Macfadyen, Ray Stevens et Luke Evans comme personnages titulaires (D'Artagnan, Athos, Porthos et Aramis). Aussi Milla Jovovich en tant que Milady de Winter, Mads Mikkelsen en tant que capitaine Rochefort et Orlando Bloom en tant que duc de Buckingham. ",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/7/76/TheThreeMusketeers2011Poster.jpg",
      rate: {
        size: 30,
        count: 5,
        value: 4,
        edit: false,
      },
      id: "6",
      watched: false,
    },
    {
      title: "X-MEN",
      description:
        "Le laboratoire pharmaceutique Worthington vient de mettre au point un remède contre la mutation. Pendant ce temps, Jean Grey - que les X-Men pensaient disparue suite à son sacrifice à Alkali Lake - sort de sa stase et partage son esprit avec une incontrôlable personnalité qu’elle s’était jadis créée : le Phénix.",
      posterUrl:
        "https://www.chroniquedisney.fr/imgFiliale/marvel/2006-x-men-3-00.jpg",
      rate: {
        size: 30,
        count: 5,
        value: 3,
        edit: false,
      },
      id: "7",
      watched: false,
    }
  ]);

  const modification = (modif) =>
    modif
      ? setListOfMovies([
          ...ListOfMovies,
          {
            title: modif.title,
            description: modif.description,
            posterUrl: modif.posterURl,
            rate: {
              size: 30,
              count: 5,
              value: modif.rate.value,
              edit: false,
            },
            id: Math.round(),
            watched: false,
          },
        ])
      : null;

  const [search, setSearch] = useState("");
  const searchbytitle = (value) => {
    setSearch(value);
  };
  const [ratefiltring, setRatefiltring] = useState(0);
  const searchbyrate = (value) => {
    setRatefiltring(value);
  };
  const handleRemove = (id) =>
    setListOfMovies(ListOfMovies.filter((el) => el.id !== id));
  const handlemovie = (id) =>
    setListOfMovies(
      ListOfMovies.map((movie) =>
        movie.id === id
          ? {
              title: movie.title,
              description: movie.description,
              posterUrl: movie.posterUrl,
              rate: movie.rate,
              id: movie.id,
              watched: !movie.watched,
            }
          : movie
      )
    );

  return (
    <div className="App">
      <NavBar />
      <Filter searchbytitle={searchbytitle} searchbyrate={searchbyrate} />
      <MovieList
        ListOfMovies={ListOfMovies}
        handleRemove={handleRemove}
        handlemovie={handlemovie}
        search={search}
        ratefiltring={ratefiltring}
      />
      <AddMovie modification={modification} />
      <SignIn />
      <Footer />
    </div>
  );
}

export default App;
