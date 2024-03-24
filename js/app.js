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

const reactDec = document.querySelector(".react-des");
var typewriter = new Typewriter(reactDec, {
  delay: 75,
});
typewriter
  .pauseFor(1500)
  .typeString(
    "As an experienced React developer with a diverse portfolio, I excel in crafting seamless user experiences and pushing the boundaries of what's possible. My expertise lies in building dynamic web applications, optimizing performance, and delivering innovative solutions tailored to clients' needs."
  )
  .start();

const reduxDec = document.querySelector(".redux-des");
var typewriter = new Typewriter(reduxDec, {
  delay: 75,
});
typewriter
  .pauseFor(1500)
  .typeString(
    "As a skilled React developer, I excel in implementing Redux to efficiently manage state across projects, ensuring scalability and maintainability. With a deep understanding of Redux's architecture, I orchestrate streamlined data flow and application logic, delivering elegant solutions that enhance user experiences."
  )
  .start();

const jsDec = document.querySelector(".js-des");
var typewriter = new Typewriter(jsDec, {
  delay: 75,
});
typewriter
  .pauseFor(1500)
  .typeString(
    "As a seasoned React developer with a robust portfolio, my mastery of JavaScript fuels my ability to innovate and deliver dynamic solutions. Leveraging JavaScript's versatility, I craft elegant and efficient code, elevating user experiences across diverse projects with finesse and creativity."
  )
  .start();

const tsDec = document.querySelector(".ts-des");
var typewriter = new Typewriter(tsDec, {
  delay: 75,
});
typewriter
  .pauseFor(1500)
  .typeString(
    "As an adept React developer boasting a plethora of projects, my proficiency in TypeScript enhances my capabilities. Through TypeScript's strict typing and advanced features, I ensure robustness and scalability in my codebase, enabling seamless collaboration and delivering top-notch solutions that elevate user experiences."
  )
  .start();

const tailwindcssDes = document.querySelector(".tailwindcss-des");
var typewriter = new Typewriter(tailwindcssDes, {
  delay: 75,
});
typewriter
  .pauseFor(1500)
  .typeString(
    "As a skilled React developer with a diverse portfolio, I wield Tailwind CSS to effortlessly style and design captivating user interfaces. Harnessing Tailwind's utility-first approach and extensive customization options, I craft visually stunning layouts with efficiency and precision, ensuring seamless integration and exceptional user experiences across my projects."
  )
  .start();
