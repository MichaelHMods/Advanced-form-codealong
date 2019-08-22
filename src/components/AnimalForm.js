import React, { useState } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
/* Things to delete:
    State (formik with take over here)
    handleChanges
    handleSubmit
    form onSubmit
    input values
    labels
*/

const AnimalForm = ({ errors, touched, values }) => {
  return (
    <div className="animal-form">
      <Form>
        <Field name="species" type="text" placeholder="species" />
        {touched.species && errors.species && (
          <p className="error">{errors.species}</p>
        )}
        <Field type="text" name="size" placeholder="size" />
        {touched.size && errors.size && <p className="error">{errors.size}</p>}
        <Field component="select" className="food-select" name="food">
          <option>Please Choose an Option</option>
          <option value="herbivore">Herbivore</option>
          <option value="carnivore">Carnivore</option>
          <option value=" omnivore">Omnivore</option>
        </Field>
        {touched.food - select && errors.food - select && (
          <p className="error">{errors.food - select}</p>
        )}
        <label className="checkbox-container">
          Vaccinations
          <Field
            type="checkbox"
            name="vaccinations"
            checked={values.vaccinations}
          />
          <span className="checkmark" />
        </label>
        <Field
          component="textarea"
          type="text"
          name="notes"
          placeholder="notes"
        />
        {touched.notes && errors.notes && (
          <p className="error">{errors.notes}</p>
        )}
        <button>Submit!</button>
      </Form>
    </div>
  );
};
const FormikAnimalForm = withFormik({
  mapPropsToValues({ species, size, food, notes, vaccinations }) {
    return {
      species: species || "",
      size: size || "",
      food: food || "",
      notes: notes || "",
      vaccinations: vaccinations || false
    };
  },
  validationSchema: Yup.object().shape({
    species: Yup.string().required("You silly!!!"),
    size: Yup.string().required(),
    notes: Yup.string()
  })
})(AnimalForm); // javascript currying
export default FormikAnimalForm;
