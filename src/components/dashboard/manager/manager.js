import React from 'react'
import ManagerLayout from './manager_layout/manager_layout'
import SortAndSearch from './sort_and_search/sort_and_search'
import Stories from './stories/stories'

function Manager(props) {
    return (
        <ManagerLayout>
            <SortAndSearch>
                <Stories library={props.library}/>
            </SortAndSearch>
        </ManagerLayout>
    )
}

export default Manager
