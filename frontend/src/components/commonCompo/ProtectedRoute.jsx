import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import useGetCurrUser from '../../hooks/useGetCurrUser'
import { SkeletonPage } from '../ui/Skeleton'
import { setUserDetails } from '../../redux/userData/userDetails'

const ProtectedRoute = ({ children, allowedRoles }) => {
  const dispatch = useDispatch()
  const userId = useSelector((state) => state.userData.userId)
  const location = useLocation()
  const { data, isLoading, isFetching } = useGetCurrUser()

  useEffect(() => {
    if (data?.user && data.user._id !== userId) {
      dispatch(setUserDetails(data.user))
    }
  }, [data?.user, dispatch, userId])

  const isAuthenticated = userId || data?.user

  if (!isAuthenticated && (isLoading || isFetching)) {
    return <SkeletonPage />
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location.pathname }} replace />
  }

  if (allowedRoles && data?.user?.role && !allowedRoles.includes(data.user.role)) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute
