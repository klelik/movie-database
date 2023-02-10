let movieData = [
   {
    title: "The Darjeeling Limited",
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
    img: "https://thegoodsreviews.com/wp-content/uploads/tmdb/original/fHFAfw5zS6ZkYx7lEyIuTM8d1zV-1200x675.jpg"
  },
   {
    title: "The Royal Tenenbaums",
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
    img: "https://m.media-amazon.com/images/M/MV5BYmUzODQ5MGItZTZlNy00MDBhLWIxMmItMjg4Y2QyNDFlMWQ2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
  },
  {
    title: "Fantastic Mr. Fox",
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F780A71F1F76A6E2D73EDB1E39B286215E1034613B9DDCC0E99C8D9ECCBE33AD/scale?width=1200&aspectRatio=1.78&format=jpeg"
  },
   {
    title: "The Grand Budapest Hotel",
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    img: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_FMjpg_UX1000_.jpg"
  },
];


const upShow = document.querySelector(".upShow");
const contentBox = document.getElementById("dataContainer");
const dataBox = document.querySelector(".image-container");

// function changeBackground(url) {
//   // upShow.style.backgroundColor = "#f3f3f3";
//   console.log(url);
// };

// function myFunction(proj) {
//   // document.getElementById("demo").innerHTML = "Hello World";
//   console.log(proj);
// }

const showData = movieData.map((project, index) => {
  return `
  <div class="card">
    <div class="wrapper" style = "background: url(${project.img}) center center">
      <div class="header">
        <div class="date">
          <span class="day">${project.year}</span>
        </div>
      <div class="rating">
      <span class="badge">${project.rating} </span>
      </div>
      </div>
      <div class="data">
        <div class="content">
          <span class="author"> Wes Anderson </span>
          <h1 class="title"><a href="#">${project.title}</a></h1>
          <p class="text">${project.plot}</p><br>
          <p class="text">Cast : ${project.cast}</p><br>
          <p class="text">Runtime : ${project.runtime}m</p>

        </div>
      </div>
    </div>
  </div>
    `;

});


contentBox.innerHTML = showData.join("");