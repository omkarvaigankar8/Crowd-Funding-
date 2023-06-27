import React, { useState, useEffect } from 'react'
import { useStateContext } from '../context';
import { DisplayCampaigns } from '../components';



const Profile = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [campaigns, setCampaigns] = useState();
    const { contract, address, getUserCampaigns } = useStateContext();

    const fetchCampaigns = async () => {
        const data = await getUserCampaigns();
        // console.log("DDD", data)
        setCampaigns(data);
        setIsLoading(false)
    }

    useEffect(() => {
        setIsLoading(true);
        if (contract) {
            fetchCampaigns();
        }
    }, [contract, address])
    return (
        <DisplayCampaigns
            title="My Campaigns "
            isLoading={isLoading}
            campaigns={campaigns}
        />
    )
}

export default Profile