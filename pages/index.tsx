import React from "react";
import Tracks from "@/components/Tracks/Tracks";
import Search from "@/components/Search/Search";

const Index: React.FC = () => {
    return (
        <>
            <div className="mt-3">
                <Search />
            </div>
            <Tracks />
        </>
    );
};

export default Index;
