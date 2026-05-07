const MinimalTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-900 font-light leading-snug">
      
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-light mb-2 tracking-wide">
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
          {data.personal_info?.email && <span>{data.personal_info.email}</span>}
          {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
          {data.personal_info?.location && (
            <span>{data.personal_info.location}</span>
          )}
          {data.personal_info?.linkedin && (
            <span className="break-all">{data.personal_info.linkedin}</span>
          )}
          {data.personal_info?.website && (
            <span className="break-all">{data.personal_info.website}</span>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {data.professional_summary && (
        <section className="mb-5">
          <p className="text-gray-700 text-sm">
            {data.professional_summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-5">
          <h2
            className="text-xs uppercase tracking-widest mb-3 font-medium"
            style={{ color: accentColor }}
          >
            Experience
          </h2>

          <div className="space-y-3">
            {data.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-sm font-medium">{exp.position}</h3>

                  <span className="text-xs text-gray-500">
                    {formatDate(exp.start_date)} -{" "}
                    {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-1">{exp.company}</p>

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
        <section className="mb-5">
          <h2
            className="text-xs uppercase tracking-widest mb-3 font-medium"
            style={{ color: accentColor }}
          >
            Projects
          </h2>

          <div className="space-y-2">
            {data.project.map((proj, index) => (
              <div key={index}>
                <h3 className="text-sm font-medium">{proj.name}</h3>
                <p className="text-gray-600 text-sm">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className="mb-5">
          <h2
            className="text-xs uppercase tracking-widest mb-3 font-medium"
            style={{ color: accentColor }}
          >
            Education
          </h2>

          <div className="space-y-2">
            {data.education.map((edu, index) => (
              <div key={index} className="flex justify-between text-sm">
                <div>
                  <h3 className="font-medium">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-gray-600">{edu.institution}</p>

                  {edu.gpa && (
                    <p className="text-xs text-gray-500">
                      GPA: {edu.gpa}
                    </p>
                  )}
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
            className="text-xs uppercase tracking-widest mb-2 font-medium"
            style={{ color: accentColor }}
          >
            Skills
          </h2>

          <div className="text-sm text-gray-700">
            {data.skills.join(" • ")}
          </div>
        </section>
      )}
    </div>
  );
};

export default MinimalTemplate;