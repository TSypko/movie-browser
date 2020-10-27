import React from 'react';
import { useParams } from "react-router-dom";

const ProfilePage = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>
            Profile Page...
        </div>
    )
}

export default ProfilePage;
