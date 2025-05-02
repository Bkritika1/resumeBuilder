
function renderbasicInfo() {
    const container = document.getElementById("formContainer"); 
  
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
  
      formgroup.appendChild(label);
      formgroup.appendChild(input);
      container.appendChild(formgroup); 
    });
  }
  
  renderbasicInfo();


  function renderSections(){
  
  }










  