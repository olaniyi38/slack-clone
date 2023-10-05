import { useState } from "react"
import { ReactComponent as ChevronRightSvg } from '../assets/svgs/chevron-down.svg'


const LinkList = ({ title, links }) => {
    const [isActive, setIsActive] = useState(false)
    function toggleList() {
        setIsActive(!isActive)
    }
 
    return (
        <div onClick={ toggleList } className={ `link-list ${isActive ? 'active' : ''}` }>
            <div className="link-list__header">
                <h1 className="link-list__title">{ title }</h1>
                <ChevronRightSvg />
            </div>
            <div className={ `link-list__links ` }>
               
                    {
                      links.map((link, i) => (<a key={ i } href={ link.url }>{ link.name }</a>))
                    }
               
            </div>
        </div>
    )
}

export default LinkList