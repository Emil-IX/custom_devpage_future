


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
            name: 'MySQL',
            url: '/mysql.png'
        },
        {
            name: 'Oracle',
            url: '/oracle.webp'
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
    ]



    return (
        <div className="techContiner">
            <h2 className="tech_title">Tech Stack</h2>
            <div className="techContent">
                {data.map((tech, index) =>
                    <div className="tech_card" key={index + 1} >
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