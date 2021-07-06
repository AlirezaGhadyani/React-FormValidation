import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from 'styled-components';
import pic1 from '../../../Assets/Images/pic1.svg';
import pic2 from '../../../Assets/Images/pic2.svg';
import pic3 from '../../../Assets/Images/pic3.svg';

//styled components
const CarouselWrapper = styled.div`
width: 100%;
margin-top: 4rem;
display: flex;
justify-content: center;
align-items: center;
user-select: none;
`;

const CarouselItemWrapper = styled.div`
width: 100%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
text-align: center;
`;

const CarouselItem = styled.img`
width: 16rem;
max-width: 80%;
`;

const CarouselItemH2 = styled.h2`
margin: 1.2rem 0;
font-size: 1.6rem;
font-weight: 700;
`;

const CarouselItemP = styled.p`
width: 580px;
max-width: 90%;
font-size: 1rem;
font-weight: 900;
color: #9a9a9a;
direction: rtl;
`;

//carousel setup
const handleDragStart = ( e ) => e.preventDefault();

const items = [
    <CarouselItemWrapper>
        <CarouselItem src={pic1} onDragStart={handleDragStart} alt="form intro" />
        <CarouselItemH2>وقت رو تلف نکن سریع شروع کن</CarouselItemH2>
        <CarouselItemP>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </CarouselItemP>
    </CarouselItemWrapper>,
    <CarouselItemWrapper>
        <CarouselItem src={pic2} onDragStart={handleDragStart} alt="form intro" />
        <CarouselItemH2>باما ارتباط برقرار کن</CarouselItemH2>
        <CarouselItemP>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </CarouselItemP>
    </CarouselItemWrapper>,
    <CarouselItemWrapper>
        <CarouselItem src={pic3} onDragStart={handleDragStart} alt="form intro" />
        <CarouselItemH2>سریع تر کار خودتو شروع کن</CarouselItemH2>
        <CarouselItemP>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </CarouselItemP>
    </CarouselItemWrapper>,
];

const responsive = {
    0: {
        items: 1
    }
}

const MainCarousel = () => {
    return (
        <CarouselWrapper>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                disableButtonsControls />
        </CarouselWrapper>
    )
}

export default MainCarousel
