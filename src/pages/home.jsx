import React, { useState, useEffect } from 'react'
import { useStateContext } from '../context';
import { DisplayCampaigns } from '../components';



const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [campaigns, setCampaigns] = useState();
    const { contract, address, getCampaigns } = useStateContext();

    const fetchCampaigns = async () => {
        const data = await getCampaigns();
        console.log("DDD", data)
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
            title="All Campaigns"
            isLoading={isLoading}
            campaigns={campaigns}
        />
    )
}

export default Home