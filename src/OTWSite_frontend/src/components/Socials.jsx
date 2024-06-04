import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Socials.css';

const Socials = () => {
    return (
        <div className='social-container'>
            <h2>Join our community</h2>
            <section className="socials">
                <div className="sc-holder">
                    <img src="/tele.png" alt="" />
                    <a href="https://t.me/+j8rizUbZhSM4YjI0" target="_blank" rel="noopener noreferrer">Telegram</a>
                </div>
                <div className="sc-holder">
                    <FontAwesomeIcon icon={faXTwitter} />
                    <a href="https://x.com/O_T_W_?t=BG5BEwJwTuKBSSDNuMsOkA&s=09" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
                <div className="sc-holder">
                    <FontAwesomeIcon icon={faFolderOpen} />
                    <a href="#" target="_blank" rel="noopener noreferrer">Openchat</a>
                </div>
            </section>
        </div>

    );
};

export default Socials;