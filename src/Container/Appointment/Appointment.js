import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';
import InputBox from '../../Components/Box/InputBox';

function Appointment(props) {
    const history = useHistory();
    const [update, setUpdate] = useState(false);

    const handleInsert = () => {
        history.push("/listappointment");
    }

    let schema = yup.object().shape({
        name: yup.string().required('Enter Your Name'),
        phone: yup.number().required('Enter Your Phone number').positive().integer(),
        email: yup.string().email().required('Enter Your E-mail'),
        department: yup.string().required('Enter Your Department'),
        message: yup.string().required('Enter Your Message'),
        date: yup.date().required('Enter Your Date'),
    });

    var localdata = JSON.parse(localStorage.getItem("appointment"));

    let handleSubmit = (values) => {

        let iData = {
            id: Math.floor(Math.random() * 1000),
            ...values
        }



        if (localdata === null) {
            localStorage.setItem("appointment", JSON.stringify([values]));
        }
        else {
            localdata.push(iData);
            localStorage.setItem("appointment", JSON.stringify(localdata));
        }
    }

    const handleupdateData = (values) => {
        let localdata = JSON.parse(localStorage.getItem("appointment"));

        let uData = localdata.map((l) => {
            if (l.id === values.id) {
                return values
            } else {
                return l
            }
        })

        localStorage.setItem("appointment", JSON.stringify(uData));
        setUpdate(false);
        formik.resetForm();
        history.push("/listappointment");
        console.log(uData);
    }





    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            department: '',
            message: '',
            date: ''
        },
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
            // handleSubmit(values);
            // handleInsert();
            resetForm();

            if (update) {
                handleupdateData(values)
            } else {
                handleInsert(values)
            }
        }
    });

    useEffect(
        () => {
            if (localdata !== null && props.location.state) {
                let fData = localdata.filter((l) => l.id === props.location.state.id)
                formik.setValues(fData[0])
            }
            setUpdate(true);
        },
        [])


    const { handleChange, errors, handleBlur, touched, values} = formik

    return (
        <>
            <main>
                <section id="appointment" className="appointment">
                    <div className="container">
                        <div className="section-title">
                            <h2>Book Appointment</h2>
                            <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                                blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                                Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                        </div>

                        <div className='row text-center py-3'>
                            <div className='col-6'>
                                <NavLink activeClassName='aptNav' to={"/appointment"}>Book Appointment</NavLink>
                            </div>
                            <div className='col-6'>
                                <NavLink activeClassName='aptNav' to={"/listappointment"}>List Appointment</NavLink>
                            </div>
                        </div>

                        <Formik value={formik}>
                            <Form action method="post" role="form" className="php-email-form" onSubmit={formik.handleSubmit}>
                                <div className="row">
                                    <div className="col-md-4 form-group">
                                        <InputBox
                                            type="text" name="name"
                                            className="form-control" id="name"
                                            placeholder="Your Name"
                                            error={Boolean(errors.name && touched.name)}
                                            errorMessage={errors.name}
                                            value = {values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        <div className="validate" />

                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <InputBox
                                            type="text" name="email"
                                            className="form-control" id="email"
                                            placeholder="Your email"
                                            error={Boolean(errors.email && touched.email)}
                                            errorMessage={errors.email}
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <InputBox
                                            type="text" name="phone"
                                            className="form-control" id="phone"
                                            placeholder="Your phone"
                                            error={Boolean(errors.phone && touched.phone)}
                                            errorMessage={errors.phone}
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <div className="validate" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 form-group mt-3">
                                        <InputBox
                                            type="date" name="date"
                                            className="form-control" id="date"
                                            placeholder="Your date"
                                            error={Boolean(errors.date && touched.date)}
                                            errorMessage={errors.date}
                                            value={values.date}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3">
                                        <InputBox type="select" name="department"
                                            id="department" className="form-select"
                                            onChange={formik.handleChange}
                                            error={Boolean(errors.department && touched.department)}
                                            errorMessage={errors.department}
                                            value={values.department}
                                            onBlur={handleBlur}>
                                            <option value>Select Department</option>
                                            <option value="Department 1">Department 1</option>
                                            <option value="Department 2">Department 2</option>
                                            <option value="Department 3">Department 3</option>
                                        </InputBox>
                                        <div className="validate" />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <InputBox type="textarea" className="form-control"
                                        name="message" rows={5} placeholder="Message (Optional)"
                                        defaultValue={""} onChange={formik.handleChange}
                                        error={Boolean(errors.message && touched.message)}
                                        errorMessage={errors.message}
                                        value={values.message}
                                        onBlur={handleBlur} />
                                    <div className="validate" />
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                                </div>
                                {
                                    update ? (
                                        <div className="text-center"><button type="submit" >Update Book Appointment</button></div>
                                    ) : (
                                        <div className="text-center"><button type="submit" >Book Appointment</button></div>
                                    )
                                }

                            </Form>
                        </Formik>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Appointment;