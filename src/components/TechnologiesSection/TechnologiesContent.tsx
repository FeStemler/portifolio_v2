"use client";

import React from "react";
import { TechnologiesTitle } from "./TechnologiesTitle";
import { TechnologiesDescription } from "./TechnologiesDescription";
import { TechnologyGrid } from "./TechnologyGrid";

export const TechnologiesContent: React.FC = () => {
    return (
        <main>
            <section className="flex overflow-hidden flex-col justify-center w-full text-neutral-100 max-md:max-w-full">
                <TechnologiesTitle />
                <TechnologiesDescription />
            </section>
            <TechnologyGrid />
        </main>
    );
};

export default TechnologiesContent;
