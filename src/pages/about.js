import { Container, Row, Col } from "react-bootstrap";
import HandIcon from "../graphics/HandIcon";
import HomeHeartIcon from "../graphics/HomeHeartIcon";
import Megaphone from "../graphics/Megaphone";
import NetworkLogoHorz from "../graphics/NetworkLogoHorz";
import Pram from "../graphics/Pram";
// import { Link } from "react-router-dom";

export default function about() {
  return (
    <>
      <Container
        fluid
        style={{ backgroundColor: "var(--color5)" }}
        className="p-5"
      >
        <Container>
          <p className="lead">
            Assemblies of God churches make up 5% of the total evangelical
            churches in the U.S. Therefore we have accepted the responsibility
            to care for 20,000 of the 400,000 children per year. The revival of
            compassion in our fellowship is laying the groundwork to bring
            redemption to broken children and families.
          </p>
          <br />
          <p className="lead">
            We have a beautiful array of rural, urban, and suburban churches
            that are small, medium, and large in size. Not every church can find
            families to foster or adopt children, but every church can do
            something. Here are four areas of involvement:
          </p>
        </Container>
      </Container>





      <Container className="p-5 w-75">
        <Row>
          <Col md={3} className="p-5">
            <Megaphone />
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <h2 style={{ color: "var(--color4)" }}>
              <strong>Speak Up</strong>
            </h2>
            <h4>
              Let’s pray for, preach about, teach on, and advocate for children
              and families in foster care and for our government and agency
              partners.
            </h4>
          </Col>
        </Row>
        <Row>
          <Col md={3} className="p-5">
            <Pram />
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <h2 style={{ color: "var(--color2)" }}>
              <strong>Donate for Physical Needs</strong>
            </h2>
            <h4>
              Donate items to support foster care families, like - bunk beds,
              clothing, and meals.
            </h4>
          </Col>
        </Row>
        <Row>
          <Col md={3} className="p-5">
            <HandIcon />
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <h2 style={{ color: "var(--color5)" }}>
              <strong>Provide Support Services</strong>
            </h2>
            <h4>
              Donate your time to provide babysitting, transportation, meals, or
              respite
            </h4>
          </Col>
        </Row>
        <Row>
          <Col md={3} className="p-5">
            <HomeHeartIcon />
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <h2 style={{ color: "var(--color1)" }}>
              <strong>Open Your Heart and Home</strong>
            </h2>
            <h4>Prayerfully consider being a foster or adoptive parent.</h4>
          </Col>
        </Row>
      </Container>



<Container 
fluid 
className="p-5 text-white" 
style={{backgroundColor:"var(--color4)"}}>
   
   <Container>

   <h2 className="text-center">WE ARE HERE TO 
       <strong>
       {" "}SERVE
       </strong>
       </h2> 
       <br />

<h5>
Two of the top issues in foster care are:
</h5>
<ul>
    <li>
    There are not enough families to foster or adopt
    </li>
    <li>
    50% of foster families quit after the first year, and 
another 50% quit after the second year.
    </li>
</ul>

<p>
Churches are positioned to solve both of these 
problems. We have families and we have support 
systems within the church.
</p>

<p>
The AG Foster Care Network is a group of 
organizations that exist to serve and support you, 
the church.
</p>

   </Container>
</Container>


<Container className="p-5 text-center">
            <Container className="w-50">
    <NetworkLogoHorz secondary="var(--color1)" />
            </Container>
            <br />
   
        <h5>
          <a
          href="https://ag.org"
          >
            <strong>
        The General Council of the Assemblies of God
            </strong>
          </a>
            </h5>

            <h5>
1445 N. Boonville Avenue
Springfield, MO 65802-1894
        </h5>

<br />
<a
href="https://compact.family">
        <small>
        In collaboration with Assemblies of God Family Services Agency, dba COMP<strong style={{fontSize:"1rem"}}>ACT</strong> FAMILY SERVICES
        </small>
</a>

</Container>

    </>
  );
}
