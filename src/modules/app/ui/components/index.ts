import type { App } from 'vue';
import {
  AppBaseImage,
  AppBaseTitle,
  AppBaseLabel,
  AppBaseCardFilter,
  AppBaseBreadcrumb,
  AppBaseTableHeader,
  AppBaseTableFooter,
  AppBaseModal,
} from './base';
import { AppLayoutAuth, AppLayoutEmpty, AppLayoutPublic, AppLayoutDefault } from './layouts';

/**
 * Global register components
 * @param app
 */
const BaseComponentRegister = (app: App) => {
  // Components
  app
    .component('AppBaseImage', AppBaseImage)
    .component('AppBaseTitle', AppBaseTitle)
    .component('AppBaseLabel', AppBaseLabel)
    .component('AppBaseCardFilter', AppBaseCardFilter)
    .component('AppBaseTableHeader', AppBaseTableHeader)
    .component('AppBaseTableFooter', AppBaseTableFooter)
    .component('AppBaseBreadcrumb', AppBaseBreadcrumb)
    .component('AppBaseModal', AppBaseModal);

  // Layouts
  app
    .component('AuthLayout', AppLayoutAuth)
    .component('EmptyLayout', AppLayoutEmpty)
    .component('PublicLayout', AppLayoutPublic)
    .component('DefaultLayout', AppLayoutDefault);
};

export default BaseComponentRegister;
