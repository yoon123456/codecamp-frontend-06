import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Wrapper = styled.div`
  height: 500px;
  background-color: #ebbbc1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const SliderStyle = styled(Slider)`
  width: 300px;
  height: 300px;
`;

const ImgWrapper = styled(Slider)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export default function LayoutBanner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <SliderStyle {...settings}>
        <ImgWrapper>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1tju4vvWvGYzweUta06nmOohl65f776YhoSaG3FeNdcOP1JfWh3lKjxTd_LIFPc2Ql40&usqp=CAU"
            }
          />
        </ImgWrapper>
        <ImgWrapper>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVj4px8IjIFAXyC15ySbK4RQR3pYClo-yAnPDqTOAR1oddn-umj2NQH5pEp0L2ViS7N0&usqp=CAU"
            }
          />
        </ImgWrapper>
        <ImgWrapper>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUVhgApz5_9qNUhQTaYeCA-BEt0d3Eaj0QaFMOOfur5BQqLBS4tjo2N7Zj0hupQuUWvPs&usqp=CAU"
            }
          />
        </ImgWrapper>
        <ImgWrapper>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOeiG8_2W8i12UueTat8C8bf9xLM2HqWbVIqniG_k9vrrwge5ZzSfrYsbJnws9x7a3sZE&usqp=CAU"
            }
          />
        </ImgWrapper>
        <ImgWrapper>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpvys0jgOgEdSfcIa8dpTD1falG1x0qSXl4A&usqp=CAU"
            }
          />
        </ImgWrapper>
        <ImgWrapper>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82YBvAAHJ-8TonUScHuDfDWSWBCwe9hOFbw&usqp=CAU"
            }
          />
        </ImgWrapper>
      </SliderStyle>
    </Wrapper>
  );
}
