import Title from "./Title";
import { FileText, Sparkles, Eye, PenLine, Globe, BarChart } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "🔐 Secure Authentication",
    desc: "User login and signup system with protected access to manage resumes safely.",
    color: "violet",
  },
  {
    icon: Sparkles,
    title: "🤖 Enhance with AI",
    desc: "Improve your resume with AI-powered suggestions and optimized content.",
    color: "green",
  },
  {
    icon: Eye,
    title: "🔍 Resume Review",
    desc: "Analyze your resume and get insights to improve readability and structure.",
    color: "orange",
  },
  {
    icon: PenLine,
    title: "✍️ AI Cover Letter Builder",
    desc: "Generate professional cover letters instantly using AI assistance.",
    color: "blue",
  },
  {
    icon: Globe,
    title: "🌐 Resume Website",
    desc: "Create a shareable resume website to showcase your profile online.",
    color: "pink",
  },
  {
    icon: BarChart,
    title: "📊 Resume Tracking",
    desc: "Track how your resume performs and monitor job application progress.",
    color: "yellow",
  },
];

const Features = () => {
  return (
    <div id="features" className="flex flex-col items-center my-20 scroll-mt-12">
      
      <Title 
        title="6 features to boost your job search"
        description="Create a professional resume in minutes with smart AI tools designed to simplify your job search."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-6 max-w-6xl">

        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="p-6 border rounded-xl hover:shadow-lg transition bg-white flex gap-4"
            >
              <Icon className={`w-6 h-6 text-${feature.color}-600`} />

              <div>
                <h3 className="font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  {feature.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;