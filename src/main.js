const form = document.querySelector('.from');
const msg = document.querySelector('.msg');
const loader = document.querySelector('.loader');
const joy = document.querySelector('.joy');
const sad = document.querySelector('.sad');
const cl = document.querySelector('.cl');
loader.style.display = "none";


form.onsubmit = (e) => {
    loader.style.display = "block";
    cl.play();
    e.preventDefault();
    const form_data = new FormData(form);
    const data = Object.fromEntries(form_data.entries());
    setTimeout(() => {

        loader.style.display = "none";
         if (!data.subject || !data.marks) {
        msg.innerHTML = createAlert("All Fields Are Required");
        
    } else {
        const result = getResult(data.marks);
        msg.innerHTML = createAlert(`subject: ${data.subject} <br>
        GPA: ${result.gpa} <br>
        Grade: ${result.grade} `,"info")
          if (result.grade === "F") {
            sad.play();
        } else {
            joy.play();
        }
    }
    },3000)
   
    e.target.reset();
   
 };