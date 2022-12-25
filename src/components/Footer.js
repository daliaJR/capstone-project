import React from "react";


function FooterSection() {
    return (
        <div className="footer-container">
            <section>
                <h1>subscribe</h1>
                <p>We will never to spam you or share your email</p>

            </section>
            <div className="input-area">
                <form>
                    <input
                        className="footer-input"
                        name="email"
                        type="email"
                        placeholder="your email"
                    />

                    <button className="footer-btn" type="submit">save</button>

                </form>
                <button className="homee" type="submit">Home</button>
                <button className="blogss" type="submit">Blogs</button>
                <button className="Aboutt" type="submit">About</button>
                <button className="contactt" type="submit">Contact</button>


            </div>

        </div>
    );
}
export default FooterSection;