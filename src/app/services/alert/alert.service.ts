import { Injectable } from '@angular/core';

import Swal from 'sweetalert2/dist/sweetalert2.js';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  success(title: string, message: string) {
    Swal.fire({
      icon: 'success',
      title: title,
      text: message,
    })
  }

  error(title: string, message: string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: message,
    })
  }
}
