/***********************
 * DATA
 ***********************/


// ===================== SCHOOLS =====================
const schools = [
  {
    id: "psbb_tnagar",
    name: "PSBB Senior Secondary School",
    area: "T Nagar, Chennai",
    about: "Well-known CBSE school with strong academics.",
    fees: "₹45,000 – ₹70,000",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    lat: 13.0418,
    lng: 80.2337
  },
  {
    id: "dav_boys_gopalapuram",
    name: "DAV Boys Senior Secondary School",
    area: "Gopalapuram, Chennai",
    about: "CBSE school focused on discipline and academics.",
    fees: "₹40,000 – ₹65,000",
    video: "https://www.youtube.com/embed/9bZkp7q19f0",
    lat: 13.0476,
    lng: 80.2587
  },
  {
    id: "dav_girls_gopalapuram",
    name: "DAV Girls Senior Secondary School",
    area: "Gopalapuram, Chennai",
    about: "Leading girls CBSE school.",
    fees: "₹38,000 – ₹60,000",
    video: "https://www.youtube.com/embed/l482T0yNkeo",
    lat: 13.0469,
    lng: 80.2581
  },
  {
    id: "chettinad_vidyashram",
    name: "Chettinad Vidyashram",
    area: "RA Puram, Chennai",
    about: "CBSE school with focus on holistic development.",
    fees: "₹90,000 – ₹1,20,000",
    video: "https://www.youtube.com/embed/kJQP7kiw5Fk",
    lat: 13.0213,
    lng: 80.2609
  },
  {
    id: "st_bedes_mylapore",
    name: "St. Bede’s Anglo Indian School",
    area: "Mylapore, Chennai",
    about: "Historic Anglo-Indian school.",
    fees: "₹35,000 – ₹55,000",
    video: "https://www.youtube.com/embed/3tmd-ClpJxA",
    lat: 13.0331,
    lng: 80.2690
  },
  {
    id: "chinmaya_vidyalaya",
    name: "Chinmaya Vidyalaya",
    area: "Anna Nagar, Chennai",
    about: "CBSE school with value-based education.",
    fees: "₹50,000 – ₹80,000",
    video: "https://www.youtube.com/embed/fLexgOxsZu0",
    lat: 13.0878,
    lng: 80.2120
  },
  {
    id: "modern_school",
    name: "Modern Senior Secondary School",
    area: "Nanganallur, Chennai",
    about: "Well-established CBSE institution.",
    fees: "₹42,000 – ₹68,000",
    video: "https://www.youtube.com/embed/tAGnKpE4NCI",
    lat: 12.9791,
    lng: 80.1865
  },
  {
    id: "bhavans_rajaji",
    name: "Bhavan’s Rajaji Vidyashram",
    area: "Kilpauk, Chennai",
    about: "CBSE school under Bharatiya Vidya Bhavan.",
    fees: "₹48,000 – ₹75,000",
    video: "https://www.youtube.com/embed/e-ORhEE9VVg",
    lat: 13.0810,
    lng: 80.2417
  },
  {
    id: "sboahss",
    name: "SBOA Higher Secondary School",
    area: "Anna Nagar, Chennai",
    about: "Popular matriculation school.",
    fees: "₹55,000 – ₹85,000",
    video: "https://www.youtube.com/embed/OPf0YbXqDm0",
    lat: 13.0850,
    lng: 80.2101
  },
  {
    id: "pon_vidyashram",
    name: "PON Vidyashram",
    area: "Kolapakkam, Chennai",
    about: "CBSE school with modern infrastructure.",
    fees: "₹60,000 – ₹90,000",
    video: "https://www.youtube.com/embed/rYEDA3JcQqw",
    lat: 13.0067,
    lng: 80.1604
  }
];

