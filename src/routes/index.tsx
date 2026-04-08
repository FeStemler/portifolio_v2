// src/routes/index.tsx
import { Route, Routes } from "react-router-dom";
// @ts-expect-error expected error
import { HomePage } from "@/pages/HomePage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
};
