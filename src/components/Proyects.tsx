
export const Proyects = () => {


    return (
        <div id="proyects" className="proyects_container">

            <div className="tech_title--container appear">
                <h2 className="tech_title tech_title--color">Projects</h2>
                <p className="color-white">
                    Here are some of my projects that use the technologies used, along with their GitHub links for more details.
                </p>
            </div>

            <div className="proyects-content">


                <div className="pro_element appearleft2">
                    <h3 className="pro_element_title">My Album </h3>
                    <p>
                        My Album Fullstack App is a dynamic, user-friendly platform built to allow users to upload their favorite photos and engage with the community by leaving comments.
                    </p>
                    <a href="https://github.com/Emil-IX/My_Album_Fullstack_app" target="_blank">View in github</a>
                    <div className="pro_tags">
                        <p>React</p>
                        <p>Tailwing</p>
                        <p>Node.js</p>
                        <p>Express</p>
                        <p>MongoDB</p>
                    </div>
                </div>

                <div className="pro_element appearright">
                    <h3 className="pro_element_title">ITE-Commerce</h3>
                    <p>
                        This project is an e-commerce platform with features such as listing products from a database and managing them dynamically from various endpoints, enabling full CRUD operations.
                    </p>
                    <a href="https://github.com/Emil-IX/ITE-commerce-app" target="_blank">View in github</a>
                    <div className="pro_tags">
                        <p>Javascript</p>
                        <p>React</p>
                        <p>Node.js</p>
                        <p>Express</p>
                        <p>MySQL</p>
                    </div>
                </div>

                <div className="pro_element appearleft2">
                    <h3 className="pro_element_title">Mentor Clock</h3>
                    <p>
                        An Frontend mentor challenge with its own additions to make it even more interesting. An application that shows different ways to display the time, stopwatches, clocks, timers, and a weather add-on.
                    </p>
                    <a href="https://github.com/Emil-IX/Mentor-Clock" target="_blank">View in github</a>
                    <div className="pro_tags">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Javascripts</p>
                        <p>React</p>
                    </div>
                </div>

                <div className="pro_element appearright">
                    <h3 className="pro_element_title">Shiny-Dex</h3>
                    <p>
                        A dynamic web application that leverages the PokeAPI to fetch, display, and manage Pokémon data in an appealing card format. Catch a glimpse of your favorite Pokémon, filter the collection, try your luck at finding Shinies.
                    </p>
                    <div className="gitLinks">
                        <a href="https://github.com/Emil-IX/Pokemon_Api_shynidex" target="_blank">View in github</a>
                        <img src="./links.png" alt="link" onClick={()=> window.open('https://emil-ix.github.io/Pokemon_Api_shynidex/')} />
                    </div>
                    <div className="pro_tags">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Javascripts</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
