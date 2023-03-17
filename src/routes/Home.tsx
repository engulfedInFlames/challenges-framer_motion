import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import Header from "./Header";

const Wrapper = styled.div`
  min-height: calc(100vh - 180px);
  display: grid;
  justify-content: center;
`;

const Tabs = styled(motion.div)`
  width: 600px;
  display: grid;
  place-content: center;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: calc(50% - 40px) calc(50% - 40px);
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
`;

const Tab = styled(motion.div)`
  width: 100%;
  height: 150px;
  display: grid;
  place-content: center;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 99%;
  background-color: ${({ theme }) => theme.boxColor};
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.75);
`;

const Btn = styled(motion.div)`
  width: 80px;
  height: 80px;
  display: grid;
  place-items: center;
  font-weight: bold;
  background-color: white;
  margin: 0 auto;
  margin-top: 48px;
  border-radius: 99%;
`;

const tabsVars: Variants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const tabVars: Variants = {
  hover: {
    scale: 1.1,
    opacity: 0.6,
  },
  disappear: {
    opacity: 0,
  },
};

const overlayVars: Variants = {
  invisible: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  appear: {
    opacity: 1,
  },
};

function Home() {
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [index, setIndex] = useState<null | string>(null);
  const moveCircle = () => {
    setClicked((prev) => !prev);
  };
  const showOverlay = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <Wrapper>
      <Header />
      <Tabs variants={tabsVars} initial="start" animate="end">
        {["1", "2", "3", "4"].map((i) => (
          <Tab
            variants={tabVars}
            whileHover={i === "1" || i === "4" ? "hover" : undefined}
            onClick={() => {
              showOverlay();
              setIndex(i);
            }}
            key={i}
            id={i}
            layoutId={i}
            exit={i === "1" || i === "4" ? "disappear" : undefined}
          >
            {i === "2"
              ? clicked && !isVisible && <Circle layoutId="aCircle" />
              : i == "3"
              ? !clicked && !isVisible && <Circle layoutId="aCircle" />
              : null}
          </Tab>
        ))}
      </Tabs>
      <AnimatePresence>
        {isVisible ? (
          <Overlay
            key="overlay"
            variants={overlayVars}
            onClick={showOverlay}
            initial="invisible"
            animate="appear"
            exit="invisible"
          >
            {index ? (
              <Tab
                layoutId={index}
                style={{ width: "400px", height: "240px" }}
              />
            ) : null}
          </Overlay>
        ) : null}
      </AnimatePresence>
      <Btn onClick={moveCircle}>Click!</Btn>
    </Wrapper>
  );
}

export default Home;