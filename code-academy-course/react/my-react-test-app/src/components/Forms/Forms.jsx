import { useState, useRef } from "react";
import formStyles from "./Forms.module.scss";

function FormsExplanation() {
  return (
    <div className={formStyles.container}>
      <h1>When Should You Use An Uncontrolled Component?</h1>
      <p>
        In some ways, creating uncontrolled components is faster and easier than
        creating controlled components. However, given their departure from the
        React pattern of storing mutable data in a component’s state, controlled
        components are still recommended for most scenarios.
      </p>
      <p>
        There is one situation in which uncontrolled components must always be
        used: <b>input</b> form elements with the <b>type="file"</b> attribute.
        The value for this type of &lt;input&gt; form element can only be set by
        a user, and not programmatically, and therefore the only way to retrieve
        this value is through a ref.
      </p>
        &nbsp;
        <hr/>
        &nbsp;

      <h2>When Should You Use An Uncontrolled Component?</h2>
      <p>
        In some ways, creating uncontrolled components is faster and easier than
        creating controlled components. However, given their departure from the
        React pattern of storing mutable data in a component’s state, controlled
        components are still recommended for most scenarios.
      </p>
      <p>
        There is one situation in which uncontrolled components must always be
        used: <b>&lt;input&gt;</b> form elements with the type="file" attribute. The
        value for this type of <b>&lt;input&gt;</b> form element can only be set by a
        user, and not programmatically, and therefore the only way to retrieve
        this value is through a ref.
      </p>
    </div>
  );
}

function FormInput() {
  const [input, setInput] = useState("");

  const handleUserInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className={formStyles.emailContainer}>
        <h2>Let's stay in touch.</h2>
        <p>
          Sign up for our newsletter to stay up-to-date on the latest products,
          receive exclusive discounts, and connect with other programmers who
          share your passion for all things tech.
        </p>

        <form>
          <label htmlFor="email" className={formStyles.label}>
            Email:{" "}
          </label>
          <input
            type="email"
            id="email"
            autoComplete="email"
            onChange={handleUserInput}
            value={input}
            className={formStyles["input"]}
          />
        </form>
      </div>
      <div className={formStyles.inputDisplay}>
        <h2>Current User Input:</h2>
        <h4>{input}</h4>
      </div>
    </>
  );
}

