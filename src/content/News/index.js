import React from "react";
import styled from "styled-components";

import Grid from '@material-ui/core/Grid';

import Accordion, { AccordionRow } from '../../components/Accordion';
import Layout from "../../components/Layout";

import { FONTS, COLORS } from "../../constants";

const Wrapper = styled.div`
  text-align: left;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  p {
    font-family: ${FONTS.font2};
  }
  h2 {
    font-family: ${FONTS.font1};
    font-weight: 500;
    padding-top: 20px;
    text-align: center;
  }
  a {
    color: ${COLORS.darkblue};
    font-weight: 500;
    text-decoration: none;
  }
  a:hover {
    color: ${COLORS.yellow};
  }
`;

const NewsPage = () => {
  return (
    <Layout>
      <Wrapper>
        <h2> CovEducation in the News </h2>
        <Grid container direction="row" justifyContent="center" spacing={2}>
          <Grid item sm={8} xs={10}>
            For press inquiries, please contact our Public Relations Team at pr@coved.org.
          </Grid>
          <Grid item sm={6} xs={10}>
            <Accordion>
            <AccordionRow title="Featured Press" id={1}>
              <ul>
                <li><a href="	https://thetech.com/2020/04/08/coved-becomes-reality	" target="_blank" rel="noopener noreferrer" >	The Tech - "Orchestrating educational access: when a ‘CovEd’-ed dream becomes reality"	</a></li>
                <li><a href="	https://www.kiiitv.com/article/news/native-corpus-christian-behind-mentorship-movement-to-continue-education-for-students-k-12-despite-pandemic-setback/503-732cb1c0-311c-4a4b-9006-2ec12759c807?fbclid=IwAR1yBh0Rrey4zfyCaRDbzz46xyzV5ooOrw8xQ2H0tNMTDW2HAqDQwMwZwY0	" target="_blank" rel="noopener noreferrer" >	KIII-TV -	</a></li>
                <li><a href="	https://www.bostonglobe.com/2020/05/05/lifestyle/online-tutoring-program-pairs-students-with-college-mentors-keeping-both-engaged-while-schools-are-closed/	" target="_blank" rel="noopener noreferrer" >	Boston Globe - "Online tutoring program pairs students with college mentors, keeping both engaged while schools are closed"	</a></li>
                <li><a href="	https://www.thecrimson.com/article/2020/4/14/harvard-coronavirus-k12-volunteer-tutors/	" target="_blank" rel="noopener noreferrer" >	The Harvard Crimson - "Harvard, MIT Undergrads Create Volunteer Tutoring Platform to Serve K-12 Students Affected by Coronavirus Crisis"	</a></li>
                <li><a href="	https://news.mit.edu/2020/coveducation-students-school-closures-0417	" target="_blank" rel="noopener noreferrer" >	MIT News - "Helping K-12 students overcome school closures"	</a></li>
                <li><a href="	https://www.browndailyherald.com/article/2020/05/college-students-offer-support-for-k-12-students-in-time-of-crisis	" target="_blank" rel="noopener noreferrer" >	The Brown Daily Herald - "College students offer support for K-12 students in time of crisis"	</a></li>
                <li><a href="	https://www.stanforddaily.com/2020/06/29/coveducation-makes-impact-on-kids-after-school-closure/	" target="_blank" rel="noopener noreferrer" >	Stanford Daily - "CovEducation makes impact on kids after school closure"	</a></li>
                <li><a href="	https://www.thecrimson.com/article/2020/4/23/coved-harvard-tutors/	" target="_blank" rel="noopener noreferrer" >	Harvard Fifteen Minutes - "At Home With CovEd"	</a></li>
                <li><a href="	https://www.goodmorningamerica.com/family/story/distance-learning-hacks-back-school-affordable-educational-resources-72299408	" target="_blank" rel="noopener noreferrer" >	Good Morning America - "Distance learning tips: Discounted tech devices and affordable online tutoring services"	</a></li>
                <li><a href="	https://www.clintonfoundation.org/press-releases/clinton-foundation-announces-100000-funding-student-projects-fight-covid-19-pandemic?fbclid=IwAR15iso_fp4a0FD_aLsdKLX8lKb-4W-z9e7nDPeo26vw8C6wNVKn-Jeg-BI	" target="_blank" rel="noopener noreferrer" >	Clinton Foundation - "Clinton Foundation Announces $100,000 of Funding for Student Projects to Fight the COVID-19 Pandemic"	</a></li>
              </ul>
            </AccordionRow>
              <AccordionRow title="CovEd x Research" id={1}>
                <ul>
                  <li><a href="	https://scholar.harvard.edu/mkraft/publications/online-tutoring-college-volunteers-experimental-evidence-pilot-program	" target="_blank" rel="noopener noreferrer" >	American Economic Review - "Online Tutoring by College Volunteers: Experimental Evidence from a Pilot Program"	</a></li>
                  <li><a href="	https://timesofsandiego.com/education/2022/03/02/online-tutoring-effective-at-making-up-for-covid-19-learning-loss-study-says/	" target="_blank" rel="noopener noreferrer" >	Times of San Diego - "Online Tutoring Effective at Making Up for COVID-19 Learning Loss, Study Says"	</a></li>
                  <li><a href="	https://www.edweek.org/leadership/can-online-tutoring-work-results-are-promising-but-preliminary/2022/01	" target="_blank" rel="noopener noreferrer" >	Education Week - "Can Online Tutoring Help Schools Dig Out of a Pandemic Learning Hole?"	</a></li>
                  <li><a href="https://www.healthaffairs.org/doi/10.1377/hlthaff.2020.01576" target="_blank" rel="noopener noreferrer" >	Health Affairs - "How COVID-19 Threatens The Safety Net For US Children"	</a></li>
                  <li><a href="https://www.kpbs.org/news/local/2022/03/02/online-tutoring-effective-at-making-up-for-covid-19-learning-loss" target="_blank" rel="noopener noreferrer" >	KPBS - "Online Tutoring Effective at Making Up for COVID-19 Learning Loss"	</a></li>
                  <li><a href="https://patch.com/california/san-diego/online-tutoring-effective-making-learning-loss-study" target="_blank" rel="noopener noreferrer" >	CA Patch - "Online Tutoring Effective At Making Up For Learning Loss: Study"	</a></li>
                  <li><a href="https://phys.org/news/2022-03-online-optimism.html" target="_blank" rel="noopener noreferrer" >	Phys - "Online tutoring study shows cause for optimism"	</a></li>
                </ul>
              </AccordionRow>
              <AccordionRow title="News Releases & Podcasts" id={2}>
                <ul>
                  <li><a href="	https://harvardtechnologyreview.com/2020/05/13/online-learning-pt2/	" target="_blank" rel="noopener noreferrer" >	Harvard Technology Review - "An Online Learning Experiment – How Education Technology is Evolving to meet the Demands of Online Learning"	</a></li>
                  <li><a href="	https://news.harvard.edu/gazette/story/2020/05/students-find-ways-to-help-during-the-pandemic/	" target="_blank" rel="noopener noreferrer" >	Harvard Gazette - "A time of need and a desire to help"	</a></li>
                  <li><a href="	https://www.mcb.harvard.edu/department/news/creating-community-immunity-wong-and-harvard-mit-peers-launch-virtual-mentoring-platform-to-support-k-12-students-across-the-u-s/	" target="_blank" rel="noopener noreferrer" >	Harvard MCB Department - "Creating Community Immunity: Wong and Harvard, MIT Peers launch virtual mentoring platform to support K-12 students across the U.S."	</a></li>
                  <li><a href="	https://www.bigdealbook.com/newsletters/k-12_technology/?show=online_tutoring_program_pairing_k___12_students_with_college_mentors/b979771f9-c0af-4742-a640-1b4cc63ee822 	" target="_blank" rel="noopener noreferrer" >	Big Deal Media/Virginia Society for Technology in Education - "Online Tutoring Program Pairing K–12 Students with College Mentors"	</a></li>
                  <li><a href="	https://www.awsp.org/informed-principal/blog/blog-detail/awsp-blog/2020/06/04/free-mentoring-for-your-students-from-ivy-league-college-students	" target="_blank" rel="noopener noreferrer" >	Association of Washington School Principles - "Free Mentoring for Your Students From Ivy League College Students"	</a></li>
                  <li><a href="	https://hms.harvard.edu/news/show-must-go	" target="_blank" rel="noopener noreferrer" >	Harvard Medical School - "The Show Must Go On"	</a></li>
                  <li><a href="	https://rss.com/podcasts/bethechange/66888/	" target="_blank" rel="noopener noreferrer" >	Be the Change Podcast - "Be the Change Podcast: S01 E14 - CovEducation"	</a></li>
                  <li><a href="	https://schurrscroll.com/2020/09/29/covid-offers-alumna-chance-to-give-back/	" target="_blank" rel="noopener noreferrer" >	Spartan Scroll - "COVID Offers Alumna Chance to Give Back"	</a></li>
                  <li><a href="	https://www.orangecoast.com/features/sweet-deeds-orange-resident-christin-le-is-a-regional-director-at-coved-a-nonprofit-offering-free-online-mentoring/	" target="_blank" rel="noopener noreferrer" >	Orange Coast Magazine - "Sweet Deeds: Orange Resident Christin Le Is a Regional Director at CovEd, A Nonprofit Offering Free Online Mentoring"	</a></li>
                  <li><a href="	https://today.ucsd.edu/story/online-tutoring-study-shows-cause-for-optimism	" target="_blank" rel="noopener noreferrer" > UC San Diego - "Online Tutoring Study Shows Cause for Optimism"	</a></li>
                </ul>
              </AccordionRow>
              <AccordionRow title="Resource Listings" id={2}>
                <ul>
                  <li><a href="	https://www.roe9.k12.il.us/article/307097	" target="_blank" rel="noopener noreferrer" >	Regional Office of Education 9 - "CovEducation"	</a></li>
                  <li><a href="	https://www.thefreeschool.org/coveducation-free-tutoring-mentorship-online-k-12/	" target="_blank" rel="noopener noreferrer" >	The Free School - "CovEducation: Free Tutoring & Mentorship Online (K-12)"	</a></li>
                  <li><a href="	https://www.citizenschools.org/covid19-resources/for-parents	" target="_blank" rel="noopener noreferrer" >	Citizen Schools - "COVID-19 Resources"	</a></li>
                </ul>
              </AccordionRow>
            </Accordion>
          </Grid>
        </Grid>
      </Wrapper>
    </Layout>
  );
};

export default NewsPage;
