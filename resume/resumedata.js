const resumeData = {
    Section1: [
      { name: "firstname", label: "First Name", type: "text", required: true},
      { name: "middlename", label: "Middle Name", type: "text"},
      { name: "lastname", label: "Last Name", type: "text" },
      {name:"D.O.B", label:"D.O.B", type:"date"},
      { name: "email", label: "Email", type: "email" },
      { name: "phoneno", label: "Phone Number", type: "tel" },
      { name: "address", label: "Address", type: "text" },
      { name: "designation", label: "Designation", type: "text"},
      { name: "summary", label: "Summary", type: "textarea"},
      { name: "image", label: "Profile Image", type: "file" }
    ],
    Sections2n: {
      projects: {
        label: "Projects",
        fields: [
          { label: "proj_title", type:"text", reuired:true},
           { label: "proj_link", type:"text",reuired:true},
            {label:"proj_description", type:"text", required:false}
          ]
      },
      skills: {
        label: "Skills",
        fields: [{type:"text",label:"skill"}]
      },
      achievements: {
        label: "Achievements",
        fields: [{type:"text",label:"achieve_title", required:false}, {label:"achieve_description", type:"text",required:false}]
      },
      education: {
        label: "Education",
        fields: [{label:"edu_school",type:"text"},{label:"edu_degree", type:"text"}, {label:"edu_city", type:"text"}, {label:"edu_start_date",type:"text"}, {label:"edu_graduation_date",type:"text"},{ label:"edu_description",type:"text"}]
      },
      experience: {
        label: "Experience",
        fields: [{label:"exp_title",type:"text"}, {label:"exp_organization", type:"text"}, {label:"exp_location",type:"text"}, {label:"exp_start_date", type:"number"},{label:"exp_end_date", type:"number"}, {label:"exp_description",type:"text"}]
      },
      certifications: {
        label: "Certifications",
        fields: [{label:"certification_title",type:"text"}, {label:"certification_organization",type:"text"}, {label:"certification_date", type:"number"}]
      },
      // languages: {
      //   label: "Languages",
      //   fields: ["language_name", "language_proficiency"]
      // }
    }
  };