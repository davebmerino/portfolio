import Project from "./Project";
import SubTitle from "./SubTitle";
import TitleText from "./TitleText";

function MyProjects({ projectData }) {
  return (
    <>
      <section className="max-w-5xl mx-auto bg-[#f2f2f2] rounded-lg shadow-lg p-10  mt-20">
        <div className="flex flex-col  justify-center text-center">
          <SubTitle subTitle="Feature Projects" />
          <TitleText title="My" span="Projects" />
        </div>
        <div className="grid grid-col md:grid-cols-2 gap-4 mt-6 p-5">
          {projectData.map((pData) => (
            <Project key={pData.name} pData={pData} />
          ))}
        </div>
      </section>
    </>
  );
}

export default MyProjects;
