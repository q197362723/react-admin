import {useIntl} from 'react-intl'
import type { MessageDescriptor} from 'react-intl';
import {FormattedMessage} from 'react-intl'
import type { FC } from 'react';

import en_US from './en-US'

import zh_CN from './zh-CN'
export const localeConfig = {
    zh_CN:zh_CN,
    en_US:en_US,
}


type Id = keyof typeof en_US

interface Props extends MessageDescriptor {
    id: Id;
}




type FormatMessageProps = (descriptor:Props) => string

export const useLocale = () => {
    const {formatMessage:_formatMessage,...rest} = useIntl()
    const formatMessage:FormatMessageProps = _formatMessage
    return {
        ...rest,
        formatMessage,
    }
}

export const LocaleFormatter:FC<Props> = ({...props}) => {
    const notChildProps = {...props,children:undefined}
 return <FormattedMessage {...notChildProps} id={props.id} />
}