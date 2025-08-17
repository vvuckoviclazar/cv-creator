import { useState, useEffect } from "react";
import "./index.css";
import Btn from "./btn.jsx";
import { INITIAL_CV, EDUCATION_TEMPLATE, EXPERIENCE_TEMPLATE } from "./cv";

function App() {
  const [cv, setCv] = useState(() => structuredClone(INITIAL_CV));
  const [previewVisible, setPreviewVisible] = useState(false);

  useEffect(() => {
    if (previewVisible) {
      window.scrollTo({ top: 0, behavior: "auto" });
      document.body.classList.add("preview-open");
    } else {
      document.body.classList.remove("preview-open");
    }
    return () => document.body.classList.remove("preview-open");
  }, [previewVisible]);

  const addEducation = () => {
    setCv((prev) => ({
      ...prev,
      education: [...prev.education, structuredClone(EDUCATION_TEMPLATE)],
    }));
  };

  const addExperience = () => {
    setCv((prev) => ({
      ...prev,
      experience: [...prev.experience, structuredClone(EXPERIENCE_TEMPLATE)],
    }));
  };

  const handlePersonalChange = (e) => {
    const { name, type, value, files } = e.target;

    let newValue = value;

    if (type === "file") {
      newValue = URL.createObjectURL(files[0]);
    }

    setCv((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: { ...prev.personalInfo[name], value: newValue },
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

  const deleteListItem = (section, index) => {
    setCv((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  };

  return (
    <>
      <header>CV CREATOR</header>
      <div className="container">
        <h1>Personal Information</h1>
        <div className="information-div">
          {Object.values(cv.personalInfo).map((field) => {
            const isFile = field.type === "file";
            const inputId = `field-${field.name}`;

            return (
              <div key={field.name} className="field">
                {isFile && (
                  <label htmlFor={inputId} className="field-photo">
                    Photo
                  </label>
                )}

                <input
                  id={inputId}
                  className={isFile ? "photo-input" : ""}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={isFile ? undefined : field.value}
                  onChange={handlePersonalChange}
                  {...(isFile ? { accept: "image/*" } : {})}
                />
              </div>
            );
          })}
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
              <Btn onClick={() => deleteListItem("education", index)}>
                Delete
              </Btn>
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
              <Btn onClick={() => deleteListItem("experience", index)}>
                Delete
              </Btn>
            </li>
          ))}
        </ul>
        <Btn onClick={addExperience} variation="add">
          Add Experience
        </Btn>
        <Btn
          onClick={() => {
            setPreviewVisible(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          variation="green"
        >
          Preview
        </Btn>
        <Btn
          onClick={() => {
            setCv(structuredClone(INITIAL_CV));
            photoUrlRef.current = null;
          }}
          variation="red"
        >
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
                    <img
                      className="img"
                      src={cv.personalInfo.photo.value || "/download.jpg"}
                      alt="Profile"
                    />
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
