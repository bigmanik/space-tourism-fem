document.addEventListener("DOMContentLoaded", () => {
  // ==================== DESTINATION PAGE ====================
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

  const destButtons = document.querySelectorAll("button[data-planet]");
  
  // Only run destination code if elements exist
  if (destButtons.length > 0) {
    const image = document.getElementById("planetImage");
    const name = document.getElementById("planetName");
    const desc = document.getElementById("planetDesc");
    const distance = document.getElementById("planetDistance");
    const travel = document.getElementById("planetTravel");

    destButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        
        const key = btn.dataset.planet.toLowerCase();

        // remove underline from all buttons
        destButtons.forEach(b => b.classList.remove("border-b-2", "border-white"));

        // fade out effect
        image.classList.add("opacity-0");
        name.classList.add("opacity-0");
        desc.classList.add("opacity-0");
        distance.classList.add("opacity-0");
        travel.classList.add("opacity-0");

        setTimeout(() => {
          image.src = planets[key].image;
          name.querySelector("span").textContent = planets[key].name;
          desc.textContent = planets[key].description;
          distance.textContent = planets[key].distance;
          travel.textContent = planets[key].travel;

          image.classList.remove("opacity-0");
          name.classList.remove("opacity-0");
          desc.classList.remove("opacity-0");
          distance.classList.remove("opacity-0");
          travel.classList.remove("opacity-0");
        }, 200);
      });
    });
  }

  // ==================== CREW PAGE ====================
  const crewData = [
    {
      role:"Commander",
      name:" Douglas Hurley",
      text:"  Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      img:"/src/assets/crew/image-douglas-hurley.png"
    },
    {
      role:"Mission Specialist",
      name:"Mark Shuttleworth",
      text:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      img:"/src/assets/crew/image-mark-shuttleworth.png"
    },
    {
      role:"Flight Engineer",
      name:"Anousheh Ansari",
      text:"  Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to flyto the ISS, and the first Iranian in space.",
      img:"/src/assets/crew/image-anousheh-ansari.png"
    },
    {
      role:"Pilot",
      name:"Victor Glover",
      text:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      img:"/src/assets/crew/image-victor-glover.png"
    }
  ];

  // Check if crew page elements exist
  const roleEl = document.getElementById("crew-role");
  const nameEl = document.getElementById("crew-name");
  const descEl = document.getElementById("crew-desc");
  const imgEl = document.getElementById("crew-img");
  const dots = document.querySelectorAll(".dot");

  // Only run crew code if elements exist
  if (roleEl && nameEl && descEl && imgEl && dots.length > 0) {
    let currentIndex = 2; // start on Anousheh

    function updateDots(activeIndex) {
      dots.forEach((dot, i) => {
        dot.classList.remove("bg-white", "bg-white/50");
        if (i === activeIndex) dot.classList.add("bg-white");
        else dot.classList.add("bg-white/50");
      });
    }

    function showCrew(index) {
      const i = Number(index);
      const crew = crewData[i];

      roleEl.textContent = crew.role;
      nameEl.textContent = crew.name;
      descEl.innerHTML = crew.text;
      imgEl.src = crew.img;

      updateDots(i);
      currentIndex = i;
    }

    // wire up dot clicks
    dots.forEach(dot => {
      dot.addEventListener("click", (e) => {
        const index = Number(e.currentTarget.dataset.index);
        showCrew(index);
      });
    });

    // auto-advance
    const autoId = setInterval(() => {
      currentIndex = (currentIndex + 1) % crewData.length;
      showCrew(currentIndex);
    }, 5000);

    // Initialize
    showCrew(currentIndex);
  }

  // ==================== TECHNOLOGY PAGE ====================
  const techLaunch = [
    {
      jobName:" LAUNCH VEHICLE",
      jobDesc: "  A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to <br> space, usually to Earth orbit or beyond. Our  WEB-X  carrier rocket is the most powerful in operation.  Standing 150 metres tall, it's quite an awe-inspiring sight <br> on the launch pad!",
      jobImg: "/src/assets/technology/image-launch-vehicle-portrait.jpg"
    },
    {
      jobName:"SPACE CAPSULE",
      jobDesc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      jobImg: " /src/assets/technology/image-space-capsule-portrait.jpg"
    },
    {
      jobName:" SPACEPORT",
      jobDesc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the  famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
      jobImg: " /src/assets/technology/image-spaceport-portrait.jpg"
    }
  ];

  const teamTitle = document.getElementById("teamTitle");
  const teamDesc = document.getElementById("teamdesc");
  const teamImg = document.getElementById("teamImg");
  const techButtons = document.querySelectorAll(".lbtn");

  // Only run technology code if elements exist
  if (teamTitle && teamDesc && teamImg && techButtons.length > 0) {
    function changeContent(index) {
      teamTitle.innerHTML = techLaunch[index].jobName;
      teamDesc.innerHTML = techLaunch[index].jobDesc;
      teamImg.src = techLaunch[index].jobImg;

      // Active button styling
      techButtons.forEach(btn => btn.classList.remove("bg-white", "text-black"));
      techButtons[index].classList.add("bg-white", "text-black");
    }

    // attach event listeners
    techButtons.forEach((btn, index) => {
      btn.addEventListener("click", () => changeContent(index));
    });

    // Initialize first item
    changeContent(0);
  }
});

//hamburger menu 

const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-menu-overlay');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');
  const closeBtn = document.getElementById('close-mobile-menu');

  function openMenu() {
    mobileMenu.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');
    mobileMenu.classList.add('translate-x-0', 'opacity-100', 'pointer-events-auto');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100', 'pointer-events-auto');
   
    hamburgerIcon.classList.add('opacity-0');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.add('translate-x-full', 'opacity-0', 'pointer-events-none');
    mobileMenu.classList.remove('translate-x-0', 'opacity-100', 'pointer-events-auto');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    overlay.classList.remove('opacity-100', 'pointer-events-auto');
    
    hamburgerIcon.classList.remove('opacity-0');
    document.body.style.overflow = '';
  }

  menuToggle.addEventListener('click', () => {
    if (mobileMenu.classList.contains('translate-x-full')) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu); // click outside to close