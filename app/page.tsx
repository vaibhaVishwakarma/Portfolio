"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  ExternalLink,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Album,
  Text
} from "lucide-react"
import Image from "next/image"

const colors = ["red" ,"green" , "blue" , "orange","purple" , "brown" , "grey"]

const NAME = "Vaibhav Vishwakarma" ,
      ROLE = "Data Scientist | ML | Full-Stack Engineer",
      EMAIL = "vaibhavofficial709@gmail.com",
      PHONE = "+91 9664250004",
      LOCATION = "Chennai, TN, India",
      PROFILE_IMG = "Profile.jpg",
      ABOUTME = [ "Passionate Machine Leaning Engineer & Full stack developer with 1+ year of experience doing data science and machine learning projects.",
                "Strong foundation of algoriths, data structure, software engineering princiles, mathematics."] ,
      coreSkillList = ["data mining", "data storage", "data wrangling", "EDA", "model evalutation", "Computer Vision", "React.js", "RESTful API & Server" ],
      techStackList = ["Python", "Scikit-Learn", "PyTorch", "React" ,"GCP", "Docker"],
      UNIVERSITY = "Vellore Institute of Technology, Chennai",
      DEGREE = "B.Tech Computer Science with specialization in Data Science",
      PERIOD = "2023-2027",
      CGPA = "9.12/10.0",
      PROJECTS = [
        {
          "name":"AI Fixed Deposit Advisor & Calculator",
          "link":"https://vaibhavishwakarma.github.io/fixed_deposit_calc_QA/",
          "description":"Identify the best bank for Fixed Desposite via Graph. Ask Questions for Pre-Mature Withdrawal Charges, TDS, schemes for special age groups.",
          "tech_stack":["LLM","NLP", "React", "Supabase" ,"Selenium" , "FastAPI" ], 
          "key_points":["calculate return amount in 4 taps" , "discuss legal advice with AI" , "hands-free discussion"]
        },
        {
          "name":"Am I Debared❓",
          "link":"https://vaibhavishwakarma.github.io/AttendanceWebApp/",
          "description":"Re-Create & formulate your Time Table, months ahead, for vacations and holidays. Specially made with love for Vit students.",
          "tech_stack":["JavaScript", "FastAPI"], 
          "key_points":["easy drag-drop courses" , "a red table indicates debared status" , "100+ visits till day"]
        }
      ]
      ,
      CERTIFICATES= [
        {
        "link":"https://learn.deeplearning.ai/accomplishments/5a3a4f2c-25d2-48d6-9a1b-21395c36e928",
        "title":"Multi AI Agent Systems with crewAI",
        "subtitle":"",
        "expiry":""
      },
      {
        "link":"https://www.hackerrank.com/certificates/iframe/61d2f65be40c",
        "title":"Rest API",
        "subtitle":"",
        "expiry":""
      },
      {
        "link":"https://www.hackerrank.com/certificates/iframe/12bef5a2bc48",
        "title":"Python",
        "subtitle":"",
        "expiry":""
      },
      {
        "link":"https://www.hackerrank.com/certificates/iframe/31b84083c4e0",
        "title":"JavaScript",
        "subtitle":"",
        "expiry":""
        }
        
    ],
    MINI_PROJECTS = [
      {
        "name":"ML Algoriths from zero",
        "link":"https://github.com/vaibhaVishwakarma/ML-from-scratch",
        "description":"Implemented custom class parallel to scikit-learn implemention for comparision, helps in good graps of underlying methemtics.Got answers to -> how predictions are made, how weights are calculated, why gradient is needed, what hyprparamets are impact prediction, basis of model evaulation",
        "tech_stack":["advance mathematics"],
        "key_points":["linear-regression & logistic-classifier","decision tree & Random Forest","priciple component analysis (unsupervised)","naive-bayes classifer", "perceptron"],         
      },
      {
        "name":"Computer Vision",
        "link":"https://github.com/vaibhaVishwakarma/deep_learning",
        "description":"Implemented custom class to sort images to categories. using Convolutional Neural Network(CNN) technique in PyTorch. Further performed model evaluation for performance metrics.",
        "tech_stack":["PyTorch"],
        "key_points":[],         
      },
      {
        "name":"Exploratory Data Analysis",
        "link":"https://github.com/vaibhaVishwakarma/myML",
        "description":"",
        "tech_stack":["pandas","sckikit-Learn"],
        "key_points":["Data Processing, Transformation, Handling, Visulization, Distribution Trends, Outliers etc."],         
      },
      {
          "name":"YouTube Automation",
          "link":"",
          "description":"Interprete the most-viewed section of any YT video, trim and share multiple-reels on your social media handles in less than 10 clicks.",
          "tech_stack":["Selenium","moviepy","openCV"], 
          "key_points":["gained 10k+ views on Instagram profile" , "experienced extensive Data Extraction process"]
      }
      
    ],
    ACHIEVEMENTS = [
      {
        "name":"Completed British Airways Data Science Virtual Internship",
        "link":"https://drive.google.com/drive/folders/1nVfbJAxQaE74ZvcNtHSBEVdl3osCLjJq?usp=sharing",
        "description":"Processed SkyTrax reviews, presented a executive-summary & designed model with 94% precision for chance of flight booking",
        "mention":""
      },
      {
        "name":"Best Global Rank of 1307 (Contest 166) & 1400+ Rating",
        "link":"https://www.codechef.com/users/keen_deed_80",
        "mention":""
      },
      {
        "name":"100+ DSA Questions over LeetCode & GFG",
        "link":"https://leetcode.com/u/vaibhavjs709/",
        "mention":"" 
      }
    ],
    CURRENTLY = ["🚀 Building DeepLeaning Models",
                    "📚 Learning Advanced Mathematics",
                    "🎯 Open to new opportunities"],
    UPDATED_ON = "June 2025"







