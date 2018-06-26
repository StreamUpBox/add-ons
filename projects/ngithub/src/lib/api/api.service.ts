import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import {Observable} from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    // tslint:disable-next-line:max-line-length
    bearer = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjgyZThkYmJlN2U5NjFhYjZkOWYwMTY2MmFlMTI3OTc2MDk3YmExOGUwYjIxYzVlNGUxNjNhYmI2M2E4ZTEyOGQwNzAxZGY4ZTI5YzdiNzJkIn0.eyJhdWQiOiI3IiwianRpIjoiODJlOGRiYmU3ZTk2MWFiNmQ5ZjAxNjYyYWUxMjc5NzYwOTdiYTE4ZTBiMjFjNWU0ZTE2M2FiYjYzYThlMTI4ZDA3MDFkZjhlMjljN2I3MmQiLCJpYXQiOjE1MjczMjk2MjUsIm5iZiI6MTUyNzMyOTYyNSwiZXhwIjoxNTU4ODY1NjI1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.ZrA7THo8GkoqZKpRmzHhv5lASifYjCrcKjTpFy55_OclE0QyY8Wg-oc4NQOoDuv0D0afY_rqJmSqgnqwr6m3dUEEI4un1XD3gyEJFbttRGw4jHQ3s1tGU5i3Ek1-x78qlJ5dzTvHKVVi0Wq5t6lJliPfcWlyCoRyGP0xVrMbrGrZy5w2ZzD04SZIEF0Hp4ZNjVRVH4nHk70Q01Sj4O4gu9H25ZeNJWm9pfy6hdfQKP9sm91bV_Bh5QccZ6xp95kiVvkLVv1aSCmcOHkWa1xR-j6tfP01B1mCc1Df3gHfN8tU7nDxAEWAVKjZll4v7GkJGWwOvhNP8QjdDpOeEsip1A16cSqhemh8LM2ofH3jqjBAu9M9MKFy74Gfo6A_82ltNvtW24VhVuYeU24ozGPcROGJAXeSQnHh6Lc7jkoCch7JNBsJlK698sNATgdwZx5PJlnJnQ9-zZCUe-6xcJ4a14VUmCR-dFDhIe55YVOISqJOsHy-zkwuukyAsTrzYkwR1ofmw0T-fP-pRQ5Z_GS0X2KSPmIBGNtQnVcpvDmKTMKdVF6eAepjKoNtg08HCUj-8SkClGAfBWXNPojQ94nRsEOXu6QIMzxWmw7DWrHN5g4vzDxpOgEQ9oH0E9UCXLxGeTYXuYsZ7AqO7Omqwq0nmbRVapT5JjazdnygnNfA6nk';
    base_url = 'http://localhost:8000/api/cloneRepo';
  constructor(private http: HttpClient) { }
  copyToYegoBox(repo: any): Observable<any> {
      const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'authorization': this.bearer
      });
      return this.http.post(this.base_url, repo, { headers: headers });
  }
}
