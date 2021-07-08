var app = document.getElementById('txt1');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(100)
  .typeString('Développeur WEB et Informaticien')
  .start();