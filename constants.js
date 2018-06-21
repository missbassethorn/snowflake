// @flow
import * as d3 from 'd3'

export type TrackId = 'PEOPLE' | 'TEST_APPROACH' | 'TEST_TECHNIQUE' | 'TEST_DOMAIN_KNOWLEDGE' |
  'MOBILE_DEV' | 'RAILS_DEV' | 'DEV_SOFTWARE_CRAFT' | 'DEV_TOOLING_SYSTEMS' |
  'DEVOPS_FOUNDATION' | 'DEVOPS_TRANSFORMATION' | 'DEVOPS_CONSTRUCTION' | 'SCRUM_MASTER_PRACTICE' |
  'SCRUM_MASTER_TECHNICAL' | 'BLANK_1' | 'BLANK_2' | 'BLANK_3'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'PEOPLE': Milestone,
  'TEST_APPROACH': Milestone,
  'TEST_TECHNIQUE': Milestone,
  'TEST_DOMAIN_KNOWLEDGE': Milestone,
  'MOBILE_DEV': Milestone,
  'RAILS_DEV': Milestone,
  'DEV_SOFTWARE_CRAFT': Milestone,
  'DEV_TOOLING_SYSTEMS': Milestone,
  'DEVOPS_FOUNDATION': Milestone,
  'DEVOPS_TRANSFORMATION': Milestone,
  'DEVOPS_CONSTRUCTION': Milestone,
  'SCRUM_MASTER_PRACTICE': Milestone,
  'SCRUM_MASTER_TECHNICAL': Milestone,
  'BLANK_1': Milestone,
  'BLANK_2': Milestone,
  'BLANK_3': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3',
}

export const maxLevel = 135

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'PEOPLE': Track,
  'TEST_APPROACH': Track,
  'TEST_TECHNIQUE': Track,
  'TEST_DOMAIN_KNOWLEDGE': Track,
  'MOBILE_DEV': Track,
  'RAILS_DEV': Track,
  'DEV_SOFTWARE_CRAFT': Track,
  'DEV_TOOLING_SYSTEMS': Track,
  'DEVOPS_FOUNDATION': Track,
  'DEVOPS_TRANSFORMATION': Track,
  'DEVOPS_CONSTRUCTION': Track,
  'SCRUM_MASTER_PRACTICE': Track,
  'SCRUM_MASTER_TECHNICAL': Track,
  'BLANK_1': Track,
  'BLANK_2': Track,
  'BLANK_3': Track
|}

