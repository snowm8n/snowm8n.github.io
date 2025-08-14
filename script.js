document.addEventListener('DOMContentLoaded', () => {

    // --- DOM ELEMENTS ---
    const appContent = document.getElementById('app-content');
    const questOverlay = document.getElementById('quest-overlay');
    const confirmOverlay = document.getElementById('confirm-overlay');
    const caseStudyOverlay = document.getElementById('case-study-overlay');
    const header = document.querySelector('header');
    
    // --- DATA ---
    const profileImage = 'js_profile_800x650.jpeg';
    const achievements = [
        { icon: '🏆', text: '2x PlayStation Hackathon Winner' },
        { icon: '💡', text: 'Co-Inventor on 2 Confidential Patents' },
        { icon: '💰', text: 'Millions in Revenue Driven (Hogwarts Legacy)' },
        { icon: '🤝', text: 'Multi-Million Dollar Deal Secured' },
        { icon: '🚀', text: 'Led a Project That Saved My Team' },
        { icon: '📈', text: '87% Fan Engagement Rate (PSX 2017)' },
        { icon: '✨', text: 'Freepik GenAI Hackathon Finalist' }
    ];
    const recommendations = {
        'joby-h': { name: 'Joby Hirschfeld', title: 'Vice President, Creative, Design, Events & Video', company: 'Sony Interactive Entertainment', context: 'Managed John directly at PlayStation', pullQuote: "John has consistently demonstrated exceptional skills, creativity, and professionalism. His ability to merge technical acumen with creative flair was evident in the successful development of numerous gamification strategies that enhanced user engagement and experience.", fullText: "I am writing to highly recommend John Sweeney, who has been an valuable member of our team for over eight years. During his tenure in the role of Sr. Manager, Technical Creative, John has consistently demonstrated exceptional skills, creativity, and professionalism. John has a consistent record of producing premier interactive events leveraging gamification to connect at the highest level with our audience.<br/><br/>From the outset, John has made a significant impact on our projects, bringing innovative ideas that elevated our creative processes, from his initial launch of a PS Home E3 booth, to physical event gamification with a dedicated mobile platform at our PSX / E3 events. His ability to merge technical acumen with creative flair was evident in the successful development of numerous gamification strategies that enhanced user engagement and experience. This unique skill set not only contributed to our project's success but also inspired the team to push boundaries of play in our work.<br/><br/>John has always shown a proactive approach in collaborating cross-functionally (marketing, engineering, design, product, partnerships, legal, data analysis, and HR) while also defining and facilitating deliverables and deadlines.<br/><br/>John is proficient in various technical tools and platforms, allowing him to implement cutting-edge solutions tailored to the needs of our clients. He possesses a unique capacity for understanding complex technical concepts and translating them into engaging and effective creative solutions, which has significantly contributed to how we interfaced with our employees and the gaming community. John also has expertise understanding player behavior, expectations, and trends, and developed experiences as well as DLC/UGC, crafted for gamer trends and business needs.<br/><br/>Beyond technical skills, John is an excellent collaborator and communicator. He works well with colleagues across departments and has a natural talent for leading brainstorming sessions that foster creativity and innovation with his clients. His positive attitude and resilience in the face of challenges has been a source of motivation for our team and how we best could represent ourselves.<br/><br/>I am confident that John will bring the same level of dedication, creativity, and excellence to any future endeavors. His contributions during his time under my management has left positive impact on our business and I endorse him for any opportunity he plans to pursue." },
        'john-k': { name: 'John Koller', title: 'CMO/Managing Director/Senior Marketing Executive', company: 'HP', context: 'Managed John directly at PlayStation', pullQuote: "John can scale and deploy rapidly, which is such a huge asset in fast moving industries. He built an app that provided millions of dollars to those who needed it most... It was incredibly impressive and it set the tone for a new PlayStation.", fullText: "John worked on my team at PlayStation as the brand and business were accelerating rapidly and he provided radical innovation across the organization. His ability to move seamlessly from project to project with tremendous results was impressive, as was his collaboration across diverse groups within the company. John can scale and deploy rapidly, which is such a huge asset in fast moving industries. John was part of a huge undertaking at PlayStation for me - which was the building of an app to facilitate a charity that we were building under the PlayStation brand. He built the app, rapidly optimized and iterated the final product, and helped build the support that provided millions of dollars to those who needed it most amongst both gaming communities and those outside of gaming. It was incredibly impressive and it set the tone for a new PlayStation, which cared not only about games and revenues, but also the community it served. John was a huge part of this initiative, and I am still grateful for his incredible efforts. I strongly recommend John to any future employer and look forward to the day when I work together with him again!" },
        'jack-b': { name: 'Jack Buser', title: 'Director for Games, Strategic Industries', company: 'Google Cloud', context: 'Managed John directly at PlayStation', pullQuote: "John is an incredible game producer and deeply creative. He was able to create breakthrough concepts that attracted millions of players, and always shipped our games and experiences on time and on budget. He comes with my highest recommendation!", fullText: "John is an incredible game producer and deeply creative. Working with him at PlayStation was an absolute pleasure. John was able to create breakthrough concepts that attracted millions of players, and always shipped our games and experiences on time and on budget. You can always trust John to create content that delights you, your team, and especially your customers. He comes with my highest recommendation!" },
        'jim-w': { name: 'Jim Wallace', title: 'Sr. Director, Release Compliance', company: '2K Games', context: 'Managed John directly at PlayStation', pullQuote: "John's creativity and passion for unique player experiences truly shone. His ability to ideate and develop innovative content was exceptional, and his cross-functional collaboration skills were a standout.", fullText: "I had the pleasure of being John’s manager on the PlayStation Home team where his creativity and passion for unique player experiences truly shone. John's ability to ideate and develop innovative content for the platform was exceptional. He consistently brought fresh and engaging ideas to the table, always thinking outside the box to create memorable experiences that consistently exceeded our users expectations.<br/><br/>John's cross-functional collaboration skills were also a standout. He effortlessly worked with teams across various departments, building strong relationships and fostering a collaborative environment. His ability to navigate complex projects and secure buy-in from key stakeholders was instrumental in the success of our content releases.<br/><br/>Furthermore, John's organizational skills and attention to detail were impeccable. He was a master at scheduling and planning events, ensuring that every aspect was meticulously managed and executed flawlessly. His ability to anticipate potential challenges and proactively address them demonstrated his exceptional problem-solving skills.<br/><br/>John’s creativity, collaboration skills, and organizational abilities make him an invaluable asset to any team. I have no doubt that he will continue to excel in his future endeavors." }
    };
    const caseStudies = {
        's-tier-1': { tier: 's', title: 'GenAI Game Director For Hire', narrativeAngle: "When a critical leadership gap threatened to derail a multi-million dollar opportunity, I stepped beyond my Product Manager role to architect and build a high-fidelity, GenAI-powered game prototype. This hands-on approach secured the publishing deal in under 90 days.", strategicChallenge: "To secure a major publishing deal for a new GenAI interactive fiction title, the team needed a compelling creative vision and pitch materials. The project risked stalling due to the unavailability of the Game Director.", myRole: "As de facto Creative Director, I proactively took full ownership of the creative vision, defined core mechanics, and personally created the high fidelity mockups that would greenlight the project and align all stakeholders.", execution: ["Developed the core pitch decks, established the visual identity, and defined the gameplay loop.", "Collaborated with engineering to design an AI-enhanced content pipeline and scoped an internal CMS.", "Personally built a high-fidelity video prototype using a full suite of GenAI tools: Midjourney, Kling, Runway, and ElevenLabs."], innovations: { title: "Key Innovations & Tools", description: "The prototype was built using a full suite of modern GenAI tools to rapidly visualize the product and establish a scalable production pipeline.", stack: [{ tool: "Midjourney", use: "Character creation and concept art." }, { tool: "Kling & Runway", use: "Character animation and lip-syncing." }, { tool: "ElevenLabs", use: "Converting my own VO into character voices." }, { tool: "Logic Pro X & Final Cut", use: "Final composition, UI, and sound." }] }, results: "The prototype I created was a key factor in securing a multi-million-dollar publishing deal, unifying stakeholders and establishing a new, scalable production pipeline for the studio." },
        's-tier-2': { tier: 's', title: 'Pitch to Profit: Saving The Dev Team', narrativeAngle: "With my team facing imminent layoffs after our platform was shut down, I conceived, pitched, and led the development of a new, sponsored PS4 application. By forging a partnership with Ad Sales and securing a $500k sponsorship, my team turned a departmental crisis into a commercial success with a 100% profit margin, ensuring the future of every team member.", strategicChallenge: "During the shutdown of PlayStation Home, my entire team faced layoffs, so we needed to pivot away from a legacy platform. The challenge was to create a new, commercially viable PS4 project and upskill the team for future opportunities.", myRole: "As Intrapreneur & Project Lead, I took end-to-end ownership of the business and product strategy, from identifying the market opportunity and securing executive buy-in to leading the cross-functional team through final delivery.", execution: ["Identified and pitched the concept of a sponsored E3 app, forging a key partnership with the Ad Sales team.", "Successfully secured a $500,000 sponsorship from Amazon Prime Video.", "Co-Designed the entire gamified experience, including the quest loop and a high-value reward system to maximize user engagement.", "Acted as Producer for the marketing trailer, wrote all in-game copy, and secured the rights to use a beloved character (Toro) as the event's host."], innovations: { title: "Key Features & Innovations", description: "The app was designed to be an immersive and rewarding experience for virtual E3 attendees, and build buzz around the new PS4.", stack: [{ tool: "Immersive FTUE", use: "Personalized virtual E3 pass with the user's PSN Name." }, { tool: "Strategic IP Integration", use: "Secured rights to use Toro from Japan Studio as the event host." }, { tool: "High-Value Rewards", use: "Offered Sony Rewards points, Amazon Prime trials, and PS Now beta invites." }] }, results: "The project secured a $500k sponsorship and was delivered for under $250k (a 100% profit margin), which led to the entire team being saved from layoffs and formed into a new business unit." },
        's-tier-3': { tier: 's', title: 'Hogwarts Legacy: The Final Quest', narrativeAngle: "Tasked with supporting a major multi-million dollar marketing campaign for a new IP, I designed and executed a three-month gamified experience that generated millions of dollars in total game sales from hundreds of thousands of participants. The campaign successfully educated a massive audience, built a vibrant community from scratch, and directly guided players into the purchase funnel.", strategicChallenge: "The launch of a major new IP, Hogwarts Legacy, required a campaign that could educate a broad audience, build a dedicated community, and convert players. The core challenge was to prove the engagement platform's unique ability to drive sales and create value for major marketing campaigns.", myRole: "As Sr. Product Manager & Creative Strategy Lead, I owned the entire creative and product strategy for the quest, inventing new platform features and designing the full user journey to meet the campaign's complex business goals.", execution: ["Invented and designed the 'Timed Reward' and 'Multiple Choice Task' systems.","Designed a bespoke leaderboard to track individual and House stats.","Developed a resourceful content strategy to repurpose old trailers.","Added a permanent 'Pre-order' link to the quest UI to reduce purchase friction."], innovations: { title: "Key Innovations & Data Capture", description: "The campaign required new, bespoke features that not only drove engagement but also captured otherwise inaccessible data by linking activity directly to PSN IDs.", stack: [{ tool: "'Choose Your House' Community Builder", use: "Gave players an immediate team and reason to care about the outcome." },{ tool: "Timed Reward System", use: "Kept the community engaged over a multi-week period with weekly challenges." },{ tool: "Bespoke Leaderboard", use: "Created layers of personal and communal motivation." }] }, results: "The campaign generated multi-million dollar sales with an exceptionally high conversion rate. The massive engagement and direct sales data proved the platform's unique value, securing its role as a key tool for future AAA marketing campaigns." },
        'a-tier-1': { title: 'Quest for Greatness', tier: 'a', narrativeAngle: "This case study showcases high-level strategic thinking by aligning a visionary 'love letter to PlayStation history' concept with the critical business objective of migrating users from PS3 to PS4.", strategicChallenge: "Incentivize the PS3 user base to migrate to the new PS4 by creating a compelling onboarding experience that builds excitement and provides tangible reasons to upgrade hardware during a high-risk period for player churn.", myRole: "As Project Lead, Level Designer, and Game Designer, I designed the entire gameplay experience, sourced high-value rewards, and managed the complex international IP approval process for key characters.", execution: ["Sourced high-value PS4 rewards to create a direct upgrade incentive.","Initiated contact and managed the approval process with PlayStation Japan to use Toro and Kuro.","Wrote all in-game text, including quest descriptions and NPC dialogue."], innovations: { title: "Key Innovations & Features", description: "The event pioneered new forms of gameplay and engagement for the platform, centered on a deep appreciation for the PlayStation brand.", stack: [{ tool: "Nostalgic 'Love Letter' Concept", use: "Created a celebration of PlayStation's history to reward fans and build excitement for the future." },{ tool: "Point & Click Adventure Gameplay", use: "Pioneered a new isometric, narrative-driven adventure style for the platform." },{ tool: "Digital Card Collection System", use: "Created a new card collection and trading system that was later imitated by other teams." }] }, results: "The event was a massive success, created a powerful incentive for users to upgrade to PS4, and led directly to my promotion to Sr. Manager." },
        'a-tier-2': { title: 'Global Live Event Platform', tier: 'a', narrativeAngle: "A powerful, long-term story of platform building, strategic vision, and data-driven innovation over a five-year journey.", strategicChallenge: "PlayStation's event presence relied on a basic third-party app with no unified data strategy, no ownership of the user experience, and no way to measure the true ROI of our largest marketing activations.", myRole: "As Product Vision Lead, Producer, & Game/Quest Designer, I owned the entire platform lifecycle, from initial concept to global deployment and iteration over five years.", execution: ["Built the global platform from the ground up, starting with a 3rd party app for benchmarking.","Led a strategic 'One Sony' data initiative at EVO 2022 to provide value across multiple Sony divisions.","Designed all core features, from quest systems to RSVP and line management."], innovations: { title: "Product Evolution & Key Innovations", description: "The platform's growth tells a story of continuous, data-informed innovation:", stack: [{ tool: "2017: QR Code Quests & RSVP", use: "Added high-demand features for demo and autograph management." },{ tool: "2018: City-Wide Treasure Hunt", use: "Expanded the concept of a 'live event' in Lucca, Italy." },{ tool: "2019: Deep Snowflake Integration", use: "Allowed for rich consumer segmentation at Paris Games Week." },{ tool: "2022: 'One Sony' Web Widget", use: "Provided unified data across Sony Pictures, Music, and Crunchyroll." }] }, results: "Captured data from 41.9k attendees at one event, proved a $3.8M software spend from an attendee cohort, and achieved an 87% login rate at another." },
        'b-tier-1': { title: 'Virtual E3 on PlayStation Home', tier: 'b', narrativeAngle: "This case study is the cornerstone of the 'visionary' pillar, demonstrating an early understanding of 'metaverse' brand activations long before the concept became mainstream.", strategicChallenge: "Translate the massive scale and energy of E3 into a compelling virtual experience for millions of fans who could not attend in person, providing real value to both players and publishing partners.", myRole: "As Producer, Game Designer, Quest Designer, & Sole Writer, I orchestrated every creative facet of the virtual E3 booth, from its 1:1 digital twin design to writing a full script for celebrity host LL Cool J.", execution: ["Worked with the physical event team to acquire official 3D layout files to build the virtual booth.","Collaborated with dozens of internal and external partners to design and implement promotional quests.","Designed the complete UI/UX for all interactive elements, including kiosks and mini-games.","Created an intuitive 'breadcrumb' system to guide players through the massive space."], innovations: { title: "Key Innovations & Features", description: "The experience pioneered several groundbreaking features for the time.", stack: [{ tool: "1:1 Digital Twin", use: "Created a stunningly accurate virtual replica of the physical E3 booth." },{ tool: "Live-Action NPC Host", use: "Pioneered using a live-action host (Christina Lee) as the event's official NPC guide." },{ tool: "Strategic PS Vita Integration", use: "Implemented the PS Vita as the event's primary HUD, serving as an immersive ad for the hardware." },{ tool: "High-Value Reward Strategy", use: "Sourced beta codes and exclusive virtual items to create viral buzz and FOMO." }] }, results: "The Virtual E3 events became legendary within the community, set a new standard for digital brand activations, and provided massive, measurable value to dozens of partners." },
        'b-tier-2': { title: 'The Employee Engagement App', tier: 'b', narrativeAngle: "This case study is a powerful demonstration of intrapreneurship and operational leadership, proving my skills can solve complex, internal business problems.", strategicChallenge: "Support HR's 'Return to Office' initiative by replacing an inefficient, manual giveaway process with a scalable digital solution, while navigating multiple employee ID systems and complex global logistics.", myRole: "As the Intrapreneur, Product Lead, and Global Coordinator, I drove the project from concept to global rollout, securing funding, managing the dev team, and co-managing all operational logistics and communications.", execution: ["Pitched the initial concept and secured funding directly from the VP of HR.","Authored all use cases, business requirements, and design documentation.","Ran the agile development team, managed the backlog, and led sprint planning.","Wrote all employee communications and managed global testing across 77 locations."], innovations: { title: "Project History & Evolution", description: "The project had a multi-year journey, demonstrating resilience and the ability to adapt to changing business needs:", stack: [{ tool: "Digital Transformation", use: "Replaced a manual highlighter-and-spreadsheet process with a fully digital system." },{ tool: "Companion Staff App", use: "Empowered HR teams with a dedicated app for on-site QR code check-ins." },{ tool: "Employee 'Allow List'", use: "Developed a secure feature to manage eligibility across disparate internal ID systems." }] }, results: "Successfully deployed across 77 international locations with 6,481 employees using the system. The project became the official blueprint for all future large-scale employee programs at PlayStation." },
        'b-tier-3': { title: 'Winter Hullabaloo', tier: 'b', narrativeAngle: "My debut project on PlayStation Home demonstrated the ability to make an immediate impact, creating a true community moment and pushed the boundaries of storytelling and engagement for virtual events.", strategicChallenge: "Combat holiday season player churn by creating a compelling, free-to-play experience to keep players engaged on the PS3, while also serving as a promotional vehicle for upcoming titles.", myRole: "As Game Producer, Game Designer, & Writer, I owned the entire creative vision and execution, from initial world design sketches to all in-game writing and producing the marketing trailer.", execution: ["Personally designed the new, multi-zone virtual world from the ground up.","Handled all writing, including the game design document and all dialogue.","Worked closely with art and code teams to ensure the vision was executed faithfully.","Produced the official marketing trailer for the event."], innovations: { title: "World & Game Design", description: "The event was designed as a vibrant, multi-zone social world, not just a static holiday theme.", stack: [{ tool: "Social Hubs", use: "Designed interactive areas like a hot tub and ice-skating rink to encourage player interaction." },{ tool: "Layered Exploration", use: "Filled the world with secrets including an unlockable cave and hidden NPCs." },{ tool: "Community Focus", use: "Centered the design on creating a 'third place' for the community, increasing session length." }] }, results: "The event was a massive, highly-rated success featured on the PlayStation Blog, set a new quality bar for seasonal events, and established a track record of rising community satisfaction." },
        'b-tier-4': { title: 'Charcoal Champ', tier: 'b', narrativeAngle: "This case study showcases raw, hands-on game design talent, proving I could design an engaging, novel, and replayable game from the ground up.", strategicChallenge: "Create a fun, addictive, and replayable mini-game to serve as a core pillar of a major seasonal event (the 4th of July). This was my first opportunity as a lead game designer.", myRole: "As Lead Game Designer and Sound Engineer, I owned the entire design process from initial concept to final implementation, including recording all audio.", execution: ["Created the core game design document, starting with pen-and-paper sketches.","Conducted extensive analog (pen and paper) game tests to balance the challenge before coding began.","Worked closely with art and engineering teams to ensure the vision was executed faithfully."], innovations: { title: "Game Design & Mechanics", description: "The game was designed as a deceptively complex speed-trial puzzle game, blending the core mechanics of Tetris and Candy Crush.", stack: [{ tool: "Core Loop & Cooking System", use: "A speed-trial where players placed Tetris-shaped meats on a grill with a multi-stage cooking process." },{ tool: "Strategic Depth", use: "The grill had three distinct heat zones, and players could rotate meat to manipulate cooking times." },{ tool: "Scoring & Risk/Reward", use: "A point system rewarded perfectly cooked meat, fulfilling specific orders, and using power-ups." }] }, results: "The project was a huge hit within the community, was well-received for its addictive gameplay, and served as a personal and professional milestone that proved my capabilities as a lead game designer." },
        'c-tier-1': {
            tier: 'c',
            title: 'Awards & Achievements',
            narrativeAngle: "This collection of accomplishments demonstrates the underlying passion, raw creativity, and relentless drive for innovation that define my professional character.",
            achievements: [
                {
                    category: "Corporate Innovation",
                    items: [
                        {
                            emoji: '🏆',
                            title: "PlayStation Hackathon Winner (2x)",
                            details: [
                                "Achieved first place in 2022 & 2023 company-wide Hackathons.",
                                "Winning concepts included Augmented Reality and Biometric Gameplay Data."
                            ],
                            takeaway: "Transformed engineering goals into award-winning, playable game concepts by leading game design, UI, and filmmaking."
                        },
                        {
                            emoji: '💡',
                            title: "Confidential Patent Filings (Co-Inventor)",
                            details: [
                                "Co-inventor on two confidential patents for Sony Interactive Entertainment.",
                                "Focus areas: Accessibility and Next-Generation UX using biofeedback."
                            ],
                            takeaway: "From biofeedback to groundbreaking accessibility features, my focus is on inventing tech that deepens the player experience."
                        }
                    ]
                },
                {
                    category: "Personal Creative Lab",
                    items: [
                        {
                            emoji: '🎬',
                            title: "AI-Generated Music Video",
                            details: [
                                "Created a complete, 2-minute animated music video in under five days.",
                                "Handled all aspects solo: songwriting, music production, GenAI visuals, and video editing."
                            ],
                            takeaway: "Executed a complex, AI-powered animated music video from scratch in under a week."
                        },
                        {
                            emoji: '✨',
                            title: "Freepik Hackathon Finalist",
                            details: [
                                "Placed as a finalist in a competitive GenAI hackathon using a new tool for the first time.",
                                "Won a $350 pass to the Upscale Conf 2025."
                            ],
                            takeaway: "Walked in, learned a brand-new AI toolset on the fly, and walked out a finalist 24 hours later."
                        }
                    ]
                }
            ]
        }
    };
    const projectPlaylist = ['s-tier-1', 's-tier-2', 's-tier-3', 'a-tier-1', 'a-tier-2', 'b-tier-1', 'b-tier-2', 'b-tier-3', 'b-tier-4', 'c-tier-1'];

    const tasks = {
        's-tier-1': { title: 'View "GenAI Game Director"', secretTitle: 'Next-Gen Game Direction', completed: false },
        's-tier-2': { title: 'View "Pitch to Profit"', secretTitle: 'A Team-Saving Pivot', completed: false },
        's-tier-3': { title: 'View "Hogwarts Legacy"', secretTitle: 'Record-Breaking Revenue', completed: false },
        'a-tier-1': { title: 'View "Quest for Greatness"', secretTitle: 'A Love Letter To PlayStation', completed: false },
        'a-tier-2': { title: 'View "Global Live Event Platform"', secretTitle: 'The "One Sony" Vision', completed: false },
        'b-tier-1': { title: 'View "Virtual E3"', secretTitle: 'A Legendary Digital Twin', completed: false },
        'b-tier-2': { title: 'View "Employee App"', secretTitle: 'Powering HR Initiatives', completed: false },
        'b-tier-3': { title: 'View "Winter Hullabaloo"', secretTitle: 'My Debut Project', completed: false },
        'b-tier-4': { title: 'View "Charcoal Champ"', secretTitle: 'A Deep Puzzle Game', completed: false },
        'c-tier-1': { title: 'View "Awards & Achievements"', secretTitle: 'A Habit of Innovation', completed: false },
        'kudos': { title: 'View "Kudos"', secretTitle: 'Game Recognize Game', completed: false },
        'contact': { title: 'Click Email Button', secretTitle: 'Let\'s build something amazing!', completed: false },
        'linkedin': { title: 'Visit LinkedIn Profile', secretTitle: 'Let\'s get connected!', completed: false },
        'gamification-icon': { title: 'Tap Gamification Icon', secretTitle: 'Engagement Wizard', completed: false },
        'genai-icon': { title: 'Tap GenAI Icon', secretTitle: 'Lifelong Learner', completed: false },
        'storytelling-icon': { title: 'Tap Storytelling Icon', secretTitle: 'World Builder', completed: false },
    };

    const quests = {
        's-tier-meta': { title: 'Top Tier Time', xp: 30, completed: false, required: ['s-tier-1', 's-tier-2', 's-tier-3'], objective: 'View all S-Tier projects to assess high-level strategic impact.' },
        'a-tier-meta': { title: 'Straight A\'s', xp: 20, completed: false, required: ['a-tier-1', 'a-tier-2'], objective: 'Explore A-Tier projects demonstrating vision and platform growth.' },
        'b-tier-meta': { title: 'B is for Builder', xp: 15, completed: false, required: ['b-tier-1', 'b-tier-2', 'b-tier-3', 'b-tier-4'], objective: 'Review B-Tier projects that showcase foundational hands-on skills.' },
        'game-recognize-game': { title: 'Game Recognize Game', xp: 10, completed: false, required: ['c-tier-1', 'kudos'], objective: "Don't take my word for it 👀" },
        'player-card-quest': { title: 'Rare Player Card', xp: 10, completed: false, required: ['gamification-icon', 'genai-icon', 'storytelling-icon'], objective: 'Who Is This Guy?' },
        'contact-quest': { title: 'Let\'s Connect', xp: 15, completed: false, required: ['contact', 'linkedin'], objective: 'Make first contact to discuss future opportunities.' },
    };
    
    let gameState = { xp: 0, completedTasks: [], completedQuests: [] };
    const totalPossibleXp = Object.values(quests).reduce((sum, quest) => sum + quest.xp, 0);

    // --- TEMPLATES AND RENDERING ---
    const viewTemplates = {
        home: `
            <section class="section section-top">
                <div class="player-card p-8 flex flex-col">
                    <div class="flex justify-between items-start"><h2 class="text-3xl font-bold text-white">John Sweeney</h2></div>
                    <div class="my-4 flex-shrink-0 hologram-container">
                        <div id="profile-image" class="aspect-square w-full bg-slate-700/50 rounded-lg border border-slate-600 flex items-center justify-center bg-cover bg-center" style="background-image: url(${profileImage});">
                           <div class="profile-image-overlay"></div>
                        </div>
                    </div>
                    <div class="flex-grow flex flex-col text-center"><h3 class="text-2xl font-bold text-white">Sr. Product Manager</h3><p class="mt-1 text-lg text-violet-300">Engagement Architect</p></div>
                    <div class="grid grid-cols-3 gap-4 pt-6 border-t border-slate-700">
                        <div class="text-center superpower-icon" data-task-id="gamification-icon" data-title="Gamification" data-tooltip="Architecting engagement systems to drive user behavior and achieve business goals.">
                            <div class="flex justify-center mb-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-slate-400"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" /></svg></div>
                            <p class="font-bold text-white">Gamification</p>
                        </div>
                        <div class="text-center superpower-icon" data-task-id="genai-icon" data-title="GenAI" data-tooltip="Leveraging the latest AI tools to accelerate creative prototyping and production.">
                            <div class="flex justify-center mb-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-slate-400"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg></div>
                            <p class="font-bold text-white">GenAI</p>
                        </div>
                        <div class="text-center superpower-icon" data-task-id="storytelling-icon" data-title="Storytelling" data-tooltip="Crafting compelling narratives that connect with audiences on an emotional level.">
                            <div class="flex justify-center mb-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-slate-400"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" /></svg></div>
                            <p class="font-bold text-white">Storytelling</p>
                        </div>
                    </div>
                    <div id="tooltip-display-area"></div>
                </div>
            </section>
        `,
        projects: `
            <section class="section">
                 <div class="container mx-auto">
                    <div class="text-center"><h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">Project Tier List</h1><p class="mt-4 max-w-2xl mx-auto text-lg text-slate-400">My highest-impact work, curated for you. Click any card to view the detailed case study.</p></div>
                    <div class="mt-16 max-w-6xl mx-auto">
                        <div class="tier-row"><div class="tier-label s-tier">S</div><div class="project-cards-container"><a href="#" data-task-id="s-tier-1" class="task-trigger project-card"><h3 class="text-xl font-bold text-white">${caseStudies['s-tier-1'].title}</h3><p class="mt-2 text-slate-300 flex-grow md:block hidden">When a leadership gap threatened a multi-million dollar opportunity, I stepped up to architect and build a GenAI-powered prototype that secured the deal.</p></a><a href="#" data-task-id="s-tier-2" class="task-trigger project-card"><h3 class="text-xl font-bold text-white">${caseStudies['s-tier-2'].title}</h3><p class="mt-2 text-slate-300 flex-grow md:block hidden">Pivoted from a dying platform to create a sponsored PS4 app with 100% profit margin, saving my entire team from layoffs.</p></a><a href="#" data-task-id="s-tier-3" class="task-trigger project-card"><h3 class="text-xl font-bold text-white">${caseStudies['s-tier-3'].title}</h3><p class="mt-2 text-slate-300 flex-grow md:block hidden">Architected a gamified quest system that drove millions in revenue for a major AAA launch.</p></a></div></div>
                        <div class="tier-row"><div class="tier-label a-tier">A</div><div class="project-cards-container"><a href="#" data-task-id="a-tier-1" class="task-trigger project-card"><h3 class="text-xl font-bold text-white">${caseStudies['a-tier-1'].title}</h3><p class="mt-2 text-slate-300 flex-grow md:block hidden">Designed the largest event in PS Home history to strategically onboard PS3 users to the next-gen PS4.</p></a><a href="#" data-task-id="a-tier-2" class="task-trigger project-card"><h3 class="text-xl font-bold text-white">${caseStudies['a-tier-2'].title}</h3><p class="mt-2 text-slate-300 flex-grow md:block hidden">Built a proprietary event app from scratch and scaled it into a powerful, data-gathering tool for the entire "One Sony" ecosystem.</p></a></div></div>
                        <div class="tier-row"><div class="tier-label b-tier">B</div><div class="project-cards-container"><a href="#" data-task-id="b-tier-1" class="task-trigger project-card b-tier-card"><h3 class="text-lg font-bold text-white">${caseStudies['b-tier-1'].title}</h3></a><a href="#" data-task-id="b-tier-2" class="task-trigger project-card b-tier-card"><h3 class="text-lg font-bold text-white">${caseStudies['b-tier-2'].title}</h3></a><a href="#" data-task-id="b-tier-3" class="task-trigger project-card b-tier-card"><h3 class="text-lg font-bold text-white">${caseStudies['b-tier-3'].title}</h3></a><a href="#" data-task-id="b-tier-4" class="task-trigger project-card b-tier-card"><h3 class="text-lg font-bold text-white">${caseStudies['b-tier-4'].title}</h3></a></div></div>
                        <div class="tier-row"><div class="tier-label c-tier">C</div><div class="project-cards-container"><a href="#" data-task-id="c-tier-1" class="task-trigger project-card b-tier-card"><h3 class="text-lg font-bold text-white">${caseStudies['c-tier-1'].title}</h3></a></div></div>
                    </div>
                </div>
            </section>
        `,
        kudos: `
            <section class="section section-top">
                 <div class="container mx-auto">
                    <div class="text-center"><h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">Kudos</h1><p class="mt-4 max-w-2xl mx-auto text-lg text-slate-400">Kind words from former managers and key collaborators.</p></div>
                    <div id="kudos-list" class="mt-16 max-w-4xl mx-auto w-full space-y-8"></div>
                </div>
            </section>
        `,
        contact: `
            <section class="section section-top">
                <div class="max-w-xl mx-auto">
                    <div class="text-center bg-slate-800/50 p-8 sm:p-12 rounded-2xl border border-slate-700">
                        <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">Let's Create Something Amazing.</h1>
                        <p class="mt-4 text-lg text-slate-300">I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team.</p>
                        <div class="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                            <button class="task-trigger inline-block bg-violet-600 hover:bg-violet-500 text-white font-bold text-lg px-8 py-4 rounded-lg transition-transform duration-100 active:scale-95 w-full sm:w-auto" data-task-id="contact">Email Me</button>
                            <button class="task-trigger inline-block bg-sky-600 hover:bg-sky-500 text-white font-bold text-lg px-8 py-4 rounded-lg transition-transform duration-100 active:scale-95 w-full sm:w-auto" data-task-id="linkedin">LinkedIn</button>
                        </div>
                    </div>
                </div>
            </section>
        `
    };

    // --- STATE MANAGEMENT ---
    let notificationQueue = [];
    let isAnimatingNotification = false;

    const saveState = () => localStorage.setItem('portfolioQuestState', JSON.stringify(gameState));

    const loadState = () => {
        const saved = localStorage.getItem('portfolioQuestState');
        if (saved) {
            try {
                const savedGameState = JSON.parse(saved);
                if (savedGameState && typeof savedGameState === 'object') {
                    gameState.xp = savedGameState.xp || 0;
                    gameState.completedTasks = Array.isArray(savedGameState.completedTasks) ? savedGameState.completedTasks : [];
                    gameState.completedQuests = Array.isArray(savedGameState.completedQuests) ? savedGameState.completedQuests : [];
                    
                    Object.keys(tasks).forEach(id => { tasks[id].completed = gameState.completedTasks.includes(id); });
                    Object.keys(quests).forEach(id => { quests[id].completed = gameState.completedQuests.includes(id); });
                } else {
                    throw new Error("Invalid saved state format");
                }
            } catch (error) {
                console.error("Could not parse saved state, starting fresh.", error);
                gameState = { xp: 0, completedTasks: [], completedQuests: [] };
            }
        }
    };
    
    // --- NOTIFICATIONS & ANIMATION QUEUE ---
    const processNotificationQueue = () => {
        if (isAnimatingNotification || notificationQueue.length === 0) {
            return;
        }
        isAnimatingNotification = true;
        const notification = notificationQueue.shift();
        
        if (notification.type === 'task') {
            showTaskCompleteNotification(notification.data);
            setTimeout(() => {
                isAnimatingNotification = false;
                processNotificationQueue();
            }, 3500);
        } else if (notification.type === 'quest') {
            showQuestCompleteAnimation(notification.data);
            setTimeout(() => {
                isAnimatingNotification = false;
                processNotificationQueue();
            }, 4000);
        }
    };

    const showTaskCompleteNotification = (task) => {
        const notificationContainer = document.getElementById('notification-container');
        if (notificationContainer) {
            const toast = document.createElement('div');
            toast.className = 'task-toast';
            toast.innerHTML = `
                <svg class="crown-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5 18h14M5 14h14l1-9-4 3-4-5-4 5-4-3 1 9Z" /></svg>
                <div>
                    <p>Task Complete</p>
                    <p>${task.secretTitle}</p>
                </div>
                <div class="progress-bar"></div>`;
            notificationContainer.appendChild(toast);
            setTimeout(() => {
                toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(20px)';
                setTimeout(() => toast.remove(), 300);
            }, 3200);
        }
    };

    const showQuestCompleteAnimation = (quest) => {
        document.body.style.pointerEvents = 'none';
        header.style.pointerEvents = 'none';
        const questCompleteOverlay = document.getElementById('quest-complete-overlay');
        if (!questCompleteOverlay) return;
        questCompleteOverlay.innerHTML = `
            <div class="backdrop" style="background-color: rgba(15, 23, 42, 0.7); backdrop-filter: blur(4px);"></div>
            <div class="quest-toast">
                <svg class="crown-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5 18h14M5 14h14l1-9-4 3-4-5-4 5-4-3 1 9Z" /></svg>
                <h2>Quest Complete</h2>
                <p>${quest.title} (+${quest.xp} XP)</p>
            </div>`;
        questCompleteOverlay.classList.add('visible');
        setTimeout(() => {
            questCompleteOverlay.classList.remove('visible');
            document.body.style.pointerEvents = 'auto';
            header.style.pointerEvents = 'auto';
            setTimeout(() => { questCompleteOverlay.innerHTML = ''; }, 500);
        }, 3500);
    };

    const showContactModal = (type) => {
        let modalContent;
        if (type === 'linkedin') {
            modalContent = `
                <h3 class="text-xl font-bold text-white">Open LinkedIn?</h3>
                <p class="text-slate-400 mt-2">You are about to open a new tab to my LinkedIn profile.</p>
                <div class="mt-6 flex justify-center gap-4">
                    <button id="confirm-linkedin-yes" class="bg-sky-600 hover:bg-sky-500 text-white font-bold py-2 px-6 rounded-lg">Proceed</button>
                    <button id="confirm-modal-no" class="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-6 rounded-lg">Cancel</button>
                </div>`;
        } else {
             modalContent = `
                <h3 class="text-xl font-bold text-white">Contact Me</h3>
                <p class="text-slate-400 mt-2">Choose your preferred method.</p>
                <div class="mt-6 flex flex-col gap-4">
                    <a href="mailto:jsweeney510@gmail.com" id="confirm-email-open" class="task-trigger bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-6 rounded-lg block" data-task-id="contact">Open Email App</a>
                    <button id="confirm-email-copy" class="bg-slate-600 hover:bg-slate-500 text-white font-bold py-3 px-6 rounded-lg">Copy Email Address</button>
                </div>`;
        }
        confirmOverlay.innerHTML = `<div class="backdrop"></div><div id="confirm-modal" class="text-center">${modalContent}</div>`;
        confirmOverlay.classList.add('visible');
    };

    // --- CORE GAME LOGIC ---
    const checkQuests = () => {
        let newlyCompletedQuest = null;
        for (const questId in quests) {
            const quest = quests[questId];
            if (!quest.completed) {
                const allRequiredTasksCompleted = quest.required.every(taskId => gameState.completedTasks.includes(taskId));
                if (allRequiredTasksCompleted) {
                    quest.completed = true;
                    gameState.xp += quest.xp;
                    if (!gameState.completedQuests.includes(questId)) {
                        gameState.completedQuests.push(questId);
                    }
                    newlyCompletedQuest = quest;
                    break;
                }
            }
        }
        return newlyCompletedQuest;
    };

    const completeTask = (taskId) => {
        const task = tasks[taskId];
        if (task && !task.completed) {
            task.completed = true;
            if (!gameState.completedTasks.includes(taskId)) gameState.completedTasks.push(taskId);

            notificationQueue.push({ type: 'task', data: task });
            processNotificationQueue();
            
            document.querySelectorAll('.quest-btn').forEach(btn => btn.classList.add('wobble'));
            setTimeout(() => { document.querySelectorAll('.quest-btn').forEach(btn => btn.classList.remove('wobble')); }, 800);

            let newlyCompletedQuest = checkQuests();
            while(newlyCompletedQuest) {
                notificationQueue.push({ type: 'quest', data: newlyCompletedQuest });
                newlyCompletedQuest = checkQuests();
            }
            processNotificationQueue();

            saveState();
            renderQuestBoard();
            
            if (Object.keys(quests).length === gameState.completedQuests.length) {
                document.querySelectorAll('.quest-btn').forEach(b => b.classList.add('completed-all'));
            }
        }
    };

    const resetState = () => {
        localStorage.removeItem('portfolioQuestState');
        gameState = { xp: 0, completedTasks: [], completedQuests: [] };
        Object.keys(tasks).forEach(id => { tasks[id].completed = false; });
        Object.keys(quests).forEach(id => { quests[id].completed = false; });
        
        confirmOverlay.classList.remove('visible');
        const notificationContainer = document.getElementById('notification-container');
        if (notificationContainer) {
            const toast = document.createElement('div');
            toast.className = 'task-toast';
            toast.innerHTML = `<div><p class="font-bold text-white">Progress Reset</p><p>Your quest has been restarted.</p></div><div class="progress-bar"></div>`;
            notificationContainer.appendChild(toast);
             setTimeout(() => {
                toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(20px)';
                setTimeout(() => toast.remove(), 300);
            }, 2000);
        }
        document.querySelectorAll('.quest-btn').forEach(b => b.classList.remove('completed-all'));
        renderQuestBoard();
    };

    // --- UI RENDERING & EVENT HANDLERS ---
    const renderQuestBoard = () => {
        const progressPercentage = totalPossibleXp > 0 ? (gameState.xp / totalPossibleXp) * 100 : 0;
        let headerHTML = `<h2 class="text-3xl font-bold text-white text-center mb-2">Mission Briefing</h2>
                          <p class="text-center text-slate-400 mb-6">Complete Quests to uncover my key career moments.</p>`;

        if (progressPercentage >= 100) {
            headerHTML = `<div class="text-center">
                            <svg class="completionist-crown" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5 18h14M5 14h14l1-9-4 3-4-5-4 5-4-3 1 9Z" /></svg>
                            <h2 class="text-3xl font-bold text-yellow-300 -mt-8 mb-2">Mission Accomplished!</h2>
                            <p class="text-slate-300 mb-6">Thank you for exploring my work. You've uncovered all the key moments. I look forward to connecting with you.</p>
                          </div>`;
        }

        questOverlay.innerHTML = `
            <div class="backdrop"></div>
            <div id="quest-board" class="${progressPercentage >= 100 ? 'board-complete' : ''}">
                 <button class="close-modal-btn"><svg class="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
                ${headerHTML}
                <div class="quest-progress-container">
                    <div class="progress-labels">
                        <span>Overall Progress</span>
                        <span id="xp-label">${gameState.xp} / ${totalPossibleXp} XP</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-bar-fill" style="width: ${progressPercentage}%"></div>
                    </div>
                </div>
                <div id="quest-list"></div>
                <button id="reset-quest-btn" class="mt-6 w-full text-center text-xs text-slate-500 hover:text-slate-300 transition">Reset Quest Progress</button>
            </div>`;
        
        const questListEl = questOverlay.querySelector('#quest-list');
        if (!questListEl) return;

        Object.keys(quests).forEach(questId => {
            const quest = quests[questId];
            const questItem = document.createElement('div');
            questItem.className = `quest-item ${quest.completed ? 'completed' : ''}`;
            const pipsHTML = quest.required.map(taskId => {
                if (!tasks[taskId]) return '';
                return `<div class="pip ${tasks[taskId].completed ? 'completed' : ''}"></div>`;
            }).join('');

            questItem.innerHTML = `
                <div class="quest-header">
                    <div class="quest-checkbox">${quest.completed ? '✔' : ''}</div>
                    <div class="flex-grow">
                        <p class="quest-title">${quest.title}</p>
                        <div class="task-progress-pips">${pipsHTML}</div>
                    </div>
                    <div class="quest-xp">+${quest.xp} XP</div>
                </div>
                <div class="sub-task-list">
                    <p class="quest-objective">${quest.objective}</p>
                    ${quest.required.map(taskId => {
                        const task = tasks[taskId];
                        if (!task) return '';
                        return `<div class="task-item ${task.completed ? 'completed' : ''}">
                                    <div class="task-checkbox"></div>
                                    <p class="task-title">${task.title}</p>
                                </div>`;
                    }).join('')}
                </div>`;
            questListEl.appendChild(questItem);
        });

        questListEl.querySelectorAll('.quest-header').forEach(header => {
            header.addEventListener('click', () => header.parentElement.classList.toggle('open'));
        });
    };
    
    const updateNavLight = (viewName) => {
        const navContainer = document.getElementById('desktop-hud');
        if (!navContainer) return;
        const activeButton = navContainer.querySelector(`.nav-btn[data-view="${viewName}"]`);
        const light = navContainer.querySelector('.nav-light');
        navContainer.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        if(activeButton) activeButton.classList.add('active');
        if (activeButton && light) {
            const containerRect = navContainer.getBoundingClientRect();
            const buttonRect = activeButton.getBoundingClientRect();
            light.style.width = `${buttonRect.width}px`;
            light.style.left = `${buttonRect.left - containerRect.left}px`;
        }
    };

    const renderView = (viewName) => {
        appContent.innerHTML = viewTemplates[viewName];
        appContent.className = 'section';
        document.body.classList.remove('mobile-scroll-lock');
        if (viewName === 'home' || viewName === 'contact' || viewName === 'projects' || viewName === 'kudos') {
             document.body.classList.add('mobile-scroll-lock');
        }
        if (viewName === 'home' || viewName === 'contact' || viewName === 'kudos') {
            appContent.classList.add('section-top');
        }
        updateNavLight(viewName);
        if (viewName === 'home') {
            initHomePage();
        } else if (viewName === 'kudos') {
            initKudosPage();
        }
    };

    const openCaseStudyModal = (taskId) => {
        const caseStudy = caseStudies[taskId];
        if (!caseStudy) return;
        
        caseStudyOverlay.innerHTML = '';
        
        let contentHTML;
        let wrapperClass = 'modal-content-wrapper';

        if (caseStudy.tier === 'c') {
            const categoriesHTML = caseStudy.achievements.map(category => {
                const itemsHTML = category.items.map(item => {
                    const detailsHTML = item.details.map(detail => `<li>${detail}</li>`).join('');
                    return `
                        <div class="achievement-card">
                            <div class="achievement-card-header">
                                <span class="achievement-card-emoji">${item.emoji}</span>
                                <h3 class="achievement-card-title">${item.title}</h3>
                            </div>
                            <ul class="list-disc achievement-card-details">${detailsHTML}</ul>
                            <div class="achievement-card-takeaway">${item.takeaway}</div>
                        </div>`;
                }).join('');
                return `<div class="w-full"><h2 class="achievement-category">${category.category}</h2><div class="space-y-4">${itemsHTML}</div></div>`;
            }).join('');

            const currentIndex = projectPlaylist.indexOf(taskId);
            const prevProjectId = currentIndex > 0 ? projectPlaylist[currentIndex - 1] : null;
            const nextProjectId = currentIndex < projectPlaylist.length - 1 ? projectPlaylist[currentIndex + 1] : null;
            const prevProject = prevProjectId ? caseStudies[prevProjectId] : null;
            const nextProject = nextProjectId ? caseStudies[nextProjectId] : null;

            contentHTML = `<nav id="project-nav-desktop" class="hidden md:block"><h3 class="font-bold text-white mb-4">Case Studies</h3><div class="flex flex-col gap-2">${projectPlaylist.map(id => `<a href="#" data-task-id="${id}" class="task-trigger project-nav-item ${id === taskId ? 'active' : ''} tier-${caseStudies[id].tier}">${caseStudies[id].title}</a>`).join('')}</div></nav>
                         <div class="modal-content tier-c"><div id="project-nav-mobile" class="md:hidden"><button data-task-id="${prevProjectId || ''}" class="task-trigger project-pager-btn tier-${prevProject?.tier}" ${!prevProjectId ? 'disabled' : ''}>&larr;</button><button class="close-modal-btn"><svg class="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></button><button data-task-id="${nextProjectId || ''}" class="task-trigger project-pager-btn tier-${nextProject?.tier}" ${!nextProjectId ? 'disabled' : ''}>&rarr;</button></div><div class="p-8 md:p-12"><h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">${caseStudy.title}</h1><p class="mt-4 text-lg text-slate-400 max-w-2xl">${caseStudy.narrativeAngle}</p><div class="mt-12 space-y-8">${categoriesHTML}</div></div></div>`;
             wrapperClass += ' with-sidebar';
        } else {
            const currentIndex = projectPlaylist.indexOf(taskId);
            const prevProjectId = currentIndex > 0 ? projectPlaylist[currentIndex - 1] : null;
            const nextProjectId = currentIndex < projectPlaylist.length - 1 ? projectPlaylist[currentIndex + 1] : null;
            const prevProject = prevProjectId ? caseStudies[prevProjectId] : null;
            const nextProject = nextProjectId ? caseStudies[nextProjectId] : null;
            const desktopNavLinks = projectPlaylist.map(id => {
                const project = caseStudies[id];
                if (!project) return '';
                const isActive = id === taskId;
                return `<a href="#" data-task-id="${id}" class="task-trigger project-nav-item ${isActive ? 'active' : ''} tier-${project.tier}">${project.title}</a>`;
            }).join('');
            const executionPoints = caseStudy.execution.map(point => `<li class="flex items-start gap-3"><svg class="w-6 h-6 text-violet-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg><span>${point}</span></li>`).join('');
            const stackPoints = caseStudy.innovations.stack.map(item => `<div class="bg-slate-800/50 p-3 rounded-lg"><p class="font-bold text-white">${item.tool}</p><p class="text-slate-400 text-sm">${item.use}</p></div>`).join('');
            const stackGridClass = caseStudy.innovations.stack.length === 3 ? 'stack-3-items' : '';
            wrapperClass += ' with-sidebar';
            contentHTML = `<nav id="project-nav-desktop" class="hidden md:block"><h3 class="font-bold text-white mb-4">Case Studies</h3><div class="flex flex-col gap-2">${desktopNavLinks}</div></nav><div class="modal-content tier-${caseStudy.tier}"><div id="project-nav-mobile" class="md:hidden"><button data-task-id="${prevProjectId || ''}" class="task-trigger project-pager-btn tier-${prevProject?.tier}" ${!prevProjectId ? 'disabled' : ''}>&larr;</button><button class="close-modal-btn"><svg class="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></button><button data-task-id="${nextProjectId || ''}" class="task-trigger project-pager-btn tier-${nextProject?.tier}" ${!nextProjectId ? 'disabled' : ''}>&rarr;</button></div><div class="p-8 md:p-12"><h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">${caseStudies[taskId].title}</h1><p class="mt-4 text-lg text-slate-400 max-w-2xl">${caseStudy.narrativeAngle}</p><div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"><div><h2 class="text-2xl font-bold text-white">Strategic Challenge</h2><p class="mt-2 text-slate-300">${caseStudy.strategicChallenge}</p></div><div><h2 class="text-2xl font-bold text-white">My Role</h2><p class="mt-2 text-slate-300">${caseStudy.myRole}</p></div></div><div class="mt-12"><h2 class="text-2xl font-bold text-white">Process & Execution</h2><ul class="mt-4 space-y-3 text-slate-300">${executionPoints}</ul></div><div class="mt-12 p-8 bg-slate-800/30 rounded-2xl border border-slate-700"><h2 class="text-2xl font-bold text-white">${caseStudy.innovations.title}</h2><p class="mt-2 text-slate-300">${caseStudy.innovations.description}</p><div class="innovations-stack grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 ${stackGridClass}">${stackPoints}</div></div><div class="mt-12 text-center bg-violet-600/10 p-8 rounded-2xl border border-violet-500/30"><h2 class="text-3xl font-bold text-white">Results & Business Impact</h2><p class="mt-2 text-2xl text-violet-200">${caseStudy.results}</p></div></div></div>`;
        }
        caseStudyOverlay.innerHTML = `<div class="backdrop"></div><div class="${wrapperClass}">${contentHTML}</div>`;
        document.body.classList.add('overlay-open');
        caseStudyOverlay.classList.add('visible');
        completeTask(taskId);
    };
    
    const closeCaseStudyModal = () => {
        document.body.classList.remove('overlay-open');
        caseStudyOverlay.classList.remove('visible');
    };
    
    const initHomePage = () => {
        const tickerTrack = document.querySelector('.ticker-track');
        if (tickerTrack) {
            tickerTrack.innerHTML = [...achievements, ...achievements].map(item => 
                `<div class="ticker-pill"><span>${item.icon}</span>${item.text}</div>`
            ).join('');
        }
    };
    const initKudosPage = () => {
        const kudosListEl = document.getElementById('kudos-list');
        if (!kudosListEl) return;
        
        kudosListEl.innerHTML = Object.values(recommendations).map(rec => `
            <div class="recommendation-card">
                <div class="rec-header">
                    <div>
                        <h3 class="rec-name">${rec.name}</h3>
                        <p class="rec-title">${rec.title}, <strong>${rec.company}</strong></p>
                        <p class="rec-context">${rec.context}</p>
                    </div>
                </div>
                <p class="rec-pull-quote">${rec.pullQuote}</p>
                <div class="rec-full-text">${rec.fullText}</div>
                <button class="rec-read-more">Read More</button>
            </div>
        `).join('');

        kudosListEl.querySelectorAll('.rec-read-more').forEach(button => {
            button.addEventListener('click', () => {
                const card = button.closest('.recommendation-card');
                card.classList.toggle('open');
                button.textContent = card.classList.contains('open') ? 'Show Less' : 'Read More';
            });
        });
        completeTask('kudos');
    };
    
    const initApp = () => {
        loadState();
        
        document.body.addEventListener('click', (e) => {
            const taskTrigger = e.target.closest('.task-trigger');
            if (taskTrigger) {
                e.preventDefault();
                const taskId = taskTrigger.dataset.taskId;
                if (!taskId) return;
                
                if(taskId === 'contact' || taskId === 'linkedin') {
                    showContactModal(taskId);
                    return;
                }

                if (caseStudies[taskId]) {
                    openCaseStudyModal(taskId);
                } else {
                    completeTask(taskId);
                }
            }
            
            const superpowerIcon = e.target.closest('.superpower-icon');
            const isMobile = window.innerWidth < 768;

            if (superpowerIcon) {
                const tooltipArea = document.getElementById('tooltip-display-area');
                const profileImageOverlay = document.querySelector('.profile-image-overlay');
                 if(superpowerIcon.classList.contains('active')) {
                    superpowerIcon.classList.remove('active');
                    if(isMobile && profileImageOverlay) profileImageOverlay.classList.remove('visible');
                    if(!isMobile && tooltipArea) tooltipArea.classList.remove('visible');
                } else {
                    document.querySelectorAll('.superpower-icon').forEach(otherIcon => otherIcon.classList.remove('active'));
                    superpowerIcon.classList.add('active');
                    if (isMobile && profileImageOverlay) {
                        profileImageOverlay.innerHTML = `<strong>${superpowerIcon.dataset.title}</strong><span>${superpowerIcon.dataset.tooltip}</span>`;
                        profileImageOverlay.classList.add('visible');
                    }
                    if (!isMobile && tooltipArea) {
                        tooltipArea.textContent = superpowerIcon.dataset.tooltip;
                        tooltipArea.classList.add('visible');
                    }
                    completeTask(superpowerIcon.dataset.taskId);
                }
            } else if (!e.target.closest('.player-card')) {
                 document.querySelectorAll('.superpower-icon').forEach(icon => icon.classList.remove('active'));
                 const tooltipArea = document.getElementById('tooltip-display-area');
                 const profileImageOverlay = document.querySelector('.profile-image-overlay');
                 if (tooltipArea) tooltipArea.classList.remove('visible');
                 if (profileImageOverlay) profileImageOverlay.classList.remove('visible');
            }
        });

        document.querySelectorAll('.nav-btn').forEach(button => {
            button.addEventListener('click', () => renderView(button.dataset.view));
        });
        
        confirmOverlay.addEventListener('click', (e) => {
            const targetId = e.target.id;
            if (targetId === 'confirm-modal-no' || e.target.classList.contains('backdrop')) {
                confirmOverlay.classList.remove('visible');
            } else if (targetId === 'confirm-yes-btn') {
                resetState();
            } else if (targetId === 'confirm-linkedin-yes') {
                confirmOverlay.classList.remove('visible');
                setTimeout(() => {
                    window.open('https://www.linkedin.com/in/jhsweeney/', '_blank');
                }, 3500);
                completeTask('linkedin');
            } else if (targetId === 'confirm-email-open') {
                confirmOverlay.classList.remove('visible');
                completeTask('contact');
            } else if (targetId === 'confirm-email-copy') {
                navigator.clipboard.writeText('jsweeney510@gmail.com').then(() => {
                    e.target.textContent = 'Copied!';
                    setTimeout(() => {
                        confirmOverlay.classList.remove('visible');
                        completeTask('contact');
                    }, 1000);
                });
            }
        });

        document.querySelectorAll('.quest-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                renderQuestBoard();
                questOverlay.classList.toggle('visible');
                document.querySelectorAll('.quest-btn').forEach(b => b.classList.toggle('is-open'));
            });
        });

        questOverlay.addEventListener('click', (e) => {
            if (e.target.id === 'reset-quest-btn') {
                 confirmOverlay.innerHTML = `<div class="backdrop"></div><div id="confirm-modal" class="text-center"><h3 class="text-xl font-bold text-white">Are you sure?</h3><p class="text-slate-400 mt-2">This will reset all your quest progress.</p><div class="mt-6 flex justify-center gap-4"><button id="confirm-yes-btn" class="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-6 rounded-lg">Yes, Reset</button><button id="confirm-modal-no" class="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-6 rounded-lg">Cancel</button></div></div>`;
                 confirmOverlay.classList.add('visible');
            } else if (e.target.classList.contains('backdrop') || e.target.closest('.close-modal-btn')) {
                questOverlay.classList.remove('visible');
                document.querySelectorAll('.quest-btn').forEach(b => b.classList.remove('is-open'));
            }
        });

        caseStudyOverlay.addEventListener('click', (e) => {
            if (e.target.classList.contains('backdrop') || e.target.closest('.close-modal-btn')) {
                closeCaseStudyModal();
            }
        });

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && caseStudyOverlay.classList.contains('visible')) {
                closeCaseStudyModal();
            }
        });

        window.addEventListener('resize', () => {
            const activeBtn = document.querySelector('.nav-btn.active');
            if (activeBtn) {
                updateNavLight(activeBtn.dataset.view);
            }
        });
        
        renderView('home');

        if (window.particlesJS) {
            particlesJS('particles-js', { particles: { number: { value: 50 }, color: { value: '#A78BFA' }, shape: { type: 'circle' }, opacity: { value: 0.4, anim: { enable: true, speed: 1, opacity_min: 0.1 } }, size: { value: 3, random: true }, line_linked: { enable: false }, move: { speed: 1, direction: 'none', random: true, straight: false, out_mode: 'out' } }, interactivity: { events: { onhover: { enable: true, mode: 'repulse' } } } });
        }
    };

    initApp();
});