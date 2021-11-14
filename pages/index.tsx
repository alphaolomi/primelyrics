import React from "react";
import Tracks from "@/components/Tracks/Tracks";
import Search from "@/components/Search/Search";

const Index: React.FC = () => {
    return (
        <main>
            <div className="mt-3">
                <Search />
            </div>
            <Tracks />
        </main>
    );
};

export default Index;
