import type {FC,ReactElement} from 'react'
import type {RouteProps} from 'react-router-dom'
import { useIntl } from 'react-intl';
import PrivateRoute from './pravateRoute';

type WrapperRouteProps = RouteProps & {
    titleId:string;
    auth?:boolean;
}


const WrapperRouteComponent:FC<WrapperRouteProps> = ({titleId,auth,...props}) => {
    const {formatMessage} = useIntl()
    if (titleId) {
        document.title = formatMessage({
            id:titleId,
        })
    }
    return (
       auth?<PrivateRoute {...props} /> : (props.element as ReactElement)
    )
}

export default WrapperRouteComponent
