import { RevealTop } from "@/components/ui/animation/RevealY";

const Work = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-center text-lg">
        <span className="text-babe-blue">Work</span> Experiences
      </h2>
      <ul className="grid gap-4">
        <li>
          <h3 className="text-lg font-medium">
            Edulink Myanmar (Student Service Officer)
          </h3>
          <ul className="list-disc list-inside space-y-2 font-light">
            <li>
              Managed the enrollment process by accurately entering and updating
              student data.
            </li>
            <li>
              Facilitated communication between departments to ensure smooth
              workflow
            </li>
            <li>
              Addressed and resolved customer issues and complaints in a timely
              and a professional manner.
            </li>
            <li>
              Assisted team members in specialized tasks, ensuring departmental
              support.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="text-lg font-medium">
            NELC SCHOOL (ASSISTANT TEACHER)
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Provided care and attention to children, ensuring their safety and
              well being.
            </li>
            <li>
              Communicated with parents regarding the child's progress and
              concerns.
            </li>
            <li>
              Taught English and Myanmar language skills to students, supporting
              their development.
            </li>
            <li>
              Printed and distributed students name cards for easy
              identification.
            </li>
            <li>
              Organized and led weekly activities, promoting student engagement
              and learning.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

const Education = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-center text-lg">
        <span className="text-babe-pink">Education</span> & Qualification
      </h2>
      <ul className="grid gap-4">
        <li>
          <h3 className="text-lg font-medium">
            Bachelor of Arts in International Relations
          </h3>
          <ul className="list-disc list-inside space-y-2 font-light">
            <li>Dagon University , Myanmar</li>
          </ul>
        </li>
        <li>
          <h3 className="text-lg font-medium">
            Professional Diploma in Management & Administration
          </h3>
          <ul className="list-disc list-inside space-y-2 font-light">
            <li>WEBS University</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

const Experiences = () => {
  return (
    <section className="py-10 md:py-20">
      <h1 className="text-center text-3xl mb-8 text-babe-blue">
        Education & <span className="text-babe-pink">Experiences</span>
      </h1>
      <div className="h-full grid grid-cols-1 gap-6 mx-auto max-w-2xl">
        <RevealTop>
          <Work />
          <Education />
        </RevealTop>
      </div>
    </section>
  );
};

export default Experiences;
