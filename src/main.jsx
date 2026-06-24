import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import profile from "./WhatsApp Image 2026-06-24 at 8.43.24 PM.jpeg";
function App(){
return (
return (
<div className="container">

<img
  src={profile}
  alt="Yoshitha Kondaveeti"
  style={{
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px"
  }}
/>

<h1>Yoshitha Kondaveeti</h1>
<h2>AI & Machine Learning Enthusiast</h2>
<p>AI & Data Science student at KL University specializing in Cloud & Edge Computing.</p>

<section>
<h3>Skills</h3>
<p>Python, AI, Machine Learning, NLP, Computer Vision, AWS, Google Cloud, Salesforce CRM</p>
</section>

<section>
<h3>Projects</h3>
<ul>
<li>Student Support AI Chatbot</li>
<li>Bone Age Prediction & Growth Analysis System</li>
</ul>
</section>

<section>
<h3>Certifications</h3>
<ul>
<li>Salesforce Certified AI Associate</li>
<li>Salesforce Certified Agentforce Specialist</li>
<li>AWS Cloud Practitioner</li>
<li>AWS Developer Associate</li>
</ul>
</section>
</div>
)}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