function SchoolForms() {
  const initialProfile = {
    firstName: "",
    lastName: "",
    age: "",
    address: "",
    classroomNo: "",
    studentId: "",
  };
  const [schoolProfile, setSchoolProfile] = useState(initialProfile);

  const handleInputOnChange = ({ target }) => {
    const { name, value } = target;

    setSchoolProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(schoolProfile, "", 2));
    setSchoolProfile(initialProfile);
  };

  const formatKey = (key) => {
    return key.replace(/([A-Z])/g, " $1");
  };

  return (
    <div className={formStyles.school_profile}>
      <div>
        <h2>School Profile</h2>
        <form className={formStyles.profile_form}>
          <label htmlFor="firstName" className={formStyles.label}>
            First Name:{" "}
          </label>
          <input
            type="text"
            value={schoolProfile.firstName}
            id="firstName"
            onChange={handleInputOnChange}
            name="firstName"
          />

          <label htmlFor="lastName" className={formStyles.label}>
            Last name:{" "}
          </label>
          <input
            type="text"
            value={schoolProfile.lastName}
            id="lastName"
            onChange={handleInputOnChange}
            name="lastName"
          />
          <label htmlFor="age" className={formStyles.label}>
            Age:{" "}
          </label>
          <input
            type="text"
            value={schoolProfile.age}
            id="age"
            onChange={handleInputOnChange}
            name="age"
          />
          <label htmlFor="address" className={formStyles.label}>
            Address:{" "}
          </label>
          <input
            type="text"
            value={schoolProfile.address}
            id="address"
            onChange={handleInputOnChange}
            name="address"
          />
          <label htmlFor="classroomNo" className={formStyles.label}>
            Classroom Number:{" "}
          </label>
          <input
            type="text"
            value={schoolProfile.classroomNo}
            id="classroomNo"
            onChange={handleInputOnChange}
            name="classroomNo"
          />
          <label htmlFor="studentId" className={formStyles.label}>
            Student Id:{" "}
          </label>
          <input
            type="text"
            value={schoolProfile.studentId}
            id="studentId"
            onChange={handleInputOnChange}
            name="studentId"
          />
          <input type="submit" value="Submit" onClick={handleSubmit}></input>
        </form>
      </div>
      <div>
        <h3>Current User Profile</h3>
        <ul className={formStyles.user_input}>
          {Object.entries(schoolProfile).map(([key, value]) => (
            <li key={key}>
              <span className={formStyles.user_res_key}>{formatKey(key)}:</span>{" "}
              {value ? <code>{value}</code> : ""}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ControlledForm() {
  const [number, setNumber] = useState(0);

  const handleOnchange = ({ target }) => {
    const newNumber = target.value;

    if (!Number.isNaN(Number(newNumber)) && newNumber.length <= 10) {
      setNumber(newNumber);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sending confirmation code to ${number}`);
    setNumber(0);
  };

  return (
    <div className={formStyles.container}>
      <h2>Controlled Form By the same Component</h2>
      <p>
        Consider this example of a controlled component for receiving phone
        numbers. Take note of how the internal state of the form (number) is
        created with useState and is updated in the handleChange function.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone">Controlled Phone Number</label>
        <input onChange={handleOnchange} type="tel" value={number} id="phone" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

function UnControlledForm() {
  const newNumberRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentNum = newNumberRef.current.value.trim();

    if (Number.isNaN(Number(currentNum))) {
      alert("Error: This field only allows Numbers");
      newNumberRef.current.value = "";
    } else if (currentNum.length > 10) {
      alert("Error: Number length exceeded 10 digits");
      newNumberRef.current.value = "";
    } else {
      alert(`Success: Sending confirmation to ${currentNum}`);

      newNumberRef.current.value = "";
    }
  };

  return (
    <div className={formStyles.container}>
      <h2>Controlled Form Component by React using Ref</h2>
      <p>
        An uncontrolled component is a form element that maintains its own state
        in the DOM. Rather than using a component’s own state value to maintain
        that element’s input value and updating it on every change, we can
        instead use a ref to retrieve the value directly from the DOM only when
        we need it.
      </p>
      <p>
        To create an uncontrolled component, we begin by creating a ref using
        the useRef() method. This method returns an object with a .current
        property that refers to the DOM node it is bound to. This ref object is
        bound to a form element using the ref attribute, and whenever the value
        of that form element needs to be retrieved, simply refer back to the ref
        object’s .current property.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone">UnControlled Phone Number</label>
        <input type="tel" ref={newNumberRef} id="phone" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

function UncontrolledFileManager() {
    const fielRef = useRef();
    const [fileSize, setFileSize] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const file = fielRef.current.files[0];

        if (!file) {
            alert('Please select a file');
            setFileSize(0)
            return;
        }

        setFileSize(file.size);
        fielRef.current.value = '';
    };

    return (
        <div className={formStyles.container}>
            <p>Using Uncontrolled useRect from react as it needs the form is using and allowing file upload</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="file">Select File</label>
                <input type="file" ref={fielRef} />
                <input type="submit" value="Submit"/>
            </form>
            <div>
                {fileSize > 0 && (
                    <>
                        <h3>File Size</h3>
                        <p>This file is {fileSize} bytes</p>
                    </>
                )}
            </div>
        </div>
    )
}

export {
  FormsExplanation,
  FormInput,
  SchoolForms,
  ControlledForm,
  UnControlledForm,
  UncontrolledFileManager
};
