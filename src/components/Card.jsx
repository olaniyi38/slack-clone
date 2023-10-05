import { HiOutlineArrowRight } from 'react-icons/hi2'


const Card = ({ data }) => {
    const { imgSrc, tag, title, link } = data
    return (
        <div className='card'>
            <div className="card__img">
                <img loading='lazy' src={ imgSrc } alt="" />
            </div>
            <div className="card__content">
                <p className="card__tag">{ tag }</p>
                <h1 className="card__title">
                    { title }
                </h1>
            </div>
            <div className="card__footer">
                <a href={ link.url } className="card__link">
                    <span>{ link.title }</span>
                   <HiOutlineArrowRight className='arrow-right'/>
                </a>

            </div>
        </div>
    )
}

export default Card