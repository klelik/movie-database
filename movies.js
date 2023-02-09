// // const setMovies = (movies) => {
// //     const movieSpinner = document.getElementById("movie-spinner");
// //     movieSpinner.style.display = "none";

// const movieContainer = document.getElementById("movie-container");
// movies.forEach((movie) => {
//   const movieBox = document.createElement("div");
//   movieBox.classList.add("col-md-3");

//   const imageUrl = "https://image.tmdb.org/t/p/original" + movie.poster_path;

//   movieBox.innerHTML = `
//       <div class="shadow rounded p-3 m-2">
//           <img class="img-fluid" src=${imageUrl}>
//           <h3>${movie.title}</h3>
//           <p>${movie.overview.slice(0, 150)}</p>
//           <button onClick="loadMovieDetails('${
//             movie.id
//           }')" class="btn btn-primary">See Details</button>
//       </div>
//       </div>
//   `;
//   movieContainer.appendChild(movieBox);
// });