// ===================== COLLEGES =====================
const colleges = [
  {
    id: "veltech",
    name: "Vel Tech University",
    area: "Avadi, Chennai",
    about: "Private deemed university for engineering.",
    fees: "₹1,20,000 – ₹2,50,000",
    video: "https://www.youtube.com/embed/uelHwf8o7_U",
    lat: 13.1643,
    lng: 80.0675
  },
  {
    id: "loyola_college",
    name: "Loyola College",
    area: "Nungambakkam, Chennai",
    about: "Top autonomous arts & science college.",
    fees: "₹20,000 – ₹60,000",
    video: "https://www.youtube.com/embed/2Vv-BfVoq4g",
    lat: 13.0646,
    lng: 80.2337
  },
  {
    id: "anna_university",
    name: "Anna University",
    area: "Guindy, Chennai",
    about: "Premier government engineering university.",
    fees: "₹50,000 – ₹1,00,000",
    video: "https://www.youtube.com/embed/CevxZvSJLk8",
    lat: 13.0109,
    lng: 80.2354
  },
  {
    id: "iit_madras",
    name: "IIT Madras",
    area: "Adyar, Chennai",
    about: "Top engineering institute in India.",
    fees: "₹2,00,000 – ₹2,50,000",
    video: "https://www.youtube.com/embed/hT_nvWreIhg",
    lat: 12.9916,
    lng: 80.2336
  },
  {
    id: "ssn_college",
    name: "SSN College of Engineering",
    area: "Kalavakkam",
    about: "Top private engineering college.",
    fees: "₹1,50,000 – ₹2,50,000",
    video: "https://www.youtube.com/embed/YQHsXMglC9A",
    lat: 12.7944,
    lng: 80.2153
  },
  {
    id: "saveetha",
    name: "Saveetha Engineering College",
    area: "Thandalam",
    about: "Private engineering college.",
    fees: "₹1,00,000 – ₹2,00,000",
    video: "https://www.youtube.com/embed/JGwWNGJdvx8",
    lat: 13.0219,
    lng: 80.0215
  },
  {
    id: "vit_chennai",
    name: "VIT Chennai",
    area: "Kelambakkam",
    about: "Private deemed university.",
    fees: "₹1,90,000 – ₹3,00,000",
    video: "https://www.youtube.com/embed/SlPhMPnQ58k",
    lat:
// ===== LOAD USER-ADDED DATA =====
const userSchools = JSON.parse(localStorage.getItem("user_schools")) || [];
const userColleges = JSON.parse(localStorage.getItem("user_colleges")) || [];

// merge with default data
schools.push(...userSchools);
colleges.push(...userColleges);

/***********************
 * SAVE DATA FOR DETAILS PAGE
 ***********************/
localStorage.setItem("all_schools", JSON.stringify(schools));
localStorage.setItem("all_colleges", JSON.stringify(colleges));

/***********************
 * STATE
 ***********************/
let currentType = "schools";
let markers = [];

/***********************
 * MAP
 ***********************/
const map = L.map("map").setView([13.0827, 80.2707], 12);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

/***********************
 * HELPERS
 ***********************/
function getCurrentData() {
  return currentType === "schools" ? schools : colleges;
}

/***********************
 * SEARCH
 ***********************/
document.getElementById("searchInput").addEventListener("input", function () {
  const q = this.value.toLowerCase();
  const filtered = getCurrentData().filter(item =>
    item.name.toLowerCase().includes(q) ||
    item.area.toLowerCase().includes(q)
  );
  renderList(filtered);
});

/***********************
 * RENDER
 ***********************/
function renderList(data) {
  const listDiv = document.getElementById("schoolList");
  listDiv.innerHTML = "";

  markers.forEach(m => map.removeLayer(m));
  markers = [];

  data.forEach(item => {
    // marker
    const marker = L.marker([item.lat, item.lng]).addTo(map);
    marker.bindPopup(`<b>${item.name}</b><br>${item.area}`);
    markers.push(marker);

    // card
    const card = document.createElement("div");
    card.className = "school-card";
    card.innerHTML = `
      <div class="school-name">${item.name}</div>
      <div class="school-info">${item.area} • ${item.fees}</div>
      <button class="dir-btn">Get Directions</button>
      <button class="details-btn">Details</button>
    `;

    // card click = zoom
    card.addEventListener("click", () => {
      map.setView([item.lat, item.lng], 15);
      marker.openPopup();
    });

    // directions
    card.querySelector(".dir-btn").addEventListener("click", e => {
      e.stopPropagation();
      getDirections(item.lat, item.lng);
    });

    // details
    card.querySelector(".details-btn").addEventListener("click", e => {
      e.stopPropagation();
      window.location.href =
        `details.html?id=${item.id}&type=${currentType}`;
    });

    listDiv.appendChild(card);
  });
}

/***********************
 * GPS DIRECTIONS
 ***********************/
function getDirections(destLat, destLng) {
  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(pos => {
    const uLat = pos.coords.latitude;
    const uLng = pos.coords.longitude;
    const url =
      `https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=${uLat},${uLng};${destLat},${destLng}`;
    window.open(url, "_blank");
  });
}

/***********************
 * TOGGLE
 ***********************/
document.getElementById("schoolsBtn").onclick = () => {
  currentType = "schools";
  renderList(schools);
};

document.getElementById("collegesBtn").onclick = () => {
  currentType = "colleges";
  renderList(colleges);
};

/***********************
 * INITIAL LOAD
 ***********************/
renderList(schools);
localStorage.setItem("all_schools", JSON.stringify(schools));

localStorage.setItem("all_colleges", JSON.stringify(colleges));



