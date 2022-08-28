import React, { useEffect, useState } from "react";
import {useLazyGetProjectQuery, useSearchProjectsQuery} from "../store/nasa/nasa.api";
import { useDebounce } from "../hooks/debounce";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const ProjectsPage = () => {
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);
  const {
    isLoading,
    data: projects,
  } = useSearchProjectsQuery(debounced, {
    skip: debounced.length < 2,
  });
  const [fetchProject, {isLoading: isLoadProj,isError: isErrorProj, data: project}] = useLazyGetProjectQuery()

  useEffect(() => {
    setDropdown(debounced.length > 2);
  }, [debounced, projects]);

  const clickHandler = (projectId: number) => {
    fetchProject(projectId);
    setDropdown(false)
  };

  return (
    <div className="grid justify-items-center p-2 m-10 border-2 rounded-md shadow-md">
      <div className="py-4 px-2">
        Добро пожаловать в TechPort — ресурс НАСА для сбора и обмена информацией
        о развитии технологий, финансируемых НАСА. Techport позволяет публике
        открыть для себя технологии, над которыми НАСА работает каждый день,
        чтобы исследовать космос, понимать вселенную и улучшать аэронавтику.
      </div>

      <div className="relative w-[500px]">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border py-2 px-4 w-full h-[50px] mb-2"
          placeholder="Поиск по проектам техпорта"
        />
        {dropdown && (
          <ul className="list-none absolute top-[50px] left-0 right-0 max-h-[300px] overflow-y-scroll shadow-md bg-white">
            {isLoading && <p className="text-center">Loading...</p>}
            {projects?.map((item) => (
              <li
                key={item.projectId}
                onClick={() => clickHandler(item.projectId)}
                className="py-2 px-4 hover:bg-blue-800 hover:text-white transition-colors cursor-pointer"
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='text-gray-500'>*могут открыться не все проекты. API Nasa с ошибками.</div>
      <div className='py-4 px-2'>
        {isLoadProj && <p className="text-2xl text-center">Loading project...</p>}
        {isErrorProj && <p className="text-2xl text-center text-red-600">Some error...</p>}
        {project && <ProjectCard project={project} />}

      </div>
    </div>
  );
};

export default ProjectsPage;
