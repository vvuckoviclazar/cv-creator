export const INITIAL_CV = {
  personalInfo: {
    firstName: {
      name: "firstName",
      placeholder: "First Name",
      value: "",
      type: "text",
    },
    lastName: {
      name: "lastName",
      placeholder: "Last Name",
      value: "",
      type: "text",
    },
    title: { name: "title", placeholder: "Title", value: "", type: "text" },
    photo: { name: "photo", placeholder: "Add Photo", value: "", type: "file" },
    address: {
      name: "address",
      placeholder: "Address",
      value: "",
      type: "text",
    },
    phone: {
      name: "phone",
      placeholder: "Phone number",
      value: "",
      type: "text",
    },
    email: { name: "email", placeholder: "Email", value: "", type: "text" },
    description: {
      name: "description",
      placeholder: "Description",
      value: "",
      type: "text",
    },
  },
  education: [
    {
      universityName: {
        name: "universityName",
        placeholder: "University name",
        value: "",
        type: "text",
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
};

export const EDUCATION_TEMPLATE = {
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
};

export const EXPERIENCE_TEMPLATE = {
  position: { name: "position", placeholder: "Position", value: "" },
  company: { name: "company", placeholder: "Company", value: "" },
  city: { name: "city", placeholder: "City", value: "" },
  from: { name: "from", placeholder: "From (dd/mm/yy)", value: "" },
  to: { name: "to", placeholder: "To (dd/mm/yy)", value: "" },
};
