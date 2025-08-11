import { useState } from "react";
import "./index.css";
import Btn from "./btn.jsx";

function App() {
  const [cv, setCv] = useState({
    personalInfo: {
      firstName: { name: "firstName", placeholder: "First Name", value: "" },
      lastName: { name: "lastName", placeholder: "Last Name", value: "" },
      title: { name: "title", placeholder: "Title", value: "" },
      photo: { name: "photo", placeholder: "Photo URL", value: "" },
      address: { name: "address", placeholder: "Address", value: "" },
      phone: { name: "phone", placeholder: "Phone number", value: "" },
      email: { name: "email", placeholder: "Email", value: "" },
      description: {
        name: "description",
        placeholder: "Description",
        value: "",
      },
    },
    education: [
      {
        universityName: {
          name: "universityName",
          placeholder: "University name",
          value: "",
        },
        city: { name: "city", placeholder: "City", value: "" },
        degree: { name: "degree", placeholder: "Degree", value: "" },
        subject: { name: "subject", placeholder: "Subject", value: "" },
        from: { name: "from", placeholder: "From (dd/mm/yy)", value: "" },
        to: { name: "to", placeholder: "To (dd/mm/yy)", value: "" },
      },
    ],
    experience: [
      {
        position: { name: "position", placeholder: "Position", value: "" },
        company: { name: "company", placeholder: "Company", value: "" },
        city: { name: "city", placeholder: "City", value: "" },
        from: { name: "from", placeholder: "From (dd/mm/yy)", value: "" },
        to: { name: "to", placeholder: "To (dd/mm/yy)", value: "" },
      },
    ],
  });

  const [previewVisible, setPreviewVisible] = useState(false);

  const addEducation = () => {
    setCv((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          universityName: {
            name: "universityName",
            placeholder: "University name",
            value: "",
          },
          city: { name: "city", placeholder: "City", value: "" },
          degree: { name: "degree", placeholder: "Degree", value: "" },
          subject: { name: "subject", placeholder: "Subject", value: "" },
          from: { name: "from", placeholder: "From (dd/mm/yy)", value: "" },
          to: { name: "to", placeholder: "To (dd/mm/yy)", value: "" },
        },
      ],
    }));
  };

  const addExperience = () => {
    setCv((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          position: { name: "position", placeholder: "Position", value: "" },
          company: { name: "company", placeholder: "Company", value: "" },
          city: { name: "city", placeholder: "City", value: "" },
          from: { name: "from", placeholder: "From (dd/mm/yy)", value: "" },
          to: { name: "to", placeholder: "To (dd/mm/yy)", value: "" },
        },
      ],
    }));
  };

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setCv((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: { ...prev.personalInfo[name], value },
      },
    }));
  };

  const handleListChange = (section, index, e) => {
    const { name, value } = e.target;
    const updatedList = [...cv[section]];
    updatedList[index][name] = { ...updatedList[index][name], value };
    setCv((prev) => ({
      ...prev,
      [section]: updatedList,
    }));
  };

  return (
    <>
      <header>CV CREATOR</header>
      <div className="container">
        <h1>Personal Information</h1>
        <div className="information-div">
          {Object.values(cv.personalInfo).map((field) => (
            <input
              key={field.name}
              name={field.name}
              type="text"
              placeholder={field.placeholder}
              value={field.value}
              onChange={handlePersonalChange}
            />
          ))}
        </div>

        <h1>Education</h1>
        <ul className="education-list">
          {cv.education.map((edu, index) => (
            <li key={index}>
              {Object.values(edu).map((field) => (
                <input
                  key={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={(e) => handleListChange("education", index, e)}
                />
              ))}
              <Btn onClick={() => console.log("Delete...")}>Delete</Btn>
            </li>
          ))}
        </ul>
        <Btn onClick={addEducation} variation="add">
          Add Education
        </Btn>

        <h1>Experience</h1>
        <ul className="experience-list">
          {cv.experience.map((exp, index) => (
            <li key={index}>
              {Object.values(exp).map((field) => (
                <input
                  key={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={(e) => handleListChange("experience", index, e)}
                />
              ))}
              <Btn onClick={() => console.log("Delete...")}>Delete</Btn>
            </li>
          ))}
        </ul>
        <Btn onClick={addExperience} variation="add">
          Add Experience
        </Btn>

        <Btn onClick={() => setPreviewVisible(true)} variation="green">
          Preview
        </Btn>
        <Btn onClick={() => console.log("Reset...")} variation="red">
          Reset
        </Btn>
      </div>

      <footer>Copyright © 2025 Lazar Vuckovic</footer>

      {previewVisible && (
        <div className="modal">
          <div className="overlay" onClick={() => setPreviewVisible(false)}>
            <div className="modal-content">
              <header className="personalInfo-header">
                <h1 className="personalInfo-h1">
                  {cv.personalInfo.firstName.value}{" "}
                  {cv.personalInfo.lastName.value}
                </h1>
                <p className="personalInfo-p">{cv.personalInfo.title.value}</p>
              </header>
              <div className="infoContainer">
                <div className="left">
                  <h3 className="left-h1">Description</h3>
                  <p className="left-p-italic">
                    {cv.personalInfo.description.value}
                  </p>
                  <ul className="preview-list">
                    <h1 className="details-h1">Education</h1>
                    {cv.education.map((edu, index) => (
                      <li className="info-li" key={index}>
                        <h2 className="details-h2">
                          {edu.from.value} - {edu.to.value}
                        </h2>
                        <div className="right-edu">
                          <h2 className="details-h2">{edu.degree.value}</h2>
                          <p className="details-p">{edu.subject.value}</p>
                          <p className="details-p">
                            {edu.universityName.value}, {edu.city.value}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ul className="preview-list">
                    <h1 className="details-h1">Experience</h1>
                    {cv.experience.map((exp, index) => (
                      <li className="info-li" key={index}>
                        <h2 className="details-h2">
                          {exp.from.value} - {exp.to.value}
                        </h2>
                        <div className="right-edu">
                          <h2 className="details-h2">{exp.position.value}</h2>
                          <p className="details-p">
                            {exp.company.value}, {exp.city.value}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="right">
                  <div className="details-div">
                    <h1 className="details-h1">Personal Details</h1>
                    <h2 className="details-h2">Address</h2>
                    <p className="details-p">{cv.personalInfo.address.value}</p>
                    <h2 className="details-h2">Phone number</h2>
                    <p className="details-p">{cv.personalInfo.phone.value}</p>
                    <h2 className="details-h2">Email</h2>
                    <p className="details-p">{cv.personalInfo.email.value}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

// data driven ui development
// how to loop over an object
// i want to apply data driven ui development principle
// i need to loop over an object to display my state
