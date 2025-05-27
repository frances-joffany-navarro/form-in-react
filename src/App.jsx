//import { useState } from 'react'
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
  return (
    <form>
      <label>First Name* </label><br />
      <input type="text" name="firstName" /><br />
      <label>Last Name* </label><br />
      <input type="text" name="lastName" /><br />
      <label>Enter Email </label><br />
      <input type="email" name="email" /><br />
      <label>Contact </label><br />
      <input type="text" name="contact" /><br />
      <label htmlFor="gender">Gender</label><br />
      <input type="radio" id="male" name="gender" value="male" />
      <label htmlFor="male">HTML</label>
      <input type="radio" id="female" name="gender" value="female" />
      <label htmlFor="female">CSS</label>
      <input type="radio" id="other" name="gender" value="other" />
      <label htmlFor="other">JavaScript</label><br />
      <label htmlFor="bestSubject">Your best Subject</label><br />
      <input type="checkbox" id="bestSubject1" name="bestSubject1" value="english" />
      <label htmlFor="bestSubject1"> English</label>
      <input type="checkbox" id="bestSubject2" name="bestSubject2" value="math" />
      <label htmlFor="bestSubject2"> Math</label>
      <input type="checkbox" id="bestSubject3" name="bestSubject3" value="physics" />
      <label htmlFor="bestSubject3"> Physics</label><br />
      <label htmlFor="resumeUpload">Upload Resume</label><br />
      <input type="file" id='resumeUpload' name="resumeUpload" /><br />
      <label>Enter Website Portfolio URL </label><br />
      <input type="url" name="websitePortfolioUrl" /><br />
      <label htmlFor='websitePortfolioUrl'>Enter Website Portfolio URL </label><br />
      <input type="url" id='websitePortfolioUrl' name="websitePortfolioUrl" /><br />
      <label htmlFor="levelLevel">Choose your level</label><br />
      <select id="level" name="level">
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select><br />
      <label htmlFor='about'>About</label><br />
      <textarea id="about" name="about" rows="5" cols="30" placeholder='Tell us about yourself...'>
      </textarea><br />
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}
export default App