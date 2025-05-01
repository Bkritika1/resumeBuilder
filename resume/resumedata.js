const resumeData = {
    basicInfo: [
      { name: "firstname", label: "First Name", type: "text"},
      { name: "middlename", label: "Middle Name", type: "text"},
      { name: "lastname", label: "Last Name", type: "text" },
      { name: "email", label: "Email", type: "email" },
      { name: "phoneno", label: "Phone Number", type: "tel" },
      { name: "address", label: "Address", type: "text" },
      { name: "designation", label: "Designation", type: "text"},
      { name: "summary", label: "Summary", type: "textarea"},
      { name: "image", label: "Profile Image", type: "file" }
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
  