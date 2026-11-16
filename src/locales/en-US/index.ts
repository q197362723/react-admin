import {enUS_account} from './account'
import { en_US_component } from './component';
import { enUS_dashboard } from './dashboard';
import { en_US_documentation } from './documentation';
import { enUS_globalTips } from './global/tips';
import { enUS_guide } from './guide';
import { enUS_notice } from './notice';
import { enUS_permissionRole } from './permission/role';
import { enUS_avatorDropMenu } from './user/avatorDropMenu';
import { enUS_tagsViewDropMenu } from './user/tagsViewDropMenu';
import { enUS_title } from './user/title';

const en_US = {
    ...enUS_account,
    ...en_US_component,
    ...enUS_dashboard,
    ...en_US_documentation,
    ...enUS_globalTips,
    ...enUS_guide,
    ...enUS_notice,
    ...enUS_permissionRole,
    ...enUS_avatorDropMenu,
    ...enUS_tagsViewDropMenu,
    ...enUS_title,
}

export default en_US