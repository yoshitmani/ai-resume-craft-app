import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ProfessionalTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 text-gray-800 leading-snug">

      {/* Header */}
      <header className="border-b pb-4 mb-4">
        <h1 className="text-3xl font-bold" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
          {data.personal_info?.email && (
            <div className="flex items-center gap-1">
              <Mail size={14} /> {data.personal_info.email}
            </div>
          )}

          {data.personal_info?.phone && (
            <div className="flex items-center gap-1">
              <Phone size={14} /> {data.personal_info.phone}
            </div>
          )}

          {data.personal_info?.location && (
            <div className="flex items-center gap-1">
              <MapPin size={14} /> {data.personal_info.location}
            </div>
          )}

          {data.personal_info?.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin size={14} /> {data.personal_info.linkedin}
            </div>
          )}

          {data.personal_info?.website && (
            <div className="flex items-center gap-1">
              <Globe size={14} /> {data.personal_info.website}
            </div>
          )}
        </div>
      </header>

      {/* Summary */}
      {data.professional_summary && (
        <section className="mb-4">
          <h2
            className="text-lg font-semibold mb-1"
            style={{ color: accentColor }}
          >
            Summary
          </h2>
          <p className="text-sm text-gray-700">
            {data.professional_summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-4">
          <h2
            className="text-lg font-semibold mb-2"
            style={{ color: accentColor }}
          >
            Experience
          </h2>

          <div className="space-y-3">
            {data.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h3 className="font-semibold text-sm">
                    {exp.position}
                  </h3>

                  <span className="text-xs text-gray-500">
                    {formatDate(exp.start_date)} -{" "}
                    {exp.is_current
                      ? "Present"
                      : formatDate(exp.end_date)}
                  </span>
                </div>

                <p className="text-sm text-gray-600">{exp.company}</p>

                {exp.description && (
                  <p className="text-sm text-gray-700">
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
            className="text-lg font-semibold mb-2"
            style={{ color: accentColor }}
          >
            Projects
          </h2>

          <div className="space-y-2">
            {data.project.map((p, index) => (
              <div key={index}>
                <h3 className="font-semibold text-sm">{p.name}</h3>
                <p className="text-sm text-gray-700">{p.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className="mb-4">
          <h2
            className="text-lg font-semibold mb-2"
            style={{ color: accentColor }}
          >
            Education
          </h2>

          <div className="space-y-2">
            {data.education.map((edu, index) => (
              <div key={index} className="flex justify-between text-sm">
                <div>
                  <p className="font-semibold">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </p>
                  <p className="text-gray-600">{edu.institution}</p>
                </div>

                <span className="text-xs text-gray-500">
                  {formatDate(edu.graduation_date)}
                </span>
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
            Skills
          </h2>

          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs border rounded"
                style={{ borderColor: accentColor }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProfessionalTemplate;