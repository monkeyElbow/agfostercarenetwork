{profiles.length > 0 ? (
    profiles.map((profile) => (
      <Row className="m-3 row-cols-1 p-0" key={profile.key}>
        <Col className="col">
          <Card>
            <Card.Header className="pt-3">
              <h5 className="text-capitalize">
                <strong>
                  {profile.first_name} {profile.last_name}
                </strong>
              </h5>
            </Card.Header>

            <Card.Body className="p-3">
              {/* ORG */}
              {profile.org && <h5>{profile.org}</h5>}

              {/* TITLE */}
              {profile.title && (
                <p className="text-capitalize" style={{lineHeight:".25rem"}}>
                  <strong>{profile.title}</strong>
                </p>
              )}

              {/* ORG URL */}
              {profile.org_url && (
                <p>
                  {/* Organization Website:{" "} */}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`https://${profile.org_url}`}
                  >
                    <strong>{profile.org_url}</strong>
                  </a>
                </p>
              )}

              {/* FOSTER PARENT */}
              {profile.fosterParent === "true" && (
                <p>I am a Foster parent</p>
              )}

              {/* STATE */}
{profile.state !== "NONE" &&
              <p>State: {profile.state}</p>
}

              {/* CREDENTIALED */}
              {profile.ag_credentialed === "true" && (
                <p>AG Credentialed</p>
              )}

              {/* SOCIAL MEDIA URL */}
              {profile.social_media && (
                <p>
                  {/* Social Media:{" "} */}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`https://${profile.social_media}`}
                  >
                    <strong>{profile.social_media}</strong>
                  </a>
                </p>
              )}
              {/* COMMENTS */}
              {profile.comments && (
                <p>
                  <strong>
                    <small>Comments:</small>
                  </strong>
                  :
                  <br />
                  {profile.comments}
                </p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    ))
  ) : (
    <Alert variant="light">
      <p>
        Member profiles are not available under current conditions.
        <br />
        Please try a different parameter or try again later.
      </p>
    </Alert>
  )}