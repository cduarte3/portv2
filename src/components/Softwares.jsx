export default function Softwares() {
  const softwareList = [
    { src: "c_logo.png", alt: "C" },
    { src: "cpp_logo.png", alt: "C++" },
    { src: "html_logo.png", alt: "HTML" },
    { src: "css_logo.png", alt: "CSS" },
    { src: "js_logo.png", alt: "JavaScript" },
    { src: "ts_logo.png", alt: "TypeScript" },
    { src: "react_logo.png", alt: "React" },
    { src: "tw_logo.png", alt: "Tailwind CSS" },
    { src: "bs_logo.png", alt: "Bootstrap" },
    { src: "python_logo.webp", alt: "Python" },
    { src: "flask_logo.png", alt: "Flask" },
    { src: "docker_logo.webp", alt: "Docker" },
    { src: "mongo_logo.png", alt: "MongoDB" },
    { src: "aws_logo.png", alt: "AWS" },
    { src: "gcloud_logo.webp", alt: "Google Cloud" },
    { src: "sql_logo.png", alt: "SQL" },
    { src: "ghub_logo.png", alt: "GitHub" },
    { src: "git_logo.png", alt: "Git" },
  ];

  return (
    <>
      <div className="grid max-w-[60vw] grid-cols-3 lg:grid-cols-6 gap-8 p-4 mx-auto sm:p-8">
        {softwareList.map((software, index) => (
          <div key={index} className="text-center flex flex-col justify-center">
            <img
              src={software.src}
              alt={software.alt}
              className="max-w-md mx-auto rounded-lg"
              style={{ display: "block", maxWidth: "100%" }}
            ></img>
          </div>
        ))}
      </div>
    </>
  );
}
