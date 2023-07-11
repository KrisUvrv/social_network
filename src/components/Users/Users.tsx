import React, {useEffect} from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './User'
import UsersSearchForm from './UsersSearchForm'
import {FilterType, follow, requestUsers, unfollow} from '../../redux/users_reducer'
import {useDispatch, useSelector} from 'react-redux'
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsersFilter,
    getUsers
} from '../../redux/users_selectors'
import {useSearchParams} from 'react-router-dom'


export const Users: React.FC = () => {

    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()

    const [searchParams, setSearchParams] = useSearchParams()


    useEffect(() => {

        const result: any = {}
        // @ts-ignore
        for (const [key, value] of searchParams.entries()) {
            let value2: any = +value
            if (isNaN(value2)) {
                value2 = value
            }
            if (value === 'true') {
                value2 = true
            } else if (value === 'false') {
                value2 = false
            }
            result[key] = value2
        }

        let actualPage = result.page || currentPage
        let term = result.term || filter.term

        let friend = result.friend || filter.friend
        if (result.friend === false) {
            friend = result.friend
        }

        const actualFilter = {friend, term}

        dispatch(requestUsers(actualPage, pageSize, actualFilter))

        // eslint-disable-next-line
    }, [])


    useEffect(() => {

        const term = filter.term
        const friend = filter.friend

        let urlQuery =
            (term === '' ? '' : `&term=${term}`)
            + (friend === null ? '' : `&friend=${friend}`)
            + (currentPage === 1 ? '' : `&page=${currentPage}`)

        setSearchParams(urlQuery)

        // eslint-disable-next-line
    }, [filter, currentPage])


    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }

    const onFollow = (userId: number) => {
        dispatch(follow(userId))
    }

    const onUnfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }


    return (
        <div>
            <div>
                <UsersSearchForm onFilterChanged={onFilterChanged} />
            </div>

            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount}
                       pageSize={pageSize}/>

            <div>
                {
                    users.map(u => <User user={u}
                                         key={u.id}
                                         followingInProgress={followingInProgress}
                                         follow={onFollow}
                                         unfollow={onUnfollow}
                        />
                    )
                }
            </div>

        </div>)
}