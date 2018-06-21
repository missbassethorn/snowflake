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
    "description": "Embodies and promotes practices to ensure excellent quality products and services",
    "milestones": [{
      "summary": "Delivers consistently good quality work",
      "signals": [
        "Tests new code thoroughly, both locally, and in production once shipped",
        "Writes tests for every new feature and bug fix",
        "Writes clear comments and documentation",
      ],
      "examples": [
        "Caught a bug on Hatch before it went live",
        "Landed non-trivial PR with no caretaker comments",
        "Wrote hermetic tests for the happy and sad cases",
      ],
    }, {
      "summary": "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems",
      "signals": [
        "Refactors existing code to make it more testable",
        "Adds tests for uncovered areas",
        "Deletes unnecessary code and deprecates proactively when safe to do so",
      ],
      "examples": [
        "Requested tests for a PR when acting as reviewer",
        "Reduced the number of zelda fitzgerald exceptions",
        "Fixed a TODO for someone else in the codebase",
      ],
    }, {
      "summary": "Improves others' ability to deliver great quality work",
      "signals": [
        "Implements systems that enable better testing",
        "Gives thoughtful code reviews as a domain expert",
        "Adds tooling to improve code quality",
      ],
      "examples": [
        "Improved PRB to run the same volume of tests faster",
        "Simplified hermetic test data modification",
        "Created fixture system for visual quality",
      ],
    }, {
      "summary": "Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues",
      "signals": [
        "Builds systems so as to eliminate entire classes of programmer error",
        "Focuses the team on quality with regular reminders",
        "Coordinates Watch priorities and projects",
      ],
      "examples": [
        "Added code coverage reporting to iOS CI pipeline",
        "Iterated repeatedly to develop Medium's underlines solution",
        "Defined and oversaw plan for closing Heartbleed vulnerability",
      ],
    }, {
      "summary": "Enables and encourages the entire organization to make quality a central part of the development process",
      "signals": [
        "Defines policies for the engineering org that encourage quality work",
        "Identifies and eliminates single points of failure throughout the organization",
        "Secures time and resources from execs to support great quality",
      ],
      "examples": [
        "Negotiated resources for Fix-It week with exec team",
        "Instituted and ensured success of a 20% time policy",
        "Started The Watch",
      ],
    }],
  },

  "DEV_TOOLING_SYSTEMS": {
    "displayName": "Dev tooling systems",
    "category": "E",
    "description": "Challenges the status quo and effects positive organizational change outside of mandated work",
    "milestones": [{
      "summary": "Identifies opportunities for organizational change or product improvements",
      "signals": [
        "Writes Hatch posts about improvement opportunities",
        "Raises meaningful tensions in tactical meetings",
        "Asks leadership team probing questions at FAM",
      ],
      "examples": [
        "Wrote about problems with TTR on Hatch",
        "Wrote about content policy problems on Hatch",
        "Reported a site issue in Github",
      ],
    }, {
      "summary": "Causes change to positively impact a few individuals or minor improvement to an existing product or service",
      "signals": [
        "Picks bugs off the backlog proactively when blocked elsewhere",
        "Makes design quality improvements unprompted",
        "Takes on trust and safety tasks proactively when blocked elsewhere",
      ],
      "examples": [
        "Advocated on own behalf for a change in role",
        "Implemented flow typing for promises",
        "Audited web client performance in Chrome and proposed fixes",
      ],
    }, {
      "summary": "Causes change to positively impact an entire team or instigates a minor feature or service",
      "signals": [
        "Demonstrates concepts proactively with prototypes",
        "Fixes complicated bugs outside of regular domain",
        "Takes ownership of systems that nobody owns or wants",
      ],
      "examples": [
        "Defined style guide to resolve style arguments",
        "Proposed and implemented at-mentions prototype",
        "Implemented video for Android independently, unprompted",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the engineering organization or a major product impact",
      "signals": [
        "Champions and pioneers new technologies to solve new classes of problem",
        "Exemplifies grit and determination in the face of persistent obstacles",
        "Instigates major new features, services, or architectures",
      ],
      "examples": [
        "Created the interviewing rubric and booklet",
        "Implemented and secured support for native login",
        "Migrated medium2 to mono repo and bazel",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the whole company",
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
    "description": "Provides strategic support to engineers to help them build the career they want",
    "milestones": [{
      "summary": "Gives insight into opportunities and helps identify individuals' strengths and weaknesses",
      "signals": [
        "Advocates on behalf and in defense of a group member",
        "Shares opportunities for improvements and recognises achievements",
        "Explains appropriate available industry paths",
      ],
      "examples": [
        "Collected and delivered feedback",
        "Discussed career options and areas of interest informally",
        "Hosted a Floodgate Academy intern",
      ],
    }, {
      "summary": "Formally supports and advocates for one person and provides tools to help them solve career problems",
      "signals": [
        "Ensure a group member has an appropriate role on their team",
        "Offers effective career advice to group members, without being prescriptive",
        "Creates space for people to talk through challenges",
      ],
      "examples": [
        "Set up and attended regular, constructive 1:1s",
        "Provided coaching on how to have difficult conversations",
        "Taught group members the GROW model",
      ],
    }, {
      "summary": "Inspires and retains a small group of people and actively pushes them to stretch themselves",
      "signals": [
        "Discusses paths, and creates plans for personal and professional growth",
        "Advocates to align people with appropriate roles within organization",
        "Works with team leads to elevate emerging leaders",
      ],
      "examples": [
        "Reviewed individual group member progression every 6 weeks",
        "Suggested appropriate group member for Tech Lead position",
        "Arranged a requested switch of discipline for a group member",
      ],
    }, {
      "summary": "Manages interactions and processes between groups, promoting best practices and setting a positive example",
      "signals": [
        "Manages team transitions smoothly, respecting team and individual needs",
        "Develops best practices for conflict resolution",
        "Ensures all group members' roles are meeting their career needs",
      ],
      "examples": [
        "Completed training on situational leadership",
        "Built a resourcing plan based on company, team, and individual goals",
        "Prevented regretted attrition with intentional, targeted intervention",
      ],
    }, {
      "summary": "Supports the development of a signficant part of the engineering org, and widely viewed as a trusted advisor",
      "signals": [
        "Supports and develops senior leaders",
        "Identified leadership training opportunities for senior leadership",
        "Pushes everyone to be as good as they can be, with empathy",
      ],
      "examples": [
        "Provided coaching to group leads",
        "Devised Pathwise curriculum for group leads",
        "Advocated to execs for engineer development resources and programs",
      ],
    }],
  },

  "DEVOPS_TRANSFORMATION": {
    "displayName": "DevOps transformation",
    "category": "F",
    "description": "Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
    "milestones": [{
      "summary": "Respects and participates in processes, giving meaningful feedback to help the organization improve",
      "signals": [
        "Reflects on meetings that leave them inspired or frustrated",
        "Teaches others about existing processes",
        "Actively participates and makes contributions within organizational processes",
      ],
      "examples": [
        "Facilitated effective tactical meeting with empathy",
        "Explained tactical meeting format to a new hire",
        "Provided feedback on sprint planning meeting",
      ],
    }, {
      "summary": "Identifies opportunities to improve existing processes and makes changes that positively affect the local team",
      "signals": [
        "Defines meeting structure and cadence that meets team needs",
        "Engages in organizational systems thinking",
        "Advocates for improved diversity and inclusion, and proposes ideas to help",
      ],
      "examples": [
        "Defined Frankenmeeting structure for small team",
        "Improved Watch on-call rotation scheduling",
        "Defined standard channels for inter-team communication",
      ],
    }, {
      "summary": "Develops processes to solve ongoing organizational problems",
      "signals": [
        "Creates programs that meaningfully improve organizational diversity",
        "Solves long-standing organizational problems",
        "Reallocates resources to meet organizational needs",
      ],
      "examples": [
        "Developed baseline team templates for consistency",
        "Created bug-rotation program to address ongoing quality issues",
        "Defined Guilds manifesto and charter",
      ],
    }, {
      "summary": "Thinks deeply about organizational issues and identifies hidden dynamics that contribute to them",
      "signals": [
        "Evaluates incentive structures and their effect on execution",
        "Analyzes existing processes for bias and shortfall",
        "Ties abstract concerns to concrete organizational actions or norms",
      ],
      "examples": [
        "Connected mobile recruiting difficulties to focus on excellence",
        "Raised leadership level change discrepancies",
        "Analyzed the hiring rubric for false negative potential",
      ],
    }, {
      "summary": "Leads initiatives to address issues stemming from hidden dynamics and company norms",
      "signals": [
        "Builds programs to train leadership in desired skills",
        "Creates new structures that provide unique growth opportunities",
        "Leads planning and communication for reorgs",
      ],
      "examples": [
        "Lead efforts to increase number of mobile engineers",
        "Directed resources to meaningfully improve diversity at all levels",
        "Built the growth framework rubric",
      ],
    }],
  },

  "DEVOPS_CONSTRUCTION": {
    "displayName": "DevOps construction",
    "category": "F",
    "description": "Supports the emotional well-being of group members in difficult times, and celebrates their successes",
    "milestones": [{
      "summary": "Uses tools and processes to help ensure colleagues are healthy and happy",
      "signals": [
        "Keeps confidences unless legally or morally obliged to do otherwise",
        "Applies the reasonable person principle to others",
        "Avoids blame and focuses on positive change",
      ],
      "examples": [
        "Ensured group members were taking enough vacation",
        "Put themself in another's shoes to understand their perspective",
        "Checked in with colleague showing signs of burnout",
      ],
    }, {
      "summary": "Creates a positive, supportive, engaging team environment for group members",
      "signals": [
        "Sheds light on other experiences to build empathy and compassion",
        "Validates ongoing work and sustains motivation",
        "Proposes solutions when teams get bogged down or lose momentum",
      ],
      "examples": [
        "Coordinated a small celebration for a project launch",
        "Connected tedious A|B testing project with overall company goals",
        "Noted a team without a recent win and suggested some easy quick wins",
      ],
    }, {
      "summary": "Manages expectations across peers, leads in the org, promotes calm, and prevents consensus building",
      "signals": [
        "Trains group members to separate stimulus from response",
        "Maintains a pulse on individual and team morale",
        "Helps group members approach problems with curiosity",
      ],
      "examples": [
        "Completed training on transference and counter transference",
        "Completed training on compromise and negotiation techniques",
        "Reframed a problem as a challenge, instead of a barrier, when appropriate",
      ],
    }, {
      "summary": "Advocates for the needs of teams and group members, and proactively works to calm the organization",
      "signals": [
        "Ensures team environments are safe and inclusive, proactively",
        "Grounds group member anxieties in reality",
        "Tracks team retention actively and proposes solutions to strengthen it",
      ],
      "examples": [
        "Relieved org tension around product direction by providing extra context",
        "Encouraged group members to focus on what they can control",
        "Guided people through complex organizational change",
      ],
    }, {
      "summary": "Manages narratives, channels negativity into inspiration and motivation, and protects the entire team",
      "signals": [
        "Recognizes and points out narratives when appropriate",
        "Works to reshape narratives from victimization to ownership",
        "Increases the psychological safety of the entire team",
      ],
      "examples": [
        "Converted group member from a problem haver to a problem solver",
        "Challenged false narrative and redirected to compassion and empathy",
        "Cultivated and championed a culture of empathy within the entire team",
      ],
    }],
  },

  "SCRUM_MASTER_PRACTICE": {
    "displayName": "Scrum master practice",
    "category": "G",
    "description": "Inspires day to day excellence, maximises potential and effectively resolves performance issues with compassion",
    "milestones": [{
      "summary": "Helps individuals identify blockers and helps them identify next steps for resolution",
      "signals": [
        "Notices when someone is stuck and reaches out",
        "Helps others break down problems into feasible, tangible next steps",
        "Talks through problems non-judgmentally",
      ],
      "examples": [
        "Completed training on diagnosing problems",
        "Unblocked a group member",
        "Reinforces and affirms positive feedback for good work",
      ],
    }, {
      "summary": "Helps individuals resolve difficult performance issues, with insight, compassion, and skill",
      "signals": [
        "Gathers context outside the immediate problem",
        "Recognizes issues within local environment and suggests change",
        "Works to encourage ownership of actions and responsibilities",
      ],
      "examples": [
        "Completed training on decision making",
        "Convinced a group member to solve a problem directly, rather than doing it for them",
        "Gave honest feedback about poor performance, with compassion",
      ],
    }, {
      "summary": "Intervenes in long-standing performance issues with targeted behavior change or performance plans",
      "signals": [
        "Aggregates signals of poor performance and creates process for improvement",
        "Investigates motivation and externalities for consistent poor performance",
        "Puts together comprehensive, achievable performance plans",
      ],
      "examples": [
        "Worked with group member to address persistent communication failures",
        "Arranged a transfer to another team, resulting in improved performance",
        "Managed group member closely to maximise chances of PIP success",
      ],
    }, {
      "summary": "Mediates escalated situations, empowers underperforming teams, and resolves conflict",
      "signals": [
        "Recognizes heightened situations and toxic or aggressive interactions",
        "Inserts themself into conflict where appropriate to calm and mediate",
        "Encourages open dialog and builds trust between parties in conflict",
      ],
      "examples": [
        "Empowered a team to drive forward amidst uncertainty",
        "Protected team from externalities so they could focus on goals",
        "Mediated sit-down between team members to address tension",
      ],
    }, {
      "summary": "Resolves complex organizational dysfunction, or persistent conflict at senior levels",
      "signals": [
        "Takes control of dysfunctional teams to organise chaos",
        "Repairs broken team dynamics and builds harmony",
        "Presides over a well-oiled team of teams",
      ],
      "examples": [
        "Turned around the performance of a problematic team",
        "De-escalated serious tensions between teams",
        "Rebuilt trust between senior team leads",
      ],
    }],
  },

  "SCRUM_MASTER_TECHNICAL": {
    "displayName": "Scrum master technical",
    "category": "G",
    "description": "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
    "milestones": [{
      "summary": "Informally mentors individuals in an ad-hoc way, supports new hires, and conveys institutional knowledge",
      "signals": [
        "Makes themself available for informal support and advice",
        "Acts as sounding board for peers and more junior members",
        "Provides sound advice when asked",
      ],
      "examples": [
        "Acted as an onboarding buddy",
        "Paired with an engineer to help them with an unfamiliar area",
        "Helped a colleague understand their feelings",
      ],
    }, {
      "summary": "Mentors people proactively, and guides people to realizations rather than providing the answer",
      "signals": [
        "Takes time to explain concepts and best practices",
        "Asks questions to illuminate concepts, rather than stating them",
        "Allows others to lead efforts when it will help their development",
      ],
      "examples": [
        "Shared interesting article with a team member to help with their growth",
        "Offered unprompted feedback to help growth, with empathy",
        "Lead from behind to support someone new to a leadership role",
      ],
    }, {
      "summary": "Teaches small groups of engineers and contributes to Medium's shared knowledge base",
      "signals": [
        "Avoids siloing information when it can be usefully shared with others",
        "Works to increase the bus factor of systems",
        "Finds tools that work best for a team member's personality",
      ],
      "examples": [
        "Gave a brown bag presentation on payments",
        "Wrote Hatch post on avoiding RDS backfill issues",
        "Wrote Medium-U content module",
      ],
    }, {
      "summary": "Encourages people to mentor each other, and creates ways for them to do so",
      "signals": [
        "Defines an entire curriculum for a discipline",
        "Draws positive attention to well-modeled mentor and teaching behaviours",
        "Creates brown bag series and lines up speakers",
      ],
      "examples": [
        "Created and lead Medium's Women in Eng group",
        "Organized an Eng All Hands with an outside speaker",
        "Designed and taught web client guild curriculum",
      ],
    }, {
      "summary": "Instills and promotes a culture of learning and development within the team",
      "signals": [
        "Sets incentive structures to recognise and reward SCRUM_MASTER_TECHNICAL",
        "Empowers team members to develop themselves",
        "Role models productive and healthy mentor relationships",
      ],
      "examples": [
        "Instituted the professional education budget for engineers",
        "Mentored mentors",
        "Started the eng advisor program and lined up external mentors",
      ],
    }],
  },

  "BLANK_1": {
    "displayName": "",
    "category": "H",
  },

  "BLANK_2": {
    "displayName": "",
    "category": "H"
  },

  "BLANK_3": {
    "displayName": "",
    "category": "H"
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
