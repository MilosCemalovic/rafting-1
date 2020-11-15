// animate on scroll 

const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px" 
 };

//root: null, // ovo je viewport

// threshold: 0.25, // okida animaciju kada je 25% polja ucitano

// rootMargin: "0px 0px -200px 0px" je visina od vrha ekrana/viewport-a do mesta gde zelis da okine animacija - rootMargin vrednost mora biti u pikselima  

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {

    entries.forEach(entry=> {

      if (!entry.isIntersecting) {
        
        return;

      } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      }

    });

  }, appearOptions);

sliders.forEach(slider=> {
  appearOnScroll.observe(slider);
});

