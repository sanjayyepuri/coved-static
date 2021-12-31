import React from "react";
import styled from "styled-components";

import Alert from "@material-ui/lab/Alert";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../components/Layout";

import { FONTS } from "../../constants";

const Wrapper = styled.div`
  padding: 100px;
  text-align: center;
  p {
    font-size: 1.5em;
  }
`;
const Title = styled.h1`
  padding-top: 50px;
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


const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <Layout>
    <Wrapper>
      <Alert icon={false} severity="warning">
        <Title>{t("Contact.Title")}</Title>
        <Subtitle>{t("Contact.Subtitle")}</Subtitle> <br />
        <br />
        <br />
        <p>
          Check out the <a href="/faqs">FAQs</a> page to see if we've already
          answered your question. If you don't see your question there, for
          general questions, please email us at{" "}
          <a href="mailto:support@coved.org">support@coved.org</a>
          ! <br />
          <br /> For any inquiries related to media/news releases, please
          contact us at <a href="mailto:pr@coved.org">pr@coved.org</a>
          . <br /> For inquiries on partnerships, please email <a href="mailto:partnerships@coved.org">partnerships@coved.org</a>
          . <br />
          <br /> We're excited to hear from you!
        </p>
        <p>
          <br /> <Text style={{fontWeight: "bold"}}> Connect With Us!</Text> <br /> 
          Stay updated on CovEd events, news, and resources on{" "}
          <a href="https://www.facebook.com/CovEducationInc"> Facebook</a>, {" "}
          <a href="https://twitter.com/coveducation"> Twitter</a>,{" "}
          <a href="http://instagram.com/coveducation"> Instagram</a>,{" & "}
          <a href="https://www.linkedin.com/company/coveducation-inc"> LinkedIn</a>.
        </p>
      </Alert>
    </Wrapper>
    </Layout>
  );
};
export default ContactUs;

