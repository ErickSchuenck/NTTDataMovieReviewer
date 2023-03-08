import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    value: {
      Title: "Whiplash",
      Year: "2014",
      Rated: "R",
      Released: "15 Oct 2014",
      Runtime: "106 min",
      Genre: "Drama, Music",
      Director: "Damien Chazelle",
      Writer: "Damien Chazelle",
      Actors: "Miles Teller, J.K. Simmons, Melissa Benoist",
      Plot: "Nineteen year old Andrew Niemann wants to be the greatest jazz drummer in the world, in a league with Buddy Rich. This goal is despite not coming from a pedigree of greatest, musical or otherwise, with Jim, his high school teacher father, being a failed writer. Andrew is starting his first year at Shaffer Conservatory of Music, the best music school in the United States. At Shaffer, being the best means being accepted to study under Terence Fletcher and being asked to play in his studio band, which represents the school at jazz competitions. Based on their less than positive first meeting, Andrew is surprised that Fletcher asks him to join the band, albeit in the alternate drummer position which he is more than happy to do initially. Andrew quickly learns that Fletcher operates on fear and intimidation, never settling for what he considers less than the best each and every time. Being the best in Fletcher's mind does not only entail playing well, but knowing that you're playing well and if not what you're doing wrong. His modus operandi creates an atmosphere of fear and of every man or woman for him/herself within the band. Regardless, Andrew works hard to be the best. He has to figure out his life priorities and what he is willing to sacrifice to be the best. The other question becomes how much emotional abuse he will endure by Fletcher to reach that greatness, which he may believe he can only achieve with the avenues opened up by Fletcher.",
      Language: "English",
      Country: "United States",
      Awards: "Won 3 Oscars. 98 wins & 146 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "8.5/10",
        },
        {
          Source: "Rotten Tomatoes",
          Value: "94%",
        },
        {
          Source: "Metacritic",
          Value: "89/100",
        },
      ],
      Metascore: "89",
      imdbRating: "8.5",
      imdbVotes: "883,469",
      imdbID: "tt2582802",
      Type: "movie",
      DVD: "02 Dec 2014",
      BoxOffice: "$13,092,000",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
  },
  reducers: {
    changeMovie: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default movieSlice.reducer;
