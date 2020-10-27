import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPerson } from "../popularPeopleSlice";

const ProfilePage = () => {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPerson(params.id))
    }, [])

    console.log(params);
    return (
        <div>
            Profile Page...
        </div>
    )
}

export default ProfilePage;
