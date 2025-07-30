export class Data {
  data = [
    {
      title: "Java",
      img: "./imgs/java.png",
      description:
        "With solid experience in Java, I develop robust, secure, and high-performance backend applications. My knowledge spans across object-oriented design, multithreading, and JVM internals, enabling me to build scalable enterprise-grade solutions that meet industry standards.",
    },
    {
      title: "TypeScript",
      img: "./imgs/ts.png",
      description:
        "With deep expertise in TypeScript, I ensure robust type safety and improved developer productivity across projects. By integrating TypeScript into large-scale applications, I enhance code quality, reduce bugs, and maintain clear contracts, ultimately fostering maintainable and efficient solutions that align with modern engineering standards.",
    },
    {
      title: "Bash",
      img: "./imgs/bash.png",
      description:
        "With expertise in Bash scripting, I automate complex workflows, streamline server administration, and optimize deployment processes. My skills enable me to write clean and maintainable shell scripts that improve productivity, ensure consistency across environments, and reduce human error in critical operations.",
    },
    {
      title: "Spring",
      img: "./imgs/spring.svg",
      description:
        "Specializing in the Spring ecosystem, I create clean, modular, and maintainable Java applications. From Spring Boot to Spring Data and Security, I build RESTful APIs and microservices with ease, leveraging dependency injection and convention-over-configuration to accelerate development and ensure scalability.",
    },
    {
      title: "NestJS",
      img: "./imgs/nest.svg",
      description:
        "Leveraging NestJS, I design modular and scalable server-side applications using TypeScript. My expertise allows me to create well-structured APIs, implement dependency injection, and apply clean architecture principles, enabling robust solutions that are maintainable, testable, and aligned with enterprise-level standards.",
    },
    {
      title: "Next.js",
      img: "./imgs/next.png",
      description:
        "As a skilled Next.js developer with an impressive track record, my expertise in React and JavaScript empowers me to create innovative and dynamic web applications. By harnessing the power of JavaScript, I develop elegant and efficient solutions that enhance user experiences across various projects, showcasing my creativity and technical prowess.",
    },
    {
      title: "React.js",
      img: "./imgs/react.png",
      description:
        "As an experienced React.js developer, I leverage component-based architecture and modern JavaScript to build highly interactive, scalable, and maintainable web applications. My proficiency enables me to craft responsive interfaces that deliver seamless user experiences and meet complex business requirements with precision and innovation.",
    },
    {
      title: "GraphQL",
      img: "./imgs/graph.svg",
      description:
        "With strong skills in GraphQL, I build flexible and performant APIs that enable clients to query precisely the data they need. By optimizing resolvers, designing efficient schemas, and applying best practices, I help teams accelerate development cycles and improve the developer experience across platforms.",
    },
    {
      title: "WebSocket",
      img: "./imgs/socket.svg",
      description:
        "As a WebSocket developer, I build real-time communication features such as live updates, notifications, and collaborative tools. My experience allows me to design efficient protocols and manage connection states, delivering seamless interactive experiences across web and mobile platforms.",
    },
  ];

  render() {
    const Slider = document.querySelector(".template");

    this.data.forEach((el) => {
      const section = document.createElement("section");
      section.classList.add("sec");
      section.id = el.title;

      const wrapper = document.createElement("div");
      wrapper.classList.add("container", "h-100");

      const div = document.createElement("div");
      div.classList.add(
        "h-100",
        "d-flex",
        "flex-column",
        "align-items-center",
        "justify-content-center",
        "text-white"
      );

      const h2 = document.createElement("h2");
      h2.classList.add("mt-2");
      h2.textContent = el.title;

      const p = document.createElement("p");
      p.classList.add(
        "paraph",
        "tailwindcss-des",
        "mt-3",
        "text-light-emphasis",
        "des"
      );
      p.textContent = el.description;

      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("tools-icon-wrapper", "p-4");

      const image = document.createElement("img");
      image.src = el.img;
      image.alt = "icon";

      imageWrapper.appendChild(image);

      div.append(imageWrapper, h2, p);

      wrapper.appendChild(div);

      section.appendChild(wrapper);

      Slider.insertAdjacentElement("beforeend", section);
    });
  }
}
