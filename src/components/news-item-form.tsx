import React from "react";
import { Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

interface NewsItemFormProps {
  handleSubmit: (values: NewsItemFormState, existingId?: number) => void;
  handleCancel: () => void;
  initialValues?: NewsItemFormState;
}

export interface NewsItemFormState {
  id?: number;
  title: string;
  content: string;
}

const newsItemFormValidationSchema = yup.object().shape({
  title: yup.string().required("Otsikko on pakollinen"),
  content: yup.string().required("Sisältö on pakollinen"),
});

const emptyInitialValues = {
  title: "",
  content: "",
};

const NewsItemForm: React.FC<NewsItemFormProps> = (props) => {
  return (
    <Formik<NewsItemFormState>
      initialValues={
        props.initialValues ? props.initialValues : emptyInitialValues
      }
      validationSchema={newsItemFormValidationSchema}
      onSubmit={(values) => {
        const existingId = props.initialValues
          ? props.initialValues.id
          : undefined;
        props.handleSubmit(values, existingId);
      }}
    >
      {(form) => {
        return (
          <Form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
              event.preventDefault()
            }
          >
            <Form.Group controlId="title">
              <Form.Label>
                Otsikko<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Syötä otsikko"
                value={form.values.title}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                isInvalid={!!form.errors.title}
              />
              <Form.Control.Feedback type="invalid">
                {form.errors.title}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>
                Sisältö<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={5}
                placeholder="Syötä sisältö"
                value={form.values.content}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                isInvalid={!!form.errors.content}
              />
              <Form.Control.Feedback type="invalid">
                {form.errors.content}
              </Form.Control.Feedback>
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button
                className="mr-3"
                type="submit"
                variant="primary"
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  event.preventDefault();
                  form.submitForm();
                }}
              >
                Tallenna
              </Button>
              <Button variant="secondary" onClick={props.handleCancel}>
                Peruuta
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export { NewsItemForm };
