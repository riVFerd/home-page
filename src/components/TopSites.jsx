import React from "react";
import {FaYoutube, FaGithub, FaFacebook, FaInstagram, FaPinterest} from 'react-icons/fa';

const sites = [
    {
        id: 'top1',
        name: 'Youtube',
        url: 'https://www.youtube.com/',
        icon: <FaYoutube className="text-light" size='2.5em'/>
    }, {
        id: 'top2',
        name: 'Github',
        url: 'https://github.com/',
        icon: <FaGithub className="text-light" size='2.5em'/>
    }, {
        id: 'top3',
        name: 'Facebook',
        url: 'https://www.facebook.com/',
        icon: <FaFacebook className="text-light" size='2.5em'/>
    }, {
        id: 'top4',
        name: 'Instagram',
        url: 'https://www.instagram.com/',
        icon: <FaInstagram className="text-light" size='2.5em'/>
    }, {
        id: 'top5',
        name: 'Pinterest',
        url: 'https://www.pinterest.com/',
        icon: <FaPinterest className="text-light" size='2.5em'/>
    }
];

// make hover effect style


const TopSites = (props) => {

    const handleSite = (url) => {
        window.location.href = url;
    }

    return (
            <div id={props.id} className={"flex flex-wrap justify-around " + props.className}>
                {sites.map((site) => (
                    <div key={site.id}
                         className="flex flex-col justify-center items-center w-24 h-24 cursor-pointer hover:scale-110 hover:bg-gray-500 bg-gray-600 mx-2 my-4 rounded-md"
                         onClick={handleSite.bind(this, site.url)}>
                        <div className="my-2">
                            {site.icon}
                        </div>
                        {site.name}
                    </div>
                ))}
            </div>
    );
}

export default TopSites;