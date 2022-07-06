import Swal from 'sweetalert2';

export const scroll = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id);
    element.scrollIntoView( { behavior: 'smooth', block: 'start' } );
};

export const sweetErrAlert = (errText, cnfText) => {
    Swal.fire({
      title: 'Ooops!',
      text: errText,
      icon: 'error',
      confirmButtonText: cnfText
    })
}