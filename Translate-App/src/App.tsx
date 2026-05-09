import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeftRight, Copy, X } from "lucide-react";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "gu", name: "Gujarati" },
  { code: "mr", name: "Marathi" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "zh", name: "Chinese" },
  { code: "ja", name: "Japanese" },
  { code: "ko", name: "Korean" },
  { code: "pt", name: "Portuguese" },
  { code: "ru", name: "Russian" },
  { code: "ar", name: "Arabic" },
  { code: "bn", name: "Bengali" },
  { code: "pa", name: "Punjabi" },
  { code: "ta", name: "Tamil" },
  { code: "te", name: "Telugu" },
  { code: "tr", name: "Turkish" },
];

export default function App() {
  const [inputText, setInputText] = useState<string>("");
  const [translatedText, setTranslatedText] = useState("");
  const [fromLang, setFromLang] = useState("en");
  const [toLang, setToLang] = useState("hi");
  const [isLoading, setIsLoading] = useState(false);

  const translate = async () => {
    if (!inputText) return;
    
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://deep-translate1.p.rapidapi.com/language/translate/v2",
        { 
          q: inputText, 
          source: fromLang, 
          target: toLang 
        },
        { 
          headers: { 
            "x-rapidapi-key": "81bfb51464mshd8706d666f219b5p143a07jsn9a970e98d3bb", 
            "x-rapidapi-host": "deep-translate1.p.rapidapi.com" 
          } 
        }
      );
      
      setTranslatedText(response.data.data.translations.translatedText);
      setIsLoading(false);

    } catch (error) {
      console.log("Translation Error:", error);
      setIsLoading(false);
    }
  };

  const handleSwap = () => {
    setFromLang(toLang);
    setToLang(fromLang);
    setInputText(translatedText);
    setTranslatedText(inputText);
  };

  // 2. Clear Logic (Left dabba saaf karna)
  const handleClear = () => {
    setInputText("");
    setTranslatedText("");
  };

  // 3. Copy Logic (Right dabbe ka text copy karna)
  const handleCopy = () => {
    if (translatedText) {
      navigator.clipboard.writeText(translatedText); 
    }
  };

  // --- Auto-Translate (Debouncing) Logic ---
  useEffect(() => {
    if (!inputText) {
      setTranslatedText("");
      return;
    }
    const timer = setTimeout(() => {
      translate();
    }, 2000);
    return () => clearTimeout(timer);
  }, [inputText, fromLang, toLang]);

  return (
    <>
      <div className="min-h-screen p-8 bg-gray-50 text-gray-800">
        <h1 className="text-3xl font-bold text-center mb-10 text-blue-600">
          Google Translate Clone
        </h1>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 mt-8">
          
          {/* 1. Left Box (User Input Area) */}
          <div className="flex-1 border border-gray-200 rounded-2xl p-5 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="mb-4 border-b-2 border-gray-100 pb-3 flex justify-between items-center">
              <select
                value={fromLang}
                onChange={(e) => setFromLang(e.target.value)}
                className="w-full bg-transparent text-gray-700 font-bold focus:outline-none cursor-pointer"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>{lang.name}</option>
                ))}
              </select>
              {/* Clear Icon */}
              <button onClick={handleClear} className="text-gray-400 hover:text-red-500 ml-3 transition-colors" title="Clear Text">
                <X size={20} />
              </button>
            </div>
            <textarea
              value={inputText}
              onChange={(event) => setInputText(event.target.value)}
              placeholder="Type text to translate..."
              className="w-full h-40 resize-none focus:outline-none text-lg text-gray-800 flex-1"
            ></textarea>
          </div>

          {/* 2. Middle Area (Swap Icon + Translate Button) */}
          <div className="flex flex-col items-center justify-center gap-4">
            {/* Swap Icon Button */}
            <button 
              onClick={handleSwap} 
              className="p-3 bg-gray-100 text-gray-600 rounded-full shadow-sm hover:bg-gray-200 hover:text-blue-600 transition-all duration-300" 
              title="Swap Languages"
            >
              <ArrowLeftRight size={22} />
            </button>

            <button
              onClick={translate}
              disabled={isLoading}
              className="px-8 py-3 text-white font-bold rounded-xl shadow-md bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed disabled:scale-100"
            >
              {isLoading ? "Translating..." : "Translate ➔"}
            </button>
          </div>

          {/* 3. Right Box (Output Area) */}
          <div className="flex-1 border border-gray-200 rounded-2xl p-5 bg-gray-50 shadow-inner flex flex-col">
            <div className="mb-4 border-b-2 border-gray-200 pb-3 flex justify-between items-center">
              <select
                value={toLang}
                onChange={(e) => setToLang(e.target.value)}
                className="w-full bg-transparent text-blue-600 font-bold focus:outline-none cursor-pointer"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>{lang.name}</option>
                ))}
              </select>
              {/* Copy Icon */}
              <button onClick={handleCopy} className="text-gray-400 hover:text-blue-500 ml-3 transition-colors" title="Copy Translation">
                <Copy size={20} />
              </button>
            </div>
            <textarea
              value={translatedText}
              readOnly
              placeholder="Translation will appear here..."
              className="w-full h-40 resize-none bg-transparent focus:outline-none text-lg text-gray-600 flex-1"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
