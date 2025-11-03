
document.addEventListener("DOMContentLoaded", () => {
  const planets = {
    moon: {
      name: "MOON",
      image: "/src/assets/destination/image-moon.png",
      description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 KM",
      travel: "3 DAYS"
    },
    mars: {
      name: "MARS",
      image: "/src/assets/destination/image-mars.png",
      description: "Don't forget to pack your hiking boots. You'll need them tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
      distance: "225 MIL. KM",
      travel: "9 MONTHS"
    },
    europa: {
      name: "EUROPA",
      image: "/src/assets/destination/image-europa.png",
      description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. KM",
      travel: "3 YEARS"
    },
    titan: {
      name: "TITAN",
      image: "/src/assets/destination/image-titan.png",
      description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. KM",
      travel: "7 YEARS"
    }
  };

  // FIXED: Changed from button[planet-btn] to button[data-planet]
  const buttons = document.querySelectorAll("button[data-planet]");
  const image = document.getElementById("planetImage");
  const name = document.getElementById("planetName");
  // const nameSpan = document.getElementById("planetName span");
  const desc = document.getElementById("planetDesc");
  const distance = document.getElementById("planetDistance");
  const travel = document.getElementById("planetTravel");

  buttons.forEach(btn => {
    // FIXED: Added 'e' parameter
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      
      // FIXED: Added .toLowerCase() to match object keys
      const key = btn.dataset.planet.toLowerCase();

      // remove underline from all buttons
      buttons.forEach(b => b.classList.remove("border-b-2", "border-white"));
    //   btn.classList.add("border-b-2", "border-white");

      // fade out effect
      image.classList.add("opacity-0");
      name.classList.add("opacity-0");
      desc.classList.add("opacity-0");
      distance.classList.add("opacity-0");
      travel.classList.add("opacity-0");

      setTimeout(() => {
        image.src = planets[key].image;
        name.parentElement = planets[key].name;
        desc.textContent = planets[key].description;
        distance.textContent = planets[key].distance;
        travel.textContent = planets[key].travel;

        // FIXED: Added fade-in for distance and travel
        image.classList.remove("opacity-0");
        name.classList.remove("opacity-0");
        desc.classList.remove("opacity-0");
        distance.classList.remove("opacity-0");
        travel.classList.remove("opacity-0");
      }, 200);
    });
  });
});