export const tracks: Tracks = {
  "PEOPLE": {
    "displayName": "People",
    "category": "A",
    "description": "Develops expertise in self-management, self-awareness, collaboration and building other people",
    "milestones": [{
      "summary": "Manages self by actively learning, incorporating feedback and communicating effectively within the team",
      "signals": [
        "Learns from new experiences, from others, and from structured learning",
        "Commits to and completes work, ensuring team are updated of progress or blockers",
        "Collaborates with others in an open, friendly and accepting way",
        "Strives for quality and best solutions",
      ],
      "examples": [
        "Asks for help at the appropriate juncture, actively listens to feedback and applies to own work",
        "Updates Jira promptly with progress, communicates  issues at standup",
        "Gives considered comments when reviewing others work and/or pair programming",
        "Backs own opinion and can explain choices",
      ],
    }, {
      "summary": "Contributes to team by taking increased responsibility and optimising work processes",
      "signals": [
        "Partners with others to get work done and mentors team members",
        "Visibily demonstrates ownership of problems, and when to let others take ownership",
        "Takes on tough challenges with urgency and enthusiasm",
        "Seeks ways to improve processes",
      ],
      "examples": [
        "Pair programming, devtesting",
        "Owns a change of moderate complexity end-to-end, calling for help as required, leaving to others when appropriate",
        "Retains positive mindset through difficult change",
        "Actively brings challenges to retrospectives",
      ],
    }, {
      "summary": "Proactively shares, guides people to realisations, builds a culture of lending support - within team and beyond",
      "signals": [
        "Takes time to explain concepts and best practices",
        "Deals constructively with problems that do not have clear solutions or outcomes",
        "Marshals people and or/resources to promote positive change and get things done",
        "Is willing to champion an idea or position despite dissent or political risk",
      ],
      "examples": [
        "Recommends and shares relevant articles, writes a blog post",
        "Gets the right people together to discuss, recognises when an 80% solution will suffice",
        "Starts a guild, gives a FluxTalk, organises team event, ensures quieter voices are heard",
      ],
    }, {
      "summary": "Collaborates and skillfully communicates complex ideas across multiple teams",
      "signals": [
        "Places a high priority on developing others",
        "Fosters open dialogue, collaboration and strong team morale",
        "Brings separate teams together to build relatedness",
        "Routinely has value stream level of impact with initiatives",
      ],
      "examples": [
        "Becomes a DevTrain mentor, has regular mentorship meetings with protege",
        "Organises team event, ensures quieter voices are heard",
        "Identifies depencencies at Big Room Planning and drives solution",
      ],
    }, {
      "summary": "Manages others, creates cross-company initiatives, makes courageous improvements, manages conflict",
      "signals": [
        "Sets the tone, policy and goals around building and maintaing a diverse, inclusive, high-quality team",
        "Proactively identifies and remedies communication gaps and issues",
        "Creates organisation-wide energy and optimism for the future",
      ],
      "examples": [
        "Regularly sits on interview panel",
        "Mentoring of mentors, coaching of coaches",
      ],
    }],
  },

  "TEST_APPROACH": {
    "displayName": "Test approach",
    "category": "B",
    "description": "Uses their critical thinking skills to develop and share a test approach to ensure excellent quality products and practice.",
    "milestones": [{
      "summary": "Use their critical analysis skills to develop an appropriate test approach for a piece of work in their delivery team.",
      "signals": [
        "Knows to validate the expected behaviour and assess some immediate related negative tests and regression scenarios",
        "Ability to confirm if the acceptance criteria has been met",
        "Test Agility : Ability to cope with the change and retesting when necessary",
        "Ability to seek help in recognising a high risk change ",
        "Ability to understand the process of the delivery team and to test and complete a piece of work according to their standards",
      ],
      "examples": [
      ],
    }, {
      "summary": "Analyses and compares different approaches to testing to demonstrate that you're using the most effective approach to the work on your delivery team.",
      "signals": [
        "Flexible to try new approaches",
        "Open to accepting and trying out from the feedback given by peers and the delivery team on how effective their approach is",
        "Enthusiastic to explore and implement any new approach which they find theoretically fantastic and efficient",
        "Ability to read and understand the cukes written for some functionality",
        "Can confidently assist others in creating test plans",
      ],
      "examples": [
      ],
    }, {
      "summary": "Advocates for different and better approaches to testing in the context of their delivery team and chapter.",
      "signals": [
        "Can assist in helping others to understand risks within changes.",
        "Leads team in test approach and conducts appropriate risk analysis",
        "Monitors exceptions/errors and is able to understand the meaning of the errors thrown.",
        "Can confidently work on testing the Delivery Team's changes with minimal supervision.",
        "Can understand the reason for an incident raised, and can share this knowledge with the wider team in order to avoid further incidents.",
      ],
      "examples": [
      ],
    }, {
      "summary": "Shares different approaches with the Test Team to inspire and equip TAs to consider and implement a wider breadth of test approaches.",
      "signals": [
        "Advocates for long term test approaches. ",
        "Steers test approach used by the wider test team",
        "Recognizes and has ideas to address issues of scalability of testing as the application expands.",
        "Regularly critiques and analyses currently used approaches to testing to better the approach",
        "Can confidently contribute to providing scope and acceptance criteria for stories in the backlog",
      ],
      "examples": [
      ],
    }, {
      "summary": "Shares different approaches with all Fluxsters and the wider software development community to influence company direction and inspire positive change.",
      "signals": [
        "Understands automation coverage as a whole, and can contribute towards better automated tests (whether writing these or helping discuss this with developers).",
        "Interest for the wider company - Gives perspectives and advocates for testers in the direction we're heading - Looking out for benefits and voicing challenges",
        "Ability to push back against the delivery when it is felt appropriate to do so for the betterment of the application. (e.g; When work is scoped without considering writing tests resulting in short term velocity increase but longer term cost to Quality of the application)",
        "Share knowledge around the test approach followed by their team to other testers and help them understand the value of it and also help them incorporate the similar approach in their team and if necessary/ help them out in setting up an approach until the team is confident enough to run on their own.",
        "Does the most effective testing for stories based on risk analysis and knowledge of the area/code written.",
        "Excellent in testing using a risk-based approach and extremely low defect(low P1/P2 especially) leakage to Production",
      ],
      "examples": [
      ],
    }],
  },

  "TEST_TECHNIQUE": {
    "displayName": "Test technique",
    "category": "B",
    "description": "Partners with others to get work done and mentors team members",
    "milestones": [{
      "summary": "Works effectively within established testing frameworks, following what is best for them and their delivery team.",
      "signals": [
        "Curious mindset and Willingness to ask for help ",
        "Ability to execute basic test tasks and documentation for a given piece of work with some supervision",
        "Ability to voice opinion and concern - Providing a point of view to be challenged",
        "To be able to help others to some degree",
      ],
      "examples": [],
    }, {
      "summary": "Learns and incorporates functional or non-functional test techniques in their own work.",
      "signals": [
        "When thinking about tests, their horizon widens",
        "Looks to grow and build upon exisiting test techniques; also able to accept feedback for them",
        "Can provide concern and voice opinion during sprint ceremonies before stories are in-flight to assist developers",
        "Ability to develop their focus on the non-functional and exploratory tests",
        "Engages with other testers or looks in existing Jiras for similar stories for help",
        "Is proactive in asking the team if technical coverage is sufficient.",
      ],
      "examples": [
      ],
    }, {
      "summary": "Shares functional or non-functional test techniques with their delivery team either through documentation or collaboration.",
      "signals": [
        "Acts as an oracle to Test techniques",
        "Prioritises the test techniques ",
        "Practises and shares the knowledge about any good test technique and help to better the test team",
        "Ability to apply different techniques to different pieces of work by assessing which technique suits best for a particular piece of work",
      ],
      "examples": [
      ],
    }, {
      "summary": "Works collaboratively with the Test Team to share functional or non functional test techniques that will enable their delivery teams.",
      "signals": [
        "Can recommend Developers on what scenarios the tests could be automated for long term application health.",
        "Can incorporate their own investigation of test coverage into their test planning without needing to lean on developer input.",
        "Volunteers to go to wider planning sessions and shares knowledge to other delivery teams and/or the Test Team to assist with testing and to support newbies.",
        "Sees the critical path right away and good at thinking about the edge case scenarios",
        "Is able to debug the test scripts when needed",
      ],
      "examples": [
      ],
    }, {
      "summary": "Is an expert in functional or non-functional test techniques, helping to set the strategic direction for the Test Team and engaging with the wider software development community.",
      "signals": [
        "One who is exceptional in any testing discipline that they choose",
        "Very confident about their test techniques and uses different mediums(e.g; Workshops/ Blogs.. whatever they are comfortable in) to try and make people understand the value of it",
        "Visionary - Knows where to take the testing practice further, create new initiatives and practices to keep our testing agile and robust.",
        "To be excellent in using testing tools or any other non-functional testing areas they want to excel in (e.g; Security, Performance,User Experience, Accessibility, etc)",
        "Their Test technique is used by both developers and other testers, and is encouraged and supported by Scrum Masters and Product Owners ",
        "Is able to automate scripts/cukes which can be used by the wider team .",
      ],
      "examples": [
      ],
    }],
  },

  "TEST_DOMAIN_KNOWLEDGE": {
    "displayName": "Test domain knowledge",
    "category": "B",
    "description": "Demonstrates expertise in a particular area of either testing or business specific knowledge and shares this knowledge widely and well within Flux and the wider community where appropriate.",
    "milestones": [{
      "summary": "Grows domain knowledge in a specific area to confidently test software.",
      "signals": [
        "Shows initiative to learn the concepts and ask relevant questions",
        "Self Driven: To be able to acquire or read about a specific topic on the confluence before asking for help",
        "Sponge it up: Tries to absorb as much knowledge as possible during the team discussions ",
        "Ability to understand the concepts of their current value stream seek help of others in the value stream to understand further concepts to test a story. ",
        "Makes an effort to learn functionality of the application their team is working on.",
      ],
      "examples": [
      ],
    }, {
      "summary": "Has an indepth understanding of a particular area of domain knowledge that they can use to support their delivery team with documentation and discussion.",
      "signals": [
        "Is confident in the knowledge that they have worked on",
        "Confident in testing in their area of expertise/domain",
        "Reads Confluence/Jira to understand the more in-depth functionalities within the app, not necessarily those that are directly related to their team's changes.",
        "Ability to explain the functionalities and concepts to newbies or any other person requiring help",
        "Can confidently have discussions about their area of expertise/domain within team",
      ],
      "examples": [
      ],
    }, {
      "summary": "Understands and documents a wider area of domain knowledge enough to be considered an SME within their Value Stream.",
      "signals": [
        "Has an in-depth understanding of the domain and confidently knows their area well, and is starting to become recognised as an SME within their stream",
        "Can point others within the wider team towards Jira/Confluence docs that will assist with questions",
        "Actively creates documents or updates them when they exist",
        "Participates in holding knowledge-sharing sessions within their chapter/wider team.",
      ],
      "examples": [
      ],
    }, {
      "summary": "Understands and documents a wider area of domain knowledge to such a level that they develop the understanding of the Test Team and the Functional Leads.",
      "signals": [
        "Is confident in the product in at least a couple of markets",
        "Their Confluence documentation has working examples and and FAQ information to enable people to test the area independently",
        "Is regarded as an SME within Flux for (a) given area/s, and is asked for input/feedback from wider teams to assist with development/testing, and/or for writing Jiras.",
      ],
      "examples": [
      ],
    }, {
      "summary": "Uses specific domain knowledge to such a level that they develop the understanding of the wider Flux Team in order to help the entire company make better quality decisions about our products.",
      "signals": [
        "Has significant role in new initiatives",
        "Has comprehensive understanding of the variances between Application components within their Value Stream. A TA at this level should be able to make confident assertions on which markets require testing for a change",
        "Works with functional leads to document areas of the application, is seen as an authority on large areas of the application and addresses questions around the direction this functional domain needs to take.",
        "Has input in and uses existing knowledge to help in the progress of long term projects.",
        "Contributes in Flux Talks or by using any other medium to share domain knowledge, and seeks to support knowledge sharing and growth within Flux as a whole.",
      ],
      "examples": [
      ],
    }],
  },

  "MOBILE_DEV": {
    "displayName": "Mobile dev",
    "category": "C",
    "description": "Develops expertise in native mobile platform engineering, such as iOS or Android",
    "milestones": [{
      "summary": "Works effectively within established iOS or Android architectures, following known practices",
      "signals": [
        "Delivers features requiring simple local modifications",
        "Adds simple actions that call server endpoints",
        "Reuses existing components appropriately",
      ],
      "examples": [
        "Reuse a button component in another view",
        "Fetch data from an API endpoint and show in a view",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Creates simple new activities on Android",
        "Migrates code from old patterns to existing patterns",
        "Creates new components that work with the existing architecture",
      ],
      "examples": [
        "Implemented an MVP list view feature",
        "Prototyped a simple new feature quickly",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of mobile platform constraints",
      "signals": [
        "Implements complex features with a large product surface area",
        "Works effectively with asynchronous data and user interfaces",
        "Adds support for new iOS features after a major iOS version upgrade",
        "Stays up to date and informs the team about recent best practice changes and deprecations",
      ],
      "examples": [
        "Designed architecture for fetching and rendering timeline events",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migration strategies that reduce programmer burden",
        "Fixes subtle memory management issues",
        "Implements custom interactive UIs that bring delight",
      ],
      "examples": [
        "Upgraded CocoaPods to a new major version",
        "Migrated Android persistance layer to reactive programming",
      ],
    }, {
      "summary": "Is an industry-leading expert in mobile engineering or sets strategic mobile direction for a delivery team",
      "signals": [
        "Defines long-term goals and ensures active projects are in service of them",
        "Designs and builds innovative, industry-leading UI interactions",
        "Invents new techniques to responsibly stretch limits of the Android platform",
      ],
      "examples": [
        "Defined and drove complete migration plan to Swift or Kotlin",
        "Pioneered application-level abstractions for multi-app environment",
      ],
    }],
  },

  "RAILS_DEV": {
    "displayName": "Rails dev",
    "category": "D",
    "description": "Develops expertise in delivering with Ruby on Rails",
    "milestones": [{
      "summary": "Works effectively within established server side frameworks, following current best practices",
      "signals": [
        "Makes minor modifications to existing screens",
        "Uses CSS appropriately, following style guide",
        "Adds new simple model with associations",
        "Makes minor serverside changes to support client needs",
      ],
      "examples": [
        "Added sorting to admin list",
        "Fixed alignment of utility type icon",
        "Restrict existing filtered page based on user parameters",
        "Created page to display Verify meter data request",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Meets product requirements using configurable data",
        "Constructs safe and effective migrations",
        "Investigates and experiments with possible technical approaches",
      ],
      "examples": [
        "Connects to market systems within existing architecture",
        "Installed and justified using a new gem",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Acts as primary caretaker for part of the system",
        "Leads major version upgrades to libraries",
      ],
      "examples": [
        "Created Pattern Library for admin app",
        "Designed cost uploader",
        "Deleted CUSTARD",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Delivers complex systems that achieve their goals",
        "Makes appropriate buy, build or reuse choices",
      ],
      "examples": [
        "Created Flow system for market integration",
        "Created Banking system to handle critical data in the correct manner",
      ],
          }, {
      "summary": "Is an industry-leading expert in server side engineering or sets strategic server side direction for an eng team",
      "signals": [
        "Designs transformational projects of significant complexity and scope",
        "Invents industry-leading techniques to solve complex problems",
      ],
      "examples": [
        "Defined and implemented proprietary IP core to the company's success",
        "Designed Pricing 4 as a system",
      ],
    }],
  },

  "DEV_SOFTWARE_CRAFT": {
    "displayName": "Dev software craft",
    "category": "E",
    "description": "Develops expertise in crafting software; language and framework agnostic  ",
    "milestones": [{
      "summary": "Delivers consistently good quality work",
      "signals": [
        "Verifies that code written performs the intended outcome with thorough tests",
        "Writes clear comments and documentation",
        "Assesses correctness and utility of existing code and avoids blind copy-pasting",
      ],
      "examples": [
        "Merged MR independently with little change required",
      ],
    }, {
      "summary": "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems",
      "signals": [
        "Refactors existing code to make it more testable",
        "Adds tests for uncovered areas",
        "Deletes unnecessary code and deprecates proactively when safe to do so",
      ],
      "examples": [
        "Provides specific feedback on MRs to add tests",
      ],
    }, {
      "summary": "Improves others' ability to deliver great quality work",
      "signals": [
        "Provides thorough and thoughtful code review feedback on MRs",
        "Designs new systems that meet short and long-term requirements",
      ],
      "examples": [
        "Improves test system throughput",
      ],
    }, {
      "summary": "Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues",
      "signals": [
        "Makes architectural decisions that eliminate entire classes of bugs and reduce programmer burden",
        "Identifies and solves systemic problems with current architecture",
        "Advocates for quality in specific areas across teams",
      ],
      "examples": [
      ],
    }, {
      "summary": "Enables and encourages the entire organization to make quality a central part of the development process",
      "signals": [
        "Defines policies to improve quality with positive, organisation-wide consequences",
        "Defines a long-term vision for technical success and ensures projects are in service of it",
        "Negotiates time and resources to support great quality work",
      ],
      "examples": [
      ],
    }],
  },

  "DEV_TOOLING_SYSTEMS": {
    "displayName": "Dev tooling systems",
    "category": "E",
    "description": "Develops expertise in foundational systems, such as deployments, pipelines, databases",
    "milestones": [{
      "summary": "Works effectively within established structures, following current best practices",
      "signals": [
        "Runs applications locally using a restricted anonymised snapshot",
      ],
      "examples": [
        "Can effectively navigate and edit a piece of software",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Appropriately anonymises new record types",
        "Corrects CI tasks that fail to report failures",
      ],
      "examples": [
        "Understands and executes the steps to make a change releasable (source control, CI, WIPs)",
        "Identify when a multi-stage release is appropriate",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
          "Adds tooling to improve code quality",
      ],
      "examples": [
        "Designs and sequences a multi-stage release",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services ",
      "signals": [
        "Constructs general mechanism to perform backfills without interfering with system operation",
      ],
      "examples": [
      ],
    }, {
      "summary": "Is an industry-leading expert in foundational engineering or sets strategic foundational direction for an eng team ",
      "signals": [
        "Creates a new function to solve systemic issues",
        "Galvanizes the entire company and garners buy in for a new strategy",
        "Changes complex organizational processes",
      ],
      "examples": [
        "Migrated the organization from Holacracy",
        "Built Medium Android prototype and convinced execs to fund it",
        "Convinced leadership and engineering org to move to Medium Lite architecture",
      ],
    }],
  },

  "DEVOPS_FOUNDATION": {
    "displayName": "DevOps foundation",
    "category": "F",
    "description":  "Develops expertise in traditional systems skills, including operating systems, networks and protocols, hardware, service and server configuration, monitoring and security",
    "milestones": [{
      "summary": "Gains familiarity with systems administration practices through observation and questioning.",
      "signals": [
        "Basic understanding of *nix shells - pipes, redirection etc",
        "Can manage/secure their ssh keys",
      ],
      "examples": [
          "Basic usage of regular expressions",
          "Creation of simple linear shell scripts",
      ],
    }, {
      "summary": "Useful participation in managing systems and is able to automatically apply basic skills. ",
      "signals": [
        "Can explain TLS and PKI",
        "Understands TCP/IP at a LAN level",
        "Has a working knowledge of DNS",
        "Diagnosing and solving simple connectivity / firewall issues (eg ports being open)",
      ],
      "examples": [
          "Understands Linux package management",
          "Simple systemd configuration",
          "Is capable of compiling and installing software from source tarballs",
      ],
    }, {
      "summary": "Experienced at problem solving and configuring systems, and able to apply existing knowledge to creating new solutions. ",
      "signals": [
        "Good understanding of Linux performance issues",
        "Can work with DB replication",
        "Understands SMTP and modern spam filtering issues",
      ],
      "examples": [
        "Good understanding of Linux performance issues",
        "Can work with DB replication",
        "Understands SMTP and modern spam filtering issues",
      ],
    }, {
      "summary": "Proactively works towards solutions that empower the rest of the team, and increase overall robustness of infrastructure. ",
      "signals": [
        "Understands IPSec troubleshooting",
        "Can trace Linux syscalls for debugging 3rd party apps",
      ],
      "examples": [
          "Diagnosing trickier network problems (eg ARP, BGP, packet fragmentation, spanning tree etc)",
          "Detection of server intrusions",
      ],
    }, {
      "summary": "Expert level problem solving and tuning.  ",
      "signals": [
        "Deep filesystem mojo",
        "Confident with rearchitecting prod data replication techniques",
      ],
      "examples": [
        "Able to forensically examine a server after compromise at a deep level.",
        "In depth system/application performance tuning",
      ],
    }],
  },

  "DEVOPS_TRANSFORMATION": {
    "displayName": "DevOps transformation",
    "category": "F",
    "description": "Develops expertise in modern delivery tooling, including Cloud and SDN, containerisation and orchestration, scaling on demand, infrastructure as code and immutable infrastructure, and Flux tooling",
    "milestones": [{
      "summary": "Increasingly familiar with the goals of modern devops practices.",
      "signals": [
        "Can differentiate the main AWS services",
        "Trusted to run basic capistrano tasks",
        "Can make simple config changes to servers via capistrano",
      ],
      "examples": [
          "Able to talk about modern principles eg immutable infrastructure",
      ],
    }, {
      "summary": "Starts to improve team velocity and capacity by taking on repetitive work and simple enhancements.",
      "signals": [
        "Can convert manual shell operations into self contained capistrano tasks",
        "Working knowledge of AWS networking concepts",
        "Trusted to run common automated tasks against production infrastructure",
      ],
      "examples": [
        "Can 'Dockerise' simple applications",
      ],
    }, {
      "summary": "Builds useful automation and supports transformation of infrastructure onto new technologies.",
      "signals": [
        "Can integrate new AWS APIs into capistrano tasks",
        "Understands Linux/Docker containers and their kernel components",
      ],
      "examples": [
        "Able to integrate new cloud platform implementatons into capistrano tooling",
        "Creating container images for most apps",
      ],
    }, {
      "summary": "Actively contributing to the future shape of the infrastructure platform.",
      "signals": [
        "Operation of production Kubernetes clusters",
        "Can package and maintain Powershop app container images",
        "Understands security ramifications of new platforms and deployment techniques",
      ],
      "examples": [
        "Can identify and fix issues slowing image creation and deployment deployment times.",
      ],
    }, {
      "summary": "Shaping the infrastructure architecture for long term success.  ",
      "signals": [
        "Implementing intelligent autoscaling of Powershop apps",
        "Deep understanding and debugging of different Kubernetes networking options",
        "Collaborating with wider development team on ways the product codebases can support new infrastructure architectures and techniques",
      ],
      "examples": [
        "Deep knowledge of SDN implementations.", 
      ],
    }],
  },

  "DEVOPS_CONSTRUCTION": {
    "displayName": "DevOps construction",
    "category": "F",
    "description": "Develops expertise in software engineering, including development, build, deployment, automation, glue and interfacing with delivery teams",
    "milestones": [{
      "summary": "Basic familiarity of coding techniques and goals ",
      "signals": [
        "Rudimentry coding skills in a dynamic scripting language",
        "Basic understanding of layers in a web stack",
        "Can do basic source control operations",
      ],
      "examples": [
      ],
    }, {
      "summary": "Able to independently develop basic software.",
      "signals": [
        "Can build and debug simple web apps",
        "Understands OOP and the basics of well factored code",
        "Passing knowledge of the various language dependency ecosystems (eg rubygems, npm, pypi etc)",
      ],
      "examples": [
      ],
    }, {
      "summary": "Incorporates experience into building solutions to more complex problems while meeting team coding standards and expectations.",
      "signals": [
        "Understands test automation",
        "Can integrate external APIs into tooling",
        "Understands Flux release process",
      ],
      "examples": [
        "Understands how to avoid common web security weaknesses",
        "Coding in compiled systems languages",
      ],
    }, {
      "summary": "Contributes to wider team and organisation capability by developing more indepth software solutions.",
      "signals": [
        "Confident deploying code fixes to production during on call incidents",
        "Making improvements to CI jobs for performance etc",
        "Shapes policies and processes",
      ],
      "examples": [
        "Debugging 3rd party code written in arbitrary languages",
        "Understands the main authentication protocols",
      ],
    }, {
      "summary": "Demonstrates expert development skills creating innovative solutions.",
      "signals": [
        "Collaborates with platform teams on developing new app subsystems and integrations",
        "Linux kernel debugging and patch writing",
        "Helps direct wider Flux development practices to better support devops.",
      ],
      "examples": [
        "Fully understands Flux domain requirements for system design.",
        "Encryption knowledge at an implementation level",
      ],
    }],
  },

  "SCRUM_MASTER_PRACTICE": {
    "displayName": "Scrum master practice",
    "category": "G",
    "description": "",
    "milestones": [{
      "summary": "n/a",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Expertise in agile practices and facilitation to enable productive self-organising teams",
      "signals": [
        "Is familiar with not only Agile ceremonies but also kickoff workshops, team building exercises etc.",
        "Ensures meetings are inclusive and achieve the intended outcomes",
        "Is committed to continuous learning and improvement",
        "Shields the team from outside influences",
        "Identifies and removes impediments",
        "Understands the Agile manifesto and principles",
        "Understands Agile concepts such as story estimation, principles of flow, benefits of Agile practices",
        "Understands the value of silence",
        "Can read a room",
      ],
      "examples": [
        "Listens and notices when team members are working on items outside of sprint. Sees approaches from others.",
        "Proactively manages blockers.",
        "Ariculates re benefits of the Agile values and priniciples",
        "Teaches Agile 101",
        "Devises and delivers Agile talks and workshops",
        "Uses silences to encourage independent thought ",
        "Notices if someone is trying to speak but is struggling to be heard",
      ],
    }, {
      "summary": "Has experience of Agile teams and practices",
      "signals": [
        "Has working experience of Agile facilitation/ meetings",
        "Encourages team autonomy and high performance ",
        "Disruptive, breaks the status quo, ",
        "Is connected with the commerciality of the business",
        "Understands how to present requirements in an Agile outcomes based way",
        "Has a good grasp of Agile techniques to increase collaboration and flow eg. ",
        "Uses diplomacy and tact ",
        "Employs Agile coaching techniques ",
      ],
      "examples": [
        "Achieves intended outcomes of each meeting",
        "Pushes team when required",
        "Helps create a new way of working",
        "Helps to identify and eliminate delays",
        "Helps write user stories and technical stories",
        "Can teach about pair programming, story splitting, prioritisation etc",
        "Is persuasive without being dictatorial.",
        "Uses powerful open questions during coaching",
      ],
    }, {
      "summary": "Sees the bigger picture and effects change across teams ",
      "signals": [
        "Sees the bigger picture and leads by example within their team ",
        "Is a facilitative and enablling leader, helps others to collaborate and achieve",
        "Represents Agile practice at Extended leadership level ",
        "Identifies trends across teams, and collaborates with Scrum masters to effect appropriate change",
        "Is courageous",
        "Teaching and mentoring",
      ],
      "examples": [
        "Focuses on outcomes",
        "Doesn't provide answers, enables others",
        "Is the voice of the scrum masters ",
        "Works with Scrum masters to collate information and acts on it",
        "Encourages teams to be courageous and adventurous in their practice in order to achieve",
        "Mentors and teaches colleagues, teams, others",
      ],
    }, {
      "summary": "n/a",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },

  "SCRUM_MASTER_TECHNICAL": {
    "displayName": "Scrum master technical",
    "category": "G",
    "description": "Expertise in software development life cycle and domain knowledge to support and provoke continual improvation.",
    "milestones": [{
      "summary": "n/a",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Expertise in software development life cycle and domain knowledge to support and provoke continual improvation",
      "signals": [
        "Has an understanding of the Powershop customer facing app",
        "Has a basic understanding of the Powershop admin app",
        "Basic understanding of industry terms eg. ICP, MIRN, switch, KwH. Basic understanding of software terms eg, DB, Schema, front end conventions etc. Basic understanding of the release process",
      ],
      "examples": [
        "Uses the knowledge to help write user stories",
        "Uses knowledge to help prompt conversation",
        "Uses knowledge to help prompt conversation",
      ],
    }, {
      "summary": "Has software industry experience and understanding",
      "signals": [
        "Is familiar with technical terms ",
        "Can help translate technical explanations to plain language",
        "Helps the team to focus on outcomes not the detail",
        "Understands technical concepts",
      ],
      "examples": [
        "Asks the right questions",
        "Expresses outcomes in plain language",
        "Knows when to move on meetings ",
        "Asks the right questions",
      ],
    }, {
      "summary": "Has and uses a depth of experience with succesful Agile software delivery and teams",
      "signals": [
        "Has 5+ years software industry experience ",
        "Understands and can articulate big picture technical concepts",
        "Has experience with high performing Agile teams and happy clients",
      ],
      "examples": [
        "Uses experience to help less experienced team members to grow",
        "Helps set the scene in workshops and meetings",
        "Uses real life examples to help teams to mature",
      ],
    }, {
      "summary": "n/a",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#e06666', '#428af6', '#00abc2', '#e1439f', '#6aa84f', '#ffd966', '#e69138', '#d9d9d9'])

export const titles = [
  {label: 'Engineer I', minPoints: 0, maxPoints: 16},
  {label: 'Engineer II', minPoints: 17, maxPoints: 35},
  {label: 'Senior Engineer', minPoints: 36, maxPoints: 57},
  {label: 'Group Lead', minPoints: 36, maxPoints: 57},
  {label: 'Staff Engineer', minPoints: 58, maxPoints: 89},
  {label: 'Senior Group Lead', minPoints: 58, maxPoints: 89},
  {label: 'Principal Engineer', minPoints: 90},
  {label: 'Director of Engineering', minPoints: 90}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
