import React from "react"
import classnames from "classnames"
import { Formik, Form } from "formik"
import fetch from "isomorphic-unfetch"

import { FormikTextField } from "../formik-components"

export default function ContactForm({ children, ...props }) {
  const [state, setState] = React.useState({
    sent: false,
    name: "",
  })

  const validateName = value => {
    return !String(value).trim() ? "Name is required" : ""
  }

  const validateEmail = value => {
    if (!String(value).trim()) {
      return "Email is required"
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return "Invalid email address"
    }
  }

  const validateMessage = value => {
    return !String(value).trim() ? "Message is required" : ""
  }

  const submitForm = (values, actions) => {
    actions.setFieldError("server", "")
    fetch("/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then(() => setState({ sent: true, name: values.name }))
      .catch(err => actions.setFieldError("server", err.message))
      .finally(() => {
        actions.setSubmitting(false)
        actions.resetForm()
      })
  }

  if (state.sent) {
    return (
      <p>
        Thanks {state.name}. <br /> Your message has been sent.
        <svg
          width="24"
          height="48"
          className="stroke-current"
          strokeWidth="1.5"
        >
          <use xlinkHref="/assets/icons.svg#smile" />
        </svg>
      </p>
    )
  }

  return (
    <div {...props} className={classnames("w-full bg-white", props.className)}>
      <Formik
        validateOnBlur={false}
        initialValues={{
          name: "",
          email: "",
          message: "",
          server: "",
        }}
        onSubmit={submitForm}
      >
        {({ errors, isSubmitting }) => (
          <Form>
            <FormikTextField name="name" label="Name" validate={validateName} />
            <FormikTextField
              name="email"
              label="Email"
              type="email"
              className="mt-4"
              validate={validateEmail}
            />
            <FormikTextField
              name="message"
              label="Message"
              multiline
              helpText="Partial styling with Markdown is supported (*bold* _italic_ `inline code`)"
              className="mt-4"
              validate={validateMessage}
              style={{ resize: "vertical" }}
            />

            {Boolean(errors.server) && (
              <p className="text-sm tracking-wide text-error">
                {errors.server}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="h-10 px-4 mt-4 text-sm font-semibold text-white bg-black border border-black focus:bg-white focus:text-black hover:bg-white hover:text-black disabled:bg-mid-gray disabled:text-dark-gray disabled:border-mid-gray"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
