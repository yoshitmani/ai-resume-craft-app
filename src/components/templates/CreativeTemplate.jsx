import { Mail, Phone, MapPin } from "lucide-react";

const CreativeTemplate = ({ data, accentColor }) => {

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white flex text-gray-800">

      {/* Sidebar */}
      <div className="w-1/4 p-6 text-white" style={{background:accentColor}}>
        <h1 className="text-xl font-bold mb-4">
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <div className="space-y-2 text-sm">

          {data.personal_info?.email && (
            <div className="flex gap-2 items-center">
              <Mail size={14}/> {data.personal_info.email}
            </div>
          )}

          {data.personal_info?.phone && (
            <div className="flex gap-2 items-center">
              <Phone size={14}/> {data.personal_info.phone}
            </div>
          )}

          {data.personal_info?.location && (
            <div className="flex gap-2 items-center">
              <MapPin size={14}/> {data.personal_info.location}
            </div>
          )}

        </div>

        {data.skills && (
          <div className="mt-6">
            <h2 className="text-sm font-semibold mb-2">SKILLS</h2>

            <ul className="space-y-1 text-sm">
              {data.skills.map((s,i)=>(
                <li key={i}>• {s}</li>
              ))}
            </ul>
          </div>
        )}

      </div>

      {/* Content */}
      <div className="w-3/4 p-6">

        {data.professional_summary && (
          <section className="mb-4">
            <h2 className="text-lg font-semibold mb-2"
            style={{color:accentColor}}>
              SUMMARY
            </h2>
            <p className="text-sm">{data.professional_summary}</p>
          </section>
        )}

        {data.experience && (
          <section className="mb-4">
            <h2 className="text-lg font-semibold mb-2"
            style={{color:accentColor}}>
              EXPERIENCE
            </h2>

            {data.experience.map((exp,i)=>(
              <div key={i} className="mb-2">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-sm">{exp.position}</h3>
                  <span className="text-xs">
                    {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </span>
                </div>

                <p className="text-sm text-gray-600">{exp.company}</p>
                <p className="text-sm">{exp.description}</p>
              </div>
            ))}

          </section>
        )}

      </div>
    </div>
  );
};

export default CreativeTemplate;