const TimelineTemplate = ({ data, accentColor }) => {

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">

      <h1 className="text-3xl font-bold mb-4"
      style={{color:accentColor}}>
        {data.personal_info?.full_name}
      </h1>

      {data.experience && (

        <section>

          <h2 className="text-lg font-semibold mb-4"
          style={{color:accentColor}}>
            EXPERIENCE
          </h2>

          <div className="border-l-2 pl-4"
          style={{borderColor:accentColor}}>

            {data.experience.map((exp,i)=>(
              <div key={i} className="mb-4">

                <div className="flex justify-between">
                  <b>{exp.position}</b>
                  <span className="text-xs">
                    {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </span>
                </div>

                <p className="text-sm">{exp.company}</p>
                <p className="text-sm">{exp.description}</p>

              </div>
            ))}

          </div>

        </section>
      )}

    </div>
  );
};

export default TimelineTemplate;