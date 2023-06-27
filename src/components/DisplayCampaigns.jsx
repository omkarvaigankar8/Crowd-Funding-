import React from 'react'
import { useNavigate } from 'react-router-dom'
import { loader } from '../assets'
import FundCard from './FundCard';
import Loader from './Loader';


const DisplayCampaigns = ({ isLoading, title, campaigns }) => {
    const navigate = useNavigate();
    const handleNavigate = (campaign) => {
        navigate(`/campaign-details/${campaign.title}`, { state: campaign })
    }
    return (
        <div>
            {campaigns && <h1 className='font-epilogue font-semibold text-[18px] text-white text-left'>{title} ( {campaigns.length} )</h1>}
            <div className="flex flex-wrap mt-[20px] gap-[26px]">
                {isLoading && (
                    <Loader />
                )}
                {!isLoading && campaigns.length === 0 && (
                    <p className='font-epilogue font-semibold text=[14px] leading-[30px] text-[#818183]'>
                        You have not created any campaigns yet
                    </p>
                )}
                {!isLoading && campaigns.length > 0 && (
                    campaigns.map((campaign, index) => (
                        <React.Fragment key={index}>
                            <FundCard
                                key={campaign.id}
                                {...campaign}
                                handleClick={() => handleNavigate(campaign)}
                            />
                        </React.Fragment>
                    ))
                )}
            </div>
        </div>
    )
}

export default DisplayCampaigns