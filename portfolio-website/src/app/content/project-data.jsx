import projectImg1 from "../images/project-images/project-img1.svg";
import projectImg2 from "../images/project-images/project-img2.svg";
import projectImg3 from "../images/project-images/project-img3.png";
import projectImg4 from "../images/project-images/project-img4.svg";
import projectImg5 from "../images/project-images/project-img5.png";
import projectImg6 from "../images/project-images/project-img6.png";
import projectImg7 from "../images/project-images/project-img7.png";
import projectImg8 from "../images/project-images/project-img8.png";
import projectImg9 from "../images/project-images/project-img9.png";
import projectImg10 from "../images/project-images/project-img10.svg";
import projectImg11 from "../images/project-images/project-img11.png";
import projectImg12 from "../images/project-images/project-img12.png";

export const projectData = [
  {
    id: 1,
    title: "Guess my number",
    description: (
      <>
        <p className="text-justify">
          Created a simple number guessing game to improve my JavaScript skills.
          Users can input a number and try to guess the randomly generated
          number, receiving immediate feedback on whether their guess is
          correct.
        </p>
        <p className="text-[0.78rem] lg:text-sm mt-4">
          <span className="font-semibold">Tech Stack - </span>
          HTML5, CSS3, JavaScript
        </p>
      </>
    ),
    image: projectImg7,
    gitUrl: "/https://github.com/RandimaD25/Guess-my-number",
    // previewUrl: "/",
  },
  // {
  //   id: 2,
  //   title: "Quote Generator",
  //   description:
  //     " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dolore expedita distinctio explicabo nostrum impedit, tenetur minima facilis similique praesentium! ",
  //   image: projectImg8,
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 3,
    title: "Weather Application",
    description: (
      <div>
        <p className="text-justify">
          Built a weather application as a learning project, allowing users to
          search and view the current weather conditions for any city worldwide
          by integrating with a weather API.
        </p>
        <div>
          <p className="text-[0.78rem] lg:text-sm mt-4">
            <span className="font-semibold">Tech Stack - </span>
            HTML5, CSS3, JavaScript, Weather API (Fess API)
          </p>
        </div>
      </div>
    ),
    image: projectImg9,
    gitUrl: "https://github.com/RandimaD25/weather-app/tree/development",
    // previewUrl: "/",
  },
  {
    id: 4,
    title: "Bankist Application",
    description: (
      <div>
        <p className="text-justify">
          Developed the Bankist application to deepen my JavaScript skills by
          implementing core banking features such as managing users, handling
          multiple transactions between accounts, processing loan requests,
          viewing transaction histories, and securely closing accounts.
        </p>

        <div>
          <p className="text-[0.78rem] lg:text-sm mt-4">
            <span className="font-semibold">Tech Stack - </span>
            HTML5, CSS3, JavaScript
          </p>
        </div>
      </div>
    ),
    image: projectImg6,
    gitUrl: "https://github.com/RandimaD25/bankist-app",
    // previewUrl: "/",
  },
  // {
  //   id: 4,
  //   title: "Cargo",
  //   description: (
  //     <div>
  //       <p className="text-justify">
  //         Built responsive and interactive UI elements for the logistics app's
  //         home page, emphasizing component reusability and a seamless user
  //         experience.
  //       </p>

  //       <div>
  //         <p className="text-[0.78rem] lg:text-sm mt-4">
  //           <span className="font-semibold">Tech Stack - </span>
  //           React.js, CSS3, React Icons
  //         </p>
  //       </div>
  //     </div>
  //   ),
  //   image: projectImg12,
  //   gitUrl: "https://github.com/RandimaD25/Cargo-Home-Page",
  //   // previewUrl: "/",
  // },
  {
    id: 5,
    title: "Aura - Community Health Net",
    description: (
      <div>
        <p className="text-justify">
          Led a 2nd-year group project at UCSC to develop a conceptual
          community-led web platform focused on healthcare. The project aimed to
          foster collaboration and provide valuable resources within the health
          sector.
        </p>
        <div>
          <p className="text-[0.78rem] lg:text-sm mt-4">
            <span className="font-semibold">Tech Stack - </span>
            HTML5, CSS3, JavaScript, PHP, MySQL, Figma
          </p>
        </div>
      </div>
    ),
    image: projectImg1,
    gitUrl:
      "https://github.com/Aura-Community-Health-Net/Aura-Community-Healthy-Net",
    // previewUrl: "/",
  },
  {
    id: 6,
    title: "Sailing Pen",
    description: (
      <div>
        <p className="text-justify">
          The 3rd-year group project at the UCSC focused on developing a
          Learning Management System (LMS) and institute management platform for
          a private learning institute. The system emphasizes secure content
          distribution and effective management of educational resources.
        </p>

        <div>
          <p className="text-[0.78rem] lg:text-sm mt-4">
            <span className="font-semibold">Tech Stack - </span>
            Vue.js, Nest.js, TypeScript, TailwindCSS, PostgreSQL, Prisma ORM,
            Axios, Figma, AWS S3
          </p>
        </div>
      </div>
    ),
    image: projectImg2,
    gitUrl: "https://github.com/orgs/SailingPen-IMS-and-LMS/repositories",
    // previewUrl: "/",
  },
  {
    id: 7,
    title: "Todo Application",
    description: (
      <div>
        <p className="text-justify">
          Individually developed a To-Do Application following the 3-tier
          architecture. The app includes essential task management features such
          as creating, viewing, updating, and deleting to-do items.
          Additionally, it incorporates secure user authentication to ensure
          that each user’s tasks are protected and accessible only to them.
        </p>
        <div>
          <p className="text-[0.78rem] lg:text-sm mt-4">
            <span className="font-semibold">Tech Stack - </span>
            React.js, TypeScript, Bootstrap, Node.js, Express.js, MySQL, Prisma
            ORM, JWT Authentication, Axios, JEST, Sonar Lint
          </p>
        </div>
      </div>
    ),
    image: projectImg3,
    gitUrl: "https://github.com/RandimaD25/ToDo-App",
    // previewUrl: "/",
  },
  {
    id: 8,
    title: "Sense and Science",
    description: (
      <div>
        <p className="text-justify">
          Contributed to the front-end development of Sense and Science, a blog
          post application created for the University of Colombo’s Computer
          Society (CompSoc). This platform enables club members to easily
          create, publish, and share blog posts, fostering community engagement
          and knowledge sharing
        </p>

        <div>
          <p className="text-[0.78rem] lg:text-sm mt-4">
            <span className="font-semibold">Tech Stack - </span>
            Next.js, Tailwind CSS, TypeScript, Figma, Axios
          </p>
        </div>
      </div>
    ),
    image: projectImg5,
    gitUrl: "https://github.com/orgs/Sense-and-Science/repositories",
    // previewUrl: "/",
  },
  {
    id: 9,
    title: "GFlock",
    description: (
      <div>
        <p className="text-justify">
          GFlock is a shopping cart application that supports full CRUD
          operations for products, orders and categories. The backend was
          developed using Node.js, applying Clean Architecture principles to
          ensure a scalable, and maintainable codebase, following thorough
          research and best practices.
        </p>

        <div>
          <p className="text-[0.78rem] lg:text-sm mt-4">
            <span className="font-semibold">Tech Stack - </span>
            React.js, TypeScript, Node.js, Express.js, Tailwind CSS, Auth0,
            MySQL, TypeORM, Jest, Swagger API, MySQL, TypeORM, AWS S3, AWS
            CloudWatch, Docker, Axios
          </p>
        </div>
      </div>
    ),
    image: projectImg4,
    gitUrl: "https://github.com/orgs/GFlock-Online-Shopping-Cart/repositories",
    // previewUrl: "/",
  },
  {
    id: 10,
    title: "Prescripto",
    description: (
      <div>
        <p className="text-justify">
          Prescripto is a Healthcare Management System designed to streamline
          interactions between patients, doctors, and administrators. Built with
          the MERN stack, it offers a seamless user experience with modern
          features and reliable performance.
        </p>
        <div>
          <p className="text-[0.78rem] lg:text-sm mt-4">
            <span className="font-semibold">Tech Stack - </span>
            React.js, TailwindCSS, Node.js, Express.js, MongoDB, Cloudinary,
            Multer, Stripe, JWT, AWS EC2, Axios
          </p>
        </div>
      </div>
    ),
    image: projectImg10,
    gitUrl: "https://github.com/RandimaD25/prescripto-backend",
    // previewUrl: "/",
  },
  {
    id: 11,
    title: "Clarix",
    description: (
      <div>
        <p className="text-justify">
          Clarix is a modern AI chatbot application inspired by DeepSeek,
          designed to provide natural and intelligent chat interactions. It
          features a dynamic and responsive user interface, seamless user
          authentication, and stores chat history securely. The app is fully
          deployed on Vercel, offering fast and reliable access.
        </p>
        <div>
          <p className="text-[0.78rem] lg:text-sm mt-4">
            <span className="font-semibold ">Tech Stack - </span>
            Next.js, TailwindCSS, MongoDB, DeepSeek-R1 via OpenRouter API,
            Clerk, Vercel, Axios, React Markdown, PrismJS
          </p>
        </div>
      </div>
    ),
    image: projectImg11,
    gitUrl: "https://github.com/RandimaD25/DeepSeek-Clone",
    previewUrl: "https://deep-seek-clone-seven.vercel.app/",
  },
];
