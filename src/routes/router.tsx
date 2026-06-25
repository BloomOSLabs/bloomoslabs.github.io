import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/Home/HomePage";
import FeaturesPage from "../pages/WhyBloomOS/WhyBloomOS";
import DevicesPage from "../pages/Devices/DevicesPage";
import DeviceDetailsPage from "../pages/Devices/DeviceDetailsPage";
import DownloadsPage from "../pages/Downloads/DownloadsPage";
import DocumentationPage from "../pages/Documentation/DocumentationPage";
import AboutPage from "../pages/About/AboutPage";
import TeamPage from "../pages/Team/TeamPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<MainLayout />}>

                    <Route
                        path="/"
                        element={<HomePage />}
                    />

                    <Route
                        path="/features"
                        element={<FeaturesPage />}
                    />

                    <Route
                        path="/devices"
                        element={<DevicesPage />}
                    />

                    <Route
                        path="/devices/:codename"
                        element={<DeviceDetailsPage />}
                    />

                    <Route
                        path="/downloads"
                        element={<DownloadsPage />}
                    />

                    <Route
                        path="/documentation"
                        element={<DocumentationPage />}
                    />

                    <Route
                        path="/about"
                        element={<AboutPage />}
                    />

                    <Route
                        path="/team"
                        element={<TeamPage />}
                    />

                </Route>

                <Route
                    path="*"
                    element={<NotFoundPage />}
                />

            </Routes>
        </BrowserRouter>
    );
}