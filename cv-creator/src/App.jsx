import { useState } from "react";
import "./index.css";
import Btn from "./btn.jsx";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    title: "",
    photo: "",
    address: "",
    phone: "",
    email: "",
    description: "",
  });

  const [education, setEducation] = useState([
    {
      universityName: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  ]);

  return (
    <>
      <header>CV CREATOR</header>
      <div className="container">
        <h1>Personal information</h1>
        <div className="information-div">
          <input
            type="text"
            placeholder="First Name"
            value={personalInfo.firstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={personalInfo.lastName}
          />
          <input type="text" placeholder="Title" value={personalInfo.title} />
          <input type="text" placeholder="Photo" value={personalInfo.photo} />
          <input
            type="text"
            placeholder="Address"
            value={personalInfo.address}
          />
          <input
            type="text"
            placeholder="Phone number"
            value={personalInfo.phone}
          />
          <input type="email" placeholder="Email" value={personalInfo.email} />
          <input
            type="text"
            placeholder="Description"
            value={personalInfo.description}
          />
        </div>
        <h1>Education</h1>
        <ul className="education-list">
          {education.map((edu, index) => (
            <li key={index}>
              <input placeholder="University name" value={edu.universityName} />
              <input placeholder="City" value={edu.city} />
              <input placeholder="Degree" value={edu.degree} />
              <input placeholder="Subject" value={edu.subject} />
              <input placeholder="From (dd/mm/yy)" value={edu.from} />
              <input placeholder="To (dd/mm/yy)" value={edu.to} />
              <Btn onClick={() => console.log("Delete...")}>Delete</Btn>
            </li>
          ))}
        </ul>
        <Btn onClick={() => console.log("Add Education...")} variation="add">
          Add Education
        </Btn>
        <h1>Experience</h1>
        <ul className="experience-list">
          {experience.map((exp, index) => (
            <li key={index}>
              <input placeholder="Position" value={exp.position} />
              <input placeholder="Company" value={exp.company} />
              <input placeholder="City" value={exp.city} />
              <input placeholder="From (dd/mm/yy)" value={exp.from} />
              <input placeholder="To (dd/mm/yy)" value={exp.to} />
              <Btn onClick={() => console.log("Delete...")}>Delete</Btn>
            </li>
          ))}
        </ul>
        <Btn onClick={() => console.log("Add Education...")} variation="add">
          Add Experience
        </Btn>

        <Btn onClick={() => console.log("Add Education...")} variation="green">
          Preview
        </Btn>
        <Btn onClick={() => console.log("Add Education...")} variation="red">
          Reset
        </Btn>
      </div>
      <footer>Coyright © 2025 Lazar Vuckovic</footer>
    </>
  );
}

export default App;
