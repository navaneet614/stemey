import React from 'react';

import youtubeIcon from "./youtubeIcon.png";
import instagramIcon from "./instagram_logo.png";
import discordIcon from "./discord-logo.png";
import linkedinIcon from "./linkedin-logo.png";

import "YoutubeGrid.css";

export default function YoutubeGrid() {
    return (
        <div className="videos-container">
            <div>
                <ul className="videos-list">
                    {/* Ensure that the iframe don't have any sizes specified! */}
                    <li className="video">
                        <iframe src="https://www.youtube.com/embed/B-RJqKaOC-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen;"></iframe>
                    </li>
                    <li className="video">
                        <iframe src="https://www.youtube.com/embed/YKghpqDPLhk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen;"></iframe>
                    </li>
                    <li className="video">
                        <iframe src="https://www.youtube.com/embed/18Zl0X_Am0A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen;"></iframe>
                    </li>
                    <li className="video">
                        <iframe src="https://www.youtube.com/embed/uXI6IM8D4pI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen;"></iframe>
                    </li>
                </ul>
            </div>
            <div className="social-container">
                <div className="icon-container">
                    <a href="https://www.youtube.com/channel/UC9d1d74gAklaCvM9cItwQ0w" target="_blank">
                        <img className="youtube-icon" src={youtubeIcon} alt="Youtube Icon" />
                    </a>
                </div>
                <div className="icon-container">
                    <a href="https://www.instagram.com/stemenrichmentyouth/" target="_blank">
                        <img className="instagram-icon" src={instagramIcon} alt="Instagram Icon" />
                    </a>
                </div>
                <div className="icon-container">
                    <a href="https://discord.com/invite/NWuv89e" target="_blank">
                        <img src={discordIcon} alt="Discord Icon" className="discord-icon" />
                    </a>
                </div>
                <div className="icon-container">
                    <a href="/classes" target="_blank">
                        <svg className="classroom-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 36 528 456"><linearGradient id="a" x1="50.003%" x2="50.003%" y1="1.385%" y2="101.042%"><stop offset="0" stop-color="#bf360c" stop-opacity=".2" /><stop offset="1" stop-color="#bf360c" stop-opacity=".02" /></linearGradient><radialGradient id="b" cx="3.407%" cy="2.344%" gradientTransform="matrix(.86364 0 0 1 .005 0)" r="477.746%"><stop offset="0" stop-color="#fff" stop-opacity=".1" /><stop offset="1" stop-color="#fff" stop-opacity="0" /></radialGradient><g fill="none"><path d="M48 84h432v360H48z" fill="#0f9d58" /><path d="M360 276c14.9 0 27-12.1 27-27s-12.1-27-27-27-27 12.1-27 27 12.1 27 27 27zm0 18c-28.9 0-60 15.3-60 34.3V348h120v-19.7c0-19-31.1-34.3-60-34.3zm-192-18c14.9 0 27-12.1 27-27s-12.1-27-27-27-27 12.1-27 27 12.1 27 27 27zm0 18c-28.9 0-60 15.3-60 34.3V348h120v-19.7c0-19-31.1-34.3-60-34.3z" fill="#57bb8a" /><path d="M264 252c19.9 0 36-16.1 36-36s-16.1-36-36-36-36 16.1-36 36 16.1 36 36 36zm0 24c-40.5 0-84 21.5-84 48v24h168v-24c0-26.5-43.5-48-84-48z" fill="#f7f7f7" /><path d="M312 420h108v24H312z" fill="#f1f1f1" /><path d="M492 36H36C16.1 36 0 52.1 0 72v384c0 19.9 16.1 36 36 36h456c19.9 0 36-16.1 36-36V72c0-19.9-16.1-36-36-36zm-12 408H48V84h432z" fill="#f4b400" /><path d="M492 36H36C16.1 36 0 52.1 0 72v3c0-19.9 16.1-36 36-36h456c19.9 0 36 16.1 36 36v-3c0-19.9-16.1-36-36-36z" fill="#fff" opacity=".2" /><path d="M492 489H36c-19.9 0-36-16.1-36-36v3c0 19.9 16.1 36 36 36h456c19.9 0 36-16.1 36-36v-3c0 19.9-16.1 36-36 36z" fill="#bf360c" opacity=".2" /><path d="M419.8 444h-108l48 48h107.9z" fill="url(#a)" /><path d="M48 81h432v3H48z" fill="#263238" opacity=".2" /><path d="M48 444h432v3H48z" fill="#fff" opacity=".2" /><path d="M492 36H36C16.1 36 0 52.1 0 72v384c0 19.9 16.1 36 36 36h456c19.9 0 36-16.1 36-36V72c0-19.9-16.1-36-36-36z" fill="url(#b)" /></g></svg>
                    </a>
                </div>
                <div className="icon-container">
                    <a href="https://www.linkedin.com/company/stem-enrichment-youth" target="_blank">
                        <img className="linkedin-logo" src={linkedinIcon} alt="Linkedin Icon" />
                    </a>
                </div>
            </div>
        </div >
    )
}