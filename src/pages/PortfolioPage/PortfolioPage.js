import KumuLive from '../../assets/kumulive.png';
import KumuLiveBrowse from '../../assets/kumulive-browse.png';
import KumuLiveStream from '../../assets/kumulive-stream.png';

import gamificationLeaderboard from '../../assets/gamification-leaderboard.png';
import gamificationLogin from '../../assets/gamification-login.png';
import gamificationCriteria from '../../assets/gamification-criteria.png';

import ProfileImg from '../../assets/profile-image.jpg';
import ContactForm from '../../features/Portfolio/ContactForm/ContactForm';
import './PortfolioPage.css';

function PortfolioPage () {

    return (
        <>
            <main id="main">

                <div className="portfolio-header">
                    <p className='mb-2'>Hi, I am</p><h2>Nathaniel Mark Santiago</h2>
                    <p>a Web Developer</p>
                </div>

                <section id="about" className="about">
                    <div className="container">

                        <div className="section-title">
                            <h2 className='mb-2'>About</h2>
                            <p>I am a highly proficient programmer with a high degree of knowledge in front-end/back-end development, a fast learner, hard working, organized, efficient, great in logical thinking, problem-solving, musically incline and planting vegetables. I am an expert in PHP, Javascript, advanced knowledge in CSS and HTML and the newest one React.js. Optimizing and debugging codes are one of the best things I do when it comes to programming due to the fact that I want everything to be well-organized and keen. I also love spending time fixing every little detail of the program. I like to work with a team because I believe that teamwork makes you do things faster and you'll learn from each other. I work hard for things that to me are worth it and add value to me, and I want to be surrounded by positive people.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-3">
                                <img src={ProfileImg} className="img-fluid" alt="profile" />
                            </div>
                            <div className="col-lg-8 offset-lg-1 pt-4 pt-lg-0 content">
                                <h3 className='mb-3 mt-4'>Web Developer</h3>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                        <li><strong>Birthdate:</strong> <span>May 7, 1997</span></li>
                                        <li><strong>City:</strong> <span>San Pedro, Laguna</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                        <li><strong>Degree:</strong> <span>Bachelor's</span></li>
                                        <li><strong>Course:</strong> <span>Information Technology</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="resume" className="resume">
                    <div className="container">

                        <div className="section-title">
                            <h2>Work Experience</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="resume-item">
                                    <h4>Web Engineer I</h4>
                                    <h5>April 26, 2021 - November 25, 2022</h5>
                                    <p className='mb-0'><em>Kumu, Inc.</em></p>
                                    <p><em>Mandaluyong City</em></p>
                                    <ul>
                                        <li>Develop features and enhance the Kumu Live site
                                        (Kumu Live is the web version of the Kumu livestreaming app)
                                        Built in Yii2 PHP Framework, HTML, CSS, Bootstrap 4, JavaScipt, jQuery, and Restful API’s</li>
                                        <li>We migrated the Kumu Live to React.js
                                        With Hooks, Axios, Material UI, Component lifecycle, Unit testing (JEST), Code Splitting, 
                                        Optimization, SonarCloud, ESLint and Restful API’s</li>
                                        <li>Agora RTC and RTM for livestreams feature</li>
                                        <li>Restful API for Backend Data, Postman</li>
                                        <li>Agile software development life cycle (Jira – story, story types, story points | Clubhouse)
                                        Scrum, Sprint, Planning, Daily stand up, Backlog refinement, Retrospectives and Pair Programming</li>
                                        <li>Deploying features to production (CI/CD). Github repository, pull request reviews.</li>
                                        <li>Git source terminal and commands: branching, merging, pulling, pushing, and cherry-picking</li>
                                        <li>We use different tools like SonarCloud, Datadog, Segment, Google Data Analytics tools (analytics,
                                        search console, tag manager, reCAPTCHA)</li>
                                        <li>Figma for web design</li>
                                    </ul>
                                </div>
                                <div className="resume-item">
                                    <h4>Junior Web Developer</h4>
                                    <h5>January 2, 2019 - January 3, 2020</h5>
                                    <p className='mb-0'><em>Emerio Philippines Inc. assigned in SunPower Philippines</em></p>
                                    <p><em>Biñan City</em></p>
                                    <ul>
                                        <li>Maintain and enhance existing web applications and all integrated systems using HTML, CSS, 
                                        JavaScript, Bootstrap, PHP, CodeIgniter, Laravel and ServiceNow.</li>
                                        <li>Manages data records in Databases (SQL)</li>
                                        <li>Enroll new employees in Biometrics and manages DTR timekeeping.</li>
                                        <li>Projects: Root Cause Corrective Action (RCCA) via ServiceNow using javaScript, Employees 
                                        Service Award using PHP and Joomla</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="resume-item">
                                    <h4>Internship - Web Marketing</h4>
                                    <h5>October 2017 - Marck 2018</h5>
                                    <p className='mb-0'><em>Gameloft Philippines, Inc.</em></p>
                                    <p><em>Makati City</em></p>
                                    <ul>
                                        <li>Agile software development life cycle (Jira), Kanban board, Scrum, Sprint, Planning, Daily stand 
                                        up, and Retrospectives.</li>
                                        <li>Convert documents to Confluence Page</li>
                                        <li>Some development tasks on Gameloft’s website (Zend PHP Framework, HTML, CSS, Bootstrap 3, 
                                        and jQuery)</li>
                                        <li>Git source terminal</li>
                                        <li>Test some features</li>
                                        <li>Thesis: Gameloft’s Points Reward Program (HTML, Bootstrap 3, PHP, JavaScript, MySQL)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="portfolio" className="portfolio section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2>Projects</h2>
                        </div>

                        <div className="row portfolio-container">

                            <div className="col-lg-4 col-md-6 portfolio-item">
                                <div className="portfolio-wrap">
                                    <img src={gamificationLogin} className="img-fluid" alt="gamification-img" data-toggle="tooltip" data-placement="bottom" title="Gameloft's Points Reward Program" />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item">
                                <div className="portfolio-wrap">
                                    <img src={gamificationLeaderboard} className="img-fluid" alt="gamification-img" data-toggle="tooltip" data-placement="bottom" title="Gameloft's Points Reward Program" />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item">
                                <div className="portfolio-wrap">
                                    <img src={gamificationCriteria} className="img-fluid" alt="gamification-img" data-toggle="tooltip" data-placement="bottom" title="Gameloft's Points Reward Program" />
                                </div>
                            </div>
                        </div>

                        <div className="row portfolio-container">

                            <div className="col-lg-4 col-md-6 portfolio-item">
                                <div className="portfolio-wrap">
                                    <a href='https://www.kumu.live' target='_blank' rel='noreferrer'>
                                        <img src={KumuLive} className="img-fluid" alt="kumu-live-img" data-toggle="tooltip" data-placement="bottom" title="Kumu Live" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item">
                                <div className="portfolio-wrap">
                                    <a href='https://www.kumu.live' target='_blank' rel='noreferrer'>
                                         <img src={KumuLiveBrowse} className="img-fluid" alt="kumu-live-img" data-toggle="tooltip" data-placement="bottom" title="Kumu Live" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item">
                                <div className="portfolio-wrap">
                                    <a href='https://www.kumu.live' target='_blank' rel='noreferrer'>
                                         <img src={KumuLiveStream} className="img-fluid" alt="kumu-live-img" data-toggle="tooltip" data-placement="bottom" title="Kumu Live" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="skills" className="skills section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2 className='pb-2'>Skills</h2>
                            <p>Tech Stacks</p>
                        </div>

                        <div className="row skills-content">

                            <div className="col-lg-3">

                                <div className="progress">
                                    <span className="skill">HTML</span>
                                </div>

                                <div className="progress">
                                    <span className="skill">CSS</span>
                                </div>

                                <div className="progress">
                                    <span className="skill">JavaScript</span>
                                </div>

                                <div className="progress">
                                    <span className="skill">Bootstrap</span>
                                </div>

                                <div className="progress">
                                    <span className="skill">jQuery</span>
                                </div>

                                <div className="progress">
                                    <span className="skill">Ajax</span>
                                </div>

                                <div className="progress">
                                    <span className="skill">React.js</span>
                                </div>

                            </div>

                            <div className="col-lg-3">

                                <div className="progress">
                                    <span className="skill">PHP</span>
                                </div>

                                <div className="progress">
                                    <span className="skill">Code Igniter</span>
                                </div>

                                <div className="progress">
                                    <span className="skill">Laravel</span>
                                </div>

                                <div className="progress">
                                    <span className="skill">Yii 2.0 PHP Framework</span>
                                </div>

                            </div>

                            <div className="col-lg-3">

                                <div className="progress">
                                    <span className="skill">MSSQL</span>
                                </div>

                                <div className="progress">
                                    <span className="skill">Oracle PL/SQL</span>
                                </div>

                                <div className="progress">
                                    <span className="skill">MySQL</span>
                                </div>

                                <div className="progress">
                                    <span className="skill">Restful API’s</span>
                                </div>

                            </div>

                            <div className="col-lg-3">

                                <div className="progress">
                                    <span className="skill">Agile SDLC</span>
                                </div>

                                <div className="progress">
                                    <span className="skill">Scrum</span>
                                </div>

                                <div className="progress">
                                    <span className="skill">Git</span>
                                </div>

                                <div className="progress">
                                    <span className="skill">Postman</span>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>

                <ContactForm />

                <footer id="footer">
                    <div className="container">
                        <h3>Nathaniel Mark Santiago</h3>
                        <p>Web Developer</p>
                        <p>natsantiago.07@gmail.com</p>
                    </div>
                </footer>

            </main>

        </>
    )
}

export default PortfolioPage;
