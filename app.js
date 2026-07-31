(function () {
  "use strict";

  /* ------------------------------------------------------------
     0. Prépare et trie les événements
  ------------------------------------------------------------ */
  const events = [...TIMELINE_EVENTS]
    .map(e => ({ ...e, _time: new Date(e.date).getTime() }))
    .sort((a, b) => a._time - b._time);

  if (events.length === 0) {
    document.getElementById("logbook").innerHTML =
      "<p>Aucun événement. Ajoutez des entrées dans data.js.</p>";
    return;
  }

  const minTime = events[0]._time;
  const maxTime = events[events.length - 1]._time;
  const span = Math.max(maxTime - minTime, 1);

  // marge en % pour ne pas coller les points aux bords de la règle
  const PAD = 4;
  const posFor = (time) => {
    if (events.length === 1) return 50;
    return PAD + ((time - minTime) / span) * (100 - PAD * 2);
  };

  let activeIndex = 0;
  let carouselIndex = 0;
  let map, marker;

  /* ------------------------------------------------------------
     1. Références DOM
  ------------------------------------------------------------ */
  const entryIndex = document.getElementById("entryIndex");
  const entryDate = document.getElementById("entryDate");
  const entryTitle = document.getElementById("entryTitle");
  const entryDesc = document.getElementById("entryDesc");

  const carouselTrack = document.getElementById("carouselTrack");
  const carouselDots = document.getElementById("carouselDots");
  const carPrev = document.getElementById("carPrev");
  const carNext = document.getElementById("carNext");

  const mapCaption = document.getElementById("mapCaption");

  const timelineTicks = document.getElementById("timelineTicks");
  const timelineYears = document.getElementById("timelineYears");
  const timelineProgress = document.getElementById("timelineProgress");
  const timelineHandle = document.getElementById("timelineHandle");
  const timelineScale = document.querySelector(".timeline-scale");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const navCount = document.getElementById("navCount");

  const MONTHS_FR = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];

  /* ------------------------------------------------------------
     2. Construction de la règle chronologique (ticks + labels)
  ------------------------------------------------------------ */
  function buildTicks() {
    // petites graduations décoratives régulières
    const MINOR_COUNT = 48;
    for (let i = 0; i <= MINOR_COUNT; i++) {
      const t = document.createElement("div");
      t.className = "tick";
      t.style.left = (i / MINOR_COUNT) * 100 + "%";
      timelineTicks.appendChild(t);
    }

    events.forEach((ev, i) => {
      const pct = posFor(ev._time);

      const point = document.createElement("div");
      point.className = "tick-point";
      point.style.left = pct + "%";
      point.dataset.index = i;
      point.addEventListener("click", () => selectEvent(i));
      timelineTicks.appendChild(point);

      const label = document.createElement("div");
      label.className = "year-label";
      label.style.left = pct + "%";
      label.textContent = new Date(ev.date).getFullYear();
      label.dataset.index = i;
      timelineYears.appendChild(label);
    });
  }

  /* ------------------------------------------------------------
     3. Carousel
  ------------------------------------------------------------ */
  function renderCarousel(ev) {
    carouselTrack.innerHTML = "";
    carouselDots.innerHTML = "";
    carouselIndex = 0;

    ev.images.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = ev.title + " — photo " + (i + 1);
      img.loading = "lazy";
      carouselTrack.appendChild(img);

      const dot = document.createElement("div");
      dot.className = "dot" + (i === 0 ? " active" : "");
      dot.addEventListener("click", () => goToSlide(i));
      carouselDots.appendChild(dot);
    });

    updateCarouselTransform();
  }

  function updateCarouselTransform() {
    carouselTrack.style.transform = `translateX(-${carouselIndex * 100}%)`;
    [...carouselDots.children].forEach((d, i) =>
      d.classList.toggle("active", i === carouselIndex)
    );
  }

  function goToSlide(i) {
    const count = carouselTrack.children.length;
    carouselIndex = (i + count) % count;
    updateCarouselTransform();
  }

  carPrev.addEventListener("click", () => goToSlide(carouselIndex - 1));
  carNext.addEventListener("click", () => goToSlide(carouselIndex + 1));

  /* ------------------------------------------------------------
     4. Carte (Leaflet / OpenStreetMap)
  ------------------------------------------------------------ */
  function initMap() {
    map = L.map("map", {
      zoomControl: false,
      attributionControl: true,
      scrollWheelZoom: false,
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);
    L.control.zoom({ position: "bottomright" }).addTo(map);
  }

  const pinIcon = L.divIcon({
    className: "",
    html: `<div style="
        width:16px;height:16px;border-radius:50%;
        background:#A8462B;border:3px solid #C9A227;
        box-shadow:0 0 0 4px rgba(201,162,39,0.25);
      "></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });

  function renderMap(ev) {
    const { lat, lng, name } = ev.location;
    map.setView([lat, lng], 11, { animate: true });

    if (marker) marker.remove();
    marker = L.marker([lat, lng], { icon: pinIcon }).addTo(map);
    marker.bindPopup(`<strong>${escapeHtml(name)}</strong>`);

    mapCaption.textContent = `${name} — ${lat.toFixed(4)}, ${lng.toFixed(4)}`;

    // Leaflet a besoin d'un resize si le conteneur était caché au chargement
    setTimeout(() => map.invalidateSize(), 200);
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* ------------------------------------------------------------
     5. Sélection d'un événement (met à jour tout le panneau)
  ------------------------------------------------------------ */
  function selectEvent(i) {
    activeIndex = (i + events.length) % events.length;
    const ev = events[activeIndex];
    const pct = posFor(ev._time);

    entryIndex.textContent = `ENTRÉE N° ${String(activeIndex + 1).padStart(2, "0")}`;
    const d = new Date(ev.date);
    entryDate.textContent = `${d.getDate()} ${MONTHS_FR[d.getMonth()]} ${d.getFullYear()}`;
    entryTitle.textContent = ev.title;
    entryDesc.textContent = ev.description || "";

    renderCarousel(ev);
    renderMap(ev);

    timelineProgress.style.width = pct + "%";
    timelineHandle.style.left = pct + "%";

    [...timelineTicks.querySelectorAll(".tick-point")].forEach((p, idx) =>
      p.classList.toggle("active", idx === activeIndex)
    );
    [...timelineYears.querySelectorAll(".year-label")].forEach((l, idx) =>
      l.classList.toggle("active", idx === activeIndex)
    );

    navCount.textContent = `${activeIndex + 1} / ${events.length}`;
  }

  /* ------------------------------------------------------------
     6. Navigation (boutons, clavier, drag sur la règle)
  ------------------------------------------------------------ */
  prevBtn.addEventListener("click", () => selectEvent(activeIndex - 1));
  nextBtn.addEventListener("click", () => selectEvent(activeIndex + 1));

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") selectEvent(activeIndex - 1);
    if (e.key === "ArrowRight") selectEvent(activeIndex + 1);
  });

  function nearestEventFromClientX(clientX) {
    const rect = timelineScale.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    let best = 0, bestDist = Infinity;
    events.forEach((ev, i) => {
      const d = Math.abs(posFor(ev._time) - pct);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    return best;
  }

  timelineScale.addEventListener("click", (e) => {
    // évite de re-trigger si on vient de cliquer un tick-point (déjà géré)
    if (e.target.classList.contains("tick-point")) return;
    selectEvent(nearestEventFromClientX(e.clientX));
  });

  let dragging = false;
  timelineHandle.style.pointerEvents = "auto";
  timelineHandle.style.cursor = "grab";

  const startDrag = (clientX) => {
    dragging = true;
    timelineHandle.style.transition = "none";
  };
  const duringDrag = (clientX) => {
    if (!dragging) return;
    const rect = timelineScale.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    timelineHandle.style.left = pct + "%";
  };
  const endDrag = (clientX) => {
    if (!dragging) return;
    dragging = false;
    timelineHandle.style.transition = "";
    selectEvent(nearestEventFromClientX(clientX));
  };

  timelineHandle.addEventListener("mousedown", (e) => { e.stopPropagation(); startDrag(e.clientX); });
  window.addEventListener("mousemove", (e) => duringDrag(e.clientX));
  window.addEventListener("mouseup", (e) => endDrag(e.clientX));

  timelineHandle.addEventListener("touchstart", (e) => { e.stopPropagation(); startDrag(e.touches[0].clientX); }, { passive: true });
  window.addEventListener("touchmove", (e) => { if (dragging) duringDrag(e.touches[0].clientX); }, { passive: true });
  window.addEventListener("touchend", (e) => endDrag(e.changedTouches[0].clientX));

  /* ------------------------------------------------------------
     7. Démarrage
  ------------------------------------------------------------ */
  buildTicks();
  initMap();
  selectEvent(0);
})();
