import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../../assets/img/meter1.svg';
import meter2 from '../../assets/img/meter2.svg';
import meter3 from '../../assets/img/meter3.svg';
import colorSharp from '../../assets/img/color-sharp.png';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


export default function Skills() {
    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                             </h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quaerat aliquid, totam molestias nobis quis hic eaque facilis, culpa tempore quibusdam, cupiditate blanditiis alias iure sapiente eveniet obcaecati reiciendis consequatur.</p>
                        </div>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider' autoPlay={true}
                            autoPlaySpeed={1000}>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Cinema 4D</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Octane Rendar</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>MS Paint</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>6th Form Art</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>I don't know</h5>
                            </div>
                        </Carousel>
                    </Col>
                </Row>
                {/* <img className='background-img-left' src={colorSharp} alt="" /> */}
            </Container>
        </section>
    )
}
