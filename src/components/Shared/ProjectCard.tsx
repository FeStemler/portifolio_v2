interface ProjectImageProps {
    src: string;
}

interface ProjectHeaderProps {
    title: string;
    type: string;
}

interface ProjectDescription{
    description: string;
}

export interface ProjectData{
    projectImage: ProjectImageProps,
    projectHeader: ProjectHeaderProps,
    projectDescription: ProjectDescription
}

interface ProjectCardProps {
    projectData: ProjectData;
}


export function ProjectImage({src}: ProjectImageProps) {
    return (
        <figure className="overflow-hidden w-full h-[203px]">
            <img
                src={src}
                alt="Project preview"
                className="object-cover w-full aspect-[0.9]"
            />
        </figure>
    );
}

export function ProjectHeader({title, type}: ProjectHeaderProps) {
    return (
        <header
            className="flex justify-between overflow-hidden gap-2.5 items-center w-full text-base font-bold text-center text-black min-h-[29px]">
            <h3 className="self-stretch my-auto">{title}</h3>
            <h3 className="overflow-hidden  gap-10 uppercase whitespace-nowrap">
                {type}
            </h3>
        </header>
    );
}

export function ProjectDescription({description}:ProjectDescription) {
    return (
        <section className="overflow-hidden mt-14 w-full">
            <h3 className="text-left font-bold uppercase text-zinc-600">
                Description
            </h3>
            <p className="mt-2.5 text-left text-sm text-black">
                {description}
            </p>
        </section>
    );
}

export function ProjectCard({projectData}: ProjectCardProps) {
    return (
        <article className="overflow-hidden p-4 bg-white">
            <section className="overflow-hidden w-full">
                <ProjectHeader title={projectData.projectHeader.title} type={projectData.projectHeader.type} />
                <ProjectImage
                    src={projectData.projectImage.src}/>
            </section>
            <ProjectDescription description={projectData.projectDescription.description} />
        </article>
    );
}
