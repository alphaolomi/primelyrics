import React from "react";
import Tracks from "@/components/Tracks/Tracks";
import Search from "@/components/Search/Search";
import AppNavbar from "@/components/AppNavbar";

const Index: React.FC = () => {
    return (
        <main>
            <AppNavbar />
            <div className="mt-3">
                <Search />
            </div>
            <Tracks />
        </main>
    );
};

export default Index;
