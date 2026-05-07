import ClassicTemplate from "./templates/ClassicTemplate";
import MinimalImageTemplate from "./templates/MinimalImageTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import ModernSidebarTemplate from "./templates/ModernSidebarTemplate";

/* NEW TEMPLATES */
import ProfessionalTemplate from "./templates/ProfessionalTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";
import CorporateTemplate from "./templates/CorporateTemplate";
import TimelineTemplate from "./templates/TimelineTemplate";
import ElegantTemplate from "./templates/ElegantTemplate";

const ResumePreview = ({ data, template, accentcolor, classes = "" }) => {

  const renderTemplate = () => {

    switch (template) {

      case "modern":
        return <ModernTemplate data={data} accentColor={accentcolor} />;

      case "minimal":
        return <MinimalTemplate data={data} accentColor={accentcolor} />;

      case "minimal-image":
        return <MinimalImageTemplate data={data} accentColor={accentcolor} />;

      case "sidebar":
        return <ModernSidebarTemplate data={data} accentColor={accentcolor} />;

      case "professional":
        return <ProfessionalTemplate data={data} accentColor={accentcolor} />;

      case "creative":
        return <CreativeTemplate data={data} accentColor={accentcolor} />;

      case "corporate":
        return <CorporateTemplate data={data} accentColor={accentcolor} />;

      case "timeline":
        return <TimelineTemplate data={data} accentColor={accentcolor} />;

      case "elegant":
        return <ElegantTemplate data={data} accentColor={accentcolor} />;

      default:
        return <ClassicTemplate data={data} accentColor={accentcolor} />;

    }

  };

  return (
    <div className="w-full bg-gray-100 flex justify-center py-6">

      <div
        id="resume-preview"
        className={
          "bg-white border border-gray-200 shadow-sm print:shadow-none print:border-none print:p-0 p-6 max-w-[850px] w-full mx-auto " +
          classes
        }
      >
        {renderTemplate()}
      </div>

      <style>{`
        @page {
          size: letter;
          margin: 0.4in;
        }

        @media print {

          html,
          body {
            width: 8.5in;
            height: 11in;
            background: white;
          }

          body * {
            visibility: hidden;
          }

          #resume-preview,
          #resume-preview * {
            visibility: visible;
          }

          #resume-preview {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            max-width: 8.5in;
            padding: 0 !important;
            margin: 0 auto;
            box-shadow: none !important;
            border: none !important;
          }

        }
      `}</style>

    </div>
  );
};

export default ResumePreview;
