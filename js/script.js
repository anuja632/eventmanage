


  function setActiveStep(step) {
    const timeline = document.getElementById("timeline");
    const progress = document.getElementById("timelineProgress");
    const steps = timeline.querySelectorAll('.step-box');

    // Remove all active states
    steps.forEach(box => box.classList.remove('active'));
    steps[step - 1].classList.add('active');

    // Get the position of the active box
    const activeBox = steps[step - 1];
    const timelineTop = timeline.getBoundingClientRect().top;
    const boxTop = activeBox.getBoundingClientRect().top;
    const boxHeight = activeBox.offsetHeight;

    // Calculate the top position to center the progress
    const centerY = boxTop - timelineTop + boxHeight / 2;

    // Set progress bar height and top position (fixed height of 70px centered)
    progress.style.top = `${centerY - 35}px`; // center it
    progress.style.height = `100px`;
  }

  window.onload = () => setActiveStep(1);

 const track = document.getElementById('carouselTrack');
  const leftBtn = document.querySelector('.carousel-arrow.left');
  const rightBtn = document.querySelector('.carousel-arrow.right');
  const itemWidth = document.querySelector('.logo-container').offsetWidth + 20;
  let scrollPosition = 0;

  function scrollRight() {
    scrollPosition += itemWidth;
    if (scrollPosition >= track.scrollWidth / 2) scrollPosition = 0;
    track.style.transform = `translateX(-${scrollPosition}px)`;
  }

  function scrollLeft() {
    scrollPosition -= itemWidth;
    if (scrollPosition < 0) scrollPosition = track.scrollWidth / 2 - itemWidth;
    track.style.transform = `translateX(-${scrollPosition}px)`;
  }

  rightBtn.addEventListener('click', scrollRight);
  leftBtn.addEventListener('click', scrollLeft);

  setInterval(scrollRight, 3000); // Auto-scroll
   function setActiveStep(step) {
    const timeline = document.getElementById("timeline");
    const progress = document.getElementById("timelineProgress");
    const steps = timeline.querySelectorAll('.step-box');

    // Remove all active states
    steps.forEach(box => box.classList.remove('active'));
    steps[step - 1].classList.add('active');

    // Get the position of the active box
    const activeBox = steps[step - 1];
    const timelineTop = timeline.getBoundingClientRect().top;
    const boxTop = activeBox.getBoundingClientRect().top;
    const boxHeight = activeBox.offsetHeight;

    // Calculate the top position to center the progress
    const centerY = boxTop - timelineTop + boxHeight / 2;

    // Set progress bar height and top position (fixed height of 70px centered)
    progress.style.top = `${centerY - 35}px`; // center it
    progress.style.height = `100px`;
  }

  window.onload = () => setActiveStep(1);


  function showTab(tabId, clickedBtn) {
      document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
      document.querySelectorAll(".tab-content-box").forEach(tab => tab.classList.remove("active"));

      clickedBtn.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    }