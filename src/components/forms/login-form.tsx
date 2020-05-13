import React from "react";
import { Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

import { authenticate } from "../../utils/fake-auth";

interface LoginFormProps {
  handleSuccess: () => void;
}

interface FormState {
  username: string;
  password: string;
}

const logInFormValidationSchema = yup.object().shape({
  username: yup.string().required("Syötä käyttäjätunnus"),
  password: yup.string().required("Syötä salasana"),
});

const LoginForm: React.FC<LoginFormProps> = (props) => {
  return (
    <Formik<FormState>
      initialValues={{ username: "", password: "" }}
      validationSchema={logInFormValidationSchema}
      onSubmit={(values, formikHelpers) => {
        if (authenticate(values.username, values.password)) {
          props.handleSuccess();
        } else {
          formikHelpers.setSubmitting(false);
          formikHelpers.setErrors({
            username: "Salasana tai käyttäjätunnus on väärä",
            password: "Salasana tai käyttäjätunnus on väärä",
          });
        }
      }}
    >
      {(form) => {
        return (
          <Form
            className="pb-1"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
              event.preventDefault()
            }
          >
            <Form.Group controlId="username">
              <Form.Label>Käyttäjätunnus</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Syötä käyttäjätunnus"
                value={form.values.username}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                isInvalid={!!form.errors.username}
              />
              <Form.Control.Feedback type="invalid">
                {form.errors.username}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Salasana</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Syötä salasana"
                value={form.values.password}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                isInvalid={!!form.errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {form.errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              type="submit"
              disabled={form.isSubmitting}
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                event.preventDefault();
                form.submitForm();
              }}
            >
              Kirjaudu sisään
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export { LoginForm };
