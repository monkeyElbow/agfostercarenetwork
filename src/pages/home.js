import { Container, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import NetworkLogo from "../graphics/NetworkLogo";
import UsMap from "../components/UsMap";
import NetworkLogoHorz from "../graphics/NetworkLogoHorz";
import USMapSmall from "../graphics/USMapSmall";
import ChildIcons from "../graphics/ChildIcons";
import FamilyIcon from "../graphics/FamilyIcon";
import KidsIconsRow from "../graphics/KidsIconsRow";

const home = () => {
  return (
    <>
 

 <Container className="p-5">

            <Container className="w-50">
              <NetworkLogo fill="#000" secondary="var(--color1)" />
            </Container>

         
            <div>
              <h3>
                We hope to see {" "}
                
               <span  style={{ color: "var(--color1)" }}>

                <strong>
                  20,000
                  </strong>

               </span>{" "}
                 children in U.S. foster care being cared
                for by our Assemblies of God churches and families.{" "}
              </h3>

              <div className="px-5">
                <KidsIconsRow />
              </div>
            </div>
       
     
      </Container>


      <Container fluid className="py-0 text-white" style={{backgroundColor:"var(--color4"}}>
        <Row>
          <Col
            md={6}
            className="d-flex flex-column align-items-center justify-content-end"
          >
            <Container className="p-5">
              <USMapSmall color="var(--color6)" />
            </Container>

            <h1 className="display-2" style={{ color: "var(--color1)" }}>
              <strong>400,000</strong>
            </h1>
            <h4>
              children in <strong>foster care</strong>
            </h4>
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-end">
            <Container className="p-5">
              <ChildIcons color="var(--color3)" />
            </Container>
            <h1 className="display-2" style={{ color: "var(--color1)" }}>
              <strong>100,000</strong>
            </h1>
            <h4>
              children <strong>ready for adoption</strong>
            </h4>
          </Col>
        </Row>
      </Container>




      <Container fluid className="p-5 bg-color1">
        <Row>
          <Col md={5} className="p-4">
            <Container>
              <NetworkLogo fill="#fff" secondary="var(--color6)" />
            </Container>
          </Col>
          <Col
            md={7}
            className="d-flex flex-column justify-content-center text-white"
          >
            <h2 className="text-center">
              WHO WILL
              <strong> TAKE A STAND</strong>?
            </h2>
            <p>
              We know that every Bible-believing church wants to follow the
              command to care for those that feel orphaned, but often they don’t
              know how or where to start. If the church doesn’t take a stand for
              these children, then who will?
            </p>

<div className="text-center mb-5">

            <Button
            variant="light"
            className="btn-lg btn-light w-50"
            href="/signup" 
            // style={{
              // backgroundColor:"var(--color4)",
              // backgroundColor:"#fff",
              // color:"var(--color1)",
              // border:0
            // }}
            >
              <strong>
              Join Now
              </strong>
              </Button>
              </div>

          </Col>
        </Row>
      </Container>

  

      {/* <Container>
    <Row>
        <Col md={4} className="d-flex justify-content-center" style={{color:"var(--color1"}}>
            <h1 className="display-1">
            <strong>43%</strong>
            </h1>
            </Col>
        <Col className="d-flex justify-content-center align-items-center felx-row">
        <h5>of pastors say they would start an orphan care 
ministry at their church 
<strong>
 {" "}if they had the right strategy.
</strong>
</h5>
        </Col>
    </Row>
</Container> */}

      <Container
        fluid
        className="p-5"
        style={{ backgroundColor: "var(--color5)" }}
      >
        <h2 className="text-center pb-4">
          EVERY CHURCH <strong>DOING SOMETHING</strong>
        </h2>
        <p>
          <strong>AG Foster Care Network</strong> can connect your church
          leadership to ministries that can guide you to help solve the foster
          care crisis in your community. We want to see every church and every
          person doing something.
        </p>

        <p className="text-white text-center h3 py-4">
          <strong>
            We see a day when every Assemblies of God church is doing something
            to help children and families in foster care.
          </strong>
        </p>

        <Container className="w-25">
          <FamilyIcon color="#fff" />
        </Container>
      </Container>

    


        <UsMap />
      {/* <Container className="p-0">
      </Container> */}



<Container className="my-5">
      <Container className="w-25">
        <NetworkLogoHorz fill="#000" secondary="var(--color1)" />
      </Container>
</Container>
    </>
  );
};

export default home;
