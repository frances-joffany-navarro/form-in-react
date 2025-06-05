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

    if (data.firstName === '' || data.lastName === '' || data.email === '' || data.contact === '' || data.resumeUpload === '' || data.websitePortfolioUrl === '' || data.level === '') {
      alert("Please fill all the required fields.");
      return;
    }

    setPersonalData([...personalData, data]);
    console.log(data);
    handleResetButton();
  }

  return (
    <form>
      <Input label="First Name*" type="text" id="firstName" value={firstName} placeholder="Enter your first name" isRequired={true} onInputChange={setFirstName} />
      <Input label="Last Name*" type="text" id="lastName" value={lastName} placeholder="Enter your last name" isRequired={true} onInputChange={setLastName} />
      <Input label="Email*" type="email" id="email" value={email} placeholder="Enter your email address" isRequired={true} onInputChange={setEmail} />
      <Input label="Contact Number*" type="tel" id="contactNumber" value={contact} placeholder="Enter your contact number" isRequired={true} onInputChange={setContact} />
      <label htmlFor="gender">Gender*</label>
      <Input label="Male" type="radio" id="male" name="gender" value="male" checked={gender === "male"} onInputChange={setGender} />
      <Input label="Female" type="radio" id="female" name="gender" value="female" checked={gender === "female"} onInputChange={setGender} />
      <Input label="Other" type="radio" id="other" name="gender" value="other" checked={gender === "other"} onInputChange={setGender} />
      <label htmlFor="bestSubject">Your Best subject</label>
      <Input label="English" type="checkbox" id="bestSubject1" name="bestSubject1" value="english" checked={bestSubject.english} onInputChange={handleBestSubject} />
      <Input label="Math" type="checkbox" id="bestSubject2" name="bestSubject2" value="math" checked={bestSubject.math} onInputChange={handleBestSubject} />
      <Input label="Physics" type="checkbox" id="bestSubject3" name="bestSubject3" value="physics" checked={bestSubject.physics} onInputChange={handleBestSubject} />
      <Input label="Upload Resume" type="file" id="resumeUpload" value={resumeUpload} isRequired={true} onInputChange={setResumeUpload} />
      <Input label="Website Portfolio URL" type="url" id="websitePortfolioUrl" value={websitePortfolioUrl} placeholder="Enter your website portfolio URL" isRequired={true} onInputChange={setWebsitePortfolioUrl} />
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
      <Input type="button" id="resetButton" value="Reset" onClickButton={handleResetButton} />
      <Input type="button" id="submitButton" value="Submit" onClickButton={handleSubmitButton} />
    </form>
  )
};