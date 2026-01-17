(() => {
  const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");
  let stars = [];
  let w, h, dpr;

  function resize() {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    w = canvas.width = innerWidth * dpr;
    h = canvas.height = innerHeight * dpr;
    stars = Array.from({ length: 900 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random(),
      r: Math.random() * 1.5 + 0.3
    }));
  }

  function draw() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);

    for (const s of stars) {
      s.y += s.z * 0.3;
      if (s.y > h) s.y = 0;
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  draw();

  const audio = document.getElementById("space-audio");
  audio.volume = 1.00;
  window.addEventListener("pointerdown", () => audio.play(), { once: true });
})();