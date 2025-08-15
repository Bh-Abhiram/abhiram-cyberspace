// src/components/Education.jsx
import CodeRain from "./CodeRain";

function Education() {
  const educationData = [
    {
      id: 1,
      level: "School of Secondary Education (SSC)",
      institute: "Bhashyam High School, RCPM",
      year: "2018-2019",
      grade: "9.7 CGPA",
      logo: "https://img.icons8.com/ios-filled/50/school.png",
    },
    {
      id: 2,
      level: "Board of Intermediate Education",
      institute: "Sri Chaitanya Junior College, Kakinada",
      year: "2019-2021",
      grade: "9.2 CGPA",
      logo: "https://img.icons8.com/ios-filled/50/university.png",
    },
    {
      id: 3,
      level: "B.Tech - Computer Science and Engineering (Cyber Security)",
      institute: "Malla Reddy University, Hyderabad",
      year: "2021 – 2025",
      grade: "8.82 CGPA",
      logo: "https://img.icons8.com/ios-filled/50/graduation-cap.png",
    },
  ];

  return (
    <section
      id="education"
      className="relative w-full min-h-screen px-6 py-20 flex items-center justify-center"
    >
      <CodeRain />

      <div className="relative z-10 max-w-4xl w-full text-white">
        <h2 className="text-4xl font-bold mb-12 text-center">🎓 Education Timeline</h2>
        <div className="border-l-4 border-green-500 pl-6 space-y-10">
          {educationData.map((edu) => (
            <div key={edu.id} className="flex items-start gap-4 relative group">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-md">
                <img src={edu.logo} alt={`${edu.level} logo`} className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-green-400">{edu.level}</h3>
                <p className="text-lg">{edu.institute}</p>
                <p className="text-sm text-gray-300 italic">{edu.year}</p>
                <p className="text-sm text-gray-400">Grade: {edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
