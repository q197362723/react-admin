import type {FC} from 'react'
import {Result,Button} from 'antd'
import {useNavigate} from 'react-router-dom'
import { useLocale } from '../locales'
import { useSelector } from 'react-redux'
import type { RouteProps } from 'react-router-dom';
const PrivateRoute:FC<RouteProps> = (props) => {
      const { formatMessage } = useLocale();
    const navigate = useNavigate()
   const {logged} = useSelector((state) => state.user)


    return logged ? (props.element as React.ReactElement) :(
        <Result
        status="403"
        title="403"
        subTitle={formatMessage({id:'gloabal.tips.unauthorized'})}
        extra={
            <Button
            type="primary"
            onClick={()=> navigate(`/login${'?from=' + encodeURIComponent(location.pathname)}`, { replace: true })}
            >
            {formatMessage({id:'gloabal.tips.goToLogin' })}
            </Button>
        }
        
        />
    )
}

export default PrivateRoute