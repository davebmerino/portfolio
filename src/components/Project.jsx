import ProjectTech from "./ProjectTech";
import SubTitle from "./SubTitle";
import TitleText from "./TitleText";

function Project({ pData }) {
  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className=" ">
          <div className="flex h-50 w-full rounded-t-lg border border-b z-10 ">
            <img
              src={pData.image}
              alt={pData.name}
              className="w-full h-full rounded-t-lg hover:scale-90 transition-all duration-300  "
            />
          </div>

          <div className="flex flex-col gap-2 mt-3 px-5 text-center">
            <TitleText title={pData.name} />
            <SubTitle subTitle={pData.description} />
          </div>
          <div className="w-full mt-5 p-4">
            <ProjectTech pData={pData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
