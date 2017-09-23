// @flow

import type {ResumeData} from "./types"

const data: ResumeData = {
  name: 'Andy Edwards',
  address: {
    street: '2601 Penny Ln, Apt 111',
    city: 'Austin',
    state: 'TX',
    zip: '78757',
  },
  email: 'jedwards@fastmail.com',
  phone: '817-266-1419',
  website: 'http://helloandy.xyz',
  sections: [
    {
      key: 'experience',
      title: 'Experience',
      titleDelimiter: ', ',
    },
    {
      key: 'education',
      title: 'Education',
      type: 'education',
    },
    {
      key: 'otherProjects',
      title: 'Other Projects',
    },
    {
      key: 'tools',
      title: 'Tools',
      type: 'tools',
    },
    {
      key: 'humanLanguages',
      title: 'Human Languages',
    },
    {
      key: 'honors',
      title: 'Honors',
    },
    {
      key: 'activities',
      title: 'Activities',
    },
  ],
  experience: [
    {
      title: 'Full-Stack Web Developer',
      location: 'jcore.io',
      timePeriods: [
        {
          start: new Date('2015-02-01'),
          end: 'Present',
        },
      ],
      description: [
        'Developed jcore.io webapp, a real-time IoT platform',
        'Developed system to visualize streaming real-time and historical data in the browser in interactive charts with continuous zoom from seconds to decades',
        'Implemented geographic visualizations of real-time data',
        'Developed webapp for <i>Pason Power</i> to visualize real-time and historical data from their smart energy storage solution, and manage installations',
        'Developed webapp for <i>The Toy Factory</i> (San Antonio) to automatically schedule orders and monitor production',
        'Fixed bugs and implemented features in a Python/Django webapp for <i>Triple C Trucking</i> on a contract basis',
        'Strove to automate all routine tasks in our work process',
        'Set up Docker builds, continuous integration, and deployment',
        'Created popular open-source app skeletons for Meteor/Webpack/React',
        'Created Babel and Webpack plugins for importing Meteor packages',
      ],
    },
    {
      title: 'Sabbatical',
      location: 'Austria',
      timePeriods: [
        {
          start: new Date('2014-10-01'),
          end: new Date('2014-12-15'),
        }
      ],
      description: [
        'Volunteered on an organic sheep farm to practice German, speaking it 95% of the time I was there',
      ]
    },
    {
      title: 'Software Engineer',
      location: 'Charles Schwab Corp',
      timePeriods: [
        {
          start: new Date('2013-02-01'),
          end: new Date('2014-09-01'),
        }
      ],
      description: [
        'Implemented multi-leg options trading UI for <i>StreetSmart.com</i> Java Applet',
        'Solved difficult Swing (UI framework) issues',
        'Solved performance problems in option grouping algorithms',
        'Discovered and fixed errors in pre-existing gain/loss calculations',
        'Created tools for debugging UI and communication with server',
        'Implemented automated UI tests'
      ]
    },
    {
      title: 'Software Engineer',
      location: 'Pason Systems USA Corp',
      timePeriods: [
        {
          start: new Date('2009-06-01'),
          end: new Date('2013-02-01'),
        }
      ],
      description: [
        'Developed the Advanced 3D well/seismic data visualization plugin for <i>Enhanced Live Rig View</i>, using Swing and Java 3D',
        'Conceived and developed <i>GeoCalc SPE</i>, a novel Geosteering application, with elegant custom plotting in Swing',
        'Developed mesh interpolation, extrapolation, splitting, and contour generation algorithms for processing seismic surfaces'
      ]
    }
  ],
  education: [
    {
      school: 'The University of Texas at Austin',
      degrees: [
        'BS Computer Science',
        'BS Architectural Studies',
      ],
      gpa: 3.77,
      timePeriods: [
        {
          start: {season: 'Fall', year: 2005},
          end: {season: 'Spring', year: 2011},
        }
      ]
    }
  ],
  otherProjects: [
    {
      title: 'Breakout',
      location: 'a 3D cave survey visualizer with a very innovative UI, using JOGL',
      description: [
        'Wrote shaders to render arbitrary color scales and show distance from hovered point',
        'Used R-trees to optimize rendering performance and mouse interaction',
        'Used R-trees to adapt zoom and pan sensitivity to camera distance from cave passages',
        'Made labeling algorithm prioritize important stations to reduce clutter on screen',
      ]
    },
    {
      title: 'Dewalls',
      description: 'open-source Walls cave survey data parsers in Qt C++ and Java, used to implement Walls import in <i>Breakout</i> and <i>Cavewhere</i>',
    },
    {
      title: 'ROAR4Rhino',
      description: 'a sound raytracer plugin (in C#) for McNeel Rhinoceros to simulate the propagation of sound in Rhino 3D models for an architecture design project'
    },
    {
      title: 'nSIGHT',
      description: 'a Java/Swing library that draws arbitrary-dimensional objects',
    },
    {
      description: 'Implemented user level threads and reliable filesystem for Operating Systems class in C++'
    },
    {
      description: 'Taught a friend with no programming experience to write and debug RhinoScripts that automated 3D modeling for his architectural design project'
    }
  ],
  tools: [
    'AWS',
    'Babel',
    'Bash',
    'C/C++',
    'Chai',
    'Concurrency',
    'CSS3',
    'Docker',
    'Docker Compose',
    'Django',
    'ES2015',
    'ES7',
    'ESLint',
    'Express',
    'Flowtype',
    'Git(Hub)',
    'HTML5',
    'Immutable.js',
    'Java',
    'JavaScript',
    'JOGL',
    'Meteor',
    'Mocha',
    'MongoDB',
    'NodeJS',
    'NPM',
    'OpenGL',
    'Python',
    'Qt',
    'React',
    'Redux',
    'React Router',
    'RethinkDB',
    'SQL',
    'Travis CI',
    'Twitter Bootstrap',
    'Webdriver.io',
    'Webpack',
  ],
  volunteering: [
    {
      title: 'Treasurer and Webmaster',
      location: 'Detroit Urban Grotto',
      timePeriods: [
        {
          start: {year: 2013},
          end: 'Present',
        }
      ],
      description: [
        'Implemented and maintaining Google Sheet for detailed accounting',
        'Wrote NodeJS scripts to convert our proprietary cave data format to several popular formats',
      ]
    },
    {
      title: 'Citizen Schools',
      timePeriods: [
        {season: 'Spring', year: 2012},
        {season: 'Fall', year: 2012},
      ],
      description: [
        'Taught a video game design course to middle school students',
      ]
    }
  ],
  humanLanguages: [
    {
      language: 'German',
      description: 'I can speak German half-decently, though not fluently',
    }
  ],
  honors: [
    {
      title: "President's Volunteer Service Award",
      description: 'for volunteering at Citizen Schools two semesters in a row',
      timePeriods: [
        {season: 'Spring', year: 2013}
      ]
    },
    {
      title: 'Innovation Day winner, Pason Systems USA Corp',
      description: 'for prototype <i>GeoCalc SPE / eLRV Advanced 3D</i> integration',
      timePeriods: [
        {season: 'Fall', year: 2012}
      ]
    },
    {
      title: 'UT School of Architecture Design Excellence Award',
      timePeriods: [
        {season: 'Spring', year: 2008}
      ]
    },
    {
      title: 'National Merit Finalist',
      timePeriods: [
        {year: 2005},
      ]
    }
  ],
  activities: [
    {
      title: 'Underground Texas Grotto/Detroit Urban Grotto',
      description: 'Cave exploration and surveying',
      timePeriods: [
        {
          start: {season: 'Fall', year: 2010},
          end: 'Present',
        }
      ]
    }
  ]
}

module.exports = data

