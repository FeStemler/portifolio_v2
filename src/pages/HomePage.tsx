import React, {useState} from "react";
import {ProfileCard} from "../components/AboutSection/ProfileCard.tsx";
import {AboutContent} from "../components/AboutSection/AboutContent.tsx";
import {TechnologiesContent} from "../components/TechnologiesSection/TechnologiesContent.tsx"
import {ProjectCard} from "../components/Shared/ProjectCard.tsx";
import {Footer} from "../components/Shared/Footer.tsx"
import type {ProjectData} from '../components/Shared/ProjectCard';
import projectsJson from "../assets/json/projects.json";
import floatIconsJson from "../assets/json/float-icons.json";

export interface FloatIcons {
    icon: string;
    link: string;
}

const projects: ProjectData[] = projectsJson;
const floatIcons: FloatIcons[] = floatIconsJson;


export function BannerSection() {
    return (
        <div
            className="flex overflow-hidden z-0 flex-wrap gap-10 justify-between items-start w-full min-h-[113px] max-w-[1280px]">
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/94ab83036757c459c2de0b4068cd0fc10ab96c66?placeholderIfAbsent=true&apiKey=1e77c0d424e04ed5ae05ba00b6bcdae9"
                alt="Primary logo"
                className="object-contain shrink-0 aspect-[2.92] min-w-60 w-[257px]"
            />
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0fd86c8209cc661a1f9daae6851a06be6b4d8b1?placeholderIfAbsent=true&apiKey=1e77c0d424e04ed5ae05ba00b6bcdae9"
                alt="Secondary logo"
                className="object-contain shrink-0 aspect-square w-[88px]"
            />
        </div>
    );
}

export function AboutSection() {
    return (
        <article className="overflow-hidden">
            <section className=" bg-offBlack py-12 max-md:py-5 max-md:px-5">
                <div className="flex flex-wrap items-end gap-2.5 mx-auto w-full max-w-[1280px]">
                    <ProfileCard/>
                    <AboutContent/>
                </div>

            </section>
        </article>
    );
}


export function ProjectSection() {
    return (
        <article className="bg-offBlack px-1 overflow-hidden max-sm:p-5 ">
            <section className="mx-auto w-full max-w-[1280px]">
                <h1 className="text-9xl font-bold leading-none text-center uppercase text-neutral-100 max-md:max-w-full max-md:text-4xl">
                    Stuff That I Built
                </h1>
                <div
                    className="flex flex-wrap gap-5 justify-center px-1 pt-5 pb-2.5 mt-2.5 w-full max-md:max-w-full">
                    <div
                        className="grow shrink self-start min-w-60 w-[677px] max-md:max-w-full text-left"
                    >
                        <div className="flex gap-5 max-md:flex-col max-md:">
                            <div className="w-[67%] max-md:ml-0 max-md:w-full">
                                <nav
                                    className="overflow-hidden grow text-xl font-medium uppercase whitespace-nowrap min-h-[207px] text-neutral-100 max-md:mt-5 max-md:max-w-full">
                                    <h2 className="max-md:max-w-full">Websites</h2>
                                    <h2 className="mt-1 max-md:max-w-full">Projects</h2>
                                    <h2 className="mt-1 max-md:max-w-full">Improvements</h2>
                                    <h2 className="mt-1 max-md:max-w-full">Systems</h2>
                                    <h2 className="mt-1 max-md:max-w-full">Documentation</h2>
                                    <h2 className="mt-1 max-md:max-w-full">Analysis</h2>
                                </nav>
                            </div>
                            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <div
                                    className="flex overflow-hidden relative gap-2.5 items-start text-xl font-medium uppercase whitespace-nowrap min-h-44 text-neutral-100 max-md:mt-5">
                                    <div className="overflow-hidden z-0 my-auto min-h-44 w-[26px]">
                                        <div>h1</div>
                                        <div className="mt-1">h2</div>
                                        <div className="mt-1">h3</div>
                                        <div className="mt-1">h4</div>
                                        <div className="mt-1">h5</div>
                                        <div className="mt-1">p</div>
                                    </div>
                                    <div
                                        className="overflow-hidden absolute bottom-0 z-0 self-start right-[-7px] w-[120px]">
                                        <div>120px</div>
                                        <div className="mt-1">80px</div>
                                        <div className="mt-1">60px</div>
                                        <div className="mt-1">42px</div>
                                        <div className="mt-1">32px</div>
                                        <div className="mt-1">16px</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[8px] bg-offWhite'></div>
                    <p className="overflow-hidden grow shrink gap-2.5 self-stretch h-full text-lg min-w-60 text-left w-[457px] max-md:max-w-full">
                        I specialize in crafting dynamic and responsive web experiences,
                        including projects, websites, and data analyses. My work focuses on
                        improving user interfaces, optimizing performance, and ensuring
                        seamless integration of third-party services. Whether it's developing
                        custom WordPress themes, building Angular applications, or
                        streamlining API integrations, I bring innovative solutions to life.
                    </p>
                </div>
            </section>
            <div className='mt-4 w-[120%] h-[8px] bg-offWhite ml-[-8px]'></div>
            <section className=" flex flex-wrap items-end gap-2.5 mx-auto w-full max-w-[1280px]">
                <div
                    className="bg-offBlack w-full py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-sm:gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} projectData={project}/>
                    ))}
                </div>
            </section>
        </article>
    );
}

