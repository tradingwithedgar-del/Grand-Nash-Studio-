/* Grand Nash — hero film. Plays the Higgsfield descent by default.
   On reduced-motion or if hero.mp4 is missing, shows the still poster
   (hero-poster.jpg). Never shows a logo as a background. */
(function () {
  var video = document.getElementById('hero-video');
  var poster = document.getElementById('hero-fallback');
  if (!video) return;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function showPoster() {
    if (poster) poster.style.display = 'block';
    video.style.display = 'none';
    try { video.pause(); } catch (e) {}
  }
  if (reduceMotion) { showPoster(); return; }

  video.addEventListener('error', showPoster, true);
  var s = video.querySelector('source');
  if (s) s.addEventListener('error', showPoster);
  var p = video.play && video.play();
  if (p && typeof p.catch === 'function') { p.catch(function () {}); }
  var t = setTimeout(function () { if (video.readyState === 0) showPoster(); }, 2500);
  video.addEventListener('loadeddata', function () { clearTimeout(t); });
})();
