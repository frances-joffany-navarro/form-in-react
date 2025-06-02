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
      <Input label="First Name" type="text" id="firstName" value={firstName} placeholder="Enter your first name" isRequired={true} />
      <Input label="Last Name" type="text" id="lastName" value={lastName} placeholder="Enter your last name" isRequired={true} />
      <Input label="Email" type="email" id="email" value={email} placeholder="Enter your email address" isRequired={true} />
      <Input label="Contact Number" type="tel" id="contactNumber" value={contact} placeholder="Enter your contact number" isRequired={true} />
      <Input label="Female" type="radio" id="female" name="gender" value="female" />
      <Input label="Upload Resume" type="file" id="resumeUpload" value={resumeUpload} isRequired={true} />
      <Input label="Website Portfolio URL" type="url" id="websitePortfolioUrl" value={websitePortfolioUrl} placeholder="Enter your website portfolio URL" isRequired={true} />
    </form>)
};