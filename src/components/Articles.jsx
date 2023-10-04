import Card from './Card'



const ARTICLES = [
    {
        imgSrc: "https://a.slack-edge.com/68be889/marketing/img/promos/promo-state-of-work.jpg",
        title: "the state of work 2023",
        tag: "report",
        link: {
            url: "#",
            title: "Read more"
        }
    },
    {
        imgSrc: "https://a.slack-edge.com/6b9d9e8/marketing/img/promos/wtny-resource-tile.jpg",
        title: "big things are launching. relive the highlights of world tour new york",
        tag: "on-demand",
        link: {
            url: "#",
            title: "Read more"
        }
    }, {
        imgSrc: "https://a.slack-edge.com/426ed86/marketing/img/promos/promo-open-ai.jpg",
        title: "the next big thing? Ai for everyone",
        tag: "customer story",
        link: {
            url: "#",
            title: "read more"
        }
    }, {
        imgSrc: "https://a.slack-edge.com/426ed86/marketing/img/promos/promo-boost-productivity.jpg",
        title: "top slack tips to boost productivity",
        tag: "webinar",
        link: {
            url: "#",
            title: "Watch now"
        }
    },
]

const Articles = () => {
    return (
        <section className='articles'>
            <h1 className='articles__title'></h1>
            <div className="articles__container">
                {/* <Swiper modules={[Pagination]} pagination={{
                    clickable:true
                }}> */}
                {
                    ARTICLES.map((data) => {
                        //  <SwiperSlide>
                        return <a href={ data.link }>
                            <Card data={ data } />
                        </a>
                        {/* </SwiperSlide> */ }
                    })
                }
                {/* </Swiper> */ }
            </div>
        </section>
    )
}

export default Articles