export default function HarvardResume() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{NAME}</h1>
            <p className="text-xl text-gray-600 mb-4">{ROLE}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <a href={`tel:${EMAIL}`} target="_blank"><span>{EMAIL}</span></a>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <a href={`tel:${PHONE}`} target="_blank"><span>{PHONE}</span></a>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <a href="https://maps.app.goo.gl/1L1c99bn61HNqZPc8" target = "_blank"><span>{LOCATION}</span></a>
              </div>
            </div>
          </div>
        </div>
      </header>

      

      {/* Main Content */}


      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Introduction */}
          <div className="lg:col-span-3">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden ">
                  <img src={PROFILE_IMG}  style = {{objectFit:"cover",transform:"scale(1.1)"}}  alt=""/>
                </div>

                <div className="text-sm text-gray-600 space-y-3">
                  {ABOUTME.map((statement,idx) => (
                      <p key={idx} >{statement}</p>
                  ))}
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Core Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {coreSkillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Education</h4>
                  <div className="text-sm text-gray-600">
                    <a href="https://maps.app.goo.gl/7YRCbTgsFHMSkVjF6" target="_blank"><p className="font-medium">{UNIVERSITY}</p></a>
                    <p>{DEGREE}</p>
                    <p className="text-xs text-gray-500">{PERIOD}</p>
                    <p className="text-xs">{CGPA}</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1">
                    {techStackList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Projects, Achievements & Certifications */}
          <div className="lg:col-span-6 space-y-8">
            {/* Projects Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6" />
                Featured Projects
              </h2>

              <div className="space-y-6">
                {PROJECTS.map((project,idx) => (
                  <Card key={Number(idx)}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{project.name}</span>
                      { project.link?<a href={project.link} target="_blank"><ExternalLink className="w-4 h-4 text-gray-400" /></a>:<></>}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech_stack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">
                    {project.key_points.map((highlight) =>(
                      <p key = {highlight}>• {highlight}</p>
                    ))}
                    </div>
                  </CardContent>
                </Card>
                ))}
              </div>
            </section>


            {/* Mini Projects */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6" />
                Mini Projects
              </h2>

              <div className="space-y-6">
                {MINI_PROJECTS.map((project,idx) => (
                  <Card key={Number(idx)}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{project.name}</span>
                      { project.link?<a href={project.link} target="_blank"><ExternalLink className="w-4 h-4 text-gray-400" /></a>:<></>}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {project.description?<p className="text-gray-600 mb-3">{ project.description}</p>:""}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech_stack?project.tech_stack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      )):""}
                    </div>
                    <div className="text-sm text-gray-500">
                    {project.key_points?project.key_points.map((highlight,idx) =>(
                      <p key = {idx}>• {highlight}</p>
                    )):""}
                    </div>
                  </CardContent>
                </Card>
                ))}
              </div>
            </section>

            {/* Achievements Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Achievements & Virtual Internship
              </h2>

              <div className="space-y-4">
                {
                  ACHIEVEMENTS.map((achievement,idx ) => {
                    const color = colors[(Math.floor(Math.random()*colors.length))%colors.length];           
                    return (
                      <Card key={Number(idx)}>
                        <CardContent className="pv-3">
                          <div className="flex items-start gap-3">
                            <Award className={`w-5 h-5 text-${color}-500 mt-1`} />
                            <div>
                              <a href={achievement.link?achievement.link:""} target="_black" ><h3 className="font-semibold">{achievement.name}</h3></a>
                              {achievement.description?<p className="text-sm text-gray-600"> {achievement.description}</p> :""}
                              {achievement.mention?<p className="text-xs text-gray-500 mt-1"> {achievement.mention}</p> :""}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })
                }

                
              </div>
            </section>

            {/* Certifications Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Certifications
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                { CERTIFICATES.map((certificate,idx) => {
                  const color = colors[(Math.floor(Math.random()*colors.length))%colors.length];           
                  return(
                  <Card key={Number(idx)}>
                  <CardHeader>
                    <CardTitle >
                      {certificate.link?<a className="flex justify-end" href={certificate.link} target="_blank"><ExternalLink className="w-4 h-4 text-gray-400" ></ExternalLink></a>:""}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pv-3">
                    <div className="text-center">
                      
                        <div className={`w-12 h-12 bg-${color}-100 rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <Album className={`w-6 h-6 text-${color}-600`} />
                      
                      </div>
                      <h3 className="font-semibold">{certificate.title}</h3>
                      { certificate?.subtitle? <p className="text-sm text-gray-600">Professional Level</p> : "" }
                      { certificate.expiry? <p className="text-xs text-gray-500 mt-1">Expires: Dec 2024</p> : "" }
                    </div>
                  </CardContent>
                </Card>)
                })

                }
                
              </div>
            </section>

            
          </div>

          {/* Right Column - Social Links */}
          <div className="lg:col-span-3">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Connect With Me Anytime</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/vaibhavishwakarma/"
                    target = "_blank"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600" />
                    <div >
                      <p className="font-medium text-sm">LinkedIn</p>
                      <p className="text-xs text-gray-500">Professional Network</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/vaibhaVishwakarma"
                    target = "_blank"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <Github className="w-5 h-5 text-gray-800" />
                    <div>
                      <p className="font-medium text-sm">GitHub</p>
                      <p className="text-xs text-gray-500">Code Repository</p>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/theofficialvaibhav_vishwakarma/"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="font-medium text-sm">Instagram</p>
                      <p className="text-xs text-gray-500">More Social Side of Mine</p>
                    </div>
                  </a>

                  <a
                    href="https://drive.google.com/file/d/1n0T2vE3omuCiAHJaMStajmueLDhHYNy4/view?usp=sharing"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <Text className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-sm">Resume</p>
                      <p className="text-xs text-gray-500">PDF</p>
                    </div>
                  </a>
                </div>        

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Currently</h4>
                  {CURRENTLY.map((statement,idx) => (
                  <p key= {idx} className="text-sm text-gray-600">{statement}<br/></p>
                  ))}
                  </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">© 2025 {NAME}. Built with React and Next.js.</p>
          <p className="text-gray-500 text-xs mt-2">Last updated: {UPDATED_ON}</p>
        </div>
      </footer>
    </div>
  )
}