export function TechnologiesSection() {
    return (
        <article className="bg-offBlack px-1 pb-8 max-sm:p-5 overflow-hidden">
            <section className="mx-auto w-full max-w-[1280px]">
                <TechnologiesContent/>
            </section>
        </article>

    )
}

export function FloatHeader() {
    const [showItems, setShowItems] = useState(false);

    const totalCards = 5;
    const cardWidth = 70; // 60px card + 10px gap
    const collapsedWidth = 60;
    const expandedWidth = collapsedWidth + (totalCards - 1) * cardWidth + 55;

    const toggleItems = () => {
        setShowItems(prev => !prev);
    };

    return (
        <section className="pointer-events-none fixed bottom-5 left-1/2 -translate-x-1/2 w-full">
            <div
                className="pointer-events-auto mx-auto p-[10px] bg-offBlack rounded-[24px] shadow-md min-w-[100px] transition-all duration-500 ease-in-out"
                style={{width: `${showItems ? expandedWidth : collapsedWidth + 40}px`}}
            >
                <div
                    className={`relative rounded-[16px] transition-all duration-500 ease-in-out bg-offWhite flex items-center h-[80px] min-w-[80px] px-[10px]`}
                >
                    {/* Primeiro card - clicável */}
                    <div
                        onClick={toggleItems}
                        className={`cursor-pointer aspect-square overflow-hidden bg-offBlack w-[60px] rounded-[12px] z-20 transition-transform duration-300 ease-in-out ${showItems ? 'scale-105' : 'scale-100'}`}
                        title="Toggle menu"
                    >
                        <img
                            src="src/assets/ideia-icon.svg"
                            alt="Felipe Stemler profile"
                            className="object-cover aspect-square w-[150%]"
                        />
                    </div>

                    {/* Divider */}
                    <div
                        className={`mx-3 w-[2px] h-[60px] bg-offBlack transition-opacity duration-300 ease-in-out`}
                        style={{
                            display: showItems ? "block" : "none",
                        }}
                    ></div>

                    {/* Cards animados com delay */}
                    {floatIcons.map((icon, i) => {
                        const cardSpacing = 70; // 60 + 10
                        const baseOffset = 95;  // distância do primeiro card
                        const offset = baseOffset + i * cardSpacing;
                        const delay = i * 100;

                        return (
                            <a
                                key={i}
                                className="absolute left-0 aspect-square overflow-hidden bg-offBlack w-[60px] rounded-[12px] transition-transform ease-in-out !duration-300 hover:!-translate-y-[5px] transform"
                                href={icon.link}
                                target={`_blank`}
                                style={{
                                    opacity: showItems ? 1 : 0,
                                    zIndex: 10 - i,
                                    transition: `transform 400ms ease-in-out, opacity 400ms ease-in-out`,
                                    transitionDelay: `${delay}ms`,
                                    ...{
                                        '--tw-translate-x': showItems ? `${offset}px` : '0px',
                                        '--tw-translate-y': '0px',
                                    } as React.CSSProperties,
                                }}
                            >
                                <img
                                    src={icon.icon}
                                    alt={`Item ${i + 1}`}
                                    className="object-cover aspect-square w-[150%]"
                                />
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}


const HomePage: React.FC = () => {
    return (
        <>
            <div
                className="flex overflow-hidden relative flex-col items-center px-12 pt-12 pb-44 w-full bg-neutral-100 h-[100vh] max-md:px-5 max-md:pb-24 max-md:max-w-full">
                <img
                    src="src/assets/Banner.jpg"
                    alt="Banner background"
                    className="object-contain absolute top-2/4 left-2/4 z-0 self-start h-auto -translate-x-2/4 -translate-y-2/4"
                />
                <BannerSection/>
            </div>

            <AboutSection/>
            <ProjectSection/>
            <TechnologiesSection/>
            <Footer></Footer>
            <FloatHeader></FloatHeader>
        </>
    );
};

export {HomePage};
