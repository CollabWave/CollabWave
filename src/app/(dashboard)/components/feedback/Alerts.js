import Swal from 'sweetalert2';

const errorAlert = async (message, color, title) =>
  Swal.fire({
    icon: 'error',
    title: title ? title : 'Error',
    text: message,
    background: color,
  });

const successAlert = async (message, color, title) =>
  Swal.fire({
    icon: 'success',
    title: title ? title : 'Success',
    text: message,
    background: color,
    width: '500px',
    backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
  `,
  });

const warningAlert = async (message, color, title) =>
  Swal.fire({
    icon: 'warning',
    title: title ? title : 'Attention!',
    text: message,
    background: color,
  });

const confirmActionAlert = async (message, color, title) => {
  return Swal.fire({
    icon: 'warning',
    title: title ? title : 'Attention!',
    text: message,
    background: color,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
    reverseButtons: true,
  });
};

const confirmActionSuccess = (message, color, title) => {
  return Swal.fire({
    icon: 'success',
    title: title ? title : 'Success',
    text: message,
    background: color,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
    reverseButtons: true,
  });
};

const confirmActionDanger = (message, color, title) => {
  return Swal.fire({
    icon: 'warning',
    title: title ? title : 'Danger',
    text: message,
    background: color,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
    reverseButtons: true,
  });
};

const featureDisabledAlert = () => {
  warningAlert('Feature under development');
};

export const alerts = {
  errorAlert,
  successAlert,
  warningAlert,
  confirmActionAlert,
  featureDisabledAlert,
  confirmActionSuccess,
  confirmActionDanger,
};
