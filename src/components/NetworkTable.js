import BootstrapTable from "react-bootstrap-table-next";
import { db } from "../util/firebase";
import {  Alert, Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { useAuth } from "../util/AuthContext";



export default function NetworkTable() {
  const { currentUser } = useAuth();

    const [loading, setLoading] = useState(false);
    const [profiles, setProfiles] = useState([]);
    const [error, setError] = useState(null);
  
  
    // FETCH PROFILES CODE ON LOAD //
  
    useEffect(() => {
      setLoading(true);
      const getProfilesFromFirebase = [];
     try {
       return db
       .collection("Users")
       .where("ag_affiliated", "==", "Yes")
       .orderBy("last_name")
       .get()
       .then((querySnapshot) => {
         if (getProfilesFromFirebase.length < 1) {
           console.log("fetching");
           querySnapshot.forEach((doc) => {
             getProfilesFromFirebase.push({
               ...doc.data(),
               key: doc.id,
              });
            });
            setProfiles(getProfilesFromFirebase);
            setLoading(false);
          }
        })
  
      } catch (error) {
            setError("Trouble gathering profiles. Please try again later.");
          }
    }, []);
    



      // -----------------
      // begin user mail form
function MailUserForm({emailTo, first_name}) {
const [msg, setMsg] = useState("")
const [msgSent, setMsgSent] = useState(false)

function SendIt(e) {
  e.preventDefault();
  db.collection('mail').add({
    to: `${emailTo}`,
    replyTo:`${currentUser.email}`,
    // from:`${currentUser.email}`,
    message: {
      subject: 'Message from AG Foster Care Network Member',
      text: `${currentUser.email} is reaching out to you via the AG Foster Care Network. This is what they had to say: ${msg}
      `,
      html: `${currentUser.email} is reaching out to you via the AG Foster Care Network. This is what they had to say: ${msg}
      `,
    }
  }).then(() => console.log('Queued email for delivery!'));

  setMsgSent(true)
  setMsg("")
  }
  
  return (
    <Form onSubmit={SendIt} className="bg-white p-4">
    <h5>You can send {first_name} an email here:</h5>
    {/* <p>
      Will email to: 
    {emailTo}
    </p>
    <p>
      The message: 
    {msg}<br />
    </p> */}
    <Form.Control
    as="textarea" 
    value={msg} onInput={e => setMsg(e.target.value)} type="text" />

{msgSent === false &&
<Button
   type="submit" 
   className="my-1"
>Send email</Button>
}

{msgSent === true &&
<Button disabled type="submit" className="my-1"
>Email sent!</Button>
}
    </Form>
  )
}
// end send email form
// ---------------------------------
  
// const {ToggleList} = ColumnToggle;

const CustomToggleList = ({
  columns,
  onColumnToggle,
  toggles
}) => (
  <div className="btn-group btn-group-toggle
   
   " data-toggle="buttons">
    {
      columns
        .map(column => ({
          ...column,
          toggle: toggles[column.dataField]
        }))
        .map(column => (
          <button
            type="button"
            key={ column.dataField }
            className={ `btn btn-primary btn-sm border border-1 ${column.toggle ? 'active' : ''}` }
            data-toggle="button"
            aria-pressed={ column.toggle ? 'true' : 'false' }
            onClick={ () => onColumnToggle(column.dataField) }
          >
            { column.text }
          </button>
        ))
    }
  </div>
);


  const columns = [
    // {dataField: 'uid', text: 'Id'},
    {dataField: 'first_name', text: 'First Name', sort: true},
    {dataField: 'last_name', text: 'Last Name', sort: true},

    // {dataField: 'org_ag', text: 'AG Organization', hidden: true, sort: true},
    // {dataField: 'org_ag_title', text: 'Title', hidden: true, sort: true},
    // {dataField: 'org_other', text: 'Organization', hidden: true, sort: true},
    // {dataField: 'org_other_title', text: 'Title', hidden: true, sort: true},
    {dataField: 'city', text: 'City', hidden: true, sort: true},
    {dataField: 'state', text: 'State', sort: true},
    {dataField: 'user_zip', text: 'Zip Code', hidden: true, sort: true},
    {dataField: 'fosterParent', text: 'Foster Parent', hidden: true, sort: true},
  ];

  
  const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
  }];
  

  const pagination = paginationFactory({
    page: 2,
    sizePerPage: 10,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    }
  });

  const { SearchBar, ClearSearchButton } = Search;

  
 const expandRow = {
  onlyOneExpanding:true,

   renderer: (row) => (
     <Container className="pt-3">

<Row>
  <Col md="auto">
<h3 className="text-capitalize mb-2" style={{color:"var(--color1)"}}>
                      <strong>
                        {row.first_name} {row.last_name}
                      </strong>
                      </h3>

                     

  </Col>


{/* FOSTER PARENT */}
{row.fosterParent === "Yes" && (
  <Col md="auto">
  <p className="bg-secondary rounded-pill text-white py-0 px-2 mx-1 text-center" style={{width:"135px"}}>Foster Parent</p>
  </Col>
  )}
{/* CREDENTIALED */}
{row.ag_credentialed === "Yes" && (
  <Col md="auto">
  <p className="bg-primary rounded-pill text-white py-0 px-2 mx-1 text-center" style={{width:"155px"}}>AG Credentialed</p>
  </Col>
  )}
</Row>




 {/* CITY/STATE */}
 {row.city.length > 1 &&
<h5> {row.city}, {row.state !== "NONE" &&
<span> {row.state}</span>
}</h5>
}

                    {/* SOCIAL MEDIA URL */}
{row.social_media.length > 1 && (
  <p>
    {/* Social Media:{" "} */}
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={`//${row.social_media.replace(/^\/\/|^.*?:(\/\/)?/, '')}`}
    >
      <strong>{row.social_media.replace(/^\/\/|^.*?:(\/\/)?/, '')}</strong>
    </a>
  </p>
)}



<Row className="d-flex justify-content-around">
  {row.org_ag &&
  <Col lg="auto">
    
<Container className="my-2 rounded p-4 border border-1 border-dark bg-white">

{/* ORG AG */}
{row.org_ag && <h5>{row.org_ag}</h5>}

{/* TITLE AG ORG */}
{row.org_ag_title && (
  <p className="text-capitalize my-1" style={{lineHeight:"1.1rem"}}>
    <strong>{row.org_ag_title}</strong>
  </p>
)}

{/* ORG AG URL */}
{row.org_ag_url && (
  <p>
    {/* Organization Website:{" "} */}
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={`//${row.org_ag_url.replace(/^\/\/|^.*?:(\/\/)?/, '')}`}
      >
      <strong>{row.org_ag_url.replace(/^\/\/|^.*?:(\/\/)?/, '')}</strong>
    </a>
  </p>
)}
</Container>

  </Col>
}


{row.org_other &&
  <Col lg="auto">
  <Container className="my-2 rounded p-4 border border-1 border-dark bg-white">

  
{/* ORG OTHER */}
{row.org_other && <h5>{row.org_other}</h5>}

{/* TITLE OTHER ORG */}
{row.org_other_title && (
  <p className="text-capitalize my-1" style={{lineHeight:"1.1rem"}}>
    <strong>{row.org_other_title}</strong>
  </p>
)}

{/* ORG OTHER URL */}
{row.org_other_url && (
  <p>
    {/* Organization Website:{" "} */}
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={`//${row.org_other_url.replace(/^\/\/|^.*?:(\/\/)?/, '')}`}
      >
      <strong>{row.org_other_url.replace(/^\/\/|^.*?:(\/\/)?/, '')}</strong>
    </a>
  </p>
)}
</Container>
</Col>
}
</Row>




{/* COMMENTS */}
{row.comments && (
  <p className="mt-4">
    <strong>
      <small>Notes:</small>
    </strong>
    
    <br />
    {row.comments}
  </p>
)}

{/* send message to user if email is present in profile */}
{row.email && 
<MailUserForm emailTo={row.email} first_name={row.first_name} />
 }
 {/* end if email / send email */}


     </Container>
   )
  }
  // end profile row



  return (
        <>

           
            {loading && <Alert variant="light">Loading...</Alert>}
      {error && <Alert variant="warning">{error}</Alert>}
     


      <ToolkitProvider
        bootstrap4
        keyField='uid'
        data={profiles}
        columns={columns}
        search
        columnToggle
      >
        {
          props => (
            <div>
              <SearchBar {...props.searchProps} />
              <ClearSearchButton {...props.searchProps} />
              <hr />
<CustomToggleList{...props.columnToggleProps} />
              <hr />
              <BootstrapTable
                defaultSorted={defaultSorted}
                expandRow={expandRow}
                pagination={pagination}
                {...props.baseProps}
              />

</div>
          )
        }
      </ToolkitProvider>

        </>
    )
}


// https://www.freakyjolly.com/react-bootstrap-table-next-example-pagination-filter-sorting-export-to-excel/

// https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Column%20Toggle&selectedStory=Default%20Visibility&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel