import declarative from "../images/declarative.png"
import components from "../images/components.png"
import singleway from "../images/singleway.png"
import jsx from "../images/jsx.png"


function Footer() {
    return (
        <div>
            <div className="footer-container">
                <img className="declarative" src={declarative} alt="declarative" width="65" height="65" />
                <img className="components" src={components} alt="components" width="65" height="65" />
                <img className="singleway" src={singleway} alt="singleway" width="65" height="65" />
                <img className="jsx" src={jsx} alt="jsx" width="65" height="65" />
            </div>

            <div className="phrase-footer-container">

                <div>
                    <h2>Declarative</h2>
                    <p>Reacst make it</p>
                    <p>paintless to create</p>
                    <p>interactive UIs.</p>
                </div>

                <div>
                    <h2>Components</h2>
                    <p>Build emcapsulated</p>
                    <p>components that</p>
                    <p>manager their state.</p>
                </div>

                <div>
                    <h2>Single Way</h2>
                    <p>A set of immutable</p>
                    <p>Values are passed to</p>
                    <p>the component's.</p>
                </div>

                <div>
                    <h2>JSX</h2>
                    <p>Staticlly-typed.</p>
                    <p>designed to run on</p>
                    <p>modern browsers.</p>
                </div>

            </div>            
        </div>


    )
}

export default Footer;