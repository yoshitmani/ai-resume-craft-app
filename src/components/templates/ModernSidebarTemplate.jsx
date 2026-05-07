import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ModernSidebarTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md flex text-gray-800 leading-snug">

      {/* Sidebar */}
      <div
        className="w-1/3 p-5 text-white"
        style={{ backgroundColor: accentColor }}
      >
        <h1 className="text-xl font-bold mb-1">
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <div className="space-y-1 text-sm mt-3">

          {data.personal_info?.email && (
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>{data.personal_info.email}</span>
            </div>
          )}

          {data.personal_info?.phone && (
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>{data.personal_info.phone}</span>
            </div>
          )}

          {data.personal_info?.location && (
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>{data.personal_info.location}</span>
            </div>
          )}

          {data.personal_info?.linkedin && (
            <div className="flex items-center gap-2">
              <Linkedin size={14} />
              <span className="break-all">{data.personal_info.linkedin}</span>
            </div>
          )}

          {data.personal_info?.website && (
            <div className="flex items-center gap-2">
              <Globe size={14} />
              <span className="break-all">{data.personal_info.website}</span>
            </div>
          )}

        </div>

        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <div className="mt-6">
            <h2 className="text-sm font-semibold mb-2">SKILLS</h2>

            <ul className="space-y-1 text-sm">
              {data.skills.map((skill, index) => (
                <li key={index}>• {skill}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <div className="mt-6">
            <h2 className="text-sm font-semibold mb-2">EDUCATION</h2>

            <div className="space-y-2 text-sm">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <p className="font-semibold">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </p>
                  <p className="text-xs">{edu.institution}</p>
                  <p className="text-xs">
                    {formatDate(edu.graduation_date)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-6">

        {/* Professional Summary */}
        {data.professional_summary && (
          <section className="mb-5">
            <h2
              className="text-lg font-semibold mb-2"
              style={{ color: accentColor }}
            >
              PROFESSIONAL SUMMARY
            </h2>

            <p className="text-gray-700 text-sm">
              {data.professional_summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <section className="mb-5">

            <h2
              className="text-lg font-semibold mb-3"
              style={{ color: accentColor }}
            >
              EXPERIENCE
            </h2>

            <div className="space-y-3">
              {data.experience.map((exp, index) => (
                <div key={index}>

                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-sm">
                        {exp.position}
                      </h3>

                      <p className="text-xs text-gray-600">
                        {exp.company}
                      </p>
                    </div>

                    <div className="text-xs text-gray-500">
                      {formatDate(exp.start_date)} -{" "}
                      {exp.is_current
                        ? "Present"
                        : formatDate(exp.end_date)}
                    </div>
                  </div>

                  {exp.description && (
                    <p className="text-gray-700 text-sm mt-1 whitespace-pre-line">
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
          <section>

            <h2
              className="text-lg font-semibold mb-3"
              style={{ color: accentColor }}
            >
              PROJECTS
            </h2>

            <div className="space-y-2">
              {data.project.map((proj, index) => (
                <div key={index}>

                  <h3 className="font-semibold text-sm">
                    {proj.name}
                  </h3>

                  <p className="text-gray-700 text-sm">
                    {proj.description}
                  </p>

                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

export default ModernSidebarTemplate;