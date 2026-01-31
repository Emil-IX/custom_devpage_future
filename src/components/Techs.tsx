


function Techs() {

    let data = [
        {
            name: 'HTML5',
            url: '/html.png'
        },
        {
            name: 'CSS3',
            url: '/css.png'
        },
        {
            name: 'javascript',
            url: '/JavaScript.png'
        },
        {
            name: 'Tailwing CSS',
            url: '/Tailwind.png'
        },
        {
            name: 'Typescript',
            url: '/typescript.png'
        },
        {
            name: 'React',
            url: '/react.png'
        },
        {
            name: 'Node.js',
            url: '/node.png'
        },
        {
            name: 'Express',
            url: '/express.jpg'
        },
        {
            name: 'MongoDB',
            url: '/mongodb.png'
        },
        {
            name: 'PostgreSQL',
            url: '/postgresql.png'
        },
        {
            name: 'MySQL',
            url: '/mysql.png'
        },
        {
            name: 'SQL Server',
            url: '/sqlserver.jpg'
        },
        {
            name: 'Oracle',
            url: '/oracle.webp'
        },
        {
            name: 'TOAD',
            url: '/Toad.png'
        },
        {
            name: 'Git',
            url: '/GIT.png'
        },
        {
            name: 'Github',
            url: '/GitHuB.png'
        },
        {
            name: 'Azure',
            url: '/devops.png'
        },
        {
            name: 'Jira',
            url: '/jira.png'
        },
        {
            name: 'Playwright',
            url: '/playwright.svg'
        },
        {
            name: 'Cypress',
            url: '/cypress.jpg'
        },
        {
            name: 'Jest',
            url: '/jest.png'
        },
        {
            name: 'Postman',
            url: '/postman.png'
        },
        {
            name: 'Suagger',
            url: '/suagger.png'
        },
    ]



    return (
        <div id="tech" className="techContiner">
            <div className="tech_title--container">
                <h2 className="tech_title appearright">Tech Stack</h2>
                <p className=" appear">
                    As a software engineer, I have several tools and technologies that help me perform my work every day
                </p>

            </div>
            <div className="techContent">
                {data.map((tech, index) =>
                    <div className="tech_card appearScale" key={index + 1} >
                        <div className="tech_img">
                            <img src={tech.url} alt={tech.name} />
                        </div>
                        <p className="tech_name">{tech.name}</p>
                    </div>
                )
                }

            </div>
        </div>
    )
}

export default Techs