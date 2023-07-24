import SocialMediaImg from "../assets/social-media.png";
import EcommerceCArt from "../assets/Ecommerce Cart.png";
import Xflix from "../assets/netflix.png";

const ProjectData = [
  {
    id: 1,
    img: SocialMediaImg,
    heading: "SocioMania",
    subheading: "SocioMania is a social media application",
    para: "SocioMania is a social media fullstack application gives platform to people to send a post ,like image made.It is made using MERN Stack\n",
    projectdetails: [
      "Developed a full-stack social media application using MERN (MongoDB,Express.js,React.js,Node.js) stack.",
      "Implemented user registration and authentication via JWT(JSON Web Token).",
      "Design an intuitive user interface using React.js, HTML5, CSS3, and Javascript.",
      "Utilized Redux for centralized state management for the application and MongoDB (No-SQL Database) with Mongoose for efficient data storage and retrieval.",
      "Utilized Bootstrap extensively for responsive design",
      "Implemented real-time features like uploading posts, Like a post, getting friends' suggestions, view followers/following's posts in SocioMania.",
      "Deployed the SocioMania at render.",
    ],
  },
  {
    id: 2,
    img: EcommerceCArt,
    heading: "Posterz",
    subheading:
      "Posterz is an E-commerce application offering a variety of posters for customers to choose from.",
    para: "Posterz is an E-commerce application offering a variety of posters for customers to choose from.It is integrated with Starpi as CMS and Stripe as Payment Gateway System",
    projectdetails: [
      "Developed a full-stack e-commerce application using MERN stack, Strapi, and Stripe.",
      "Design an intuitive and responsive user interface using React. js,HTML5, CSS3 and Javascript.",
      "Utilized Redux for centralized state management for the front end and strapi for a content management system for the backend.Also configured checkout with stripe as payment gateway.",
      "Improved UI by adding responsive design elements for uniform experience across different devices",
      "Implemented features like products added by category, filter products by category, price and newest arrival, shopping cart, and payment functionality via Stripe(Payment Gateway System).",
    ],
  },
  {
    id: 3,
    img: Xflix,
    heading: "XFLIX",
    subheading:
      "XFlix is a video sharing platform which hosts videos for the world to watch. It also features uploading new videos by using external video links (eg: Youtube) and playing these videos.",
    para: "XFlix is a video sharing platform which hosts videos for the world to watch. It also features uploading new videos by using external video links (eg: Youtube) and playing these videos.",
    projectdetails: [
      "Built XFlix backend using Node.js, Express.js and MongoDB from scratch",
      "Used MongoDB NoSQL database for data storage",
      "Implemented APIs according to the API contract set.",
      "Built XFlix frontend using React.js from scratch",
      "Used Postman collection to understand API requirements",
      "Mocked backend server using Postman Mock Server for API response",
    ],
  },
];

export default ProjectData;
