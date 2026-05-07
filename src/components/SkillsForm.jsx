import {
  Plus,
  Sparkles,
  X,
  Lightbulb,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

// Debounce hook
function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

const SkillsForm = ({ data, onChange }) => {
  const [newSkill, setNewSkill] = useState("");

  // AI suggestion state
  const [suggestions, setSuggestions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastFetchedKey, setLastFetchedKey] = useState("");

  const debouncedSkills = useDebounce(data, 900);

  const addSkill = (skillToAdd) => {
    const val = (skillToAdd || newSkill).trim();

    if (val && !data.includes(val)) {
      onChange([...data, val]);

      if (!skillToAdd) setNewSkill("");
    }
  };

  const removeSkill = (indexToRemove) => {
    onChange(data.filter((_, index) => index !== indexToRemove));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  // Fetch suggestions when debounced skills change
  useEffect(() => {
    const key = debouncedSkills.join(",");

    if (debouncedSkills.length >= 2 && key !== lastFetchedKey) {
      fetchSuggestions(debouncedSkills);
    }

    if (debouncedSkills.length < 2) {
      setSuggestions(null);
      setError(null);
    }
  }, [debouncedSkills]);

  // AI Suggestion Fetch Function
  const fetchSuggestions = useCallback(async (skills) => {
    setIsLoading(true);
    setError(null);
    setLastFetchedKey(skills.join(","));

    try {
      const token = localStorage.getItem("token");

      const { data: res } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/ai/skill-suggestions`,
        { skills },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Skill Suggestions Response:", res);

      if (res.success) {
        setSuggestions(res.data);
      } else {
        setError(res.message || "Failed to get suggestions.");
      }
    } catch (err) {
      console.error("Skill Suggestion Frontend Error:", err);

      const msg =
        err?.response?.status === 429
          ? "Too many requests. Please wait a moment."
          : err?.response?.data?.message ||
            "Could not reach AI. Please try again.";

      setError(msg);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleRefresh = () => fetchSuggestions(data);

  const handleQuickAdd = (skill) => {
    if (!data.includes(skill)) {
      onChange([...data, skill]);
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
          Skills
        </h3>

        <p className="text-sm text-gray-500">
          Add your technical and soft skills · AI suggestions appear after 2+
          skills
        </p>
      </div>

      {/* Input row */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter a skill (e.g., JavaScript, Project Management)"
          className="flex-1 px-3 py-2 text-sm border rounded-lg"
          onChange={(e) => setNewSkill(e.target.value)}
          value={newSkill}
          onKeyDown={handleKeyPress}
        />

        <button
          onClick={() => addSkill()}
          disabled={!newSkill.trim()}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="size-4" />
          Add
        </button>
      </div>

      {/* Skill chips */}
      {data.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {data.map((skill, index) => (
            <span
              key={index}
              className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {skill}

              <button
                onClick={() => removeSkill(index)}
                className="ml-1 hover:bg-blue-200 rounded-full p-0.5 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      ) : (
        <div className="text-center py-6 text-gray-500">
          <Sparkles className="w-10 h-10 mx-auto mb-2 text-gray-300" />

          <p>No skills added yet.</p>

          <p className="text-sm">
            Add your technical and soft skills above.
          </p>
        </div>
      )}

      {/* AI Suggestion Box */}
      {(isLoading || error || suggestions) && (
        <div className="rounded-xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-indigo-100 bg-indigo-50/60">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-indigo-500" />

              <span className="text-xs font-semibold text-indigo-700 tracking-wide uppercase">
                {isLoading
                  ? "Analyzing your skills..."
                  : error
                  ? "Suggestion Error"
                  : `AI Skill Insights · ${suggestions?.detectedRole}`}
              </span>
            </div>

            {!isLoading && suggestions && (
              <button
                onClick={handleRefresh}
                className="text-indigo-400 hover:text-indigo-600 transition-colors"
                title="Refresh suggestions"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Body */}
          <div className="p-4 space-y-4">
            {/* Loading */}
            {isLoading && (
              <div className="space-y-2 animate-pulse">
                <div className="h-3 bg-indigo-100 rounded w-3/4" />
                <div className="h-3 bg-indigo-100 rounded w-1/2" />
                <div className="h-3 bg-indigo-100 rounded w-2/3" />
              </div>
            )}

            {/* Error */}
            {!isLoading && error && (
              <div className="flex items-start gap-2 text-sm text-red-600">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />

                <span>
                  {error}

                  <button
                    onClick={handleRefresh}
                    className="underline text-indigo-600 hover:text-indigo-800 ml-1"
                  >
                    Retry
                  </button>
                </span>
              </div>
            )}

            {/* Suggestions */}
            {!isLoading && !error && suggestions && (
              <>
                {/* Missing Skills */}
                {suggestions.missingSkills?.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-2">
                      🎯 Missing Skills
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {suggestions.missingSkills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Improvements */}
                {suggestions.recommendedImprovements?.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2">
                      💡 Recommended Improvements
                    </p>

                    <ul className="space-y-1">
                      {suggestions.recommendedImprovements.map((item, i) => (
                        <li
                          key={i}
                          className="text-xs text-gray-600 flex gap-2"
                        >
                          <span className="text-amber-500 font-bold shrink-0">
                            →
                          </span>

                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Related Skills */}
                {suggestions.relatedSkills?.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-2">
                      🔗 Related Skills to Explore
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {suggestions.relatedSkills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-xs text-gray-400 border-t border-indigo-100 pt-3">
                  ✨ Powered by Groq AI · Based on current industry trends
                </p>
              </>
            )}
          </div>
        </div>
      )}

      {/* Tip */}
      <div className="bg-blue-50 p-3 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Tip:</strong> Add 8-12 relevant skills. Include both technical
          skills and soft skills.
        </p>
      </div>
    </div>
  );
};

export default SkillsForm;