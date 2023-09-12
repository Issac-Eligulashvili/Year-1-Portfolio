const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)

    if (entry.isIntersecting && entry.target.classList.contains('overlay__bar')) {
      entry.target.classList.add('show')
    }
    if (entry.isIntersecting && entry.target.classList.contains('overlay__dot')) {
      entry.target.classList.add('dot__show')
    } else {
      entry.target.classList.remove('dot__show')
    }

    if (entry.isIntersecting && entry.target.classList.contains('website__card')) {
      entry.target.classList.add('website__card--show')
    } else {
      entry.target.classList.remove('website__card--show')
    }
  })
});

const hiddenElements = document.querySelectorAll('.overlay__bar');
hiddenElements.forEach((el) => observer.observe(el));

const dot = document.querySelectorAll('.overlay__dot');
dot.forEach((el) => observer.observe(el));

const websiteCard = document.querySelectorAll('.website__card');
websiteCard.forEach((el) => observer.observe(el));