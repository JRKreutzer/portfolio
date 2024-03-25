import { useEffect, useState } from "react"
import { portfolio, portfolioNav } from "../../../constants"

import { Swiper, SwiperSlide } from 'swiper/react';
import WorkItems from "../WorkItems"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Works = () => {

    const [item, setItem] = useState({name: 'all'})
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)

    useEffect(() => {
        if (item.name === "all") {
            setProjects(portfolio)
        }
        else {
            const newProjects = portfolio.filter((project) => (
                project.category.some((category) => category.toLowerCase().includes(item.name))
            ))
            setProjects(newProjects)
            }
    }, [item])

    const handleClick = (e, i) => {
        setItem({name: e.target.textContent.toLowerCase()})
        setActive(i)
    }

    return (
        <div className="container">
            <div className="container grid work__filters-container">
                
                    <Swiper
                    slidesPerView={'auto'}
                    loop={true}
                    grabCursor={true}
                    spaceBetween={30}
                    pagination={{
                        clickable: false,
                    }}
                    className="work__filters"
                    >
                        {
                            portfolioNav.map((item, i) => {
                                return (
                                    <SwiperSlide key={i} className="work__filters-card">
                                        <span key={i} onClick={(e) => {handleClick(e, i)}} className={`${active === i ? 'active-work' : ''} work__item`} >{item.name}</span>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
               
            </div>
            <div className="work__container container grid">
                {
                    projects.map((item) => {
                        return <WorkItems item={item} key={item.id}/>
                    })
                }
            </div>
        </div>
    )
}

export default Works