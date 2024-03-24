window.addEventListener(`load`, () => {
  AOS.init();

  const myName = document.querySelector(".my-name");
  var typewriter = new Typewriter(myName, {
    delay: 75,
  });
  typewriter
    .pauseFor(1500)
    .typeString("I Am Ali Moradi")
    .pauseFor(1000)
    .deleteAll()
    .typeString("A Creative FrontEnd Developer ;)")
    .start();
});
