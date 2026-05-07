const ElegantTemplate = ({ data, accentColor }) => {

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 text-gray-800 text-center">

      <h1 className="text-4xl font-light mb-2"
      style={{color:accentColor}}>
        {data.personal_info?.full_name}
      </h1>

      {data.professional_summary && (
        <p className="text-sm mb-6">
          {data.professional_summary}
        </p>
      )}

      {data.experience && (
        <section className="mb-4">

          <h2 className="text-lg font-semibold mb-2"
          style={{color:accentColor}}>
            EXPERIENCE
          </h2>

          {data.experience.map((exp,i)=>(
            <div key={i} className="mb-2">

              <b>{exp.position}</b>

              <div className="text-sm text-gray-500">
                {exp.company} • {formatDate(exp.start_date)}
              </div>

              <p className="text-sm">{exp.description}</p>

            </div>
          ))}

        </section>
      )}

      {data.skills && (
        <section>

          <h2 className="text-lg font-semibold mb-2"
          style={{color:accentColor}}>
            SKILLS
          </h2>

          <div className="text-sm">
            {data.skills.join(" • ")}
          </div>

        </section>
      )}

    </div>
  );
};

export default ElegantTemplate;