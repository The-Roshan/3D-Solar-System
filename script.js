function animatePlanets() {
  const mercuryOrbit = document.querySelector('.mercury-orbit');
  const venusOrbit = document.querySelector('.venus-orbit');
  const earthOrbit = document.querySelector('.earth-orbit');
  const marsOrbit = document.querySelector('.mars-orbit');
  const jupiterOrbit = document.querySelector('.jupiter-orbit');
  const saturnOrbit = document.querySelector('.saturn-orbit');
  const uranusOrbit = document.querySelector('.uranus-orbit');
  const neptuneOrbit = document.querySelector('.neptune-orbit');

  let mercuryAngle = 0;
  let venusAngle = 45; // different starting angles
  let earthAngle = 135;
  let marsAngle = 90;
  let jupiterAngle = 225;
  let saturnAngle = 180;
  let uranusAngle = 315;
  let neptuneAngle = 270;


  function animate() {
      mercuryAngle += 0.45;
      venusAngle += 0.23;
      earthAngle += 0.32;
      marsAngle += 0.115;
      jupiterAngle += 0.71;
      saturnAngle += 0.079;
      uranusAngle += 0.088;
      neptuneAngle += 0.097;

      mercuryOrbit.style.transform = `translate(-50%, -50%) rotate(${mercuryAngle}deg)`;
      venusOrbit.style.transform = `translate(-50%, -50%) rotate(${venusAngle}deg)`;
      earthOrbit.style.transform = `translate(-50%, -50%) rotate(${earthAngle}deg)`;
      marsOrbit.style.transform = `translate(-50%, -50%) rotate(${marsAngle}deg)`;
      jupiterOrbit.style.transform = `translate(-50%, -50%) rotate(${jupiterAngle}deg)`;
      saturnOrbit.style.transform = `translate(-50%, -50%) rotate(${saturnAngle}deg)`;
      uranusOrbit.style.transform = `translate(-50%, -50%) rotate(${uranusAngle}deg)`;
      neptuneOrbit.style.transform = `translate(-50%, -50%) rotate(${neptuneAngle}deg)`;

      requestAnimationFrame(animate);
  }

  animate();
}

animatePlanets();
