import { KeyboardArrowLeftOutlined } from "@mui/icons-material";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transition: ease 1000ms;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "15px"};
  right: ${(props) => props.direction === "right" && "15px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
`;

const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 59px);
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
  padding-top: 50px;
  height: 100%;
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  margin-left: 40px;
`;

const Title = styled.h1`
  margin: 0px 20px;
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 30px 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

// const Button = styled.button`
//   margin: 0px 20px;
//   padding: 10px;
//   font-size: 20px;
//   background-color: transparent;
//   cursor: pointer;
//   border: 2px solid black;
//   &:hover {
//     background-color: #000000;
//     border: 2px solid white;
//     color: white;
//     transform: scale(1.2);
//     transition: all 0.3s ease;
//   }
// `;

const Image = styled.img``;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      //   console.log("Left");
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      //   console.log("Right");
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  let navigate = useNavigate();
  return (
    <Container>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((items) => (
          <Slide bg={items.bg} key={items.id}>
            <InfoContainer>
              <Title>{items.title}</Title>
              <Desc>{items.desc}</Desc>
              <Button
              variant = "contained"
              style={{marginLeft: "20px"}}
                // onClick={() => {
                //   navigate(items.link);
                // }}
              >
                Calculate now
              </Button>
            </InfoContainer>
            <ImageContainer>
              <Image src={items.img} style={{ height: items.size }} />
            </ImageContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <KeyboardArrowLeftOutlined style={{ color: "white" }} />
      </Arrow>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardArrowRightOutlined style={{ color: "white" }} />
      </Arrow>
    </Container>
  );
};
/*const Slider = (
  <AwesomeSlider animation="cubeAnimation">
  <div img-src="https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  <div data-src="/path/to/image-1.png" />
  <div data-src="/path/to/image-2.jpg" />
</AwesomeSlider>
);*/
export default Slider;
