function AboutInfo() {
  return (
    <div className="container">
      <div className="tabs">
        <input type="radio" name="group" id="info" defaultChecked />
        <input type="radio" name="group" id="workexp" />
        <input type="radio" name="group" id="skills" />
        <div className="labels">
          <label htmlFor="info">
            <i className="fa-solid fa-circle-info"></i>Info
          </label>
          <label htmlFor="workexp">
            {" "}
            <i className="fa-solid fa-circle-check"></i>
            Experience
          </label>
          <label htmlFor="skills">
            {" "}
            <i className="fa-solid fa-book"></i>Skills
          </label>
          <div className="indicator"></div>
        </div>
        <hr />
        <div className="informations">
          <div className="info contentbx" htmlFor="info">
            <h1>Aravind Bhat</h1>
            <p>
              I am Aravind Bhat, CSE student at Dayananda Sagar University, with
              a focus on MERN stack development. Eager to apply my knowledge in
              creating efficient and user-friendly web applications. Dedicated
              to continuous learning and contributing positively to
              collaborative projects.
            </p>
            <p>
              Seeking opportunities to enhance my skills and make a meaningful
              impact in the field.
            </p>
            <p>
              <b>Languages : </b> Kannada,English.
            </p>
            <p>
              <b>Hobbies : </b> Chess,Cooking.
            </p>
          </div>
          <div className="experience contentbx" htmlFor="workexp">
            {" "}
            <h1>HigherEdLab</h1>
            <h4>Software Development Intern</h4>
            <p>
              <b>From :</b> 04/2023
            </p>
            <p>
              <b> To :</b> 07/2023
            </p>
            <p>
              During my 3-month internship, I honed my skills in MERN stack
              development, I focused on adopting clean coding practices and
              improved my time management abilities.I successfully completed the
              internship and received a certificate for my achievements.
            </p>
          </div>
          <div className="skill contentbx" htmlFor="skills">
            {" "}
            <li>
              <div className="d-flex skill_lable">
                <span>Javascript</span>
                <span>70%</span>
              </div>

              <span className="bar">
                <span className="javascript"></span>
              </span>
            </li>
            <li>
              <div className="d-flex skill_lable">
                <span>C++</span>
                <span>65%</span>
              </div>
              <span className="bar">
                <span className="c"></span>
              </span>
            </li>
            <li>
              <div className="d-flex skill_lable">
                <span>NodeJs</span>
                <span>65%</span>
              </div>
              <span className="bar">
                <span className="node"></span>
              </span>
            </li>
            <li>
              <div className="d-flex skill_lable">
                <span>ReactJs</span>
                <span>70%</span>
              </div>
              <span className="bar">
                <span className="react"></span>
              </span>
            </li>
            <li>
              <div className="d-flex skill_lable">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <span className="bar">
                <span className="html"></span>
              </span>
            </li>
            <li>
              <div className="d-flex skill_lable">
                <span>CSS</span>
                <span>80%</span>
              </div>
              <span className="bar">
                <span className="css"></span>
              </span>
            </li>
            <li>
              <div className="d-flex skill_lable">
                <span>Bootstrap</span>
                <span>85%</span>
              </div>
              <span className="bar">
                <span className="bootstrap"></span>
              </span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutInfo;
