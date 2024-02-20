import { httpCommon } from '../http-client';
import { FORM_ROUTE } from '../api-routes';

const sendFormData = data => {
  httpCommon.post(`${FORM_ROUTE}`, data);
};

/* https://collabwave-26f67cb02271.herokuapp.com/api */

export const formsService = {
  sendFormData,
};
