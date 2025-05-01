
function renderbasicInfo() {
    const container = document.getElementById("formContainer"); // ✅ get container
  
    resumeData.basicInfo.forEach(field => {
      const formgroup = document.createElement("div");
      formgroup.className = "form-group";
  
      const label = document.createElement("label");
      label.innerHTML = field.label;
  
      let input;
      if (field.type === "textarea") {
        input = document.createElement("textarea");
      } else {
        input = document.createElement("input");
        input.type = field.type;
      }
  
      input.name = field.name;
      if (field.required) input.required = true;
  
      formgroup.appendChild(label);
      formgroup.appendChild(input);
      container.appendChild(formgroup); 
    });
  }
  
  renderbasicInfo();
  










  