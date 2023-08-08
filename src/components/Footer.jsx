import { ReactComponent as SlackSvg } from '../assets/svgs/slack-icon.svg'
import LinkList from './LinkList'

const linkGroups = {
    0: [
        {
            name: "lorem ipsum",
            url: "#"
        },
        {
            name: "lorem ipsum",
            url: "#"
        }, {
            name: "lorem ipsum",
            url: "#"
        },
    ],
    1: [
        {
            name: "lorem ipsum",
            url: "#"
        },
        {
            name: "lorem ipsum",
            url: "#"
        }, {
            name: "lorem ipsum",
            url: "#"
        },
    ]
}

const LINKS = [
    {
        title: "why slack",
        links: linkGroups[0]
    },
    {
        title: "product",
        links: linkGroups[1]
    },
    {
        title: "pricing",
        links: linkGroups[1]
    },
    {
        title: "resources",
        links: linkGroups[0]
    },
    {
        title: "company",
        links: linkGroups[1]
    }
]

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <SlackSvg />
            </div>
            <div className="footer__links">
                {
                    LINKS.map((linkGroup) => {
                        return <LinkList title={ linkGroup.title } links={ linkGroup.links } />
                    })
                }
            </div>

            <div className="footer__links2">
                <a href="#">lorem ipsum</a>
                <a href="#">lorem ipsum</a>
                <a href="#">lorem ipsum</a>
                <a href="#">lorem ipsum dolor</a>
                <a href="#">lorem ipsum</a>
            </div>

            <div className="footer__social-links">

            </div>

            <aside>
            ©2023 Slack Technologies, LLC, a Salesforce company. All rights reserved. Various trademarks held by their respective owners.
            </aside>


        </footer>
    )
}

export default Footer