const resumeData = {
    basicInfo: [
      { name: "firstname", label: "First Name", type: "text", required: true },
      { name: "middlename", label: "Middle Name", type: "text", required: false },
      { name: "lastname", label: "Last Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phoneno", label: "Phone Number", type: "tel", required: true },
      { name: "address", label: "Address", type: "text", required: true },
      { name: "designation", label: "Designation", type: "text", required: true },
      { name: "summary", label: "Summary", type: "textarea", required: false },
      { name: "image", label: "Profile Image", type: "file", required: false }
    ],
    sections: {
      projects: {
        label: "Projects",
        fields: ["proj_title", "proj_link", "proj_description"]
      },
      skills: {
        label: "Skills",
        fields: ["skill"]
      },
      achievements: {
        label: "Achievements",
        fields: ["achieve_title", "achieve_description"]
      },
      education: {
        label: "Education",
        fields: ["edu_school", "edu_degree", "edu_city", "edu_start_date", "edu_graduation_date", "edu_description"]
      },
      experience: {
        label: "Experience",
        fields: ["exp_title", "exp_organization", "exp_location", "exp_start_date", "exp_end_date", "exp_description"]
      },
      certifications: {
        label: "Certifications",
        fields: ["certification_title", "certification_organization", "certification_date"]
      },
      languages: {
        label: "Languages",
        fields: ["language_name", "language_proficiency"]
      }
    }
  };
  