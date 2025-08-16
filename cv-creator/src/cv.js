export const INITIAL_CV = {
  personalInfo: {
    firstName: { name: "firstName", placeholder: "First Name", value: "" },
    lastName: { name: "lastName", placeholder: "Last Name", value: "" },
    title: { name: "title", placeholder: "Title", value: "" },
    address: { name: "address", placeholder: "Address", value: "" },
    phone: { name: "phone", placeholder: "Phone number", value: "" },
    email: { name: "email", placeholder: "Email", value: "" },
    description: { name: "description", placeholder: "Description", value: "" },
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
