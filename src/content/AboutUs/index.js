import React from "react";
import styled from "styled-components";

import { useTranslation } from "gatsby-plugin-react-i18next";

import ImText from "../../components/TextandImage";
import Layout from "../../components/Layout";

import { FONTS } from "../../constants";

const Wrapper = styled.div`
  padding: 100px;
  text-align: center;
  p {
    font-size: 1.5em;
    font-family: ${FONTS.font2};
  }

  h3{
    font-family: ${FONTS.font1};
  }

  .outerflex {
    display: flex;
    flex-wrap: wrap;
    flex: 1;

    align-items: space-between;
    justify-content: space-between;
  }
  .person-card{
    padding: 2%;
    flex-grow: 1;
    flex-basis: 16%;

    display: flex;
    flex-direction: column;
  }

  .person-image{
    max-width: 200px;
  }

  .person-image img {
    max-width: 100%;
    border-radius: 50%;
  }

  .person-info{
    max-width: 200px;
  }

  ul{
    list-style: none;
  }

  @media (max-width: 800px) {
    .person-card {
      flex: 1 21%;
    }
  }
`;
const Title = styled.h1`
  padding-top: 20px;
  font-size: 3em;
  font-weight: 400;
  font-family: ${FONTS.font2};
  left: calc(50% - 267px/2 + 0.5px)
  top: 86px
`;

const Subtitle = styled.p`
  font-size: max(1.1vw, 20px);
  font-weight: 500;
  font-style: normal;
  font-family: ${FONTS.font2};
`;


const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <Layout>
    <Wrapper>
        <Title>{t("About.Title")}</Title>
        <Subtitle>{t("About.Subtitle")}</Subtitle> <br />

        <section class = "outerflex">

          <div class="person-card">

            <div class="person-image">
              <img src="https://i.ibb.co/HGsbQ2Z/Pallas-Chou.png"/>
            </div>

            <div class="person-info">
              <h3>Pallas Chou</h3>
              <p>CEO</p>
            </div>

          </div>

          <div class="person-card">

            <div class="person-image">
              <img src="https://i.ibb.co/C5L6TXj/Nelly.png"/>
            </div>

            <div class="person-info">
              <h3>Nelly Hejazi</h3>
              <p>CMO - Partnerships</p>
            </div>

          </div>

          <div class="person-card">

            <div class="person-image">
              <img src="https://i.ibb.co/jVVD9g1/catherine.png"/>
            </div>

            <div class="person-info">
              <h3>Catherine Eng</h3>
              <p>Lead Pedagogical Director</p>
            </div>

          </div>

          <div class="person-card">

            <div class="person-image">
              <img src="https://i.ibb.co/JtM6JJX/Yeji.png"/>
            </div>

            <div class="person-info">
              <h3>Yeji Lee</h3>
              <p>National Outreach Co-Director</p>
            </div>

          </div>

          <div class="person-card">

            <div class="person-image">
              <img src="https://i.ibb.co/SfZs3gJ/Rohun.png"/>
            </div>

            <div class="person-info">
              <h3>Rohun Shroff</h3>
              <p>National Outreach Co-Director</p>
            </div>

          </div>

          <div class="person-card">

            <div class="person-image">
              <img src="https://i.ibb.co/1sjpTGB/Screen-Shot-2022-02-22-at-8-18-09-PM.png"/>
            </div>

            <div class="person-info">
              <h3>Ruth Lu</h3>
              <p>Coordinators Co-Director</p>
            </div>

          </div>

          <div class="person-card">

            <div class="person-image">
              <img src="https://i.ibb.co/Bzht4Jv/Jin.png"/>
            </div>

            <div class="person-info">
              <h3>Jin Wong</h3>
              <p>Coordinators Co-Director</p>
            </div>

          </div>

          <div class="person-card">

            <div class="person-image">
              <img src="https://i.ibb.co/GxQ6ZWf/Screen-Shot-2022-02-24-at-5-54-44-PM.png"/>
            </div>

            <div class="person-info">
              <h3>Eddy Gonzalez</h3>
              <p>Head of Fundraising</p>
            </div>

          </div>

          <div class="person-card">

            <div class="person-image">
              <img src="https://i.ibb.co/HCFRJsk/Charlotte-Wickert.jpg"/>
            </div>

            <div class="person-info">
              <h3>Charlotte Wickert</h3>
              <p>Speaker Series Head</p>
            </div>

          </div>

          <div class="person-card">

            <div class="person-image">
              <img src="https://i.ibb.co/RB1Gj6Q/jeff.jpg"/>
            </div>

            <div class="person-info">
              <h3>Jeff Livingston</h3>
              <p>Research Professor</p>
            </div>

          </div>

          <div class="person-card">

            <div class="person-image">
              <img src="https://i.ibb.co/9tWWWMX/charlie.jpg"/>
            </div>

            <div class="person-info">
              <h3>Charlie Brobst</h3>
              <p>Research Team</p>
            </div>

          </div>
        </section>
        <section>
          <Subtitle>{t("About.Past")}</Subtitle>
          <ul>
            <li>Evelyn Wong</li>
            <li>Dheekshita Kumar</li>
            <li>Tam Nguyen</li>
            <li>Zoya Surani</li>
            <li>Daniela Velez</li>
            <li>Sarah Dohadwala</li>
            <li>Anne Lheem</li>
            <li>Nicole (Niki) Kim</li>
            <li>Dheekshita Kumar</li>
            <li>Johan Cervantes</li>
            <li>Sanjay Yepuri</li>
            <li>April Xie</li>
          </ul>
        </section>
    </Wrapper>
    </Layout>
  );
};
export default AboutUs;
