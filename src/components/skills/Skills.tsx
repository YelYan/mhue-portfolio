import { Reveal } from "@/components/ui/animation/Reveal";

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-0">
      <h1 className="text-center text-3xl mb-8 text-babe-blue">
        My <span className="text-babe-pink">Skills</span>
      </h1>
      <Reveal>
        <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-2xl">
          <div className="space-y-4">
            <h2 className="text-center text-lg">
              <span className="text-babe-blue">Soft</span> Skills
            </h2>
            <ul className="list-disc list-inside grid gap-4 font-light">
              <li>Problem-solving</li>
              <li>Adaptability</li>
              <li>Teamwork</li>
              <li>Communication & Interpersonal Skills</li>
              <li>Customer Service & Student Support</li>
              <li>Time management & Organization</li>
              <li>Attention to Detail & Accuracy</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-center text-lg">
              <span className="text-babe-pink">Hard</span> Skills
            </h2>
            <ul className="list-disc list-inside grid gap-4 font-light">
              <li>Data Entry & Database Management</li>
              <li>Microsoft Office Suite (Word, Excel, PowerPoint, Outlook)</li>
              <li>Administrative & Clerical Support</li>
              <li>Document Preparation & Record Keeping</li>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Skills;
