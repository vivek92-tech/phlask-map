import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
// eslint-disable-next-line import/no-unresolved
import SharedFormFields from "./SharedFormFields";

function addWaterTap({
  prev,
  next,
  onDrop,
  name,
  onNameChange,
  address,
  onAddressChange,
  website,
  onWebsiteChange,
  description,
  onDescriptionChange,
  organization,
  onChangeOrganization
}) {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Add Water Tap</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <SharedFormFields
            onDrop={onDrop}
            name={name}
            onNameChange={onNameChange}
            address={address}
            onAddressChange={onAddressChange}
            website={website}
            onWebsiteChange={onWebsiteChange}
            description={description}
            onDescriptionChange={onDescriptionChange}
            organization={organization}
            onChangeOrganization={onChangeOrganization}
          />
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={prev}>
            Select Another Resource
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              console.log();
              next();
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal.Body>
    </>
  );
}

export default addWaterTap;
