const videos = [
  {
    title: "Last to Leave the Lava Arena Wins $500,000",
    creator: "MrBeast",
    category: "Challenges",
    views: "124M views",
    length: "12:45",
    accent: "#ff4d4f",
    tag: "Challenge",
  },
  {
    title: "Karl's Biggest Reactions Compilation",
    creator: "Karl",
    category: "Creator",
    views: "9.8M views",
    length: "8:30",
    accent: "#ffb703",
    tag: "Fun",
  },
  {
    title: "Unstable SMP: The Village Betrayal",
    creator: "Minecraft",
    category: "Gaming",
    views: "3.2M views",
    length: "15:10",
    accent: "#30d158",
    tag: "Minecraft",
  },
  {
    title: "Moon Collecting Sprint in the Void",
    creator: "Adventure",
    category: "Adventure",
    views: "2.9M views",
    length: "10:22",
    accent: "#39d0ff",
    tag: "Adventure",
  },
  {
    title: "Hide and Seek with the Tiny Team",
    creator: "Small Ant & Friends",
    category: "Hide & Seek",
    views: "7.6M views",
    length: "11:13",
    accent: "#a56dff",
    tag: "Hide & Seek",
  },
  {
    title: "Mario Odyssey: Golden Star Rush",
    creator: "Mario",
    category: "Adventure",
    views: "6.1M views",
    length: "9:44",
    accent: "#ff7f50",
    tag: "Adventure",
  },
  {
    title: "Manhunt: The Hunted Escape Room",
    creator: "Survival",
    category: "Manhunts",
    views: "4.7M views",
    length: "14:02",
    accent: "#ff4d4f",
    tag: "Manhunt",
  },
  {
    title: "Crazy Challenge House: No Sleep Edition",
    creator: "Fun Zone",
    category: "Challenges",
    views: "18M views",
    length: "16:40",
    accent: "#4ecdc4",
    tag: "Challenge",
  },
  {
    title: "Minecraft Build Battle: Moon Base Showdown",
    creator: "Craft Crew",
    category: "Minecraft",
    views: "2.1M views",
    length: "7:55",
    accent: "#00b894",
    tag: "Minecraft",
  },
  {
    title: "One Hour to Hide Before the Storm",
    creator: "HideVibe",
    category: "Hide & Seek",
    views: "5.3M views",
    length: "9:18",
    accent: "#6c5ce7",
    tag: "Hide & Seek",
  },
  {
    title: "Manhunt: Grand Finale Chase",
    creator: "Escapers",
    category: "Manhunts",
    views: "3.9M views",
    length: "13:26",
    accent: "#ff9f1c",
    tag: "Manhunt",
  },
  {
    title: "Creator Chaos Weekend Live Mix",
    creator: "Daily Drop",
    category: "Creator",
    views: "11.3M views",
    length: "18:00",
    accent: "#ff5d8f",
    tag: "Collection",
  },
];

const grid = document.getElementById("videoGrid");
const weeklyRefresh = document.getElementById("weeklyRefresh");
const featureTitle = document.getElementById("featureTitle");
const featureCreator = document.getElementById("featureCreator");
const featureViews = document.getElementById("featureViews");
const featureLength = document.getElementById("featureLength");
const featureTag = document.getElementById("featureTag");

function renderVideos(list) {
  grid.innerHTML = list
    .map(
      (video) => `
        <article class="video-card">
          <div class="video-thumb" style="--card-accent: ${video.accent};">
            <span class="video-badge">${video.category}</span>
            <span class="video-time">${video.length}</span>
          </div>
          <div class="video-body">
            <h4>${video.title}</h4>
            <div class="video-meta">
              <span>${video.creator}</span>
              <span>${video.views}</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function setFeatureVideo(index) {
  const video = videos[index % videos.length];
  featureTitle.textContent = video.title;
  featureCreator.textContent = video.creator;
  featureViews.textContent = video.views;
  featureLength.textContent = video.length;
  featureTag.textContent = video.tag;
}

function rotateWeeklyFeed() {
  const shuffled = [...videos].sort(() => Math.random() - 0.5);
  renderVideos(shuffled);
  setFeatureVideo(Math.floor(Math.random() * videos.length));
  document.getElementById("videoCount").textContent = shuffled.length;
}

renderVideos(videos);
setFeatureVideo(0);

weeklyRefresh.addEventListener("click", rotateWeeklyFeed);

const chips = document.querySelectorAll(".chip");
chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");

    const selected = chip.textContent.trim();
    const filtered =
      selected === "All"
        ? videos
        : videos.filter((video) => video.category === selected || video.tag === selected);

    renderVideos(filtered);
  });
});

