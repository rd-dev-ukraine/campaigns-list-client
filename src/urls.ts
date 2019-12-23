import {createPath} from 'rd-url-utils';

export const ROOT_URL = createPath('/');

export const CAMPAIGN_VIEW_URL = createPath<{id: string}>('/:id/view');

export const ADMIN_CAMPAIGNS_LIST_URL = createPath('/admin/campaign');

export const ADMIN_CREATE_CAMPAIGN_URL = createPath('/admin/campaign/new');

export const ADMIN_EDIT_CAMPAIGN_URL = createPath('/admin/campaign/:id');