

const About = () => {


    return (
        <div id="about" className="aboutContainer">
            <div className="aboutContainer_content">
                <div className="about_texts appear">
                    <h3 className="title-content">
                        <ol>
                            <li><span>You might be wondering who I am</span></li>
                            <li><span className="si">I'm a Software Engineer</span></li>
                            <li><span className="wb">I'm a Web Developer</span></li>
                            <li><span className="qa">I'm a Quality Assurance Engineer</span></li>
                            <li><span className="hp">I can be your solution</span></li>
                        </ol>
                    </h3>
                    <p className="about_texts_main">
                        Hello, my name is <span>Emil H. Espiritu</span> and I am a software engineer with several years of experience in the field. I specialize in both project-oriented software development and quality analysis.
                    </p>

                    <h3 className="ExperienceSummary">Experience summary</h3>
                    <div className="experience">
                        <p className="experiences">I have worked on airline projects in my country with ticketing systems</p>
                        <p className="experiences">In appointment dispensers for laboratories in my country</p>
                        <p className="experiences">In the country's toll payment systems</p>
                        <p className="experiences">Container delivery system and fleet for famous institutions in the country</p>
                        <p className="experiences">Remittance systems and banking business models at the national level</p>
                    </div>
                </div>
                <div className="about_image appearScale">
                    <img src="./recortada2.png" alt="Dev picture" />
                </div>
            </div>

        </div>
    )
}


export default About