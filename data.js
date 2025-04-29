const formData = 
    {
        name: '',
        email: '',
        phone: '',
        address: '',
        aboutMe: '',
        skills: [],
        education: [],
        experience: [],
        projects: [],
        certificates: [],
        languages: [],
        hobbies: []
    }
  
function renderForm(){
    const formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = `
        <h2>Resume Builder</h2>
        <form id="resumeForm">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>  
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>               
            </div>  
            <div class="form-group">
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required>     
            </div>
            <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" id="address" name="address" required>    
            </div>
            <div class="form-group">
                <label for="aboutMe">About Me:</label>
                <textarea id="aboutMe" name="aboutMe" required></textarea>
            </div>
            <div class="form-group">
                <label for="skills">Skills:</label>
                <input type="text" id="skills" name="skills" required>
            </div>
            <div class="form-group">
                <label for="education">Education:</label>
                <input type="text" id="education" name="education" required>
            </div>
            <div class="form-group">
                <label for="experience">Experience:</label>
                <input type="text" id="experience" name="experience" required>
            </div>
            <div class="form-group">
                <label for="projects">Projects:</label>
                <input type="text" id="projects" name="projects" required>
            </div>
            <div class="form-group">
                <label for="certificates">Certificates:</label>
                <input type="text" id="certificates" name="certificates" required>
            </div>
            <div class="form-group">
                <label for="languages">Languages:</label>
                <input type="text" id="languages" name="languages" required>
            </div>
            <div class="form-group">
                <label for="hobbies">Hobbies:</label>
                <input type="text" id="hobbies" name="hobbies" required>
            </div>
            <button type="submit">next Select templates</button>
        </form>
    `;

}
renderForm();
console.log(formData);
