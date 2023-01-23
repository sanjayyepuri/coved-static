import React from "react";
import { Link } from 'gatsby';
import { Container } from "@material-ui/core";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { FONTS, COLORS } from "../../constants";


const PopularClasses = [
    {
        name: "James and the Giant Peach book club",
        description: "recommended for 1st and 2nd graders",
    },
    {
        name: "Percy Jackson book club",
        description: "recommended for 5th through 8th graders",
    },
    {
        name: "Brave New World book club",
        description: "recommended for High School students",
    },
    {
        name: "Abstract acrylic and oil painting",
        description: "recommended for students who are artistically inclined and want to grow their skills",
    },
    {
        name: "Drawing techniques",
        description: "recommended for students who are artistically inclined and want to grow their skills",
    },
    {
        name: "Beginner Chess Club",
        description: "for students new to the game"
    },
    {
        name: "Intermediate Chess Club",
        description: "for students who want to improve their play via learning openings and tactics"
    }
]

const TextThemes = {
  fontSize: {
    default: "max(16px,1vw)",
    lg: "max(24px,1.2vw)",
  },
  fontWeight: {
    default: "400",
    lg: "700",
  },
};

const LinkStyled = styled(Link)`
  font-family: ${FONTS.font1};
  font-color: ${COLORS.blue};
  padding-right: 40px;
  font-size: ${(props) => TextThemes.fontSize[props.ver]};
  font-weight: ${(props) => TextThemes.fontWeight[props.ver]};
  text-decoration: none;
  &:link {
    color: ${COLORS.blue};
  }
  &:visited {
    color: ${COLORS.blue};
  }
  &:hover {
    color: ${COLORS.yellow};
    text-decoration: none;
  }
  &:active {
    color: ${COLORS.yellow};
    text-decoration: none;
  }
`;

const ProgramPage = () => {

    return (
        <Layout>
            <Container maxWidth="md">
                <StaticImage src="../../images/coved_art_club.png" />
                <StaticImage src="../../images/coved_book_club.png" />
                <StaticImage src="../../images/coved_chess_club.png" />

                <p>
                    CovEd now offers Art, Book, and Chess club for K-12 students!
                    Students can learn art skills and make creative projects, read
                    and discuss books, learn and play chess, and make new friends
                    from all over America!
                </p>

                <p>
                    You can view our class catalog <LinkStyled to="https://www.canva.com/design/DAEem364Q9w/AtBjSn4ioJ_SYGMskS_BPQ/view" ver="default">here.</LinkStyled>
                </p>
                <p>
                Some of our most popular classes are:
                </p>
                <ul>
                    {PopularClasses.map(({ name, description }) =>
                        <li><strong>{name}</strong>, {description} </li>)}
                </ul>

                <p>
                    Classes are offered for ALL ages and skill levels. Students can
                    sign up for whichever class they want!
                </p>

                <p>
                    If you are interested in signing your student up for these
                    clubs, go to <LinkStyled to="https://bit.ly/coved-abc-student" ver="default">bit.ly/coved-abc-student.</LinkStyled>
                </p>
                <p>
                    If you are a college student interested in helping, <LinkStyled to="/abcmentorreg" ver="default">click here to sign up!</LinkStyled>
                </p>


            </Container>
        </Layout>
    );
}

export default ProgramPage;
