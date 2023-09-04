import React, { useState } from "react";
import CountUp from "react-countup";
import { AiFillStar } from "react-icons/ai";
import { GiTrophyCup } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillCupHotFill } from "react-icons/bs";
import ScrollTrigger from "react-scroll-trigger";

const Timer = () => {
  // Translation

  const { t } = useTranslation();
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <section id="timer">
        <ScrollTrigger
          className="scroll"
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="timer-card">
                  <span>
                    <AiFillStar className="i" />
                  </span>
                  {counterOn && (
                    <h3>
                      <CountUp
                        className="border-0"
                        start={0}
                        end={2846}
                        duration={2}
                        delay={0}
                      />
                    </h3>
                  )}
                  <p>{t("timer.0")}</p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="timer-card">
                  <span>
                    <BsFillPersonFill className="i" />
                  </span>
                  {counterOn && (
                    <h3>
                      <CountUp
                        className="border-0"
                        start={0}
                        end={425}
                        duration={2}
                        delay={0}
                      />
                    </h3>
                  )}
                  <p>{t("timer.1")}</p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="timer-card">
                  <span>
                    <GiTrophyCup className="i" />
                  </span>
                  {counterOn && (
                    <h3>
                      <CountUp
                        className="border-0"
                        start={0}
                        end={7760}
                        duration={2}
                        delay={0}
                      />
                    </h3>
                  )}
                  <p>{t("timer.2")}</p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="timer-card">
                  <span>
                    <BsFillCupHotFill className="i" />
                  </span>
                  {counterOn && (
                    <h3>
                      <CountUp
                        className="border-0"
                        start={0}
                        end={2347}
                        duration={1}
                        delay={0}
                      />
                    </h3>
                  )}
                  <p>{t("timer.3")}</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </section>
    </>
  );
};

export default Timer;
