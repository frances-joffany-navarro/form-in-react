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

  function handleBestSubject(value) {
    setBestSubject((prevSubjects) => ({
      ...prevSubjects,
      [value]: !prevSubjects[value]
    }));
  }

  function handleResetButton() {
    setFirstName('');
    setLastName('');
    setEmail('');
    setContact('');
    setGender('male');
    setBestSubject({ "english": true, "math": false, "physics": false });
    setResumeUpload('');
    setWebsitePortfolioUrl('');
    setLevel('');
    setAbout('');
  }
  function handleSubmitButton(e) {
    console.log(e)
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      contact,
      gender,
      bestSubject: Object.keys(bestSubject).filter(subject => bestSubject[subject]),
      resumeUpload,
      websitePortfolioUrl,
      level,
      about
    }

    setPersonalData([...personalData, data]);
    console.log(data);
    handleResetButton();
  }

  return (
    <form>
      <label>First Name* </label><br />
      <input className='divider' type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required /><br />
      <label>Last Name* </label><br />
      <input className='divider' type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required /><br />
      <label>Enter Email* </label><br />
      <input className='divider' type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
      <label>Contact* </label><br />
      <input className='divider' type="text" name="contact" value={contact} onChange={(e) => setContact(e.target.value)} required /><br />
      <label htmlFor="gender">Gender*</label><br />
      <input type="radio" id="male" name="gender" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} required />
      <label htmlFor="male">Male</label>
      <input type="radio" id="female" name="gender" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} />
      <label htmlFor="female">Female</label>
      <input className='divider' type="radio" id="other" name="gender" value="other" checked={gender === "other"} onChange={(e) => setGender(e.target.value)} />
      <label htmlFor="other">Other</label><br />
      <label htmlFor="bestSubject">Your best Subject</label><br />
      <input type="checkbox" id="bestSubject1" name="bestSubject1" value="english" checked={bestSubject.english} onChange={(e) => handleBestSubject(e.target.value)} />
      <label htmlFor="bestSubject1"> English</label>
      <input type="checkbox" id="bestSubject2" name="bestSubject2" value="math" checked={bestSubject.math} onChange={(e) => handleBestSubject(e.target.value)} />
      <label htmlFor="bestSubject2"> Math</label>
      <input className='divider' type="checkbox" id="bestSubject3" name="bestSubject3" value="physics" checked={bestSubject.physics} onChange={(e) => handleBestSubject(e.target.value)} />
      <label htmlFor="bestSubject3"> Physics</label><br />
      <label htmlFor="resumeUpload">Upload Resume*</label><br />
      <input className='divider' type="file" id='resumeUpload' name="resumeUpload" value={resumeUpload} onChange={(e) => setResumeUpload(e.target.value)} required /><br />
      <label htmlFor='websitePortfolioUrl'>Enter Website Portfolio URL*</label><br />
      <input className='divider' type="url" name="websitePortfolioUrl" value={websitePortfolioUrl} onChange={(e) => setWebsitePortfolioUrl(e.target.value)} required /><br />
      <label htmlFor="level">Choose your level</label><br />
      <select className='divider' id="level" name="level" selected={level} onChange={(e) => setLevel(e.target.value)} >
        <option value="beginner" name="beginner">Beginner</option>
        <option value="intermediate" name="intermediate" >Intermediate</option>
        <option value="advanced" name="advanced" >Advanced</option>
      </select><br />
      <label htmlFor='about'>About</label><br />
      <textarea className='divider' id="about" name="about" rows="5" cols="30" placeholder='Tell us about yourself...' value={about} onChange={(e) => setAbout(e.target.value)}>
      </textarea><br />
      <br />
      <button type="submit" onClick={handleSubmitButton}>Submit</button>
      <button type="reset" onClick={handleResetButton}>Reset</button>
    </form>
  )
}
export default App