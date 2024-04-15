import React from 'react'
import {programsData} from '../../Data/ProgramData'
import RightArrow from  '../../images/rightarrow.png'
import './Programs.css'

const Programs = (props) =>{
    const {

    } = props;
    return (
        <div className='programs'>
            <div className='programs-header'>
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span  className='stroke-text'>To shape you</span>
            </div>
            <div className='program-categories'>
                    {programsData?.map((i)=>{
                        return (
                            <div className='category'>
                                {i?.image}
                                <span>{i?.heading}</span>
                                <span>{i?.details}</span>
                                <div className='join-now'>
                                    <span>Join Now</span>
                                    <img className='arrow' src={RightArrow} />
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
export default  Programs;
