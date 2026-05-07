import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ClassicTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800 leading-snug">

      {/* Header */}
      <header
        className="text-center mb-5 pb-4 border-b"
        style={{ borderColor: accentColor }}
      >
        <h1 className="text-3xl font-bold mb-1" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
          {data.personal_info?.email && (
            <div className="flex items-center gap-1">
              <Mail className="size-4" />
              <span>{data.personal_info.email}</span>
            </div>
          )}
          {data.personal_info?.phone && (
            <div className="flex items-center gap-1">
              <Phone className="size-4" />
              <span>{data.personal_info.phone}</span>
            </div>
          )}
          {data.personal_info?.location && (
            <div className="flex items-center gap-1">
              <MapPin className="size-4" />
              <span>{data.personal_info.location}</span>
            </div>
          )}
          {data.personal_info?.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin className="size-4" />
              <span className="break-all">{data.personal_info.linkedin}</span>
            </div>
          )}
          {data.personal_info?.website && (
            <div className="flex items-center gap-1">
              <Globe className="size-4" />
              <span className="break-all">{data.personal_info.website}</span>
            </div>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {data.professional_summary && (
        <section className="mb-4">
          <h2
            className="text-lg font-semibold mb-2"
            style={{ color: accentColor }}
          >
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-700 leading-snug">
            {data.professional_summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-4">
          <h2
            className="text-lg font-semibold mb-3"
            style={{ color: accentColor }}
          >
            PROFESSIONAL EXPERIENCE
          </h2>

          <div className="space-y-3">
            {data.experience.map((exp, index) => (
              <div
                key={index}
                className="border-l-2 pl-3"
                style={{ borderColor: accentColor }}
              >
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {exp.position}
                    </h3>
                    <p className="text-gray-700 text-sm">{exp.company}</p>
                  </div>

                  <div className="text-right text-xs text-gray-600">
                    {formatDate(exp.start_date)} -{" "}
                    {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </div>
                </div>

                {exp.description && (
                  <p className="text-gray-700 text-sm whitespace-pre-line">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.project && data.project.length > 0 && (
        <section className="mb-4">
          <h2
            className="text-lg font-semibold mb-3"
            style={{ color: accentColor }}
          >
            PROJECTS
          </h2>

          <div className="space-y-2">
            {data.project.map((proj, index) => (
              <div
                key={index}
                className="border-l-2 pl-3"
                style={{ borderColor: accentColor }}
              >
                <h3 className="font-semibold text-gray-800">{proj.name}</h3>
                <p className="text-gray-600 text-sm">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className="mb-4">
          <h2
            className="text-lg font-semibold mb-3"
            style={{ color: accentColor }}
          >
            EDUCATION
          </h2>

          <div className="space-y-2">
            {data.education.map((edu, index) => (
              <div key={index} className="flex justify-between text-sm">
                <div>
                  <h3 className="font-semibold">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-gray-700">{edu.institution}</p>
                  {edu.gpa && (
                    <p className="text-gray-600 text-xs">GPA: {edu.gpa}</p>
                  )}
                </div>

                <div className="text-gray-600 text-xs">
                  {formatDate(edu.graduation_date)}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <section>
          <h2
            className="text-lg font-semibold mb-2"
            style={{ color: accentColor }}
          >
            CORE SKILLS
          </h2>

          <div className="flex flex-wrap gap-2 text-sm">
            {data.skills.map((skill, index) => (
              <span key={index} className="text-gray-700">
                • {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ClassicTemplate;