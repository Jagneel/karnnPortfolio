import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../../assets/img/header-img.svg"

export default function () {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(70 - Math.random() * 5);
    const [index, setIndex] = useState(1);
    const toRotate = ["Visual FX", "Paintings", "Simping"];
    const period = 1500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(70);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my domain</span>
                        <h1>{"I am "}<span className='wrap'>{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minus ab dolore delectus, labore, corrupti quae eveniet laudantium reiciendis animi, sint laborum ut qui harum. Accusamus fugit tempore atque dolorem.</p>
                        <button onClick={() => console.log('connect')}>Go To Projects <ArrowRightCircle size={25} color={'#0204fa'} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img className="banner-img" src={headerImg} alt="Header Image" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}
