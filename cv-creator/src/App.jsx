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

  const addEducation = () => {
    setEducation((prev) => [
      ...prev,
      {
        universityName: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      },
    ]);
  };

  const addExperience = () => {
    setExperience((prev) => [
      ...prev,
      {
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
      },
    ]);
  };

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...education];
    updated[index][name] = value;
    setEducation(updated);
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...experience];
    updated[index][name] = value;
    setExperience(updated);
  };

  const handlePreview = () => {
    console.log("Personal Info:", personalInfo);
    console.log("Education:", education);
    console.log("Experience:", experience);
  };

  return (
    <>
      <header>CV CREATOR</header>
      <div className="container">
        <h1>Personal information</h1>
        <div className="information-div">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={personalInfo.firstName}
            onChange={handlePersonalChange}
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={personalInfo.lastName}
            onChange={handlePersonalChange}
          />
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={personalInfo.title}
            onChange={handlePersonalChange}
          />
          <input
            name="photo"
            type="text"
            placeholder="Photo"
            value={personalInfo.photo}
            onChange={handlePersonalChange}
          />
          <input
            name="address"
            type="text"
            placeholder="Address"
            value={personalInfo.address}
            onChange={handlePersonalChange}
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone number"
            value={personalInfo.phone}
            onChange={handlePersonalChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={personalInfo.email}
            onChange={handlePersonalChange}
          />
          <input
            name="description"
            type="text"
            placeholder="Description"
            value={personalInfo.description}
            onChange={handlePersonalChange}
          />
        </div>
        <h1>Education</h1>
        <ul className="education-list">
          {education.map((edu, index) => (
            <li key={index}>
              <input
                name="universityName"
                placeholder="University name"
                value={edu.universityName}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <input
                name="city"
                placeholder="City"
                value={edu.city}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <input
                name="degree"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <input
                name="subject"
                placeholder="Subject"
                value={edu.subject}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <input
                name="from"
                placeholder="From (dd/mm/yy)"
                value={edu.from}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <input
                name="to"
                placeholder="To (dd/mm/yy)"
                value={edu.to}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <Btn onClick={() => console.log("Delete...")}>Delete</Btn>
            </li>
          ))}
        </ul>
        <Btn onClick={() => addEducation()} variation="add">
          Add Education
        </Btn>
        <h1>Experience</h1>
        <ul className="experience-list">
          {experience.map((exp, index) => (
            <li key={index}>
              <input
                name="position"
                placeholder="Position"
                value={exp.position}
                onChange={(e) => handleExperienceChange(index, e)}
              />
              <input
                name="company"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, e)}
              />
              <input
                name="city"
                placeholder="City"
                value={exp.city}
                onChange={(e) => handleExperienceChange(index, e)}
              />
              <input
                name="from"
                placeholder="From (dd/mm/yy)"
                value={exp.from}
                onChange={(e) => handleExperienceChange(index, e)}
              />
              <input
                name="to"
                placeholder="To (dd/mm/yy)"
                value={exp.to}
                onChange={(e) => handleExperienceChange(index, e)}
              />
              <Btn onClick={() => console.log("Delete...")}>Delete</Btn>
            </li>
          ))}
        </ul>
        <Btn onClick={() => addExperience()} variation="add">
          Add Experience
        </Btn>

        <Btn onClick={() => handlePreview()} variation="green">
          Preview
        </Btn>
        <Btn onClick={() => console.log("Reset...")} variation="red">
          Reset
        </Btn>
      </div>
      <footer>Coyright © 2025 Lazar Vuckovic</footer>
    </>
  );
}

export default App;
