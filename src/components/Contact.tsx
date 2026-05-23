
import data from "./../assets/json/Contact.json";


export default function Contact() {
	return (
		<section id="contact">
            <div className="content-strip">

                <h2>Links</h2>
                <ul>
                    {
                        data.links.map( (link) => (
                            <li key={"contact-link-" + link.label}>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    {link.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <h2>Contact Info</h2>
                <ul>
                    {
                        data.contact.map( (info) => (
                            <li key={"contact-info-" + info.url}>
                                <a
                                    href={
                                        info.type === "Email" ?
                                        "mailto:" + info.url :
                                        info.url
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    {
                                        info.type === "Email" ?
                                        "[Temp Email Icon]: " + info.url :
                                        info.type + ": " + info.url
                                    }
                                </a>
                            </li>
                        ))
                    }
                </ul>

            </div>
		</section>
	);
}