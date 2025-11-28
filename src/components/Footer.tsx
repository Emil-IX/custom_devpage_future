import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {

    const navigate = useNavigate()

    const [copied, setCopied] = useState(false);


    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);

            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <footer>
            <div id="footer" className="footerContent">
                <div className="textsFooter">
                    <p>Emil IXs — Full-Stack Web Developer & QA Engineer</p>
                    <p>Creating reliable, scalable, and user-focused digital solutions</p>
                    <p>Code with quality. Design with intention.</p>
                </div>
                <div className="footerLinks">
                    <a href="">Home</a>
                    <a href="#tech">Tech</a>
                    <a href="#about">About</a>
                    <a href="#proyects">Proyects</a>
                </div>
                <div className="medias">
                    <div className="icons">
                        <div className="image" onClick={() => navigate('https://www.linkedin.com/in/emil-h-espiritu-245732248')} ><img className="ink" src="/linkedinwhite.webp" alt="" /></div>
                        <div className="image" onClick={() => navigate('https://github.com/Emil-IX')}><img className="git" src="/github2.png" alt="" /></div>
                    </div>
                    <div className="email">
                        <input type="text" value='emilspiritu@gmail.com' />
                        <button onClick={() => handleCopy("emilspiritu@gmail.com")}> {copied ? "Copied" : "Copy"}</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

