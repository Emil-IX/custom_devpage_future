

export const Proyects = () => {
    return (
        <div className="proyects_container">

            <div className="tech_title--container appear">
                <h2 className="tech_title">Projects</h2>
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
                    <a href="https://github.com/Emil-IX/My_Album_Fullstack_app">View in github</a>
                    <div className="pro_tags">
                        <p>Javascripts</p>
                        <p>React</p>
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
                    <a href="https://github.com/Emil-IX/ITE-commerce-app">View in github</a>
                    <div className="pro_tags">
                        <p>Javascripts</p>
                        <p>React</p>
                        <p>Node.js</p>
                        <p>Express</p>
                        <p>MySQL</p>
                    </div>
                </div>


            </div>
        </div>
    )
}
