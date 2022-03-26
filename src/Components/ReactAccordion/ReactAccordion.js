import React from 'react';
import { Accordion } from 'react-bootstrap';
import './ReactAccordion.css'
const ReactAccordion = () => {
    return (
        <div className='accordion'>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How react works?</Accordion.Header>
                    <Accordion.Body>
                        React uses a declarative paradigm that makes it easier to reason about User's application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
                        React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browsers DOM.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Props Vs State</Accordion.Header>
                    <Accordion.Body>
                        <table className="table table-hover table-responsive">
                            <tbody>
                                <tr>

                                    <th scope="col" className="text-center">Props</th>
                                    <th scope="col" className="text-center">State</th>

                                </tr>
                                <tr>

                                    <td>Props are basically data that flows from one to another component as a parameters. Props can not be modified in a component.</td>
                                    <td>React components has a built-in state object which is private to a component.State can not be accessed from outside of the class. However it can be passed as an argument to another component.</td>
                                </tr>
                                <tr>

                                    <td>Props can be accessed by the child component.</td>
                                    <td>State can not be accessed by the child component.</td>
                                </tr>
                                <tr>

                                    <td>Props are used to communicate between components.</td>
                                    <td>States can be used for rendering dynamic changes with the component.</td>
                                </tr>
                                <tr>

                                    <td>Props are immutable.</td>
                                    <td>State is mutable.</td>
                                </tr>
                                <tr>

                                    <td>Props are read-only.</td>
                                    <td>State changes can be asynchronous.</td>
                                </tr>
                                <tr>

                                    <td>Props make components reusable.</td>
                                    <td>State can not make components reusable.</td>
                                </tr>
                                <tr>

                                    <td>Stateless component can have Props.</td>
                                    <td>Stateless components can not have State.</td>
                                </tr>
                            </tbody>
                        </table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How use state works?</Accordion.Header>
                    <Accordion.Body>
                        React components has a built-in state object which is private to a component. State can not be accessed from outside of the class. However it can be passed as an argument to another component.
                        State allows us to manage changing data in an application. It's defined as an object where we define key-value pairs specifying various data we want to track in the application. In React, all the code we write is defined inside a component.States can be used for rendering dynamic changes with the component.

                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    );
};

export default ReactAccordion;