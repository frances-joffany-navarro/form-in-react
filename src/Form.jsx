import { Input } from './components/Input';
import { useState } from 'react'

export function Form() {
  const [personalData, setPersonalData] = useState([]);
  //console.log(personalData);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('male');
  const [bestSubject, setBestSubject] = useState({ "english": true, "math": false, "physics": false });
  const [resumeUpload, setResumeUpload] = useState('');
  const [websitePortfolioUrl, setWebsitePortfolioUrl] = useState('');
  const [level, setLevel] = useState('');
  const [about, setAbout] = useState('');

  return (
    <form>
      <Input label="First Name*" type="text" id="firstName" value={firstName} placeholder="Enter your first name" isRequired={true} />
      <Input label="Last Name*" type="text" id="lastName" value={lastName} placeholder="Enter your last name" isRequired={true} />
      <Input label="Email*" type="email" id="email" value={email} placeholder="Enter your email address" isRequired={true} />
      <Input label="Contact Number*" type="tel" id="contactNumber" value={contact} placeholder="Enter your contact number" isRequired={true} />
      <label htmlFor="gender">Gender*</label>
      <Input label="Male" type="radio" id="male" name="gender" value="male" checked={gender === "male"} />
      <Input label="Female" type="radio" id="female" name="gender" value="female" checked={gender === "female"} />
      <Input label="Other" type="radio" id="other" name="gender" value="other" checked={gender === "other"} />
      <label htmlFor="bestSubject">Your Best subject</label>
      <Input label="English" type="checkbox" id="bestSubject1" name="bestSubject1" value="english" checked={bestSubject.english} />
      <Input label="Math" type="checkbox" id="bestSubject2" name="bestSubject2" value="math" checked={bestSubject.math} />
      <Input label="Physics" type="checkbox" id="bestSubject3" name="bestSubject3" value="physics" checked={bestSubject.physics} />
      <Input label="Upload Resume" type="file" id="resumeUpload" value={resumeUpload} isRequired={true} />
      <Input label="Website Portfolio URL" type="url" id="websitePortfolioUrl" value={websitePortfolioUrl} placeholder="Enter your website portfolio URL" isRequired={true} />
      <label htmlFor="level">Choose your level</label><br />
      <select className='divider' id="level" name="level" defaultValue="" onChange={(e) => setLevel(e.target.value)} >
        <option value="" disabled>Select Level</option>
        <option value="beginner" name="beginner">Beginner</option>
        <option value="intermediate" name="intermediate" >Intermediate</option>
        <option value="advanced" name="advanced" >Advanced</option>
      </select>
      <label htmlFor='about'>About</label><br />
      <textarea className='divider' id="about" name="about" rows="5" cols="30" placeholder='Tell us about yourself...' value={about} onChange={(e) => setAbout(e.target.value)}>
      </textarea><br />
      <Input type="button" id="resetButton" value="Reset" />
      <Input type="button" id="submitButton" value="Submit" />
    </form>)
};