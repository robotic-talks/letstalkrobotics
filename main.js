
class TalkCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const a =_=> this.getAttribute(a);

        const title = a('title') || 'No Title';
        const description = a('description') || 'No Description';
        const speakers = a('speakers') || 'N/A';
        const dateTime = a('date') || 'N/A';
        const youtubeLink = a('youtube-link') || '#';
        const driveLink = a('drive-link') || '#';

        const date = new Date(dateTime);
        const formattedDate = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', timeZoneName: 'short' });

        shadow.innerHTML = `
            <style>
                .talk-card {
                    background: #fff;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    margin-bottom: 20px;
                    padding: 20px;
                    transition: transform 0.3s ease;
                }
                .talk-card:hover {
                    transform: translateY(-5px);
                }
                h3 {
                    margin-top: 0;
                }
                p {
                    margin-bottom: 10px;
                }
                .links a {
                    margin-right: 15px;
                    text-decoration: none;
                    color: #007BFF;
                }
                 .links a:hover {
                    text-decoration: underline;
                }
            </style>
            <div class="talk-card">
                <h3>${title}</h3>
                <p><strong>Speakers:</strong> ${speakers}</p>
                <p><strong>Date:</strong> ${formattedDate}</p>
                <p><strong>Time:</strong> ${formattedTime}</p>
                <p>${description}</p>
                <div class="links">
                    <a href="${youtubeLink}" target="_blank">Watch on YouTube</a>
                    <a href="${driveLink}" target="_blank">Supplementary Materials</a>
                </div>
            </div>
        `;
    }
}

customElements.define('talk-card', TalkCard);
