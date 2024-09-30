import { Component, OnInit } from '@angular/core';

declare const gapi: any;

@Component({
  selector: 'app-login',
  standalone: true, // Mark the component as standalone
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private clientId: string = '734319102257-fdn57tdeedmdfkthdfkcohkv06hgbdss.apps.googleusercontent.com'; 

  ngOnInit() {
    this.loadGoogleAuthSDK();
  }

  // Load the Google Auth SDK
  loadGoogleAuthSDK() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: this.clientId,
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
    });
  }

  loginWithGoogle() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser: any) => {
      const profile = googleUser.getBasicProfile();
      const idToken = googleUser.getAuthResponse().id_token;
      console.log('ID Token: ' + idToken);
      // Save the token or profile data to use in your app
      // e.g., localStorage.setItem('id_token', idToken);
      // Redirect to another page
      // this.router.navigate(['/dashboard']);
    }).catch((error: any) => {
      console.error('Error during login', error);
    });
  }  
}
