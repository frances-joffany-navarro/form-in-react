//import { useState } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <h1>Form in React</h1>
      <PersonalInfoForm />
    </>
  )
}

function PersonalInfoForm() {
  //const [personalData, setPersonalData] = useState([]);
  //console.log(personalData);

  return (
    <form>
      <label>First Name* </label><br />
      <input className='divider' type="text" name="firstName" required /><br />
      <label>Last Name* </label><br />
      <input className='divider' type="text" name="lastName" required /><br />
      <label>Enter Email* </label><br />
      <input className='divider' type="email" name="email" required /><br />
      <label>Contact* </label><br />
      <input className='divider' type="text" name="contact" required /><br />
      <label htmlFor="gender">Gender*</label><br />
      <input type="radio" id="male" name="gender" value="male" required />
      <label htmlFor="male">Male</label>
      <input type="radio" id="female" name="gender" value="female" />
      <label htmlFor="female">Female</label>
      <input className='divider' type="radio" id="other" name="gender" value="other" />
      <label htmlFor="other">Other</label><br />
      <label htmlFor="bestSubject">Your best Subject</label><br />
      <input type="checkbox" id="bestSubject1" name="bestSubject1" value="english" />
      <label htmlFor="bestSubject1"> English</label>
      <input type="checkbox" id="bestSubject2" name="bestSubject2" value="math" />
      <label htmlFor="bestSubject2"> Math</label>
      <input className='divider' type="checkbox" id="bestSubject3" name="bestSubject3" value="physics" />
      <label htmlFor="bestSubject3"> Physics</label><br />
      <label htmlFor="resumeUpload">Upload Resume*</label><br />
      <input className='divider' type="file" id='resumeUpload' name="resumeUpload" required /><br />
      <label>Enter Website Portfolio URL*</label><br />
      <input className='divider' type="url" name="websitePortfolioUrl" required /><br />
      <label htmlFor='websitePortfolioUrl'>Enter Website Portfolio URL </label><br />
      <input className='divider' type="url" id='websitePortfolioUrl' name="websitePortfolioUrl" /><br />
      <label htmlFor="level">Choose your level</label><br />
      <select className='divider' id="level" name="level">
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select><br />
      <label htmlFor='about'>About</label><br />
      <textarea className='divider' id="about" name="about" rows="5" cols="30" placeholder='Tell us about yourself...'>
      </textarea><br />
      <br />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  )
}
export default App