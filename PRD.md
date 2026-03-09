# PRD.md

## 1. Project Title

Agentic AI Hiring Assistant with Human-in-the-Loop

---

## 2. Problem Statement

Recruitment processes in many organizations are still heavily manual. Recruiters must read hundreds of resumes, evaluate candidate qualifications, schedule interviews, and analyze candidate responses. This process is time-consuming and inefficient.

Manual resume screening can lead to missed talent and inconsistent evaluation. Managing interviews and candidate communication also increases workload for HR teams.

This system proposes an **Agentic AI Hiring Assistant** that automates major stages of the hiring pipeline using AI agents while maintaining **Human-in-the-Loop approval** for critical hiring decisions.

The system will automate:

- Resume screening
- Candidate scoring
- Candidate shortlisting
- Interview invitations
- AI-based interview evaluation

By integrating AI agents and automation pipelines, the system will make recruitment **faster, scalable, and more consistent**.

---

## 3. Objectives

The main objectives of the system are:

- Automate resume screening using AI
- Extract candidate skills and experience automatically
- Score candidates based on job requirements
- Shortlist candidates efficiently
- Conduct AI-based interviews
- Generate automated candidate evaluation reports
- Reduce recruiter workload
- Maintain human approval before final interview selection

---

## 4. Key Features

The system will include the following features:

- Job Description Upload
- AI-based Job Description Analysis
- Resume Parsing and Skill Extraction
- Candidate Skill Matching and Scoring
- Automatic Candidate Shortlisting
- HR Dashboard for Human Approval
- Email Automation for Interview Invitations
- AI-powered Interview System
- Candidate Evaluation Reports
- Interview Performance Scoring

---

## 5. Technologies Used

### Frontend

- HTML
- CSS
- JavaScript
- React
- NextJS

### Backend

- FastAPI  
or  
- Flask

### AI Framework

- CrewAI

### LLM Inference

- Groq Cloud API
- Llama3
- Mixtral

### Resume Parsing

- PyMuPDF
- pdfplumber

### Embedding / Similarity

- Sentence Transformers

### Speech Processing

Speech-to-Text

- Whisper

Text-to-Speech

- Browser SpeechSynthesis API
- ElevenLabs free tier

### Email Automation

- SMTP (Gmail)

### Database

- MongoDB Atlas (Free Tier)

### Deployment

Frontend  
- Vercel

Backend  
- Render

Database  
- MongoDB Atlas



## Project Modules

1. Job Description Analysis Module
2. Resume Parsing Module
3. Skill Extraction Module
4. Candidate Scoring Module
5. Candidate Shortlisting Module
6. HR Dashboard Module
7. Email Automation Module
8. AI Interview Module
9. Candidate Evaluation Module
10. Database Management Module
11. Backend API Module
12. Agent Orchestration Module



## Work Items

| Work Item | Description | Assigned Member |
|-----------|-------------|----------------|
| Project Architecture Design | Define system architecture, agent workflow, and integration plan | Team Lead |
| Job Description Analysis Module | Build AI agent to analyze job descriptions and extract required skills | Member 1 |
| Resume Parsing Module | Implement resume upload and extract text using PyMuPDF or pdfplumber | Member 2 |
| Skill Extraction Module | Extract candidate skills from resume text using NLP or LLM | Member 2 |
| Candidate Scoring System | Match candidate skills with job requirements and generate score | Member 3 |
| Candidate Shortlisting Module | Implement logic to shortlist candidates based on score threshold | Member 3 |
| HR Dashboard UI | Build dashboard interface to view candidates and scores | Member 4 |
| Email Automation System | Send automated interview invitations to shortlisted candidates | Member 4 |
| AI Interview Module | Implement automated interview questions and capture candidate responses | Member 5 |
| Candidate Evaluation Module | Analyze interview responses and generate performance report | Member 5 |
| Database Schema Design | Design MongoDB collections for jobs, candidates, and interviews | Member 6 |
| Backend API Development | Build APIs for resume upload, scoring, and interview processing | Member 6 |
| System Integration | Integrate all modules and agents into a complete workflow | Team Lead |
| Testing and Debugging | Test all modules and fix errors before deployment | All Members |



## Work Items

| Work Item | Assigned Member |
|-----------|----------------|
| Project Architecture Design | Sahithi |
| Database Schema Design (Jobs, Candidates, Interviews collections) | Sahithi |
| System Integration & Final Testing | Sahithi |
| Job Description Analysis Agent | Surya |
| Candidate Scoring System | Surya |
| AI Interview Module | Surya |
| Resume Parsing Module | Parinitha |
| Skill Extraction from Resume | Parinitha |
| Backend API for Resume Upload | Parinitha |
| Candidate Shortlisting Logic | Meghana |
| Candidate Evaluation Report Generation | Meghana |
| Backend API for Candidate Data | Meghana |
| HR Dashboard UI | Kalyani |
| Email Automation System | Kalyani |
| Interview Status Tracking UI | Kalyani |
| Database Connection & Data Storage APIs | Gnaneswari |
| Backend APIs for Interview Data | Gnaneswari |
| Deployment Setup & Environment Configuration | Gnaneswari |