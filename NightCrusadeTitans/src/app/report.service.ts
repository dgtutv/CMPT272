import { Injectable } from '@angular/core';
import { Report } from './shared/report';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl = 'https://272.selfip.net/apps/';
  private appKey = 'slI61v2RVM';
  private collectionKey = 'reports';

  constructor(private http: HttpClient) { }

  async pull(): Promise<Report[]> {
    const url = `${this.baseUrl}${this.appKey}/collections/${this.collectionKey}/documents/`;
    let fetchedReports:Promise<string[]> = firstValueFrom(this.http.get<string[]>(url));
    console.log(fetchedReports)
    return fetchedReports.then(reports => reports.map(report => JSON.parse(report)));
  }

  async push(newReport: Report): Promise<any> {
    const url = `${this.baseUrl}${this.appKey}/collections/${this.collectionKey}/documents/`;
    console.log('Sending report to server:', newReport);
    const headers = { 'Content-Type': 'application/json' };
    let newReportJSON: string = JSON.stringify(newReport);
    let key = newReport.id.toString();
    const body = { key: key, data: newReportJSON };
    return firstValueFrom(this.http.post(url, body, { headers }));
  }

  async delete(reportToDelete: Report): Promise<any> {
    const url = `${this.baseUrl}${this.appKey}/collections/${this.collectionKey}/documents/${reportToDelete.id}`;
    return firstValueFrom(this.http.delete(url));
  }

  generateId(): number {
    let idJSON: any = localStorage.getItem("prevID");
    if (idJSON != null) {
      let id: number = JSON.parse(idJSON) + 1;
      localStorage.setItem("prevID", id.toString());
      return id;
    } else {
      let id = 0;
      localStorage.setItem("prevID", "0");
      return id;
    }
  }
}
