// @flow

import type { ResumeData } from "./types"

const data: ResumeData = {
  name: "Andy Edwards",
  address: {
    street: "401 Little Texas Ln, Apt 2012",
    city: "Austin",
    state: "TX",
    zip: "78745",
  },
  email: "jedwards@fastmail.com",
  phone: "817-266-1419",
  website: "https://github.com/jedwards1211",
  sections: [
    {
      key: "experience",
      title: "Experience",
      titleDelimiter: ", ",
    },
    {
      key: "openSource",
      title: "Open Source Work",
    },
    {
      key: "otherProjects",
      title: "Other Projects",
    },
    {
      key: "education",
      title: "Education",
      type: "education",
    },
    {
      key: "tools",
      title: "Tools",
      type: "tools",
    },
    {
      key: "humanLanguages",
      title: "Human Languages",
    },
    {
      key: "volunteering",
      title: "Volunteering",
    },
    {
      key: "honors",
      title: "Honors",
    },
    {
      key: "activities",
      title: "Activities",
    },
  ],
  experience: [
    {
      title: "Full-Stack Web Developer",
      location: "jcore.io",
      timePeriods: [
        {
          start: new Date("2015-02-01"),
          end: "Present",
        },
      ],
      description: [
        "Developed frontend and backend of clarity.jcore.io, a real-time IoT platform",
        "Developed frontend and backend of Clarity Gateway, a configuration webapp for our edge devices",
        "Implemented solutions for complex problems using many advanced Postgres features and PL/pgSQL",
        "Designed, implemented and tested fine-grained end-user access control in our API and Postgres schema",
        "Advocated for using Apollo GraphQL and implemented our GraphQL backend",
        "Implemented our custom MQTT Broker with persistence in Postgres and thorough spec compliance",
        "Designed our integration and Selenium end-to-end test infrastructure",
        "Advocated for using AWS CloudFormation and designed our blue/green CloudFormation deployments",
        "Designed skeleton projects to expedite creating new NPM packages with thorough code quality checks and automated publishing in CI",
        "Developed system to visualize streaming real-time and historical data in the browser in interactive charts with continuous zoom from seconds to decades",
        "Implemented geographic visualizations of real-time data",
        "Developed webapp for <i>The Toy Factory</i> (San Antonio) to automatically schedule orders and monitor production using Meteor, MongoDB and React",
        "Fixed bugs and implemented features in a Python/Django webapp for <i>Triple C Trucking</i> on a contract basis",
      ],
    },
    {
      title: "Sabbatical",
      location: "Austria",
      timePeriods: [
        {
          start: new Date("2014-10-01"),
          end: new Date("2014-12-15"),
        },
      ],
      description: [
        "Volunteered on an organic sheep farm to practice German, speaking it 95% of the time I was there",
      ],
    },
    {
      title: "Software Engineer",
      location: "Charles Schwab Corp",
      timePeriods: [
        {
          start: new Date("2013-02-01"),
          end: new Date("2014-09-01"),
        },
      ],
      description: [
        "Implemented multi-leg options trading UI for <i>StreetSmart.com</i> Java Applet",
        "Solved difficult Swing (UI framework) issues",
        "Solved performance problems in option grouping algorithms",
        "Discovered and fixed errors in pre-existing gain/loss calculations",
        "Created tools for debugging UI and communication with server",
        "Implemented automated UI tests",
      ],
    },
    {
      title: "Software Engineer",
      location: "Pason Systems USA Corp",
      timePeriods: [
        {
          start: new Date("2009-06-01"),
          end: new Date("2013-02-01"),
        },
      ],
      description: [
        "Developed the Advanced 3D well/seismic data visualization plugin for <i>Enhanced Live Rig View</i>, using Swing and Java 3D",
        "Conceived and developed <i>GeoCalc SPE</i>, a novel Geosteering application, with elegant custom plotting in Swing",
        "Developed mesh interpolation, extrapolation, splitting, and contour generation algorithms for processing seismic surfaces",
      ],
    },
  ],
  openSource: [
    {
      title: "astx",
      description:
        "An advanced structural search/replace and refactoring tool for JavaScript/TypeScript",
    },
    {
      title: "asyncify",
      description:
        "An automated JavaScript codemod that converts promise chains to async/await.  Sequelize merged my PR that converted their entire code base to async/await using this codemod",
    },
    {
      title: "typed-validators",
      description:
        "A system for generating runtime schema validators from Flow or TypeScript types, adapted from flow-runtime to be more sustainable",
    },
    {
      title: "react-view-slider",
      description:
        "A React component for horizontal slide transitions between views",
    },
    {
      title: "material-ui-popup-state",
      description: "boilerplate for common React MUI Menu and popup use cases",
    },
    {
      title: "MUI Snippets",
      description: "VSCode snippets for React MUI components",
    },
  ],
  education: [
    {
      school: "The University of Texas at Austin",
      degrees: ["BS Computer Science", "BS Architectural Studies"],
      gpa: 3.77,
      timePeriods: [
        {
          start: { season: "Fall", year: 2005 },
          end: { season: "Spring", year: 2011 },
        },
      ],
    },
  ],
  otherProjects: [
    {
      title: "Breakout",
      location:
        "a 3D cave survey visualizer with a very innovative UI, using JOGL",
      description: [
        "Wrote shaders to render arbitrary color scales and show distance from hovered point",
        "Used R-trees to optimize rendering performance and mouse interaction",
        "Used R-trees to adapt zoom and pan sensitivity to camera distance from cave passages",
        "Made labeling algorithm prioritize important stations to reduce clutter on screen",
      ],
    },
    // {
    //   title: "Dewalls",
    //   description:
    //     "open-source Walls cave survey data parsers in Qt C++ and Java, used to implement Walls import in <i>Breakout</i> and <i>Cavewhere</i>",
    // },
    {
      title: "ROAR4Rhino",
      description:
        "a sound raytracer plugin (in C#) for McNeel Rhinoceros to simulate the propagation of sound in Rhino 3D models for an architecture design project",
    },
    // {
    //   title: "nSIGHT",
    //   description:
    //     "a Java/Swing library that draws arbitrary-dimensional objects",
    // },
    // {
    //   description:
    //     "Implemented user level threads and reliable filesystem for Operating Systems class in C++",
    // },
    // {
    //   description:
    //     "Taught a friend with no programming experience to write and debug RhinoScripts that automated 3D modeling for his architectural design project",
    // },
  ],
  tools: [
    "Apollo",
    "AWS",
    "AWS SDK",
    "AWS CloudFormation",
    "AWS ECS",
    "AWS Lambda",
    "AWS S3",
    "Babel",
    "Bash",
    "C/C++",
    "Chai",
    "CircleCI",
    "Concurrency",
    "CSS3",
    "Docker",
    "Docker Compose",
    "Django",
    "DynamoDB",
    "ESLint",
    "ESNext",
    "Express",
    "Flowtype",
    "GraphQL",
    "Git(Hub)",
    "HTML5",
    "Immutable.js",
    "Java",
    "JavaScript",
    "JOGL",
    "JSCodeshift",
    "MUI",
    "Meteor",
    "Mocha",
    "MongoDB",
    "MQTT",
    "MySQL",
    "NodeJS",
    "NPM",
    "OpenGL",
    "PL/pgSQL",
    "PostgreSQL",
    "Python",
    "Qt",
    "React",
    "React Final Form",
    "React Router",
    "Redis",
    "Redux",
    "Redux Form",
    "Selenium",
    "Sequelize",
    "SparkPlug",
    "Twitter Bootstrap",
    "TypeScript",
    "Webdriver.io",
    "Webpack",
    "Websockets",
  ],
  volunteering: [
    {
      title: "Webmaster",
      location: "Texas Cave Management Association",
      timePeriods: [
        {
          start: { year: 2018 },
          end: "Present",
        },
      ],
      description: [
        "Managing and adding to WordPress site created by previous webmaster",
      ],
    },
    {
      title: "Treasurer and Webmaster",
      location: "Detroit Urban Grotto",
      timePeriods: [
        {
          start: { year: 2013 },
          end: "Present",
        },
      ],
      description: [
        "Implemented and maintaining Google Sheet for detailed accounting",
        "Wrote NodeJS scripts to convert our proprietary cave data format to several popular formats",
      ],
    },
    {
      title: "Citizen Schools",
      timePeriods: [
        { season: "Spring", year: 2012 },
        { season: "Fall", year: 2012 },
      ],
      description: [
        "Taught a video game design course to middle school students",
      ],
    },
  ],
  humanLanguages: [
    {
      language: "German",
      description: "I can speak German half-decently, though not fluently",
    },
  ],
  honors: [
    {
      title: "President's Volunteer Service Award",
      description: "for volunteering at Citizen Schools two semesters in a row",
      timePeriods: [{ season: "Spring", year: 2013 }],
    },
    {
      title: "Innovation Day winner, Pason Systems USA Corp",
      description:
        "for prototype <i>GeoCalc SPE / eLRV Advanced 3D</i> integration",
      timePeriods: [{ season: "Fall", year: 2012 }],
    },
    {
      title: "UT School of Architecture Design Excellence Award",
      timePeriods: [{ season: "Spring", year: 2008 }],
    },
    {
      title: "National Merit Finalist",
      timePeriods: [{ year: 2005 }],
    },
  ],
  activities: [
    {
      title: "Underground Texas Grotto/Detroit Urban Grotto",
      description: "Cave exploration and surveying",
      timePeriods: [
        {
          start: { season: "Fall", year: 2010 },
          end: "Present",
        },
      ],
    },
  ],
}

module.exports = data
