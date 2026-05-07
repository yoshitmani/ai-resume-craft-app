import { Check, Layout } from "lucide-react";
import { useState } from "react";

const TemplateSelector = ({ selectedTemplate, onChange }) => {

  const [isOpen, setIsOpen] = useState(false);

  const templates = [

    {
      id: "classic",
      name: "Classic",
      preview:
        "Traditional resume with professional layout"
    },

    {
      id: "modern",
      name: "Modern",
      preview:
        "Clean modern design with colored header"
    },

    {
      id: "minimal-image",
      name: "Minimal Image",
      preview:
        "Minimal design with profile image"
    },

    {
      id: "minimal",
      name: "Minimal",
      preview:
        "Ultra clean minimal typography resume"
    },

    {
      id: "sidebar",
      name: "Sidebar",
      preview:
        "Two column modern sidebar layout"
    },

    /* NEW TEMPLATES */

    {
      id: "professional",
      name: "Professional",
      preview:
        "ATS friendly professional resume"
    },

    {
      id: "creative",
      name: "Creative",
      preview:
        "Creative sidebar resume design"
    },

    {
      id: "corporate",
      name: "Corporate",
      preview:
        "Corporate style professional resume"
    },

    {
      id: "timeline",
      name: "Timeline",
      preview:
        "Experience timeline resume layout"
    },

    {
      id: "elegant",
      name: "Elegant",
      preview:
        "Elegant centered resume design"
    }

  ];

  return (
    <div className="relative">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 ring-blue-300 hover:ring transition-all px-3 py-2 rounded-lg"
      >
        <Layout size={14} /> <span className="max-sm:hidden">Template</span>
      </button>

      {isOpen && (

        <div className="absolute top-full w-[420px] p-3 mt-2 grid grid-cols-2 gap-3 z-10 bg-white rounded-md border border-gray-200 shadow-sm">

          {templates.map((template) => (

            <div
              key={template.id}
              onClick={() => {
                onChange(template.id);
                setIsOpen(false);
              }}
              className={`relative p-3 border rounded-md cursor-pointer transition-all ${
                selectedTemplate === template.id
                  ? "border-blue-400 bg-blue-100"
                  : "border-gray-300 hover:border-gray-400 hover:bg-gray-100"
              }`}
            >

              {selectedTemplate === template.id && (
                <div className="absolute top-2 right-2">
                  <div className="size-5 bg-blue-400 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <h4 className="font-medium text-gray-800">
                  {template.name}
                </h4>

                <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-gray-500 italic">
                  {template.preview}
                </div>
              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default TemplateSelector;