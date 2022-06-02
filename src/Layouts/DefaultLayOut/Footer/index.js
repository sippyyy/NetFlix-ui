/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from "clsx";


import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";






import style from './Footer.module.scss'

function Footer() {
    return ( 
        <div className={clsx(style.Footer)}>
            <div className={clsx(style.FooterIcons)}>
                <a href="https://www.facebook.com/NetflixVietnam/?brand_redir=475822799216240" target="_blank" className={clsx(style.FooterIcon)}><FaFacebookF/></a>
                <a href="https://www.instagram.com/netflixasia/" target="_blank" className={clsx(style.FooterIcon)}><FaInstagram/></a>
                <a href="https://twitter.com/NetflixAsia" target="_blank" className={clsx(style.FooterIcon)}><FaTwitter/></a>
                <a href="https://www.youtube.com/channel/UCZoC-XeDO7HxbAdeCaRPPCw/videos" target="_blank" className={clsx(style.FooterIcon)}><FaYoutube/></a>
            </div>
            <div className={clsx(style.FooterColumns)}>
                <div className={clsx(style.FooterColumnContent)}>
                    <span className={clsx(style.FooterColumnText)}>Audio and Subtitles</span>
                    <span className={clsx(style.FooterColumnText)}>Media Center</span>
                    <span className={clsx(style.FooterColumnText)}>Privacy</span>
                    <span className={clsx(style.FooterColumnText)}>Contact Us</span>
                </div>
                <div className={clsx(style.FooterColumnContent)}>
                    <span className={clsx(style.FooterColumnText)}>Audio Description</span>
                    <span className={clsx(style.FooterColumnText)}>Investor Relations</span>
                    <span className={clsx(style.FooterColumnText)}>Legal Notices</span>
                </div>
                <div className={clsx(style.FooterColumnContent)}>
                    <span className={clsx(style.FooterColumnText)}>Help Center</span>
                    <span className={clsx(style.FooterColumnText)}>Jobs</span>
                    <span className={clsx(style.FooterColumnText)}>Cookie Preferences</span>
                </div>
                <div className={clsx(style.FooterColumnContent)}>
                    <span className={clsx(style.FooterColumnText)}>Gift Cards</span>
                    <span className={clsx(style.FooterColumnText)}>Terms of Use</span>
                    <span className={clsx(style.FooterColumnText)}>Corporate Information</span>
                </div>
            </div>
            <div className={clsx(style.FooterCopyRight)}>{`©1997-2022 Netflix, Inc. {15214f7e-7fc1-4bda-b0f7-27aad9eb4820}`}</div>
        </div>
     );
}

export default Footer