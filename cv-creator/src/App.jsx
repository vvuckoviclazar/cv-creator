import { useState } from "react";
import "./index.css";
import Btn from "./btn.jsx";

function App() {
  const [cv, setCv] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      title: "",
      photo: "",
      address: "",
      phone: "",
      email: "",
      description: "",
    },
    education: [
      {
        universityName: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      },
    ],
    experience: [
      {
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
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
          universityName: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
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
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setCv((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [name]: value },
    }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...cv.education];
    updatedEducation[index][name] = value;
    setCv((prev) => ({
      ...prev,
      education: updatedEducation,
    }));
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = [...cv.experience];
    updatedExperience[index][name] = value;
    setCv((prev) => ({
      ...prev,
      experience: updatedExperience,
    }));
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
            value={cv.personalInfo.firstName}
            onChange={handlePersonalChange}
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={cv.personalInfo.lastName}
            onChange={handlePersonalChange}
          />
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={cv.personalInfo.title}
            onChange={handlePersonalChange}
          />
          <input
            name="photo"
            type="text"
            placeholder="Photo"
            value={cv.personalInfo.photo}
            onChange={handlePersonalChange}
          />
          <input
            name="address"
            type="text"
            placeholder="Address"
            value={cv.personalInfo.address}
            onChange={handlePersonalChange}
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone number"
            value={cv.personalInfo.phone}
            onChange={handlePersonalChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={cv.personalInfo.email}
            onChange={handlePersonalChange}
          />
          <input
            name="description"
            type="text"
            placeholder="Description"
            value={cv.personalInfo.description}
            onChange={handlePersonalChange}
          />
        </div>
        <h1>Education</h1>
        <ul className="education-list">
          {cv.education.map((edu, index) => (
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
          {cv.experience.map((exp, index) => (
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

        <Btn onClick={() => setPreviewVisible(true)} variation="green">
          Preview
        </Btn>
        <Btn onClick={() => console.log("Reset...")} variation="red">
          Reset
        </Btn>
      </div>
      <footer>Coyright © 2025 Lazar Vuckovic</footer>

      {previewVisible && (
        <div className="modal">
          <div className="overlay" onClick={() => setPreviewVisible(false)}>
            <div className="modal-content">
              <header className="personalInfo-header">
                <h1 className="personalInfo-h1">
                  {cv.personalInfo.firstName} {cv.personalInfo.lastName}
                </h1>
                <p className="personalInfo-p">{cv.personalInfo.title}</p>
              </header>
              <div className="infoContainer">
                <div className="left">
                  <h3 className="left-h1">Description</h3>
                  <p className="left-p-italic">{cv.personalInfo.description}</p>
                </div>
                <div className="right">
                  <div className="details-div">
                    <h1 className="details-h1">Personal Details</h1>
                    <h2 className="details-h2">Adress</h2>
                    <p className="details-p">{cv.personalInfo.address}</p>
                    <h2 className="details-h2">Phone number</h2>
                    <p className="details-p">{cv.personalInfo.phone}</p>
                    <h2 className="details-h2">Email</h2>
                    <p className="details-p">{cv.personalInfo.email}</p>
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
