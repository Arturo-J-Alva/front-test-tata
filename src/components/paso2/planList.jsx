import React, { useState } from 'react'
import PlanCard from './planCard'

const PlanList = ({selectPlan,setSelectPlan, plans}) => {

    return (
        <div className="flex flex-row justify-between mt-10">
            {
                plans.map(e => (
                    <PlanCard
                        key={e.id}
                        {...e}
                        onClick={(id) => setSelectPlan(id)}
                        select={selectPlan === e.id}
                    />
                ))
            }
        </div>
    )
}

export default PlanList
